const express = require('express');
const Port = 9000;
const app = express();
app.set('view engine', 'ejs');
// Define your routes here and middlewares here
app.get('/home', (req, res) => {
    const Data ={
        title: 'Home Page',
        messege: 'Welcome to Home Page',
        content: 'This is the home page content.'
    };
    res.render('home', Data);
})
app.get('/About', (req, res) => {
    const Data ={
        title: 'About Ejs',
        items:[
            'views Template Data',
            'Partials',
            'Layout',
            'Helpers',
        ]
    };
    res.render('About', Data);
})
app.listen(Port, ()=>console.log(`Server is Running on Port ${Port}`));