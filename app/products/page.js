"use client";
import { useState, useEffect } from 'react'

async function getData() {
    // const res = await fetch('/api/products');
    const res = await fetch('http://localhost:3000/api/products');

    //console.log(res);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    console.log(res.json())
    return res.status;
}

export default function Products() {
    const [products, setProduct] = useState(null);

    console.log("HERE");
    const x = async () => { await getData() }
    x()

    useEffect(() => {
        (async () => {
            try {
                const data = await getData();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        })();
    }, []);

    // useEffect(() => {
    //     fetch('http://localhost:3000/api/products')
    //         .then((res) => {
    //             console.log("RES:", res)
    //             return res.json()
    //         })
    //         .then((data) => {
    //             if (data) {
    //                 setProduct(data)
    //             }
    //             else {
    //                 setProduct(null);
    //             }
    //         })

    //     // const fetchData = async () => {
    //     //     const data = await fetch("/api/products");
    //     //     setProduct(data);
    //     // }

    //     // fetchData();
    // }, [])

    console.log(products);

    if (!products) return (<>No data</>)

    return (
        <>
            {products ? products.map((product, index) => (
                <div key={index}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <img src={product.thumbnail} alt={product.title} />
                </div>
            )) : <div>No info</div>}
            hey
        </>
    );
}