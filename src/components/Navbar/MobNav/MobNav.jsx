import React, { useContext } from 'react';
import './MobNav.css'
import { useState } from 'react'
import { langContext, langfContext } from '../../../App';

const MobNav = () => {
    const lang = useContext(langContext)
    const langf = useContext(langfContext)
    const [menuOpen, setMenuOpen] = useState(0);

    return (
        <>
            <div className='nav-m'>
            <select className='lang' name="language" id="lang">
                    <option  >persian</option>
                    <option value="volvo">english</option>
                </select>
                {/* <Link to='/'><img className='nav-m-logo' src="assets/logo s.png" alt="nav-m-logo" /></Link> */}
                <div className='nav-m-sandwich' onClick={() => { menuOpen ? setMenuOpen(0) : setMenuOpen(1) }}>
                    {menuOpen ?
                        <>
                            <img className='nav-m-sandwich-icon' src="assets/sd-close.png" alt="" />
                        </>
                        :
                        <>
                            <img className='nav-m-sandwich-icon' src="assets/sd-open.png" alt="" />
                        </>}
                </div>
            </div>
            <div className={menuOpen ? "nav-m-box" : "nav-m-box hide"} id='nav-m-box'>
                <ul className="nav-m-menu" >
                <li className="nav-m-menu-item">بیوگرافی</li>
                <li className="nav-m-menu-item">تحصیلات</li>
                <li className="nav-m-menu-item">علاقه مندی ها</li>
                <li className="nav-m-menu-item">فعالیت های پژوهشی</li>
                <li className="nav-m-menu-item">فعالیت های اجرایی آموزشی</li>
                <li className="nav-m-menu-item">تماس با ما</li>
                <li className="nav-m-menu-item">بخش دانشجویی</li>
                <li className="nav-m-menu-item">دوره ها</li>
                </ul>
            </div>
        </>
    );
}

export default MobNav;
