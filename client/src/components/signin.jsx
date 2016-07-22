import React from 'react';

export default class SignIn extends React.Component {
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

  clickSignIn() {
    this.props.signin(this.state);
    this.setState({
      username: '',
      password: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.clickSignIn.bind(this)}>
          <input className='name-input' value={this.state.username} onChange={this.handleUsername.bind(this)} />
          <input type='password' className='password-input' value={this.state.password} onChange={this.handlePassword.bind(this)} />
          <button className='btn'>Sign In</button>
        </form>
      </div>
    );  
  }
}
