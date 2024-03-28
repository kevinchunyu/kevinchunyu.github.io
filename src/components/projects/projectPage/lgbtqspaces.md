## Shifting LGBTQ+ Spaces   
Built with: HTML, CSS, JavaScript, Python, PostGreSQL    
Packages/Web GLs Used: Mapbox GL JS, ThreeBox.js (Three.js wrapper), Express.js, Node.js    
Tools used: VSCode, GitHub, PostGreSQL (pgAdmin)   

![](https://personalprofessionaldevelopment.s3.us-west-1.amazonaws.com/lgbtqspaces.png)

Shifting LGBTQ+ Spaces is an effort by a team of faculty and students at the University of Washington to build and eventually analyze a nationwide data base of LGBTQ+ spaces and places in the U.S.from the mid-1960s through the mid-2010s. The data base is meant to be expandable to the present but for the moment is focused on the time period indicated. Our project is funded by the National Science Foundation (Grant #1951072) with support from the UW Center for Studies in Demography & Ecology, the UW Department of Geography, the UW Humanistic GIS Laboratory, and the University of Washington Tacoma.    

### My Contributions:    
Upon joining the project, my primary responsibility was to develop a full-stack application. At that time, the project team primarily consisted of members from the data-entry team who were tasked with converting text data from Travel Guides into multiple Excel sheets.   

Utilizing readily available sample data, I initiated the development process by creating a simple web-page interface reminiscent of Google Maps functionality. As the volume of data continued to increase, I recognized the importance of data organization and efficiency. Consequently, I focused on normalizing the data and ultimately completed the development of a 3rd Normal Form Entity-Relationship Diagram (ERD), ensuring minimal redundancy within the dataset.    

Given that the data included coordinates, I made the strategic decision to implement PostgreSQL as our database management system. PostgreSQL offered the flexibility necessary to accommodate various data types and was readily accessible across different platforms.    
 
Following the completion of the backend development, I conducted robust testing and experimentation to ensure its reliability. Subsequently, I facilitated the migration of Excel data into the PostgreSQL databases. Additionally, I designed and implemented in-house REST API endpoints to facilitate seamless communication between the backend and frontend components of the platform.    

Through a process of iterative testing and refinement, the platform has evolved into its current state, serving as a testament to our collaborative efforts and dedication to delivering a high-quality solution.    


### Challenges Overcame:     
     - Hosting backend APIs and finding the right platform to use (Heroku vs NGINX vs others)    
     - Connecting to the database and ensuring that endpoints are safe from the general public     
     - Always refining and being flexible to customer design changes/requests    
     - Being okay with not making much progress on certain weeks and communicating the challenges and issues faced when developing    
     - Debugging skills (understanding that code can do lots of things, and more often than not, the feature/problem is probably achievable through code)    

### What I learned:    
     - Full-Stack Development   
     - Database Development and Data Modeling   
     - Customer-centered details and development approaches    
     - Thinking from a user-centric design perspective    


### Further reflections:    
The project started out with just a simple csv file and data visualization task and expanded into a bigger full-stack application with multiple different features. What I wish that I could of done better as the major code contributor was to use a framework (like React or Vue.js). The entire frontend of this web application was down through Vanilla Javascript. Although this proved to be a good practice, it proved to be more complicated in managing features and reading past code. I would also like to emphasize more on code documentation better. Scrolling through hundreds of lines of code was challenging and was sometimes frustrating.       