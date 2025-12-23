import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} style={{backgroundColor: props.mode === 'dark' ? props.themeColor : '#f8f9fa',transition: 'background-color 0.3s ease'}}>
      <div className="container-fluid">
        <Link className="navbar-brand"  to="/" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.title}</Link>

        <button  className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"><span className="navbar-toggler-icon"></span></button>
          

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          
          
          <div className="d-flex">
            <div  className=" rounded mx-2"  style={{ height: '25px', width: '25px', cursor: 'pointer',backgroundColor: 'purple' }}  onClick={() => props.changeThemeColor('purple')} title="Purple"></div>
            <div className=" rounded mx-2" style={{ height: '25px', width: '25px', cursor: 'pointer',backgroundColor: 'darkblue' }} onClick={() => props.changeThemeColor('darkblue')} ></div>
            <div className=" rounded mx-2" style={{ height: '25px', width: '25px', cursor: 'pointer',backgroundColor: 'darkcyan' }} onClick={() => props.changeThemeColor('darkcyan')}></div>
            <div className="bg-dark rounded mx-2" style={{ height: '25px', width: '25px', cursor: 'pointer', backgroundColor: 'purple'}} onClick={() => props.changeThemeColor('#212529')}></div>
          </div>

          {/* 🌙 DARK MODE SWITCH */}
          <div className="form-check form-switch mx-3">
            <input  className="form-check-input"  type="checkbox" onChange={props.toggleMode} checked={props.mode === 'dark'}/>
            <label className="form-check-label" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}> Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ✅ Default Props
Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'about text here',
};

// ✅ PropTypes (optional – enable if needed)

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

