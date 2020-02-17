import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'
import ChatsContainer from './containers/chats/ChatsContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <div className="container">
        <h3 className="text-center">Messaging</h3>
        <div className="messaging">
          <div className="inbox_msg">  
            <div className="mesgs">

              <ChatsContainer />

              <div className="type_msg">                
                <div className="input_msg_write">
                  <input type="text" class="write_msg" placeholder="Type a message" />
                  <button className="msg_send_btn" type="button"><FontAwesomeIcon icon={faPaperPlane}/></button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
