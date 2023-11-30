const express = require('express');
const path = require('path');

const { engine } = require('express-handlebars');

// app
const app = express();

app.engine('handlebars', engine({
    defaultLayout: "main"
}));
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'));

// statics files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req, res)=>{
    res.render('home', {
        title: "News"
    })
});

app.listen("3030", ()=>{
    console.log("http://localhost:3030");
});