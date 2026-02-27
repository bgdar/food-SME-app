import { Model, models, model, Schema } from "mongoose";
import { TypeProduct } from "../_types/types";

const ProductSchema = new Schema<TypeProduct>(
  {
    product_name: String,
    price: Number,
    category: String,
    description: String,
    stock: Number, // stok barang
  },
  { timestamps: true },
);

const Product: Model<TypeProduct> =
  models.Product || model<TypeProduct>("Product", ProductSchema);
export default Product;
