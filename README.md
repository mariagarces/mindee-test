# Items Management App

This projet solves the internship test for Mindee. It has the main functionalities:
- submit a form
- display information gathered in a table

In addition, it was developed some tests using Jest and also, it was made a basic interface using Material-UI, as requested. Also, I deployed the app in github pages because it has become popular and easy to use. You can see the result in: https://mariagarces.github.io/mindee-test/

The project is divided in 3 main folders, each one has its main purpose as explain below:
## Components
I created 2 components: Form and TableComp. It was better to create them considering granularity and independence.
### Form
It includes the inputs so the user can write the items and the submit button to add them in the table.
### TableComp
It has the table, it means a header, each row with the information that was submitted and a button to delete it.

## Models
It has the Item class. Even thought it's a program that maybe is not going to grow to be more complex, I decided to make this class considering a global dynamic of what is better to have in case an instance will need new methods or change the state.
## Pages
It has the Home page where the 2 components are included. This component manage the state of the items and make the communication with both components.

There aren't many elements but it was important to use this scaffolding to guarantee an organised and understandable project.

## What would I do if I had more time?
I would have put more effort in the look of the page or maybe add other functionalities to the table, like allow to organise the rows by some parameter. Another thing would have been to add accesibility.