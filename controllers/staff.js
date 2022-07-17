
const staff = require('../models/staff')
const trainee = require('../models/trainee')

async function findStaff(req,res) {
    try{

    }
    catch(e){
        console.log(e.message)
    }
}

//function to insert staff data into the database
async function createStaff(req,res) {
    try{
        const newStaff = await staff.save({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    role: req.body.role,
                    email: req.body.email,
                    phoneNumber: req.body.phoneNumber
                });
                res.json({data: {}})
    }
    catch(e){
        console.log(e.message)
    }
}

//function to update the info
async function updateStaff(req,res) {
    try{
        const staffUpdated = await staff.findByIdAndUpdate(req.params.id, req.body);
        
    }
    catch(e){
        console.log(e.message)
    }
}

//function to delete data based on id provided
async function deleteStaff(req,res) {
    try{

    }
    catch(e){
        console.log(e.message)
    }
}

module.exports = {
    updateStaff,
    createStaff,
    deleteStaff,
    findStaff
};