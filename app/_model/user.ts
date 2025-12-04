import mongoose from "mongoose";


const UserSchema = new mongoose.Schema(
  {
    name: { type : String , required : true},
    email: String, 
    password : {type : String , required : true},
    createdA : { type : Date , default : Date.now()},
    updatedAt : { type : Date , default : Date.now()},
    
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
