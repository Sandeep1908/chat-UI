import React, { useState } from "react";
import "./TextInput.css";
import { AttachmentIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/icons";
import { IoCamera, IoVideocam, IoReaderSharp } from "react-icons/io5";
const TextInput = () => {
  const [activeClass,setActiveClass]=useState(false)
  
  return (
    // <div className="text-input-container">
      <div className="text-input-body">
        <div className="input-body">
          <input type="text" placeholder="Reply to @Rohit Yadav" />
        </div>

        <div className="right-icon">
          <AttachmentIcon onClick={()=>setActiveClass(!activeClass)} style={{cursor:'pointer'}}/>
          <ChevronRightIcon boxSize={6} style={{cursor:'pointer'}} />
        </div>

        <div className={activeClass?'hover-icon active':'hover-icon'}>
          <Icon as={IoCamera} style={{cursor:'pointer'}} className="icon"/>
          <Icon as={IoVideocam} style={{cursor:'pointer'}}  className="icon"/>
          <Icon as={IoReaderSharp} style={{cursor:'pointer'}} className="icon" />
        </div>
      </div>
    // </div>
  );
};

export default TextInput;
