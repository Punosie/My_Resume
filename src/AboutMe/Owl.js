import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Python from '../Assets/img/Python.png';
import Reactimg from '../Assets/img/React.png';
import Bootstrap from '../Assets/img/Bootstrap.png';
import CSS from '../Assets/img/Css01.png';
import JS from '../Assets/img/JS.png';
import MySQL from '../Assets/img/MySQL.png';
import Wordpress from '../Assets/img/Wordpress.png';
import C from '../Assets/img/C++.png';
import Matlab from '../Assets/img/Matlab_Logo.png';
import Git from '../Assets/img/Git.png';

function Owl(){
    return(
        <OwlCarousel className='owl-theme py-5 px-3' loop margin={10} nav>
            <div class='item'>
                <img src={Python} alt="Python Logo" className='size' />
            </div>
            <div class='item'>
                <img src={Reactimg} alt="React Logo" className='size' />
            </div>
            <div class='item pt-2'>
                <img src={Bootstrap} alt="Bootstrap Logo" className='size'/>
            </div>
            <div class='item'>
                <img src={CSS} alt="CSS Logo" className='size' />
            </div>
            <div class='item'>
                <img src={JS} alt="JS Logo" className='size' />
            </div>
            <div class='item pt-2'>
            <img src={MySQL} alt="MySQL Logo" className='size' />
            </div>
            <div class='item'>
            <img src={Wordpress} alt="Wordpress Logo" className='size' />
            </div>
            <div class='item'>
            <img src={C} alt="C++ Logo" className='size' />
            </div>
            <div class='item pt-2'>
            <img src={Matlab} alt="Matlab Logo" className='size' />
            </div>
            <div class='item pt-4'>
            <img src={Git} alt="Git Logo" className='size' />
            </div>
        </OwlCarousel>
    )
}


export default Owl;