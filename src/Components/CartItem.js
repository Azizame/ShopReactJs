import React, { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useStateValue } from "./StateProvider";
let cartItems = [];

export default function CartItem({price, imgSrc, name, itemId}){
    const [{ cart }, dispatch] = useStateValue()
    const [qty, setQty] = useState(1)
    const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price))


    useEffect(() => {
        cartItems = cart;
        setItemPrice(parseInt(qty) * parseFloat(price))
    }, [qty]);
    

    const updateQuantity = (action, id) => {
        if(action === 'add'){
            setQty(qty + 1)
        }else{
            if(qty === 1){
                cartItems.pop(id);
                dispatch({
                    type: action.SET_CART,
                    cart: cartItems,
                })
            }
              setQty(qty - 1)
        }
    }

    return(
        <div className="cardItem">
            <div className="imgBox">
                <img src={imgSrc} alt="" />
            </div>

            <div className="itemSection">
                <h2 className="itemName">{name}</h2>
                <div className="itemQuantity">
                    <span>x {qty}</span>
                    <div className="quantity">
                        <RemoveIcon className="itemRemove" onClick={() => updateQuantity("remove", itemId)}/>
                        <AddIcon className="itemAdd" onClick={() => updateQuantity('add', itemId)}/>
                    </div>
                </div>
            </div>
            <p className="itemPrice">
                <span className="dolorSign">$ </span>
                <span className="itemPriceValue">{itemPrice}</span>
            </p>
        </div>
    )
}