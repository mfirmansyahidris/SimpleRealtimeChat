import React, { Component } from "react";
import ChatComponent from "../../components/chats/ChatsComponent";
import './ChatsContainer.css'

class ChatsContainer extends Component {
  render() {
    return (
      <div className="msg_history">

        <ChatComponent
          sender="Ali"
          message="Haii.."
          time="10:30"
        />
        <ChatComponent
          sender="Bambang"
          message="Ali selalu kencing berdiri"
          time="10:30"
        />
        <ChatComponent
          sender="Ali"
          message="Bahwa sesungguhnya kemerdekaan itu ialah hak segala bangsa dan oleh sebab itu maka penjajahan di atas dunia harus dihapuskan"
          time="10:30"

        />

      </div>
    )
  }
}

export default ChatsContainer