import React from "react"

export default function DebitCard(){
    return(
        <div className="cardGroup">
            <img src="https://firebasestorage.googleapis.com/v0/b/food-f23e6.appspot.com/o/img.png?alt=media&token=cfb3d967-952b-4ca8-a605-616fcb8d6209" 
                alt="" 
                className="card_logo" />
            <img src="https://firebasestorage.googleapis.com/v0/b/food-f23e6.appspot.com/o/chip_card.png?alt=media&token=ffaa6e61-a12c-4ba3-bc9c-e61d3ef70e99" 
                alt="" 
                className="card_chip" />

            <div className="card_number">1234 5678 9001 1002</div>
            <div className="card_name">Mahamatova Aziza</div>
            <div className="card_from">00/00</div>
            <div className="card_to">11/11</div>
            <div className="card_ring"></div>
        </div>
    )
}
