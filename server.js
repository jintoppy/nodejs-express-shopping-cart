const express = require('express');
const apiRouter = require('./apiRouter');
const app = express();

app.use(express.static('public'));

app.set('views', 'views');
app.set('view engine', 'ejs');

const urls = [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'About us',
        url: '/about'
    },
    {
        name: 'Contact Us',
        url: '/contact'
    }
]

const productsList = [
    {
        title: 'IPhone',
        price: 100
    },
    {
        title: 'One Plus 6',
        price: 200
    },
    {
        title: 'Vivo 6',
        price: 300
    }
];

app.get('/', (req, res) => {
    res.render('index', {
        name: 'NodeJS server',
        products: productsList,
        urls: urls
    });
});

app.get('/contact', (req, res) => {
    res.render('contactus', {
        urls: urls
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        urls: urls
    });
});

app.listen(2000);