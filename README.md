# Burger-Builder

A burger logger using MySQL, Node, Express. Handlebars, and a homemade ORM (yum!).

[Heroku Deployment]()
___

### Design

Burger Builder makes use of Materialize CSS cdn in order to create an engaging and ordered user interface. User inputs are collected in forms with distinct ids and the result of the friend finder algorithm displayd as a bootstrap modal. Font Awesome's glyphicons provide the icon images seen on the survey page.


### Logic

I began by adding dependencies and initialized express packages then set PORT to 8080 in server.js. Then dummy friends objects were created containing mock data in friends.js. Next I created basic HTML files for survey and home pages using bootstrap and font awesome. An on-click listener was then created for the submit button on survey.html. Inputs from each field are stored in variables which are then populated into an object. An ajax post method then sends data to the friends api. Next I added routes to the home and survey html pages and api/friends array of objects. I subsequently added a post route to calculate best match for friends score. First iterated through friends array of objects to obtain each friend score. Then nested inner loop iterates through friend score and user score to calculate absolute difference using Math.abs. 


## Built With

___

* [HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
* [Node.js](https://nodejs.org/en/docs/)
* [Materialize CSS](https://materializecss.com/)
* [JQuery](https://api.jquery.com/)
* [Express](https://www.npmjs.com/package/express)
* [Handlebars](https://handlebarsjs.com/)
* [MySQL](https://dev.mysql.com/doc/)


![Graph](images/graph.png)
___

![Burger Builder](images/home-screenshot.png)
___

## Authors

* Derek Goldstone - [UC Berkeley Extension](https://www.linkedin.com/in/derek-goldstone-482884a3/)

___