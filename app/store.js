import { atom } from "jotai";

export const productsAtom = atom([
    {
        "title": "mac",
        "description": "Desc",
        "price": 10.12,
        "thumbnail": "images/mac.png",
    },
    {
        "title": "phone",
        "description": "phone",
        "price": 12.12,
        "thumbnail": "images/phone.png",
    },
]);