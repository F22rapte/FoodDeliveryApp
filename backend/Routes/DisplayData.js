
const express = require('express');
 const router = express.Router();

router.post('/foodData',(req,res)=>{

    try {
        res.send([global.food_item,global.foodCategory])
    } catch (error) {
        console.error(error.message)
        res.send("server Error")
    }
})

module.exports=router;