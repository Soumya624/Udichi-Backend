const express = require('express');
const router = express.Router();
const Signup = require('../models/Signup');

router.post('/', (req,res)=>{
    const signup = new Signup({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        fathername: req.body.fathername,
        aadharnumber: req.body.aadharnumber,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        mobile: req.body.mobile,
        telephone: req.body.telephone,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        zip: req.body.zip,
        usertype: req.body.usertype
    });

    signup.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    })
});

module.exports = router;