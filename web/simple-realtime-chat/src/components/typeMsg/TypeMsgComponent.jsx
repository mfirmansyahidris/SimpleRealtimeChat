import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faPen } from '@fortawesome/free-solid-svg-icons'
import './TypeMsgComponent.css'
import { Modal, Button } from "react-bootstrap";

class TypeMsgComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            userName: 'Anonymouse',
            userNameDialogShow: false,
        }
    }

    handelUserNameDialogClose = () => this.setState({userNameDialogShow: false})

    handleUserNameDialogShow = () => this.setState({userNameDialogShow: true})

    handleUserNameChange = (e) => this.setState({userName: e.target.value})

    handleSaveUserNameButton = () => {
        this.handelUserNameDialogClose()
        this.props.onUserNameChange(this.state.userName)
    }

    componentDidMount(){
        let newUserName = localStorage.getItem('userName')
        if(newUserName !== null){
            this.setState({ userName: newUserName })
        }
    }

    render(){
        return(
            <div className="type_msg">           
                <div className="user_name">
                    <h6>{this.state.userName}</h6>
                    <button 
                        onClick={this.handleUserNameDialogShow} 
                        className="user_name_edit_btn" 
                        type="button">
                            <FontAwesomeIcon icon={ faPen } />
                    </button>
                </div>
                <div className="input_msg_write">
                    <input type="text" className="write_msg" placeholder="Type a message" />
                    <button className="msg_send_btn" type="button"><FontAwesomeIcon icon={faPaperPlane}/></button>
                </div>

                <Modal show={this.state.userNameDialogShow} onHide={this.handelUserNameDialogClose}>
                    <Modal.Header>
                        <Modal.Title>Set User Name</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input 
                            type="text" 
                            value={this.state.userName} 
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