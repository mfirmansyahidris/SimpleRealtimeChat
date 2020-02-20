import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'
import ChatsContainer from './containers/chats/ChatsContainer'
import TypeMsgComponent from './components/typeMsg/TypeMsgComponent'
import { colorRand } from './config/Colors'

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      userName: localStorage.getItem('userName') === null ? 'Anonymouse' : localStorage.getItem('userName'),
      color: localStorage.getItem('color') === null ? colorRand : localStorage.getItem('color')
    }
  }
  
  handleUserNameChange = (newUserName, newColor) => {
    this.setState({
      userName: newUserName,
      color: newColor
    })
  }

  saveUser = () => {
    localStorage.setItem('userName', this.state.userName)
    localStorage.setItem('color', this.state.color)
  }

  componentDidMount(){
    if(localStorage.getItem('userName') === null){
      this.saveUser()
    }
  }

  componentDidUpdate(){
    this.saveUser()
  }

  render(){
    return (
      <div className="App">
        <div className="container">
          <h3 className="text-center">Messaging</h3>
          <div className="messaging">
            <div className="inbox_msg">  
              <div className="mesgs">

                <ChatsContainer />
  
                <TypeMsgComponent 
                  onUserNameChange={this.handleUserNameChange} 
                  userName={this.state.userName}
                  color={this.state.color} 
                />
  
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App
