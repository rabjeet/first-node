const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../model/user')
exports.userLogin = (req,res)=>{
    console.log('req.body',req.body)
    User.findOne({
        where:{
          email_id:req.body.email_id
        }
    }).then(user=>{
        console.log('req.body1')
        if(user){
        if(bcrypt.compare(req.password_text,user.password_text)){
            const first_name = user.first_name
            const userName = {name:first_name}
            let token = jwt.sign(userName,process.env.SECRET_KEY,{expiresIn: 1440})
            User.update({auth_token:token},{ where: {email_id:req.body.email_id} })
            res.json({userstatus:true,token:token})
           // console.log('token',token)
        }
        else{
           // console.log('req.body3')
            res.json({userstatus:false,error:'password did not match '}) 
        }
    }
    else{
       // console.log('req.body4')
        res.json({userstatus:false,error:'this email not exists '}) 
    }
    }).catch(err=>{
       // console.log('req.body4',err)
        res.send('error:'+ err)
    })
   
}
exports.registeruser =(req,res)=>{
    const today = new Date()
    const userData = {
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email_id:req.body.email_id,
        phone_no:req.body.phone_no,
        password_text:req.body.password_text,
        create_date:today
    }
    
    User.findOne({
        where:{
          email_id:req.body.email_id
        }
    })
    .then(user => {
        if(!user){
            const hash = bcrypt.hashSync(userData.password_text, 10)
            userData.password_text = hash
            User.create(userData)
        }
        else{
            res.json({error:'Use already exists'})
        }
    }).catch(err=>{
        res.send('error' + err)
    })
}
