import Product from "@/app/_model/product";
import { connectDB } from "@/app/lib/monggoDB";

export async function GET() {
  await connectDB();

  const products = await Product.find();
  console.log("products :", products);

  return JSON.stringify(products);
}
export async function POST(req: Request) {
  const data = await req.json();
  //cek ke absahan data
  await connectDB();

  const isData = Product.exists({ product_name: data.product_name });

  if (isData) {
    return Response.json(
      { message: "Product sudah tersedia " },
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  try {
    const product = Product.create({
      product_name: data.product_name,
      price: data.price,
      category: data.category,
      description: data.description,
    });
    // modle assyn save
    // (await product).save; // otomatis seharusnya
    console.log("data product :", data);
    return Response.json({
      message: "Product berhasil ditambah",
      product: (await product).product_name,
    });
  } catch (err) {
    console.error("Terjadi kesalahan saat menambahkan produk : ", err.message);
    return Response.json(
      {
        message: err.message,
      },
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
