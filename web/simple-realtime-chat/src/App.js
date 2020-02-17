import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import RoomsContainer from './containers/rooms/RoomsContainer';
import ChatsContainer from './containers/chats/ChatsContainer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h3 className="text-center">Messaging</h3>
        <div className="messaging">
          <div className="inbox_msg">
            <RoomsContainer />

            <ChatsContainer />

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
