import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faPen } from '@fortawesome/free-solid-svg-icons'
import './TypeMsgComponent.css'
import { Modal, Button } from "react-bootstrap";
import { colorRand } from '../../config/Colors'
import FirebaseInit from '../../config/FirebaseInit'
var dateformat = require('dateformat')

class TypeMsgComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            userName: props.userName,
            color: props.color,
            userNameDialogShow: false,
            message: '',

            newUserName: props.userName,
            newColor: ''
        }
    }

    handleUserNameDialogShow = () => this.setState({userNameDialogShow: true})

    handleUserNameChange = (e) => this.setState({newUserName: e.target.value})

    handelUserNameDialogClose = () => {
        this.setState({userNameDialogShow: false})
    }

    handleOnKeyPressMessage = (e) => {
        if(e.key === 'Enter'){
            this.handleSend()
        }
    }

    handleSaveUserNameButton = () => {
        let color = colorRand
        this.handelUserNameDialogClose()
        this.props.onUserNameChange(this.state.newUserName, color)
        this.setState({
            userName : this.state.newUserName,
            color : color
        })
    }

    handleMessageChange = (e) => this.setState({message: e.target.value})

    handleSend = () => {
        let ref = FirebaseInit.database().ref('/chats')
        ref.child(Date.now()).set({
            color: this.state.color,
            message: this.state.message,
            from: this.state.userName,
            time: dateformat(Date.now(), "dd mmm yyyy, hh:MM")
        })


        this.setState({message: ''})
    }

    componentDidMount(){
        this.setState({
            userName: this.state.userName
        })
    }

    render(){
        return(
            <div className="type_msg">   
                <div className="user_name">
                    <h6>{this.state.userName}</h6>
                    <button 
                        style={{background: this.state.color}}
                        onClick={this.handleUserNameDialogShow} 
                        className="user_name_edit_btn" 
                        type="button">
                            <FontAwesomeIcon icon={ faPen } />
                    </button>
                </div>
                <div className="input_msg_write">
                    <input 
                        type="text" 
                        className="write_msg"
                        onKeyPress={this.handleOnKeyPressMessage} 
                        onChange={this.handleMessageChange}
                        value={this.state.message} 
                        placeholder="Type a message" />
                    <button
                        className="msg_send_btn" 
                        type="button"
                        onClick={this.handleSend}
                    ><FontAwesomeIcon icon={faPaperPlane}/></button>
                </div>

                <Modal show={this.state.userNameDialogShow} onHide={this.handelUserNameDialogClose}>
                    <Modal.Header>
                        <Modal.Title>Set User Name</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input 
                            type="text" 
                            value={this.state.newUserName} 
                            onChange={this.handleUserNameChange} 
                            className="new_user_name" 
                            placeholder="Set Awesome User Name"
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handelUserNameDialogClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleSaveUserNameButton}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default TypeMsgComponent