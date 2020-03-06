
const express = require('express');
const bodyparser = require('body-parser');  
const cookieparser = require('cookie-parser');
const session = require('express-session');
const app = express();



app.use(session({
    secret: 'airotiv',
    resave: false,
    saveUninitialized: false
}));



app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(express.static('public')); //o padrao é /public, então pode ser omitido
app.use('/uploads', express.static('uploads'));
const admRoutes = require('./routers/Adminrouter');
app.use(admRoutes);

const siteRoutes = require('./routers/SiteRoute');
app.use(siteRoutes);

app.use((req, res) => {
    res.status(404);
    res.write("ERRO! PÁGINA INEXISTENTE!");
    res.end();
});

app.listen(3000, () => console.log("Listening at 3000"));


