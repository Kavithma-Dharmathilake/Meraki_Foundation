const mongoose = require('mongoose')


const Schema = mongoose.Schema

const userSchema = new Schema({
   
    Name:{
        type:String,
        required: true
    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
    },
    password:{
        type:String,
      
    },
    user_id:{
        type:String,
        required:true
    }
})

//static metod
userSchema.statics.signup = async function( Name, username, email ,phone, password){


    //validaion

    if(!email || !password){

        throw Error('All fields must be filled');
    }

    const exists = await this.findOne({ email })

    if(exists){
        throw Error('Email already exists');
    }

  
    const user = await this.create({ Name,username,email, phone, password})

    return user
}

// static login method

userSchema.statics.login = async function (email, password){

    if(!email || !password){

        throw Error('All fields must be filled');
    }

    const user = await this.findOne({ email })

    if (!user){
        throw Error('Incorrect email')
    }
 
    if (user.password !== password) {
        throw Error('Incorrect password');
      }

    return user

}

module.exports = mongoose.model('user',userSchema)
