import mongoose, { Model, model, models, Schema } from "mongoose";
import { TypeAdmin, TypeAdress } from "../_types/types";

// Schema alamat
const AddressSchema = new Schema<TypeAdress>(
  {
    address: String,
    city: String,
    province: String,
    postal_code: String,
    country: String,
    latitude: Number,
    longitude: Number,
  },
  { timestamps: true },
);

// Schema admin
const AdminSchema = new Schema<TypeAdmin>(
  {
    username: { type: String, required: true },
    email: String,
    password: { type: String, required: true },
    address: AddressSchema, // embed AddressSchema
  },
  { timestamps: true }, // otomatis membuat createdAt & updatedAt
);

// Model admin
const Admin: Model<TypeAdmin> =
  models.Admin || model<TypeAdmin>("Admin", AdminSchema);

export default Admin;
