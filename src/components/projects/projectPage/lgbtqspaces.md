## Shifting LGBTQ+ Spaces   
**Built with:** HTML, CSS, JavaScript, Python, PostGreSQL    
**Packages/Web GLs Used:** Mapbox GL JS, ThreeBox.js (Three.js wrapper), Express.js, Node.js    
**Tools used:** VSCode, GitHub, PostGreSQL (pgAdmin)   

![](https://personalprofessionaldevelopment.s3.us-west-1.amazonaws.com/lgbtqspaces.png)


### **Project Overview** 

Shifting LGBTQ+ Spaces is an effort by a team of faculty and students at the University of Washington to build and visualize a database of LGBTQ+ spaces in the U.S.from the mid-1960s through the mid-2010s. The project is funded by the National Science Foundation (Grant #1951072) with support from the UW Center for Studies in Demography & Ecology, the UW Department of Geography, the UW Humanistic GIS Laboratory, and the University of Washington Tacoma.    

### **Contributions:**    
   
   1. Data Pre-processing   
Data was initially in multiple Excel sheets. These data were collected from Damron's Travel Guides and entered digitally and manually by the Data Entry Team. Using Python, I was able to explore the data, create data dictionaries, and produce protocols/functions that made data consistent.    
    
   2. Data Modeling and Database Development    
I was able, to then, create a normalized database ERD diagram that would potentially store all the data from the Excel sheets. Since there was geographical data involved, I opted to use PostGreSQL. Data Migration was a pain; however, it was a learning process of patience and being detail-oriented, in data-types, data inputs, and existing data.    
   3. Front-End Development    
I debated really hard on whether or not to use React.js or Vanilla JavaScript. On one hand, using React.js would have given a lot more structure and organization for the application. On the other hand, using Vanilla JavaScript would provide me a lot of exposure, ease of custom features, and control over the application. I ended up using Vanilla JavaScript, as I thought that the complexity of the project was still manageable. I still wonder, if using React.js would really help in this situation though.   
   4. Back-End Development     
The backend consisted of using Node.js, Express.js to construct a custom RESTful API service that allowed CRUD operations from the applications to the database.
   5. Team Collaboration, Maintenance, and Project Handoff    
I was involved in this project in my Junior and Senior year of my undergraduate studies. As I neared graduation, I was responsible for creating documentation, and tutorials on how to access the servers and database, set-up of the environments, and the structure of the code. Because everything was Vanilla JavaScript, it produced a large amount of code and comments. I wondered if opting to use React.js would have sped up the communication process of project handoff.    

### **Challenges Overcame:**     
    
1. Hosting and Platform Selection    
Exploring and choosing platforms such as Heroku, NGINX, and more.    
2. Security    
Database connection strings, environment variables, and endpoint protections were all a first to me, and hence I had to go through multiple edits and iterations when developing.    
3. User-centric Approach and Accessibility    
Constant design changes and requests after meetings were hard to get used to, but something that was extremely important. Feedback is gold here and really helped create a better, usable application.    
4. Debugging    
Again, the choice to use Vanilla JavaScript produced thousands of lines of code and comments. Debugging was sometimes hard. A framework here would have helped a lot.    

### **Lessons Learned:**    
1. Full-Stack Development   
2. Database Development and Data Modeling   
3. Customer-centered details and development approaches    
4. Developing from a user-centric design perspective    


### **Further reflections:**    
The project started out with just a simple csv file and data visualization task and expanded into a bigger full-stack application with multiple different features. What I wish that I could of done better as the major code contributor was to use a framework (like React or Vue.js). The entire frontend of this web application was down through Vanilla Javascript. Although this proved to be a good practice, it proved to be more complicated in managing features and reading past code. I would also like to emphasize more on code documentation better. Scrolling through hundreds of lines of code was challenging and was sometimes frustrating.       