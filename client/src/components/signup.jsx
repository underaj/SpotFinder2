import React from 'react';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input className='name-input' value={this.state.username} onChange={this.handleUsername.bind(this)} />
        <input type='password' className='name-input' value={this.state.password} onChange={this.handlePassword.bind(this)} />
        <button className='btn' onClick={  ()=> this.props.signup(this.state) } >Sign Up</button>
      </div>
    );  
  }
}
