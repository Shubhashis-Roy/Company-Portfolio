const { response } = require("express");
const hbs = require("hbs");
const express = require("express");
const mongoose = require("mongoose")
const app = express();
const Detail = require("./models/Details")
const slider = require("./models/Slider")
const Service = require("./models/Service")
const bodyParser = require("body-parser")

// DB connection
mongoose.connect("mongodb://localhost/website", () => {
    console.log("db connected");

    // Service.create([
    //     {
    //         icon : 'fab fa-accusoft',
    //         title : 'Provide Best Courses',
    //         description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem!',
    //         linkText : 'Check',
    //         link: 'https://www.webpage.com'
    //     },
    //     {
    //         icon : 'fab fa-affiliatetheme',
    //         title : 'Project',
    //         description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem!',
    //         linkText : 'webpage',
    //         link : 'https://www.project.com'
    //     },
    //     {
    //         icon : 'fa-regular fa-atom',
    //         title : 'Project',
    //         description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem!',
    //         linkText : 'Learn',
    //         link : 'https://www.webpage.com'
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
    //             url : "/#services_section"
    //         },
    //         {
    //             label : "Gallery",
    //             url : "/gallery"
    //         },
    //         {
    //             label : "About",
    //             url : "/#about_section"
    //         },
    //         {
    //             label : "Contact us",
    //             url : "/#contact_us_section"
    //         }
    //     ],
    // })
});

app.use(bodyParser.urlencoded({
    extended : true
}));

// static file
app.use('/public', express.static("public"));

// set routes
const routes = require("./routes/main");
app.use('', routes);

// template engine
app.set('view engine', 'hbs')
app.set("views", "views") // (views, location) 
hbs.registerPartials("views/partials")

app.listen(process.env.PORT | 3000, () => {
    console.log("sever start");
})
