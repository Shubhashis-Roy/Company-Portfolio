const { response } = require("express");
const hbs = require("hbs");
const express = require("express");
const mongoose = require("mongoose")
const app = express();
const Detail = require("./models/Details")
const slider = require("./models/slider")
const Service = require("./models/Service")

// DB connection
mongoose.connect("mongodb://localhost/website", () => {
    console.log("db connected");

    // Service.create([
    //     {
    //         icon : 'fab fa-accusoft',
    //         title : ' ',
    //         description : ' ',
    //         linkText : ' ',
    //         link : ' '
    //     }
    // ])

    // slider.create([
    //     {
    //         title : "Laern JS",
    //         subTitle : "js is most propular prog. language.",
    //         imageUrl : "/public/images/img_2.jpg",
    //     },
    //     {
    //         title : "from DB",
    //         subTitle : "static slide",
    //         imageUrl : "/public/images/img_1.jpg"
    //     },
    //     {
    //         title : "Laern Python",
    //         subTitle : "js is most propular prog. language.",
    //         imageUrl : "/public/images/img_3.jpg",
    //         class : "active"
    //     },
    //     {
    //         title : "Laern C",
    //         subTitle : "js is most propular prog. language.",
    //         imageUrl : "/public/images/img_4.jpg",
    //     },
    // ])

    // Detail.create({
    //     brandName : "Royspace",
    //     brandIconUrl : "https://comps.gograph.com/roy-logo-roy-letter-roy-letter-logo-design-initials-roy-logo-linked-with-circle-and-uppercase-monogram-logo-roy-typography-for-technology-business-and-real-estate-brand_gg144350491.jpg",
    //     links: [
    //         {
    //             label : "Home",
    //             url : "/"
    //         },  
    //         {
    //             label : "Services",
    //             url : "/services"
    //         },
    //         {
    //             label : "Gallery",
    //             url : "/gallery"
    //         },
    //         {
    //             label : "About",
    //             url : "/about"
    //         },
    //         {
    //             label : "Contact us",
    //             url : "/contact-us"
    //         }
    //     ],
    // })
})

// static file
app.use('/public', express.static("public"))

// set routes
const routes = require("./routes/main");
app.use('', routes)

// template engine
app.set('view engine', 'hbs')
app.set("views", "views") // (views, location) 
hbs.registerPartials("views/partials")

app.listen(process.env.PORT | 3000, () => {
    console.log("sever start");
})
