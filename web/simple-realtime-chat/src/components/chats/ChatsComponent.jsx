import React, { Component } from "react";
import './ChatsComponent.css'

class ChatComponent extends Component{
    render(){
        return(
            <div className="incoming_msg">
                <div className="received_msg">
                <div className="received_withd_msg">
                    <p>Test which is a new approach to have all solutions</p>
                    <span className="time_date">11:01 AM    |    June 9</span>
                </div>
                </div>
            </div>
        )
    }
}

export default ChatComponent