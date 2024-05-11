import React from 'react';
//import custom css and all images from images folder
import '../mycss/instagram.css';
import u1 from '../images/u1.jpg';
import u2 from '../images/u2.jpg';
import u3 from '../images/u3.jpg';
import u4 from '../images/u4.jpg';
import u5 from '../images/u5.jpeg';
import towerbridge from '../images/towerbridge.jpg';
import InstagramCard from '../components/instagram_cards.js'; // Import the InstagramCard component

//CenterContent component to looks like instagram's posts section

const CenterContent = () => {
    const sampleComments = ["Nice", "Excellent", "Good","Stunning view"]; // Sample comments data

    //it has stories div and imported InstagramCard component
    return (
        <div className='center_content'>
            <div className='stories'>
                <div><img src={u1} alt="s1"></img><span>user 1</span></div>
                <div><img src={u2} alt="s1"></img><span>user 2</span></div>
                <div><img src={u3} alt="s1"></img><span>user 3</span></div>
                <div><img src={u4} alt="s1"></img><span>user 4</span></div>
                <div><img src={u5} alt="s1"></img><span>user 5</span></div>
            </div>

            <div className='posts'>
                {/* Insert the InstagramCard component here */}
                <InstagramCard
                    name="Pooja Rathi"
                    photo={towerbridge}
                    comments={sampleComments}
                />
            </div>
        </div>
    )
}

//export component to be use in app.js
export default CenterContent;
