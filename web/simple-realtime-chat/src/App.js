import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import userImagePlaceHolder from './img/user-profile.png'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        <h3 className="text-center">Messaging</h3>
        <div className="messaging">
          <div className="inbox_msg">
            <div className="inbox_people">
              <div className="headind_srch">
                <div className="recent_heading">
                  <h4>Recent</h4>
                </div>
                <div className="srch_bar">
                  <div className="stylish-input-group">
                    <input type="text" className="search-bar" placeholder="Search" />
                    <span className="input-group-addon">
                      <button type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
                    </span>
                  </div>
                </div>
              </div>
              <div className="inbox_chat">

                <div className="chat_list active_chat">
                  <div className="chat_people">
                    <div className="chat_img"><img src={userImagePlaceHolder} alt="alibambang" /></div>
                    <div className="chat_ib">
                      <h5>alibambang <span className="chat_date">Dec 25</span></h5>
                      <p>Test, which is a new approach to have all solutions astrology under one roof.</p>
                    </div>
                  </div>
                </div>

                <div className="chat_list">
                  <div className="chat_people">
                    <div className="chat_img"><img src={userImagePlaceHolder} alt="alibambang" /></div>
                    <div className="chat_ib">
                      <h5>alibambang <span className="chat_date">Dec 25</span></h5>
                      <p>Test, which is a new approach to have all solutions astrology under one roof.</p>
                    </div>
                  </div>
                </div>

                <div className="chat_list">
                  <div className="chat_people">
                    <div className="chat_img"><img src={userImagePlaceHolder} alt="alibambang" /></div>
                    <div className="chat_ib">
                      <h5>alibambang <span className="chat_date">Dec 25</span></h5>
                      <p>Test, which is a new approach to have all solutions astrology under one roof.</p>
                    </div>
                  </div>
                </div>

                <div className="chat_list">
                  <div className="chat_people">
                    <div className="chat_img"><img src={userImagePlaceHolder} alt="alibambang" /></div>
                    <div className="chat_ib">
                      <h5>alibambang <span className="chat_date">Dec 25</span></h5>
                      <p>Test, which is a new approach to have all solutions astrology under one roof.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="mesgs">
              <div className="msg_history">
                <div className="incoming_msg">
                  <div className="incoming_msg_img"><img src={userImagePlaceHolder} alt="alibambang" /></div>
                  <div className="received_msg">
                    <div className="received_withd_msg">
                      <p>Test which is a new approach to have all solutions</p>
                      <span className="time_date">11:01 AM    |    June 9</span>
                    </div>
                  </div>
                </div>
                <div className="outgoing_msg">
                  <div className="sent_msg">
                    <p>Test which is a new approach to have all solutions</p>
                    <span class="time_date"> 11:01 AM    |    June 9</span>
                  </div>
                </div>
              </div>

              <div className="type_msg">
                <div className="input_msg_write">
                  <input type="text" class="write_msg" placeholder="Type a message" />
                  <button class="msg_send_btn" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
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
