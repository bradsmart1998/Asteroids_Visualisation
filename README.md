# Project_3_Asteroid

Repository to store our Project 3 challenge, the data we will be looking at here will be using the NASA API to extract date from asteriods


![image](https://user-images.githubusercontent.com/115423610/220757716-0e521fab-06d6-4c5d-8ab0-c9140a0f9280.png)


# Project proposal

The project focuses on the date from asteriods. Data has been extraxted from :

https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-14&api_key=DEMO_KEY

The data transformation process will be performed using Jupyter Notebook, and then it will be loaded into a PostgreSQL database.
The project is powered by a Python Flask API and includes HTML/CSS, JavaScript. 

# Sources of Data

https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-14&api_key=DEMO_KEY

# Data Extraction

As mentioned above, the date are selected from NASA API and converted to Pandas DataFrame. 

![image](https://user-images.githubusercontent.com/115423610/220761730-9971eb07-14a4-46af-95a6-adb18ca40c8a.png)

The Dataframe is named as asteroid_df. 

![image](https://user-images.githubusercontent.com/115423610/220762069-5057aaa0-b06f-4cf9-848e-b99da8c9ee25.png)

# Transformation

Nexted we looked through the Pandas DataFrame and the data was cleaned. The required columns were selected and renamed.

![image](https://user-images.githubusercontent.com/115423610/220762601-38c9e601-66a8-4b09-b668-14e33d4975f7.png)

We also added new columns.

![image](https://user-images.githubusercontent.com/115423610/220763311-5ea386f3-a79f-43fc-b3bd-fed276c338c5.png)

In the next step we created final dataframe. 

![image](https://user-images.githubusercontent.com/115423610/220763488-f88d34e5-884b-4964-afac-ae3637cfb544.png)

# Loading of the Data

Data was then loaded into a relational database for storage. ‘PGAdmin 4’ was used to create PostgreSQL tables that included the headers from the dataframe.

A localhost connection to a PostgreSQL server was created and a connection made to it. The connection was made via an engine on Jupyter Notebook that could talk to the database.

![image](https://user-images.githubusercontent.com/115423610/220764184-15be7380-d9db-45be-b4a5-5530118f7c01.png)



