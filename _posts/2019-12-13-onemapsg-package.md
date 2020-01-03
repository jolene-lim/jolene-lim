---
layout: post
title: OneMapSG API: An R Client Wrapper!
categories: [API, Data Wrangling, Parallel Computing]
tags: [R]
---

I created an R package! As part of a final project for school, I wrote an R package that would allow users to easily query the [OneMap SG API](https://docs.onemap.sg/), which is created by the Singapore Land Authority and offers users the ability to query a lot of useful data. 

**The full package and documentation can be found [here](https://github.com/jolene-lim/onemapsgapi).** It passes all CRAN-R checks and is ready for use :-) Although the documentation provides more detail, below are some of the features of the package:

* **Returns easy-to-use formats**: Although the default output of the API call is a JSON object, the package functions return dataframes, the most common data structures R users work with (while allowing users the option to simply get raw JSONs).  
* **User friendliness through built-in regex**: Some API calls return a lot of data, which may not be relevant to the user. Where appropriate, the functions allow users to input search terms and internally uses regular expressions to filter relevant records.  
* **Built-in data wrangling**: Where output may be useful in either long or wide formats, depending on user objective, functions provide parameters for users to indicate if the output should be long or wide. All necessary data wrangling will be done within the function.  
* **Parallel computing functionality**: Some functions handle iterative API calls. In cases where there will be a large number of calls are needed to be made, functions will allow a parallel computing option to speed up the return of an output.  

In the future, I also hope to add in more functions and do a full coverage of all the API endpoints provided by OneMap. 
