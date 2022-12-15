import React, { useEffect } from 'react'
import {} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ToggleIcon from '@mui/icons-material/BarChart'

function Header() {
    // const rightMenu = useRef()
    // const showMenu = () =>{
    //     rightMenu.current.classList.toggle("active")
    // }
    useEffect(() => {
        const toggleMenu = document.querySelector('.toggleMenu')

         toggleMenu.addEventListener("click", () => {
            document.querySelector(".rightMenu").classList.toggle('active')
         })
    }, [])

    return(
        <header>
            <img src='https://firebasestorage.googleapis.com/v0/b/food-f23e6.appspot.com/o/logo.png?alt=media&token=95e57af1-f8f9-4d0a-a8ce-d100dcc33c08' 
            alt=''
            className="logo"/>
            <div className='inputBox'>
                <SearchIcon className="searchIcon"/>
                <input type="text" placeholder='Search'/>
            </div>

            <div className='shoppingCart'>
                <ShoppingCartIcon className="cart" />
                <div className='cart_content'>
                    <p>2 </p>
                </div>
            </div>

            <div className='profileContainer'>
                <div className='imgBox'>
                    <img src='https://firebasestorage.googleapis.com/v0/b/food-f23e6.appspot.com/o/girl.jpg?alt=media&token=82e8e17d-5a97-4620-871f-f1a1c9b13e50' alt='' className='profilePick'/>
                </div>
                <h2 className='userName'>Aziza Mahamatova</h2>
            </div>

            <div className='toggleMenu'>
                <ToggleIcon className='toggleIcon' />
            </div>
        </header>
    )
}

export default Header;