import React from "react";
import "./Card.css";



const Card = ({foods}) => {

    return ( 

        
        <div className="card_wrapper" >
            {foods.map((item, inx) => {
                return <div className="card grow br2 shadow-3" key={inx}>
                    <div className="img_container">
                        <img src={item.imgUrl} alt="" className="br3" />
                    </div>
                    <div className="info_box ">
                        <h2>{item.name} <span className="tr">{item.price} Uzs</span></h2>
                        <p>{item.info}</p>
                    </div>
                </div>
            })}
        
            
        </div>
     );
}

export default Card;