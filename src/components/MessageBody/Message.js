import React from "react";
import "./Message.css";
import { Avatar } from "@chakra-ui/react";
import TextInput from '../TextInput/TextInput'

const Message = ({message}) => {
 
  
  return (
    <div className="message-body">
      {message?.map((msg, id) => {
        return (
          <>
            {msg.sender.self ?  (
              <div className="message-self" key={id}>
                <div className="text-msg-1">
                  <p>
                   {msg.message}
                  </p>
                </div>
              </div>
            ):
            (
                <div className="message" key={id}>
                  <Avatar name="Segun Adebayo" src={msg?.sender?.image} boxSize={5} />
                  <div className="text-msg">
                    <p>{msg.message}</p>
                  </div>
                </div>
              )}
          </>
        );
      })}

      <TextInput/>
    </div>

    
  );
};

export default Message;
