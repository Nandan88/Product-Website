import '../App.css';

import { useState,useEffect} from 'react';

function CartList({ cart }){
    
    //+,- k liye new CART hi bana diya
    const [CART , setCART]=useState([])
    useEffect(()=>{
        //Jitne product already hai vo CART me add kar hi do
        setCART(cart)
    }, [cart])  //cart change hua toh update bhi ho jayega iski help se, i.e. kuch effect hua toh uske liye useEffect

    return (
        <div>
            {
            CART.map((cartItem, cartIndex)=>{
                return(
                    <div>
                        <img src={cartItem.url}  width={90} />
                        <span> {cartItem.name} </span>
                        <button
                        onClick={()=>{
                            const _CART=CART.map((item, index)=>{  
                                //jo index pr click hua vahi index ka element update hoga ,warna else case me item as it is rahega
                                return cartIndex===index?{...item, quantity:item.quantity>0 ? item.quantity-1 : 0 } :item
                            })
                            setCART(_CART)
                        }}
                        >-</button>
                        <span> {cartItem.quantity} </span>
                        <button
                            onClick={()=>{
                                const _CART=CART.map((item, index)=>{
                                    return cartIndex===index?{...item, quantity:item.quantity+1} :item
                                })
                                setCART(_CART)
                            }}
                        >+</button>
                        <span> Rs {cartItem.price * cartItem.quantity}/- </span>
                    </div>
                )
            })
            }

            <p> Total Price <span></span>
                {                                    // total me result hai and value me current value hai item of array ki 
                    CART.map(item=>item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
            </p>
        </div>
    );
}
export default CartList;