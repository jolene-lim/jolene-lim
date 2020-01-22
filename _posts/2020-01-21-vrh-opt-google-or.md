---
layout: post
title: Data for Good; Vehicle Routing Problem with Google OR Tools
categories: [Optimization, API, Data Visualization]
tags: [Python]
description: How can we best allocate volunteers to home visits?
---

When I attended the Spatial Data Science Conference 2019, I was very inspired by [DataKind's](https://www.datakind.org/) presentation, where they shared how they used optimization to help a non-profit optimize their operations. The project allowed real-time updates and was using completely open-source tools, which was amazing. Among those, they mentioned using [Google OR tools](https://developers.google.com/optimization) as a solver for the optimization problem. 

I thought it would be cool to create a mini-project that similarly solves a problem for social good. I also made use of the chance to practice my Python skills and querying data from APIs. The question I worked with is: **For a given voluntary welfare organisation and a set of addresses for home visits, how can we best assign the routes of volunteers?**

In this case, I chose Beyond Social Services, a VWO that I've worked with before; its location was scraped using the [OneMap API](https://docs.onemap.sg/). I also decided to use the 15 blocks in the area with the highest amount of rental housing (low-income subsidised flats); the data was queried from the [Data.gov.sg API](https://data.gov.sg/developer). The output of this program will best assign routes to volunteers.

The output of the program first asks users for some input parameters.

```shell
>>> How many volunteers:
>>> 5
>>> Max distance(m) for each volunteer:
>>> 8000
```

If all is set up successfully, the program will produce a map like this (made using Folium):

In this case, as the max distance is greater than 7000, the program instead suggests having less volunteers but each doing a significant amount of work. This can be better tuned by adding in waiting time constraints, which I hope to add into the module. 

If no solution is found, the program will print:

```shell
>>> No solution found :( Try adjusting parameters
```

This project was also coded in a way which allows users to input their own origin and destination locations; the `visualization.py` and `main.py` scripts can run independently of the `data_import.py` script, so long as the users input data in a similar format. I referenced the [Google OR Tools VRP Guide](https://developers.google.com/optimization/routing/vrp) a lot and give the awesome guide full credit for the optimization side of things!

In the future, I would like to build this into a proper web app that can handle more constraints and am excited to further work with OR tools :-)

**If anyone is interested in how to build a similar module, the links to my code can be found [here](https://github.com/jolene-lim/personal_projects/tree/master/google-OR)**