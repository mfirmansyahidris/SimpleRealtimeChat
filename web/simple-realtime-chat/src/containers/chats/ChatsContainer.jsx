import React, { Component } from "react";
import ChatComponent from "../../components/chats/ChatsComponent";
import './ChatsContainer.css'
import FirebaseInit from '../../config/FirebaseInit'

class ChatsContainer extends Component {
  state = {
    chats: []
  }

  componentDidMount(){
    this.getChats()
  }

  componentDidUpdate(){
    this.scrollToBottom();
  }

  getChats = () => {
    let ref = FirebaseInit.database().ref('/chats')
    ref.on('value', snapshot => {
      let chats = snapshot.val()
      let newState = []
      for(let chat in chats){
        newState.push({
          id: chat,
          color: chats[chat].color,
          from: chats[chat].from,
          message: chats[chat].message,
          time: chats[chat].time
        })
      }

      this.setState({
        chats: newState
      })
    })
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" })
  }

  render() {
    return (
      <div className="msg_history" >
        {
          this.state.chats.map(chat => (
            <ChatComponent
              sender = {chat.from}
              message = {chat.message}
              time = {chat.time}
              color = {chat.color}
            />
          ))
        }
        <div ref={(el) => { this.messagesEnd = el }}/>
      </div>
    )
  }
}

export default ChatsContainer