import  mongoose   from "mongoose";

const StudentSchema = mongoose.Schema({

    username:{
        type :String,
        required: true,
    },
    password:{
        type:String,
        required: true,
    },
    surname : {
        type :String,
        required: true,
    },
    phonenumber : {
        type:Number,
        required: true,
    },
    image :{
        type:String
    }
})



const StudentSch = mongoose.model("Students",StudentSchema);
export default StudentSch;
