import { getAllProducts } from "../services/product.service.js"


export const getAllProducts = (req, res) =>{

    const products = await getAllProducts();
    res.status(200).json(products);

}

export const getProduct = (req, res) => {
    res.send(`product ${req.params.id}`)
}

export const createProduct = (req, res) => {
    res.send(`product ${req.query.id}`)
}


export const updateProduct = (req, res) => {
    res.send(`product ${req.query.id}`)
}

export const deleteProduct = (req, res) => {
    res.send(`product ${req.query.id}`)
}

