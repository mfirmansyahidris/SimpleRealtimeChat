import React, { Component } from "react";
import userImagePlaceHolder from '../../img/user-profile.png'

class RoomsComponent extends Component{
    render(){
        return(
            <div className="chat_list active_chat">
                <div className="chat_people">
                <div className="chat_img"><img src={userImagePlaceHolder} alt="alibambang" /></div>
                <div className="chat_ib">
                    <h5>alibambang <span className="chat_date">Dec 25</span></h5>
                    <p>Test, which is a new approach to have all solutions astrology under one roof.</p>
                </div>
                </div>
            </div>
        )
    }
}

export default RoomsComponent