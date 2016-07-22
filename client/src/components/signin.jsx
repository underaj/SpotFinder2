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
      <div className='sidePanel'>
        <form onSubmit={this.clickSignIn.bind(this)}>
        <div className='form-group'>
          <input className='form-control' placeholder='Username' value={this.state.username} onChange={this.handleUsername.bind(this)} />
        </div>
        <div className='form-group'>
          <input type='password' className='form-control' placeholder='Password' value={this.state.password} onChange={this.handlePassword.bind(this)} />
        </div>
          <button className='btn'>Sign In</button>
        </form>
      </div>
    );  
  }
}
