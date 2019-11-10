'use strict';
const fs = require('fs');
let file = __dirname+'/Assets/employee.json'
exports.getEmployee = function(req,res)
{
    
    let raw = fs.readFileSync(file);
    let Employee = JSON.parse(raw);
    console.log(Employee);
    res.json(Employee);
}
exports.addEmployee = function(req,res)
{
    try
    {
        let Employee = {};
        let emp = req.body;
        if(fs.existsSync(file))
        {
            raw = fs.readFileSync(file);
            Employee = JSON.parse(raw);
            fs.unlinkSync(file);
        }
        else
        {
            Employee.candidates =[];

        }
        Employee.candidates.push(emp);
        fs.writeFileSync(file,JSON.stringify(Employee));
    }
    catch(err)
    {
        console.log(err);
        res.json(false);
    }
    
    res.json(true);
}
exports.updateEmployee = function(req,res)
{
    let Employee ={};
    try
    {
        let emp = req.body;
        if(fs.existsSync(file))
        {
            let raw = fs.readFileSync(file);
            Employee = JSON.parse(raw);
            let foundEmpl =false;
            Employee.candidates.forEach(element => {
                if(element.id == emp.id)
                {
                    foundEmpl= true;
                    element.name= emp.name;
                    element.company =emp.company;
                    element.email = emp.email;
                    element.contact = emp.contact;
                    element.desig = emp.desig;
                    element.editable = false;
                }
            });
            if(!foundEmpl)
                Employee.candidates.push(emp);
            fs.unlinkSync(file);
        }
        fs.writeFileSync(file,JSON.stringify(Employee));
    }
    catch(err)
    {
        console.log(err);
        res.json(false);
    }
    
    res.json(true);
}
exports.deleteEmployee = function(req,res)
{
    let Employee ={};
    try
    {
        let emp = req.body;
        let rmvIndex=-1;
        if(fs.existsSync(file))
        {
            let raw = fs.readFileSync(file);
            Employee = JSON.parse(raw);
            Employee.candidates.forEach((element,idx)=>{
                if(element.id == emp.id)
                {
                    //foundEmpl= true;
                    rmvIndex = idx;
                }
            });
            if(rmvIndex>-1)
            {
                Employee.candidates.splice(rmvIndex,1);
                fs.unlinkSync(file);
            }
            else
                res.json(false);
        }
        fs.writeFileSync(file,JSON.stringify(Employee));
    }
    catch(err)
    {
        console.log(err);
        res.json(false);
    }
    
    res.json(true);
}