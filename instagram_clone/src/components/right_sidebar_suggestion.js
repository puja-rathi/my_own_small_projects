import React from 'react';
import '../mycss/instagram.css';
import mypic from '../images/mypic.JPG';
import n1 from '../images/n1.jpg';
import n2 from '../images/n2.jpg';
import n3 from '../images/n3.jpg';
import n4 from '../images/n4.jpg';
import n5 from '../images/n5.jpg';

//RightSuggestions functional component to recreate right side sidebar with props parameter

const RightSuggestions = (props)=>{
    return(
        <div className='right_suggestions'>

            <div className='firstdiv'>
                <img src={mypic} alt="profile_pic" />
                <a className='pname'>{props.name}</a>
                <a className='switch'>Switch</a>
            </div>
            <div className='seconddiv'>
                <p className='yoursuggestion'>Suggested for you</p>
                <a className='seeall'>See All</a>

            </div>

            <div className='thirddiv'>
                
                <img src={n1} alt="profile_pic" />
                <a className='pname'>mishti <span className="newToInstagram">New to Instagram</span></a>
                <a className='followcol'>Follow</a>
               

        
                <img src={n2} alt="profile_pic" />
                <a className='pname'>abc<span className="newToInstagram">New to Instagram</span></a>
                <a className='followcol'>Follow</a>
                

                <img src={n3} alt="profile_pic" />
                <a className='pname'>def<span className="newToInstagram">New to Instagram</span></a>
                <a className='followcol'>Follow</a>

                <img src={n4} alt="profile_pic" />
                <a className='pname'>ghi<span className="newToInstagram">New to Instagram</span></a>
                <a className='followcol'>Follow</a>

                <img src={n5} alt="profile_pic" />
                <a className='pname'>jkl<span className="newToInstagram">New to Instagram</span></a>
                <a className='followcol'>Follow</a>
            </div>

            {/* link to compare it with original webpage of instagarm */}
            <div className='fourthdiv'>
                <p><a href="https://www.instagram.com/">Link to website</a></p>
            </div>
        </div>
    )
}

//export component to be use in app.js
export default RightSuggestions;