# Project_3_Asteroid

Repository to store our Project 3 challenge, the data we will be looking at here will be using the NASA API to extract data from asteriods that were observed by NeoWs (Near Earth Object Web Service) between 01/01/2023 - 08/01/2023. 


![image](https://user-images.githubusercontent.com/115423610/220757716-0e521fab-06d6-4c5d-8ab0-c9140a0f9280.png)


# Project proposal

The project focuses on the data from asteriods. The data has been extracted from :

https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-14&api_key=DEMO_KEY

For this project we wanted to explore and visualise the variables of the asteroids and use this to better understand their behaviour. We want to create a dashboard where users will be able to see an interactive visualisations on an asteroid as well as be able to access data for a specific asteroid by searching for it by name. We also wish ton explore how many asteroids that are observed by the NeoWs could be potentially hazardous.

The data transformation process will be performed using Jupyter Notebook, and then it will be loaded into a PostgreSQL database.
The project is powered by a Python Flask API and includes HTML/CSS, JavaScript. 

# Sources of Data

The data the we obtained came from the NASA Open API's. All the data is from the NASA JPL Asteroid team.

https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-14&api_key=DEMO_KEY

# Data Extraction

As mentioned above, the data is selected from NASA API and converted to Pandas DataFrame. This API call had 3 query parameters: a start date, a end date and a API key. We pulled the whole JSON from the API call and stored it into a dataframe before cleaning with Pandas. We had obtained 123 unique results.

![image](https://user-images.githubusercontent.com/115423610/220761730-9971eb07-14a4-46af-95a6-adb18ca40c8a.png)

The Dataframe is named as asteroid_df.

![image](https://user-images.githubusercontent.com/115423610/220762069-5057aaa0-b06f-4cf9-848e-b99da8c9ee25.png)

# Transformation

Next, we looked through the Pandas DataFrame and cleaned the data. We faced an issue as some of the key data that we wanted to extract was located in a list in a column. We then had to take this data out of this list and append it to there own columns before deleted the old one. There were no N/A values in the dataset so we didn't lose any of our unique results. We changed some of the column headers to make it easier to read the dataframe.

![image](https://user-images.githubusercontent.com/115423610/220762601-38c9e601-66a8-4b09-b668-14e33d4975f7.png)

We also added new columns.

![image](https://user-images.githubusercontent.com/115423610/220763311-5ea386f3-a79f-43fc-b3bd-fed276c338c5.png)

In the next step we created final dataframe. 

![image](https://user-images.githubusercontent.com/115423610/220763488-f88d34e5-884b-4964-afac-ae3637cfb544.png)

# Loading of the Data

Data was then loaded into a relational database for storage. ‘PGAdmin 4’ was used to create PostgreSQL tables that included the headers from the dataframe.

A localhost connection to a PostgreSQL server was created and a connection made to it. The connection was made via an engine on Jupyter Notebook that could talk to the database.

![image](https://user-images.githubusercontent.com/115423610/220764184-15be7380-d9db-45be-b4a5-5530118f7c01.png)


# Analyses and Visualizations

We read in our json file using the D3 Library. 

![image](https://user-images.githubusercontent.com/115423610/220966990-c215700f-defb-4d05-b5ed-861d86b561e7.png)



Created asteroid_app and Import Flask, jsonify and render_template. 

![image](https://user-images.githubusercontent.com/115423610/220965545-4ba6ac27-1cce-4e75-9e0d-81e92e19df0d.png)


We created connection to local database and set app name as "app". 

![image](https://user-images.githubusercontent.com/115423610/220965723-a2e03eac-3423-40d2-b359-0c991fdaefa3.png)
![image](https://user-images.githubusercontent.com/115423610/220965788-b730e977-c2db-4b90-8db1-147c051bc370.png)

We used Plotly Library and Chart.js Library to do our visualisation.

Create a  Dash App that displayes the analysed data in the form of interactive visualisations that can be selected by velocity, miss distance (miles) , miss distance (km) , and magnitude .

![image](https://user-images.githubusercontent.com/115423610/221004092-0fffa4d7-1ac0-40d5-be26-7c1b7ca6a613.png)


The Dash App also displays asteroid profile table and pie chart (the proprotion of potentially hazardous asteroids). 

![image](https://user-images.githubusercontent.com/115423610/221004121-06278afd-290b-4c50-b452-86fcfd06ae0c.png)


![image](https://user-images.githubusercontent.com/115423610/221004143-8bb26f9f-de8e-4944-b262-80aff4788fb9.png)


