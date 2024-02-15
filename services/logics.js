const db = require('../services/db')
const getAllContact=()=>{
    return db.contact.find().then((result)=>{if(result){return{statusCode:200,detail:result}}else{return{statusCode:404, message:'can not find details'}}})
}


const addContact=(city,street,zipcode,firstname,lastname,id,email,username,phone)=>{
    return db.contact.findOne({id}).then((result)=>{
        if(result){
        return{
            statusCode:404,
            message:"Employee already exists"
        }
    }
    else{
        const  newContact= new db.contact({address:{city,street,zipcode},name:{firstname,lastname},id,email,username,phone})
        newContact.save()
        return{
            statusCode:200,
            message:'Employee added successfully'
        }
    }
    }
    )
}

const deleteContact=(id)=>{
    return db.contact.deleteOne({id}).then((result)=>{
       
        return{
            statusCode:200,
            message:" deleted successfully"
        }}).catch(
            (error)=>{ return{
                statusCode:404,
                message:'contact not found'
            }}
        )
    
    }

const getanContact=(id)=>{return db.contact.findOne({id}).then((result)=>{ if(result)
    {return{statusCode:200,detail:result}}
    else{return{statusCode:404, message:' details not found'}}})
}   

const upadteanContact=(id,city,street,zipcode,firstname,lastname,email,username,phone)=>{
    return db.contact.findOne({id}).then((result)=>{
        if(result){
                  result.id = id;
                  result.address.city = city;
                  result.address.street = street;
                  result.address.zipcode = zipcode;
                  result.name.firstname = firstname;
                  result.name.lastname = lastname;
                  result.userame = username;
                  result.email=email;
                  result.phone=phone;
                  result.save()
            return{
                    statusCode:200,
                    message:" data updated successfully"
                  }
                  }
            else{
                return{  
                     statusCode:404,
                     message:'failed'
                     }
                }})
}



module.exports={
    getAllContact,
    addContact,
    deleteContact,
    getanContact,
    upadteanContact
}