
export const getAllProducts = (req, res) =>{
    res.send("Get All Products");
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

