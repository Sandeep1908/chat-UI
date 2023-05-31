import React from 'react'
import './Header.css'
import { ArrowBackIcon ,EditIcon} from '@chakra-ui/icons'
import {BsThreeDotsVertical} from 'react-icons/bs'
import { Icon } from "@chakra-ui/icons";

const Header = ({to,from,name}) => {
  return (
    <div className='header-body'>
        <div className='header-1'>
            <div className='left-upper-body'>
                <ArrowBackIcon boxSize={5} style={{cursor:'pointer'}}/>
                <p className='text-body'>{name}</p>
            </div>
            <EditIcon style={{cursor:'pointer'}}/>
        </div>

        <div className='header-2'>
            <div className='left-inner-body'>
                <img src="https://motu.com/techsupport/images/totd/DP-Icon.png/image_preview" alt="" className='image-body'/>
                <div className='inner-text-body'>
                    <p>From <span className='span'>{from}</span></p>
                    <p>To <span className='span'>{to}</span></p>
                </div>
            </div>

           <Icon as={BsThreeDotsVertical} style={{cursor:'pointer'}}/>

        </div>
        
    </div>
  )
}

export default Header