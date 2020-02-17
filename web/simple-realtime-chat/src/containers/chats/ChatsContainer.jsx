import React, { Component } from "react";
import ChatComponent from "../../components/chats/ChatsComponent";
import './ChatsContainer.css'

class ChatsContainer extends Component{
    render(){
        return(
          <div className="msg_history">

            <ChatComponent />
            <ChatComponent />
            <ChatComponent />
            <ChatComponent />
            
          </div>
        )
    }
}

export default ChatsContainer