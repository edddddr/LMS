import { getAllProducts } from "../services/product.service.js"
import { apiResponse } from "../utils/apiResponse.js"


export const getAllProducts = (req, res) =>{

    const products = await getAllProducts();

    return apiResponse(
        res,
        200,
        "Products retrieved successfully",
        products
    )

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

