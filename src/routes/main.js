const express = require('express')
const { route } = require('express/lib/response');
const res  = require('express/lib/response');
const async = require('hbs/lib/async');
const Detail = require("../models/Details");
const slider = require('../models/slider');


const routes=express.Router()

routes.get("/", async (req, res) => {

    const details = await Detail.findById({"_id" : "62cc6eae33ad66aeec76d600"})
    const slides = await slider.find()
    // console.log(slides)

    res.render("index", {
        details : details,
        slides : slides
    })
})

routes.get("/gallery",async (req,res) => {
    const details = await Detail.findById({"_id" : "62cc6eae33ad66aeec76d600"})
    res.render("gallery", {
        details:details
    })
})

module.exports = routes