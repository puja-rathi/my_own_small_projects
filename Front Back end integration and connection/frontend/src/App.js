import React,{useState,useEffect} from 'react'; 
import axios from 'axios';
import './App.css';

//create App function
function App() {

  const [customMessage,setCustomMessage] = useState(''); //State to store fetched data

  useEffect(()=>{
    fetchData(); //fetch data each time when component loads
  },[]);

  //function to fetch data from server

  const fetchData = async()=>{
    try{
        // send a get request to 'http://localhost:5000/api/message' (our backend server)
        const response = await axios.get('/api/message');
        setCustomMessage(response.data);  //update state with fetched data

      }
    catch(error){
      console.log(`Error in fetching data:`,error);
    }
  }
  return(
    <div>
      <h2>{customMessage.message || 'Loading...'}</h2>
    </div>
  )
}

export default App;
