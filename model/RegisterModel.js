const  mongoose = require('mongoose');
const validator = require('validator')



const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        require:[true,'name is requires'],
        trim:true,
    },
    Age:{
        type:String,
        require:[true,'name is requires'],
        trim:true,
    },
    location:{
        type:String,
        
    },
    skin:{
        type:String,
        require:[true,'skin is requires'],
        trim:true,
    },
    image:{
        type:String,
        default:'https://uc365c96fb70b8dbf2b033315986.dl.dropboxusercontent.com/cd/0/inline/CK_VmWKmg1NHOdFnSw6oF0Fiv7-JrMw-76-MiuB68EfTwSoUeRMwtEVco-6L92SjXL0WpZd9XRVYzomSSDqPczMlGybtr0vm83kfiFOPRj6kn_SwrVo80MvuN7VSAVczLARMCFrNkqMIDLu3VduBJckd/file#',
        trim:true,
    },
    email:{
        unique:true,
        type:String,
        required:[true,'please enter an email'],
        lowercase:true,
        validate:[validator.isEmail,'please enter valid email']
    },
    role:{
        type:String,
        enum:["user","admin","editor"],
        default:'user'
    },
    password:{
        require:[true,'please enter the password and must be more than 5 '],
        type:String,
        minLength:5,
        select:false
    },
    refreshToken:{
       type: String,
       select:false
    }, 
})


const User = mongoose.model('User',UserSchema)

module.exports = User


// username: '',
// Age: '',
// location: '',
// skin: '',
// occupation: '',
// password: '',
// confirmPassword: '',
// image: '',
