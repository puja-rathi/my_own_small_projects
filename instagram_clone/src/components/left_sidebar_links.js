import React from 'react';
import { FaHome,FaSistrix,FaRegHeart} from "react-icons/fa";
import { CgAddR,CgMenu } from "react-icons/cg";
import { AiOutlineCompass,AiOutlineSend } from "react-icons/ai";
import { IoCardOutline } from "react-icons/io5";
import mypic from '../images/mypic.JPG';
import '../mycss/instagram.css';

//imported font-awesome icons, img, custom css in above lines
//left navigation functional component with all links to recreate instagarm sidebar

const LeftNavigation = () =>{
    return(
        <div className='left_nav'>
            <p className='name'><i>Instagram</i></p>
            <div className='allLinks'>
                <div><span><FaHome /></span><a href="instagram.com">Home</a></div>
                <div><span><FaSistrix /></span><a href="https://www.instagram.com/#">Search</a></div>
                <div><span><AiOutlineCompass /></span><a href="https://www.instagram.com/explore/">Explore</a></div>
                <div><span><IoCardOutline /></span><a href="https://www.instagram.com/explore/">Reels</a></div>
                <div><span><AiOutlineSend /></span><a href=" https://www.instagram.com/direct/inbox/">Messages</a></div>
                <div><span><FaRegHeart /></span><a href=" https://www.instagram.com/direct/inbox/">Notifications</a></div>
                <div><span><CgAddR /></span><a href=" https://www.instagram.com/direct/inbox/">Create</a></div>
                <div><span><img src={mypic} alt="profilepic"></img></span><a href=" https://www.instagram.com/direct/inbox/">Profile</a></div>
                <div><span><CgMenu /></span><a href=" https://www.instagram.com/direct/inbox/">More</a></div>
            </div>
           
        </div>
    )
}

//export component to be use in app.js
export default LeftNavigation;