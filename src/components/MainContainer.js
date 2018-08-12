import React, {Component} from 'react';
import io from 'socket.io-client';
import { USER_CONNECTED } from '../Actions.js';
import LoginPage from './LoginPage.js';
import ChatPage from './ChatPage.js';

const socketUrl = "http://192.168.1.115:3231/";

export default class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            socket: null,
            user: ""
        };
    }

    componentWillMount() {
        this.initSocket()
    };

    initSocket = () => {
        const socket = io(socketUrl);
        socket.on('connect', ()=> {
            console.log("connected on client")
        });
        this.setState({socket})
    };

    registerUser = (user)=> {
        const {socket} = this.state;
        socket.emit(USER_CONNECTED, user);
        this.setState({user});
    };



    render() {
        const { title } = this.props;
        const {socket}  = this.state;
        return (
            <div className="container">
                {title}
                <LoginPage socket={socket}
                           registerUser={this.registerUser}
                />
                <ChatPage/>
            </div>
        );
    }
}

