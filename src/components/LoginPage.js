import React, {Component} from 'react';
import { VERIFY_USER} from '../Actions';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname: "",
        }

    }

    handleSubmit = (user) => {
        const {socket} = this.props;
        const {nickname} = this.state;
        console.log("in submit socket---->",socket, "props in login",this.props);
    };


    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({nickname: e.target.value }
        )
    };

    render() {
        let {nickname} = this.state;

        return (
            <div className="login">
                <form onSubmit={this.handleSubmit}
                      className="login-form">
                        <h2>
                            Have a screen name?
                        </h2>
                        bu
                    <input
                        ref={(input) => {this.textInput = input }}
                        type="text"
                        id="nickname"
                        value={nickname}
                        onChange={this.handleChange}
                        placeholder="username"
                    ></input>
                    <div className="">

                    </div>
                </form>
                <button onClick={this.handleSubmit()}>
                </button>

            </div>
        );
    }
}
