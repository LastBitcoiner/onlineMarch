const express = require('express');
const app = express();

let visitCount = 0;
let Slogans = new Array(20).fill(0);

app.get('/', (req, res) => {
    visitCount++;
    res.send(`<b>we have</b> ${visitCount} visitor`);
});

app.get('/:SloganNum', (req, res) => {
    Slogans[req.params.SloganNum]++;
    res.send(`<b>counted</b> ${Slogans[req.params.SloganNum]} Slogan`);
});

app.use((req, res, next) => {
    res.status(404).send("با عرض پوزش چنین صفحه ای موجود نیست");
});

app.listen(3000, () => {
    console.log('your app listening on port 3000.');
});

