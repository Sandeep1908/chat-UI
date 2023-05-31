import React,{useState,useEffect} from 'react'
import './chatUi.css'
import Header from './Header/Header'
import Message from './MessageBody/Message'

const ChatUI = () => {
    const [message, setMessage] = useState([]);
    const [from,setFrom]= useState('')
    const [to,setTo]= useState('')
    const [name,SetName]= useState('')
    useEffect(() => {
      async function logJSONData() {
        const response = await fetch(
          "http://3.111.128.67/assignment/chat?page=0"
        );
        const jsonData = await response.json();
        setMessage(jsonData.chats);
        setFrom(jsonData.from)
        setTo(jsonData.to)
        SetName(jsonData.name)
      }
      logJSONData();
    }, []);
  return ( 
    <div className='chat-ui-body'>
        <Header to={to} from={from} name={name}/>
        <Message message={message}/>
    </div>
  )
}

export default ChatUI