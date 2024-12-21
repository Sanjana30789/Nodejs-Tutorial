const express = require('express');
const routers = express.Router();

const Menu = require('./../models/Menu');

routers.post('/', async (req,res)=>{
    try {
     const data = req.body;
     const menus = new Menu(data);
     const response = await menus.save();
     console.log("data saved")
     res.status(200).json(response);
  } catch (error) {
     console.log(error);
     res.status(500).json({error : "Error creating new menu list"});
    }
 })
 
 routers.get('/',async (req,res)=>{
     try {
         const data =  await Menu.find();
         console.log("data fetched");
         res.status(200).json(data)
     } catch (error) {
         console.log(error);
     res.status(500).json({error : "Error fetching new menu list"});
     }
 })
 
 routers.get('/:menuType', async (req,res)=>{
    try {
        const menuType = req.params.menuType;
        if (menuType == "sweet" || menuType == "sour" || menuType == "spicy"){
            const response = await Menu.find({taste : menuType});
            console.log("data fetched");
            res.status(200).json(response)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Invalid work type"})
    }
 })


routers.put('/:id', async (req,res)=>{
    try {
        const menuid = req.params.id;
        const updatedmenudata = req.body;
        const response = await Menu.findByIdAndUpdate(menuid,updatedmenudata,
            {new : true,// return the updated document
                runValidators : true,

        });

        if(!response){
            res.status(404).json({error : "Menu item not found"})

        }

        console.log("Data updated");
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "menu not found"})
    }
})


routers.delete('/:id', async (req,res)=>{
    try {
        const menuid = req.params.id;
        const response = await Menu.findByIdAndDelete(menuid);

        if(!response){
            res.status(404).json({error : "Menu item not found"})

        }

        console.log("data delected ");
        res.status(200).json({message : 'Menu deleted successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Not deleted"})
    }
})

module.exports = routers;