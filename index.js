const express = require('express');
const app = express();
const { Mini } = require('./models');

app.use(express.json());

app.get('/users', (req, res) => {
    Mini.findAll().then(minis => {
        res.status(200).json(minis);
    });
})

app.post('/users', (req, res) => {
    Mini.create({
        username: req.body.username,
        password: req.body.password,
        approved: req.body.approved
    })
        .then(article => {
            res.status(201).json("sukses")
        }).catch(err => {
            res.status(422).json("Fail");
        });
});

app.listen(3000);