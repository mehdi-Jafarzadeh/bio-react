import './Landing.css';
import '../../App.css'
import { useContext } from 'react';
import { langContext } from '../../App';


const uni = [
  {

    "title": "کارشناسی پیوسته ریاضی کاربرد در کامپیوتر",
    "uni": "دانشگاه تبریز",
    "loc": "تبریز - ایران",
    "date": "1376"
  },
  {

    "title": "کارشناسی ارشد ناپیوسته مهندسی نرم افزار",
    "uni": "دانشگاه آزاد اسلامی تهران جنوب",
    "loc": "تهران - ایران",
    "date": "1379"
  },
  {

    "title": "دکتری تخصصی مهندسی نرم افزار",
    "uni": "دانشگاه آزاد اسلامی قزوین",
    "loc": "قزوین - ایران",
    "date": "1399"
  }
]

const ability = [
  {"title" : "مدیریت و تحلیل داده"},
  {"title" : "علم داده"},
  {"title" : "مدیریت پروژه بر اساس PMBOK"},
  {"title" : "برنامه نویسی"}
]

const activity = [
  { "title" : "کتب "                 , "icon" : " ./images/icon-book.webp" },
  { "title" : " مقالات مجلات"          , "icon" : " ./images/icon2.png" },
  { "title" : " مقالات کنفرانس ها"   , "icon": " ./images/icon3.png" },
  { "title" : " همایش"               , "icon" : " ./images/icon4.png" },
  { "title" : " سمینار"              , "icon" : " ./images/icon5.png" },
  { "title" : " کارگاه"              , "icon" : " ./images/icon6.png" },
  { "title" : " پایان نامه ها"       , "icon" : " ./images/icon8.png" }
]

const languages = [
  {"title":"انگلیسی"},
  {"title":"فارسی"},
  {"title":"ترکی آذری"},
  {"title":"عربی"}
]

const Landing = () => {

  const lang = useContext(langContext);

  return (
    <>

{/* 
  
      <div className="s1 center">
        <div className="s1-inner">
          <div className="s1-t" >
            <h1>دکتر مسعود کارگر</h1>
            <p>استادیار</p>
            <p className='bio-t'>
              دکتر مسعود کارگر -استادیار گروه کامپیوتر دانشگاه آزاد اسلاما واحد تبریز - ود کارشناسی را در سال
              1376, کارشناسی ارشد مهندسی نرم افزار در سال 1379 و دکترای مهندسی نرم افزار را از دانشگاه آزاد
              اسلامی قزوین درسال 1399 با عنوان رساله "پیمانه بندی سیستم های نرمافزاری چندزبانه " دریافت نمود.
              وی علاوه بر نگارش چندین مقاله در مجلات و کنفرانس های معتبر, مدیر فناوری اطلاعات و ارتباطات
              دانشگاه, مدیر توسعه چندین سیستم نرم افزاری و عضویت در هیئتتحریریه مجله است. و در حال
              حاضر ,بر موضوعات تحقیقاتی هوش مصنوعی, یادگیری ماشینی, یادگیری عمیق, داده کاوی,اینترنت ,
              اشیا و الگوریتم های پیشرفته متمرکز است .
            </p>
            <br /><br />
            <div className="s1-con-btn center">
              <button className='s1-btn'>تماس با ما</button>
            </div>

          </div>
          <div className="s1-con-img">
            <img className='s1-img' src="./images/-f87e955f163466626574685272810943571.webp" alt="" />
          </div>
        </div>
      </div>

      <div className="s2 center">
        <div className="s2-inner">
          <div className="s2-part">
            <h3>
              فعالیت های علمی آموزشی
            </h3>
            <h2>+7</h2>
          </div>
          <div className="s2-part">
            <h3>
              فعالیت های علمی پژوهشی
            </h3>
            <h2>+40</h2>

          </div>
          <div className="s2-part">

            <h3>
              فعالیت های علمی اجرایی
            </h3>
            <h2>+6
            </h2>
          </div>
            

        </div>
        </div>

      <div className="s3 ">

        <div className="s3-top" >
          <hr className='s3-l-t' />
          <h3 className='s3-h' >  تحصیلات   </h3>
          <hr className='s3-l-b' />
        </div>

        <div className="s3-cards-container">
{
uni.map(e => <>

<div className="s3-card">
  <img src="./images/bg8.png" alt="" className="s3-card-img" />
  <div className="s3-card-texts">
  <div className="s3-card-title" >{e.title}</div>
  <div className="s3-card-uni"   >{e.uni}</div>
  <div className="s3-card-loc"   >{e.loc}</div>
  <div className="s3-card-date"  >{e.date}</div>
  </div>
  <img src="./images/bg7.png" alt="" className="s3-card-img" />
</div>


</>)
}



        </div>
      </div>

      <div className="s4">
        <div className="s4-1">
          <img src="./images/bg11.png" alt="" className='s4-1-1'/>
          <br />
          <img src="./images/bg12.png" alt="" className='s4-1-2'/>
        </div>
        <div className="s4-2">
          <img src="./images/bg12.png" alt="" className='s4-2-i'/>
        </div>
        <div className="s4-3">
          
          <h3>موارد پژوهشی مورد علاقه</h3>
 <ul className="s4-3-l">
  <li className="s4-3-l-i">یادگیری عمیق</li>
  <li className="s4-3-l-i">یادگیری ماشین</li>
  <li className="s4-3-l-i">علم داده</li>
  <li className="s4-3-l-i">داده کاود پیشرفته</li>
  <li className="s4-3-l-i">سیستم های نرم افزاری چند زبانه</li>
  <li className="s4-3-l-i">پیمانه بندی سیستم های نرم افزار</li>
 </ul>

        </div>
        <div className="s4-4">
          <img src="./images/bg5.webp" alt="" className='s4-4-i'/>
        </div>
        <div className="s4-5">
          <img src="./images/bg12.png" alt="" className='s4-5-i'/>
        </div>
        <div className="s4-6">
          <img src="./images/bg11.png" alt="" className='s4-1-1'/>

        </div>
      </div>

      <div className="s5">

       
      

      <div className="s5-items">

{ability.map(e => 
<div className="s5-card">
<h4>{e.title}</h4>
<img src="./images/100.jpg" alt="" className='s5-per'/>
</div>
  ) 
}

      </div>


      </div>


      <div className="s6">

        <div className="s3-top s6-top" >
          <hr className='s3-l-t' />
          <h3 className='s3-h' >  فعالیت های عمی پژوهشی   </h3>
          <hr className='s3-l-b' />
        </div>

       <div  className="activity">
        <div className="s6-l"></div>
        <div className="s6-r">
{
  activity.map(e => 
  <div className="s6-card">
    <img className='s6-icon' src={e.icon} alt="" />
    <p>{e.title}</p>
    <pre> {'>'} </pre>
  </div>
  )
}
          
        </div>
       </div>


    </div>
       
    <div className="s7">

<div className="s3-top s7-top" >
          <hr className='s3-l-t' />
          <h3 className='s3-h' >  زبان   </h3>
          <hr className='s3-l-b' />
        </div>

<div className="s7-items">


        {languages.map(e => 
<div className="s5-card">
<h4>{e.title}</h4>
<img src="./images/100.jpg" alt="" className='s5-per'/>
</div>
  ) 
}

  </div>
      </div>

 */}





    </>
  );
}

export default Landing;
