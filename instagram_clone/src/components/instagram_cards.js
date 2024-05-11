// import bootstrap components and font- awesome icons
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import mypic from '../images/mypic.JPG';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';

//InstagramCard functional component to render user name, post and comments section

const InstagramCard = ({ name, photo, comments }) => {
    return (
        // return bootstrap card component with few inline styles

        <Card style={{ width: '25rem',padding:'1rem',border:'none' }}>
            <Card.Body style={{ backgroundColor: 'rgba(255, 255, 255, 0)'}}>

                <Card.Title style={{fontSize:'12px'}}><span><img src={mypic} alt="user" style={{height:'2rem',width:'2rem',borderRadius:'50%',marginRight:'1rem'}}/></span>{name}</Card.Title>

                <Card.Img variant="top" src={photo} />

                <div className="d-flex justify-content-between mt-3">
                    <Button variant="light"><FaHeart /></Button>
                    <Button variant="light"><FaComment /></Button>
                    <Button variant="light"><FaShare /></Button>
                </div>

                <div className="mt-3">
                    <Card.Text >
                        {comments.map((comment, index) => (
                            <p key={index} style={{fontSize:'12px'}}>{comment}</p>
                        ))}
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
}
//export component to be use in app.js
export default InstagramCard;
