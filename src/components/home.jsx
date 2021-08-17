import React from 'react';
import '../assets/home.css';
import Main_img from'../assets/img/main_img.jpeg'
import Iam from '../assets/img/Iam.jpeg';
import Instagram from '../assets/img/Instagram_icon.png';
import Facebook from '../assets/img/facebook_icon.png';
import Strengths_1 from '../assets/img/strengths_1.jpg';
import Strengths_2 from '../assets/img/strengths_2.jpg';

function home() {
    return (
  <div className="main">
      <section id="home">
      <span role="img" aria-label="home">
      <div className="home">
      <div className="text_area">
          <p>Mana Takahashi</p>
      </div>
          <img className="main_img" src={Main_img} alt="" />
      </div>
      </span>
    </section>

    <section id="about">
      <span role="img" aria-label="about">
      <div class='heading'>
           <h3>About</h3>
           </div>
           <div className='profile'>
               <img className='iam-img' src={Iam} alt=""/>
           <div className='info'>
           <p>高橋 真菜</p>
           <p>宮城県出身</p>
           <p>1999年3月1日生まれ</p>
           <p>東北工業大学ライフデザイン学部産業デザイン学科　卒業</p>
           </div>
           <img className='icon' src={Instagram} alt=""/>
           <img className='icon' src={Facebook} alt=""/>
           </div>
    </span>
    </section>
 
    <section id="strengths">
      <span role="img" aria-label="strengths">
           <div className='heading'>
               <h3>Strengths</h3>
           </div>
 
           <div className='strengths'>
           <img className='strengths_img' src={Strengths_1} alt=""/>
           <div className='section1'>
               <div className="title">
               <p>何事も最後まで</p>
               <p>諦めずにやり遂げる</p>
               </div>
               <div className='text'>
               <p>1度やると決めたことは、決して諦めません。やめたら負けだと感じてしまうので負けず嫌いでもあります。</p>
               </div>
           </div>
           </div>
 
           <div className='strengths'>
           <img className='strengths_img' src={Strengths_2} alt=""/>
           <div className='section2'>
               <div className="title">
               <p>計画を立てて行動する</p>
               </div>
               <div className='text'>
               <p>「これが終わったら、次はあれをする」と順序を決めてます。書き出すこともしますが、常に頭の中で考えながら行動することで無駄な時間が無くなり効率的に時間を使えます。</p>
               </div>
           </div>
           </div>
           </span>
    </section>

    <section id="skills">
      <span role="img" aria-label="skills">
           <div class='heading'>
           <h3>Skills</h3>
           </div>
           <div className='skills'>
             <p className='skills_title1'>免許・資格</p>
               <p>普通自動車第一種運転免許</p>
             <p className='skills_title2'>パソコンスキル</p>
               <div className='unit1'>
               <p>Office系ソフト</p>
               <p>Word / Excel / PowerPoint</p>
               </div>
               <div className='unit2'>
               <p>Adobe</p>
               <p>Illustrator / Photoshop / XD</p>
               <p>After Effects / Premiere Pro</p>
               </div>
               <div className='unit2'>
               <p>Visual Studio Code / Brackets</p>
               <p>Sonic Pi / Processing</p>
               <p>Cinema4D / Fusion360 </p>
               </div>
       </div>
       </span>
      </section>

        <div className="footer">
        <p>&#169;2021 MANA TAKAHASHI</p>
          </div>
      </div>

    );
  }

export default home;