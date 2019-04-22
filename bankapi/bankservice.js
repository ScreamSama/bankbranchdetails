const express = require('express');
const router = express.Router();
const poolConnection = require('./dbConnection');




//Retrieving Bank details by id
router.get('/details/:ifsc',(req,res)=>{
    var ifsc_id = req.params.ifsc;
    console.log('ifsc_id'+ifsc_id );
    poolConnection.query('SELECT * FROM bank_branches WHERE ifsc = $1', [ifsc_id],(err,result)=>{
        if(err){
             console.log("Not able to get connection "+ err);
             res.status(400).send(err);
            //throw err;
        }
        res.status(200).json(result.rows);
    });
});
//Retrieving Bank details by city and names
router.get('/details',(req,res)=>{
    var city = req.query.city;
    var bank_name = req.query.bank_name;
    console.log('city: '+city+' bank_name: '+bank_name);
    poolConnection.query('SELECT * FROM bank_branches WHERE city = $1 AND bank_name =$2', [city,bank_name],(err,result)=>{
        if(err){
             console.log("Not able to get connection "+ err);
             res.status(400).send(err);
            //throw err;
        }
        res.status(200).json(result.rows);
    });

});



module.exports = router;

