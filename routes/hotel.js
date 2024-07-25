const { Router } = require("express");

const router = Router();

router.get("/about", (req, res)=>{
   return res.render("about")
});

router.get("/contact", (req, res)=>{
   return res.render("contact")
});

router.get("/gallery", (req, res)=>{
   return res.render("gallery")
});

router.get("/testimonial", (req, res)=>{
   return res.render("testimonial")
});


router.get("/services", (req, res)=>{
   return res.render("services")
});


module.exports = router;
