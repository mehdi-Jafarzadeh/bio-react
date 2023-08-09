import './Navbar.css';

const Navbar = () => {
    return (
        <div className='nav'>

            <ul className="nav-ul">

                <select className='lang' name="language" id="lang">
                    <option value="volvo">persian</option>
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
