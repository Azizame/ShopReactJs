import React from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function MenuCard({imgSrc, name, isActive}){
    return(
        <div className={`rowMenuCard ${isActive ? `active` : ``}`}>
            <div className="inBox">
                <img src={imgSrc} alt=""/>
            </div>
            <h3>{name}</h3>
            <i className="loadMenu">
                <NavigateNextIcon/>
            </i>
        </div>
    )
}