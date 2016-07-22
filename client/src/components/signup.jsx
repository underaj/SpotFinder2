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
      <div>
        <form onSubmit={this.clickSignUp.bind(this)}>
          <input className='name-input' value={this.state.username} onChange={this.handleUsername.bind(this)} />
          <input type='password' className='name-input' value={this.state.password} onChange={this.handlePassword.bind(this)} />
          <button className='btn' >Sign Up</button>
          {usernameTaken}
        </form>
      </div>
    );  
  }
}
