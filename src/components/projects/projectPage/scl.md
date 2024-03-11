
## [Seattle City Light Project](https://jakobzhao.github.io/scl/)   

Used: JavaScript, HTML/CSS, Python (data cleaning and exploratory data analyses)   

![](https://personalprofessionaldevelopment.s3.us-west-1.amazonaws.com/scl_image.png)

This was a part-time/contract Software Engineer project to visualize power outage data with Environmental, Socioeconomic, and Health Factors. I was primarily responsible for the development of the visualization.    

>"Seattle City Light is the public utility providing electricity to Seattle, Washington, in the United States, and parts of its metropolitan area, including all of Shoreline, nearly all of Lake Forest Park, and parts of unincorporated King County, Burien, Normandy Park, SeaTac, Renton, and Tukwila."


### Challenges:
    - To database or not to database?    
        One of the biggest challenge was this! Because development started locally, hooking up to a database meant requesting resources and credentials from Seattle City Light (which I did not readily have)... So the decision was to try to efficiently read in different csv files when rendering the visualization so that there was minimal lag for the user.  
    - When is too much features? When is too little?     
        It was really easy to think of features for the user to be able to click around, compare, and such. Balancing and realizing that not all features should be added spurred some good discussion on the team.   
    - Making meaningful observations from the visualization    
        GIS mappings like this often need to "tell a story" and make it easy for the user to read or understand without a large amount of research -- hence the two-maps approach was born! Did not want a heat map and choropleth map to overlap and allow the user to have to squint or try to figure out what each color/component represents.    


