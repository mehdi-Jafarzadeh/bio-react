import './Navbar.css';
import { langContext, langfContext } from '../../App';
import { useContext } from 'react';


const Navbar = () => {

    
    const lang = useContext(langContext)
    const langf = useContext(langfContext)

    return (
        <div className='nav'>

            <ul className="nav-ul">

                <select className='lang' name="language" id="lang">
                    <option  >persian</option>
                    <option value="volvo">english</option>
                </select>

                <li className="nav-li">بیوگرافی</li>
                <li className="nav-li">تحصیلات</li>
                <li className="nav-li">علاقه مندی ها</li>
                <li className="nav-li">فعالیت های پژوهشی</li>
                <li className="nav-li">فعالیت های اجرایی آموزشی</li>
                <li className="nav-li">تماس با ما</li>
                <li className="nav-li">بخش دانشجویی</li>
                <li className="nav-li">دوره ها</li>

            </ul>

        </div>
    );
}

export default Navbar;
