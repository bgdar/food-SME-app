import { Document } from "mongoose";

export interface TypeUser extends Document {
  username: string;
  email: string;
  password: string;
  createdA: Date;
  updatedAt: Date;

  address?: TypeAdress;
}
export interface TypeAdmin extends Document {
  username: string;
  email: string;
  password: string;
  createdA: Date;
  updatedAt: Date;
  address?: TypeAdress;
}
export interface TypeProduct extends Document {
  product_name: string;
  price: number;
  category: string;
  description: string;
  stock: number; // stok barang
  owner: string;

  // createdA: Date;
  // updatedAt: Date;
}
export interface TypeBuys extends Document {
  product_name: string;
  total: number;
  buyer: string; // pembeli
}

export interface TypeAdress extends Document {
  address?: string;
  city?: string;
  province?: string;
  postal_code?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
}
