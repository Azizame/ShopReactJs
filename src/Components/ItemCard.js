import React, { useEffect , useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import { Items } from './Data';
import { useStateValue } from './StateProvider';
import { actionType } from './reduser';
let cartData = []

export default function ItemCard({imgSrc, name, ratings, price, id}){
    const [isFavourite, setFavourite] =  useState(false)
    const [currentValue, setCurrentValue] = useState(Math.floor(ratings))
    
    const [isCart, setCart] = useState(null)
    const [{}, dispatch] = useStateValue()


    useEffect(() => {
        if(isCart){
            cartData.push(isCart)
            console.log(cartData)
            dispatch({
                type: actionType.SET_CART,
                cart: cartData,
            })
        }
    }, [isCart])

    const handleClick = (value) =>{
        setCurrentValue(value)
    }
    
    return(
        <div className='itemCard'>
            <div className={`isFavourite ${isFavourite ? `active` : ""}`} 
            onClick={() => setFavourite(!isFavourite)}>
                <FavoriteIcon />
            </div>
                <div className='imgBox'>
                    <img src={imgSrc} alt='' className='itemImg'/>
                </div>
                <div className='itemContent'>
                    <h3 className='itemName'>{name}</h3>
                    <div className='bottom'>
                    <div className='ratings'>
                        {Array.apply(null, {length : 5}).map((e,i)=>(
                            <i key={i} className={`rating ${currentValue > i ? "orange" : "grey" }`}
                            onClick={() => handleClick(i + 1)}>
                                <StarIcon/>
                            </i>
                        ))}
                        <h3 className='price'><span>$ </span>{price}</h3>
                    </div>
                    <i className='addToCard' onClick={() => setCart(Items.find((n) => n.id === id))}>
                        <AddIcon />
                    </i>

                    </div>
                    
                </div>
        </div>
    )
}