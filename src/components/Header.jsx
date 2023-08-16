import React from 'react';
import "./Header.css"
import food1 from "../assets/burger.png"

const Header = () => {
    return <div className='header'>

      <div className="img_box">
        <img src={food1} alt="" />
      </div>

       <div className="text_box">
        <h2>Siz sevgan</h2>
        <h1>Taomlar</h1>
       </div> 
    </div>
}

export default Header;
