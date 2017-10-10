import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddButton from './AddButton';

import './Header.css';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li className="btn btn-oauth">
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return [
          <li key="1" className="btn btn-assets">
            <AddButton />
          </li>,
          <li key="2" className="btn btn-logout">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <div className="header">
        <Link to={this.props.auth ? '/dashboard' : '/'}>
          <h1 className="white-text">Blockchain Portfolio</h1>
        </Link>
        <ul>{this.renderContent()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
