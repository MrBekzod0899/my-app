import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FaTelegram } from 'react-icons/fa';
import { FaInstagram} from 'react-icons/fa';
import { FaFacebook} from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';
import './contact.css'
export default class Contact extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <>
             <div className="contact">
                 <div className="btn-group-vertical">
                     <span><a><MdMessage/></a></span>
                     <span><a><FaTelegram/></a></span>
                     <span><a><FaInstagram/></a></span>
                     <span><a><FaFacebook/></a></span>
                     <span><a><FaYoutube/></a></span>
                     <span><a><FaPhone/></a></span>
                  
                 </div>
            </div>   
            </>
        )
    }
}
