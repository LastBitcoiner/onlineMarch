/**
 * Required External Modules */

const express = require('express');
const path = require("path");

// App Variables 

const app = express();

let visitCount = 10;
let Slogans = new Array(6).fill(0);
Slogans = [0,0,0,0,0];

/**
 *  App Configuration */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions */


app.get('/', (req, res) => {
    visitCount++;
    res.render("index", { title: "خانه", visitors: visitCount });
});

app.get('/:SloganNum', (req, res) => {
    //console.log(`check request recived ${Slogans}`);
    //res.send("your Req Recived");
    res.send(`${Slogans[req.params.SloganNum]}`);
});

app.get('/Slogans/:SloganNum', (req, res) => {
    Slogans[req.params.SloganNum]++;
    // console.log(req.params);
    res.send(`${Slogans[req.params.SloganNum]}`);

    // parameters = SloganNum
});

app.get('/stml123/:Count', (req, res) => {
    //console.log(`check request recived ${Slogans}`);
    //res.send("your Req Recived");
    visitCount+=parseInt(req.params.Count, 10);
    res.status(200).send("اضافه شد");
});

app.get('/stml124/:SloganNum/:Count', (req, res) => {
    console.log(req.params.SloganNum);
    console.log(req.params.Count);

    Slogans[req.params.SloganNum-1]+=parseInt(req.params.Count, 10);
    //console.log(req.params);
    res.status(200).send("به شعار اضافه شد");

    // parameters = SloganNum
});

app.use((req, res, next) => {
    res.status(404).send("با عرض پوزش چنین صفحه ای موجود نیست");
});

app.listen(3000, () => {
    console.log('your app listening on port 3000.');
    console.log(Slogans);
});

/**
 * Server Activation */