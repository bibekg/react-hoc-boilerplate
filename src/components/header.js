import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Header extends React.Component {

  authButton() {
    const buttonText = this.props.authenticated ? 'Sign Out' : 'Sign In'
    return (
      <button onClick={() => this.props.authenticate(!this.props.authenticated)}>
        {buttonText}
      </button>
    )
  }

  render() {
    return (
      <nav className='navbar navbar-light'>
        <ul className='nav navbar-nav'>
          <li className='nav-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/resources'>Resources</Link>
          </li>
          <li className='nav-item'>
            {this.authButton()}
          </li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.authenticated
})

export default connect(mapStateToProps, actions)(Header)
