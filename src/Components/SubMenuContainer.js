import React from "react"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
export default function SubMenuContainer({name}){
    return(
        <div className="subMenuContainer">
            <h3>{name}</h3>
            <div className="viewAll">
                <p>View All</p>
                <i><NavigateNextIcon/></i>
            </div>
        </div>
    )
}