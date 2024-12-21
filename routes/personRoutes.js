const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');

router.post('/', async (req,res) => {
    try {
        const data = req.body;
    
        const newperson = new Person(data);
    
    // Save the new person to the database 
    const response = await newperson.save();
    console.log("data saved")
    res.status(200).json(response);
    
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Error creating new person"});
    }
    })


    router.get('/', async (req , res) =>{
        try {
            const data = await Person.find();
            console.log("data fetched");
            res.status(200).json(data)
        } catch (error) {
            console.log(error);
        res.status(500).json({error : "Error fetching new person"});
        }
    })
    
    // now we want to get the persons work detail so we will use paramaterized api
    router.get('/:workType', async (req,res)=>{
        try {
            const workType = req.params.workType;
            if (workType == "Owner" || workType == "manager" || workType == "waiter"){
                const response = await Person.find({work : workType});
                console.log("data fetched");
                res.status(200).json(response)
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({error : "Invalid work type"})
        }
        
    
    })
    

module.exports = router;