---
layout: post
title: AirBnB and neighborhood disruption
categories: [Spatial Analysis, Regression]
tags: [GIS, R]
description: A spatial econometrics project on AirBnB and neighborhood disruption.
---

# Topic Modelling
The question: What are the most common topics discussed in reviews, and how might it differ by listing type?

To answer the question, we perform Latent Dirichlet Allocation (LDA) on the reviews data. We allow for 3 topics. 

![LDA Topics](https://github.com/jolene-lim/personal_projects/blob/master/airbnb_text_mining/airbnb_text_mining_files/figure-html/unnamed-chunk-7-1.png)

## What are the types of topics found in AirBnb reviews?

The topics seem all touch on themes I would have expected, namely quality of the apartment, location, and check-in/host interactions. Rather, the topics seem to reveal the different priorities of guests, as such:

| Topic | Priorities | Indicative Keywords |
| :---: | :--- | :--- |
| 1 | Location + Host | location, host, subway, convenient, communication |
| 2 | Location + Space + Host | location, clean, kitchen, check, friendly |
| 3 | Location + Space | subway, nyc, restaurants, bathroom |

To confirm these, the differences between topics are also checked. 

![Topic differences](https://github.com/jolene-lim/personal_projects/blob/master/airbnb_text_mining/airbnb_text_mining_files/figure-html/unnamed-chunk-8-1.png)

Topic 1 clearly does seem to pertain more to the host than Topic 2 and Topic 3, which both focus more on location. Topic 2 also relates more to the host than in Topic 3. 

## Do the types of topics relate to the type of listings?

First I want to examine the frequency of each topic is different by the number of people accomodated in the listing. I expect some differences may exist, e.g. larger spaces might be meant for families who value the space and host more (hence more topic 2).

![Topics vs No. of People Accomodated](https://github.com/jolene-lim/personal_projects/blob/master/airbnb_text_mining/airbnb_text_mining_files/figure-html/unnamed-chunk-10-1.png)

Unfortuntately, there aren't any discernable patterns. The only thing of note is that on average, the proportion of Topic 2 is higher among smaller apartments. This is likely to be the case simply as most  guests stay in smaller apartments and Topic 2 concerns all the basic issues guests care about.

# Sentiment Analysis
What are the most common sentiments expressed in reviews, and how might it differ by listing type?

Overall, top 10 most common sentiments (and a common word associated with it) are:

![Common sentiments](https://github.com/jolene-lim/personal_projects/blob/master/airbnb_text_mining/sentiment_table.PNG)

Unsurprisingly, an overwhelming amount of the sentiments are positive ones.

Is the proportion of negative sentiments related to location of listing?

![Sentiments vs location](https://github.com/jolene-lim/personal_projects/blob/master/airbnb_text_mining/sentiment_map.html)

The average proportion of negative sentiments is higher in the more populated neighborhoods. This suggests that negative sentiments may be associated with small spaces or noisy areas. Nonetheless, it's worth noting that the proportion of negative sentiments is roughly similar across neighborhoods.

# Conclusions + Reflections!
The results of the topic modelling process was not very clear. This might be because from the beginning, there are not that many discernable issues raised in reviews-- most will cover issues around the location, host and quality of the space. 

This project still has many improvements to make, but was a good way for me to practice multiple skills I've gained over my course. First, LDA using different Ks may be more useful to explore the presence of different topics. Moreover, for sentiment analysis, a custom dictionary relating to property may be useful-- for example, "hidden" is regarded as negative, but for property this may not be the case. Or, one error I noticed is that toilet was given a negative sentiment (disgusting), although this might have even been brought up as a positive point in the review. Nonetheless, this reflects the limitations of sentiment analysis, and more broadly, the field of NLP currently.

# Credits
I used the `nrc` sentiments dataset for this analysis.
