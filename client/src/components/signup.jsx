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

  clickSignUp(e) {
    e.preventDefault();
    this.props.signup(this.state);
    console.log(this.props.user);
    this.setState({
      username: '',
      password: ''
    });
  }

  render() {
    var usernameTaken;
    
    if (this.props.user === null) {
      usernameTaken = <p>Username is already taken</p>;
    }

    return (
      <div className='sidePanel'>
        <form onSubmit={this.clickSignUp.bind(this)}>
          <div className='form-group'>
          <input className='form-control' placeholder='Username' value={this.state.username} onChange={this.handleUsername.bind(this)} />
          </div>
          <div className='form-group'>
          <input type='password' className='form-control' placeholder='Password' value={this.state.password} onChange={this.handlePassword.bind(this)} />
          </div>
          <button className='btn' >Sign Up</button>
          {usernameTaken}
        </form>
      </div>
    );  
  }
}
