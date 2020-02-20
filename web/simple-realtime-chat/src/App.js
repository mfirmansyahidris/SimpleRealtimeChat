import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'
import ChatsContainer from './containers/chats/ChatsContainer';
import TypeMsgComponent from './components/typeMsg/TypeMsgComponent';


class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      userName: ''
    }
  }

  handleUserNameChange = (newUserName) => {
    this.setState({
      userName: newUserName
    })
  }

  componentDidUpdate(){
    this.saveUserData()
  }

  saveUserData = () => localStorage.setItem('userName', this.state.userName)
  
  render(){
    return (
      <div className="App">
        <div className="container">
          <h3 className="text-center">Messaging</h3>
          <div className="messaging">
            <div className="inbox_msg">  
              <div className="mesgs">
  
                <ChatsContainer />
  
                <TypeMsgComponent onUserNameChange={this.handleUserNameChange} />
  
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App
