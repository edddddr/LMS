import { getAllProducts } from "../services/product.service.js"
import { apiResponse } from "../utils/apiResponse.js"
import { HTTP_STATUS } from "../constants/httpStatus.js"
import { getPagination } from "../utils/pagination.js"


export const getProducts = (req, res) =>{

    const {page, limit } = getPagination(req.query);

    const result = await getAllProducts(page, limit);

    return apiResponse(
        res,
        HTTP_STATUS.OK,
        "Products retrieved successfully",
        result
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

