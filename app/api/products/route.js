import styles from "./products-style.css";

import { productsAtom } from "@/app/store";
// import { useAtom } from "jotai";

import { products } from "./data";

export async function GET() {
    return Response.json({ products })
}

// export default function handler(req, res) {
//     if (req.method === 'GET') {
//         return res.status(200).json(products);
//     } else if (req.method === 'POST') {
//         // Modify the products array
//         products.push({
//             title: "newProduct",
//             description: "newDescription",
//             price: 30.99,
//             thumbnail: "images/newProduct.png",
//         });
//         return res.status(200).json({ message: "Product added successfully" });
//     } else {
//         return res.status(405).json({ message: "Method Not Allowed" });
//     }

// export async function GET(Request) {
//     return new Response(products);
// }

// export async function POST(Request) {
//     // const [products, setProducts] = useAtom(productsAtom);

//     products.push({
//         title: "qq",
//         description: "phone",
//         price: 12.12,
//         thumbnail: "images/phone.png",
//     });
//     // setProduc([...products, newProduct]);

//     return new Response("This is a new POST API route");
// }

// export default function handler(req, res) {
//     if (req.method === 'GET') {
//         res.status(200).json(products)
//     } else {
//         res.status(400)
//     }
// }