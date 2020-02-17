import React, { Component } from "react";
import ChatIncomingComponent from "../../components/chats/ChatsIncomingComponent";
import ChatOutgoingComponent from "../../components/chats/ChatOutgoingComponent";

class ChatsContainer extends Component{
    render(){
        return(
          <div className="msg_history">
                
            <ChatIncomingComponent />

            <ChatOutgoingComponent />

            <ChatIncomingComponent />

            <ChatOutgoingComponent />
            
          </div>
        )
    }
}

export default ChatsContainer