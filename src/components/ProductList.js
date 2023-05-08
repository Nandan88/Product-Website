import '../App.css';

function ProductList({product,addToCart}){  //prop bheja udhar se yaha
    return(
        <div className='flex'>
            {
                product.map((productItem, productIndex)=>{
                    return(
                        // <div style={{width:'25%'}}>
                        //     <div className='product-item'>
                        //         <img src={productItem.url} alt="" width="100%"  />
                        //         <p>{productItem.name} | {productItem.category}</p>
                        //         <p>{productItem.seller}</p>
                        //         <p> Rs. {productItem.price} /-</p>
                        //         <button onClick={()=> addToCart(productItem)}>Add To Cart</button>
                        //     </div>

                        // </div>

                        <div class="cardp">
                            <img src={productItem.url} alt="" width="100%"  />
                            <h1>{productItem.name} | {productItem.category}</h1>
                            <p>{productItem.seller}</p>
                            <p> Rs. {productItem.price} /-</p>
                            <p><button onClick={()=> addToCart(productItem)}>Add To Cart</button></p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList;