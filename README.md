# Burger-Builder

A burger logger using MySQL, Node, Express. Handlebars, and a homemade ORM (yum!).

[Heroku Deployment](https://calm-island-91201.herokuapp.com/)
___

### Design

Burger Builder makes use of Materialize CSS cdn in order to create an engaging and ordered user interface. This framework provides appealing options for buttons and lists organized in collections.


### Logic

This application makes use of the MVC design pattern, using Node, and MySQL to query/route data and Handlebars to generate HTML. Using a home-grown ORM, Burger Builder executes 3 CRUD functions:

-CREATE a new burger in a form by clicking "Order It!" submit button which submits a POST to to the MySQL database using the insertOne ORM then re-routes the new burger to the index.handlebars page where it will be displayed on the DOM.

-READ all entries from the MySQL database and render to the DOM using Handlebars

-UPDATE a selected burger by clicking the dynamically generated "EAT" button which submits a PUT to the burgers/:id route in express to change the devoured boolean value in the MySQL database then re-routes the devoured burger back to the index.handlebars page where it is now displayed in the "Devoured Burgers" column. 

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


![Graph](public/assets/images/screenshots/graph.png)
___

![Burger Builder](public/assets/images/screenshots/burger-builder-screenshot.png)
___

## Authors

* Derek Goldstone - [UC Berkeley Extension](https://www.linkedin.com/in/derek-goldstone-482884a3/)

___