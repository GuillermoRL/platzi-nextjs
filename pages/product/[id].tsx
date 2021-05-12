import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () =>{
    const router = useRouter()
    return(
        <div>This is a product view from: {router.query.id}</div>
    )
}

export default ProductItem