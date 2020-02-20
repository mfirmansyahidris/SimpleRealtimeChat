import React, { Component } from "react";
import './ChatsComponent.css'

class ChatComponent extends Component{
    render(){
        return(
            <div className="incoming_msg">
                <div className="received_msg">
                    <div className="received_withd_msg">
                        <span className="sender_msg" style={{color : this.props.color}}>{this.props.sender}</span>
                            <p style={{ background : this.props.color }}>{ this.props.message }</p>
                        <span className="time_date">{this.props.time}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatComponent