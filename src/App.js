import React from 'react';
import './App.css';
import { useState, useEffect } from 'react'
import Header from './Components/Header';
import MenuContainer from './Components/MenuContainer';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SummarizeRoundedIcon from '@mui/icons-material/SummarizeRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import BannerName from './Components/BannerName';
import SubMenuContainer from './Components/SubMenuContainer';
import MenuCard from './Components/MenuCard';
import { MenuItems } from './Components/Data';
import { Items } from './Components/Data';
import ItemCard from './Components/ItemCard';
import DebitCard from './Components/DebitCard';
import CartItem from './Components/CartItem';
import { useStateValue } from './Components/StateProvider';



function App() {
  // MAIN DISH state
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === 'buger01' )
  )
  const [{cart}] = useStateValue()
  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");
    console.log(menuLi)
    function setMenuActive(){
      menuLi.forEach(n => n.classList.remove("active"))
      this.classList.add("active")
    }
    menuLi.forEach((n) => n.addEventListener("click", setMenuActive))
  
    /* Menu Card active toggle */
    const menuCard = document.querySelector(".rowContainer").querySelectorAll(".rowMenuCard");
    
    function setMenuCardActive(){
      menuCard.forEach(n => n.classList.remove("active"))
      this.classList.add("active")
    }
    menuCard.forEach(n => n.addEventListener("click", setMenuCardActive))
  }, [isMainData, cart]);
  // Set main
  const setData = (itemId) =>{
    setMainData(Items.filter((element) => element.itemId === itemId ))
  } 

  return (
    <div className="App">
      {/* HEADER Section*/}
      <Header />
      {/* MAIN Section */}
      <main>
        <div className='mainContainer'>
          {/* Banner */}
          <div className='banner'>
            <BannerName name={"Aziza"} discount={"20"} link={"#"}/>
            <img src='https://firebasestorage.googleapis.com/v0/b/food-f23e6.appspot.com/o/Delivery-PNG-Image.png?alt=media&token=b32deeaa-3d0c-4727-9a61-2a5c01c9fc30'
            alt=''
            className='deliveryPic'
            />
          </div>
          {/* Dish container */}
          <div className='dishContainer'>
            <div className='menuCard'>
              <SubMenuContainer name={"Menu Category"}/>
            </div>
            <div className='rowContainer'>
              {
                MenuItems && MenuItems.map((data) => (
              <div key={data.id} onClick={() => setData(data.itemId)}>
                <MenuCard imgSrc={data.imgSrc} 
                name={data.name}
                isActive={data.id === 1 ? true : false}
                />
              </div>
                ))
              }
              
            </div>
            <div className='dishContainer'>
              {
                isMainData && 
                isMainData.map((data) => (  
                  <ItemCard 
                  key={data.id}
                  id={data.id}
                  imgSrc={data.imgSrc} 
                  name={data.name} 
                  ratings={data.ratings} 
                  price={data.price}/>
                ))
              }
            </div>
          </div>
        </div>
        <div className='rightMenu' >
          <div className='debitCardContainer'>
            <div className='debitCard'>
              <DebitCard/>
            </div>
          </div>

          {!cart ? (<div></div> ) : (

          
          <div className='cartCheckOutContainer'>
              <SubMenuContainer name={"cart Items"}/>
            <div className='cartContainer'>
              <div className='cartItems'>
                {
                  cart && cart.map((data) => (

                    <CartItem 
                    key={data.id}
                    itemId={data.id}
                      name={data.name}
                      imgSrc={data.imgSrc}
                      
                      price={data.price}
                    />
                  ))
                }
              </div>
            </div>
            <div className='totalSection'>
              <h3>Total</h3>
              <p>
                <span>$ </span>45.90
              </p>

            </div>
            <button className='checkOut'>Check Out</button>
          </div>
          )}
        </div>
      </main>
      {/* BOTTOM Menu */}
      <div className='bottomMenu'>
        <ul id='menu'>
          {/* prettire ignore */}
          <MenuContainer  icon = {<HomeIcon />} isHome />
          {/* prettire ignore */}
          <MenuContainer  icon = {<ChatIcon />}/>
          {/* prettire ignore */}
          <MenuContainer  icon = {<PersonIcon />}/>
          {/* prettire ignore */}
          <MenuContainer  icon = {<SummarizeRoundedIcon />}/>
          {/* prettire ignore */}
          <MenuContainer  icon = {<FavoriteIcon />}/>
          {/* prettire ignore */}
          <MenuContainer  icon = {<SettingsIcon />}/>

          <div className='indicator'></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
