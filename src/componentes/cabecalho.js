import React from 'react'
import logo from '../logo.png';
import {Link} from 'react-router-dom'

const Cabecalho = props => {
   return (
    <div>
        <nav className='menu navbar-default navbar-fixed-top'>
                <div className='container'>
                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                        <img src={logo} className="App-logo" alt="logo"  href='http://www.keyrus.com.br/'/>
                    </div>
                    <div className='collapse navbar-collapse' id='myNavbar'>
                        <ul className='nav navbar-nav navbar-right'>
                            <li><Link to='/'>Inicio</Link></li>
                            <li><Link to='/servicos'>Serviços</Link></li>
                            <li><a href='#portfolio'>PORTFOLIO</a></li>
                            <li><a href='#pricing'>PRICING</a></li>
                            <li><a href='#contact'>CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='inicio text-center'>
                <h1>KLX</h1>
                <p>Keyrus Learning Experience</p>
                <form>
                    <div className='input-group'>
                        {/* <input type='email' className='form-control' size='50' placeholder='Email Address' required />
                        <div className='input-group-btn'>
                            <button type='button' className='btn btn-danger'>Subscribe</button>
                        </div> */}
                    </div>
                </form>
            </div>

        </div>
   )
}

export default Cabecalho