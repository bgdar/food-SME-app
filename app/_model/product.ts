import mongoose from "mongoose";




const ProductSchema = new mongoose.Schema( {

  product_name : String ,
  price : Number, 
  category : String ,
  description : String, 
  stock : Number , // stok barang 
  
  createdA : { type : Date , default : Date.now()},
    updatedAt : { type : Date , default : Date.now()},

}
  ,{timestamps : true}

)

export default mongoose.models.Product || mongoose.model("User", ProductSchema);
