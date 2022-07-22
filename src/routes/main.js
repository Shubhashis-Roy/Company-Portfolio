const express = require('express')
const { route } = require('express/lib/response');
const res  = require('express/lib/response');
const async = require('hbs/lib/async');
const Detail = require("../models/Details");
const Slider = require('../models/Slider');
const Service = require('../models/Service');
const Contact = require('../models/Contact');


const routes=express.Router()
routes.get("/", async (req, res) => {

    const details = await Detail.findById({"_id" : "62d6a00a1a4b183aa4edce85"})
    const slides = await Slider.find()
    const service = await Service.find()
    // console.log(service)

    res.render("index", {
        details : details,
        slides : slides,
        service : service
    })
})

routes.get("/gallery",async (req,res) => {
    const details = await Detail.findById({"_id" : "62d6a00a1a4b183aa4edce85"})
    res.render("gallery", {
        details:details
    })
})

routes.post("/process-contact-form", async (req,res) => {
    console.log("this form is submitted");
    // console.log(req.body);

    // save the data in DB
    try {
        const data = await Contact.create(req.body)
        // console.log(data)
        res.redirect("/")

    } catch (error) {
        console.log(error)
        res.redirect("/")
    }
});

module.exports = routes