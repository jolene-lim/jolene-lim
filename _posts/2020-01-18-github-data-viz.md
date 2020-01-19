---
layout: post
title: Tutorial; Visualizing my Github repo with Python Plot.ly
categories: [Data Visualization]
tags: [Python]
---

I thought it would be fun to create a little interactive chart for my site, displaying the breakdown of my projects by programming languages used. To challenge myself, I decided to learn to query the GitHub API through Python and use the [Plot.ly library](https://chart-studio.plot.ly/feed/#/) to create an interactive chart from it - something I am able to do in R, but not yet in Python. The steps to create it were a bit more confusing than I thought, hence I thought I'd document this project as a tutorial for other newbies like myself!

At the end of this tutorial, you should be able to create a widget like below. The cool thing is, the colour scheme matches what Github uses too!
<p align="center"><iframe width="400px" height="400px" frameborder="0" scrolling="no" src="//plot.ly/~jolenelim14/3.embed"></iframe></p>

## Setup
Note that in order to be able to host a public graph, users first need to create a Plot.ly account [here](https://plot.ly/api_signup). We would also need to store the authentication variables in our environment. Run this code chunk in your <u>console</u> (note: do NOT include in the script, unless you don't plan to share your code!), replacing the `username` and `api_key` fields.
```
import chart_studio
chart_studio.tools.set_credentials_file(username='DemoAccount', api_key='lr1c37zw81')
```

## Query API
Now we are ready to start plotting! 

First, we need to load the relevant libraries:
```
# import libraries
import json
import requests
import pandas as pd
import chart_studio.plotly as py
import plotly.graph_objects as go
```

Next, we need to query the Github API and parse the response into a suitable format for plotting. I am converting it to a pandas dataframe for practice, but plot.ly does not require this format; it simply requires values and labels to be in lists.

```
# query github api
languages = requests.get("https://api.github.com/repos/jolene-lim/personal_projects/languages")

# error handling
if languages.status_code != 200:
    print("The response returned an error. Status code: " + languages.status_code)

# else parse JSON to dataframe
else:
    languages = pd.DataFrame.from_dict(languages.json(), orient = 'index', columns = ['n_byte'])
```

The code also checks for errors in case of a bad request. Note that the API query should follow the format "https://api.github.com/repos/:user/:repo/languages".

## Visualizing
We are now ready to visualize our data! As I have mentioned, plot.ly actually requires our data in list format rather than as dataframes. Below, I convert my pd columns into lists.

```
labels = list(languages.index)
values = languages['n_byte'].tolist()
```

Almost there! Now, as an added feature, I wanted my chart to follow the colour scheme used by github. Full credit goes to Github user [Diastro](https://github.com/Diastro/github-colors) for scraping the data for us!

```
## create colour scheme according to github
langColors = requests.get("https://raw.githubusercontent.com/Diastro/github-colors/master/github-colors.json").json()

colors = []
for lang in labels:
    colors.append(langColors[lang])
```
Hence, all we need to do is parse the JSON object already created for us as a dictionary, and use the necessary colours.

Finally, we are ready to plot!

```
fig = go.Figure(go.Pie(labels = labels, values = values,
             hole = 0.3, marker_colors = colors))

fig.update_layout(
    title = {
        'text': "Programming Languages Used (Bytes)",
        'y': 0.9,
        'x': 0.5,
        'xanchor': 'center',
        'yanchor': 'top'
    }
)
py.plot(fig, filename = 'github-languages', sharing = 'public')
```

If you are using Juypter notebook, `py.iplot` would be a better option as it would result in an interactive plot. I was using PyCharm and after executing the code successfully, was redirected to where my plot was hosted. From there, simply click 'Share' to get the embedding code needed to add your graph to your website.

I hope this helps beginners like me create an interactive plot for their website! Although this was pretty simple, it was difficult for a beginner like myself to gather all the instructions necessary, especially with the recent changes to Plot.ly.

**The relevant Github repo can be found [here](https://github.com/jolene-lim/personal_projects/tree/master/github_api).**
