import React, { Component } from "react";
import ChatIncomingComponent from "../../components/chats/ChatsIncomingComponent";
import ChatOutgoingComponent from "../../components/chats/ChatOutgoingComponent";

class ChatsContainer extends Component{
    render(){
        return(
            <div className="mesgs">
              <div className="msg_history">
                
                <ChatIncomingComponent />

                <ChatOutgoingComponent />

                <ChatIncomingComponent />

                <ChatOutgoingComponent />
                
              </div>

              <div className="type_msg">
                <div className="input_msg_write">
                  <input type="text" class="write_msg" placeholder="Type a message" />
                  <button class="msg_send_btn" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                </div>
              </div>
            </div>
        )
    }
}

export default ChatsContainer