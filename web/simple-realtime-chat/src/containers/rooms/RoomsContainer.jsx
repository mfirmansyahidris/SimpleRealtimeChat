import React, { Component } from "react";
import RoomsComponent from "../../components/rooms/RoomsComponent";

class RoomsContainer extends Component{
    render(){
        return(
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

                <RoomsComponent />
                <RoomsComponent />
                <RoomsComponent />
                <RoomsComponent />
                <RoomsComponent />


              </div>
            </div>
        )
    }
} 

export default RoomsContainer