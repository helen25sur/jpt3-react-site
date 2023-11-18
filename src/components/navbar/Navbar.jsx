import { useState } from 'react';
import './navbar.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = () => {
 return (
   <>
    <a href="#home">Home</a>
    <a href="#wgpt3">What is GPT?</a>
    <a href="#possibility">Open AI</a>
    <a href="#feature">Case Studies</a>
    <a href="#blog">Library</a>
   </>)
}


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>

        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <button className='btn transparent-btn' type='button'><span>Sign in</span></button>
        <button className='btn solid-btn' type='button'><span>Sign up</span></button>
      </div>

      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />}

        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
           <div className='gpt3__navbar-menu_container-links'>
            <Menu/>
            <div className='gpt3__navbar-menu_container-links-sign'>
              <button className='btn transparent-btn' type='button'><span>Sign in</span></button>
              <button className='btn solid-btn' type='button'><span>Sign up</span></button>
            </div>
          </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Navbar;