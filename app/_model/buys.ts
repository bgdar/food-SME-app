// di sini adalah collection untuk user hasil dia belanja product nya
import { Model, models, model, Schema } from "mongoose";
import { TypeBuys } from "../_types/types";

const BuysSchema = new Schema<TypeBuys>(
  {
    product_name: String,
    total: Number,
    buyer: String,
  },
  { timestamps: true },
);

const Buys: Model<TypeBuys> =
  models.Buys || model<TypeBuys>("Buys", BuysSchema);
export default Buys;
