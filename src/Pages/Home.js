import React, { useState, useEffect } from "react";
import Header from "../Pages/Header";
import Games from "../Pages/Games";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

// รวม import รูปภาพทั้งหมดที่ใช้
import BannerPro1 from "../Images/Promotion/Banner1.png";
import BannerPro2 from "../Images/Promotion/Banner2.png";
import BannerPro3 from "../Images/Promotion/Banner3.png";
import BannerPro4 from "../Images/Promotion/Banner4.png";
import BannerPro5 from "../Images/Promotion/Banner5.png";
import BannerPro6 from "../Images/Promotion/Banner6.png";

import titlebanner from "../Images/new-center/banner-logo.png";
import titlelogo from "../Images/new-center/logo.svg";
import titlemenu1 from "../Images/new-center/menu1.svg";
import titlemenu2 from "../Images/new-center/menu2.svg";
import titlemenu3 from "../Images/new-center/menu3.svg";

import promotiontitle from "../Images/new-center/bg-tab0.png";
import gamestitle from "../Images/new-center/bg-tab1.png";

import iconGame1 from "../Images/new-center/icon-games/game1.svg";
import iconGame2 from "../Images/new-center/icon-games/game2.svg";
import iconGame3 from "../Images/new-center/icon-games/game3.svg";
import iconGame4 from "../Images/new-center/icon-games/game4.svg";
import iconGame5 from "../Images/new-center/icon-games/game5.svg";
import iconGame6 from "../Images/new-center/icon-games/game6.svg";
import iconGame7 from "../Images/new-center/icon-games/game7.svg";
import iconGame8 from "../Images/new-center/icon-games/game8.svg";

import question from "../Images/new-center/banner-logo2.png";

export default function Home() {
  const [linkLogin, setLinkLogin] = useState("https://lsm99center.l3t.lsmplay.com");

  const [selectedCategory, setSelectedCategory] = useState('slot');
  const [displayedGames, setDisplayedGames] = useState([]);
  const gameCategories = ['slot', 'lotto', 'casino', 'sport'];

  const gameImages = {
    slot: [iconGame1, iconGame2, iconGame6, iconGame4, iconGame3, iconGame5, iconGame8, iconGame7],
    lotto: [iconGame2, iconGame2, iconGame2, iconGame2, iconGame2, iconGame2, iconGame2, iconGame2],
    casino: [iconGame7, iconGame7, iconGame7, iconGame7, iconGame7, iconGame7, iconGame7, iconGame7],
    sport: [iconGame4, iconGame4, iconGame4, iconGame4, iconGame4, iconGame4, iconGame4, iconGame4],
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1100) {
        setDisplayedGames(gameImages[selectedCategory].slice(0, 6));
      } else {
        setDisplayedGames(gameImages[selectedCategory]);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [selectedCategory, gameImages]);

  // Auto switch categories
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedCategory((prevCategory) => {
        const currentIndex = gameCategories.indexOf(prevCategory);
        const nextIndex = (currentIndex + 1) % gameCategories.length;
        return gameCategories[nextIndex];
      });
    }, 5000); // สลับหมวดหมู่ทุก 5 วินาที

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div>
        <div className="center-container">
          <div className="header-section"></div>
          <div className="title-section">
            <div className="title-box">
              <div className="title-text">
                <div className="title-logo">
                  <img src={titlelogo} alt="logo" />
                </div>
                <h1>“ก้าวสู่โลกแห่งการเดิมพันที่ดีที่สุดกับ”</h1>
                <span>LSM99CENTER</span>
                <p>ยินดีต้อนรับสู่โลกแห่งการเดิมพันออนไลน์ที่เหนือกว่ากับ LSM99CENTER<br/> ที่นี่คือจุดหมายปลายทางสำหรับนักเดิมพันที่ต้องการสัมผัสประสบการณ์สุดพิเศษและคุ้มค่าอย่างแท้จริงเราเข้าใจว่าคุณต้องการไม่เพียงแค่ความสนุกและความบันเทิงแต่ยังต้องการแพลตฟอร์มที่ปลอดภัย รวดเร็ว และน่าเชื่อถือ นั่นคือสิ่งที่เราพร้อมมอบให้คุณ ที่หาไม่ได้จากที่อื่น!</p>
              </div>
              <div className="title-banner">
                <img src={titlebanner} alt="banner" />
              </div>
            </div>
            <div className="title-menu">
              <img src={titlemenu1} alt="menu" />
              <img src={titlemenu2} alt="menu" />
              <img src={titlemenu3} alt="menu" />
            </div>
          </div>
          <div className="promotion-section">
            <div className="promotion-title">
              <img src={promotiontitle} alt="promotion" />
            </div>
            <div className="promotion-box">
              <div className="promotion-banner">
                <Splide
                  className="slide"
                  options={{
                    rewind: true, // ให้กลับไปที่สไลด์แรกเมื่อจบ
                    gap: "10px", // ระยะห่างระหว่างสไลด์
                    type: "loop", // ให้สไลด์วนไปเรื่อยๆ
                    autoplay: true, // เปิดการ autoplay
                    interval: 3000, // ตั้งเวลาในการเปลี่ยนสไลด์ (หน่วยเป็น ms)
                    arrows: false, // ซ่อนลูกศร
                    pauseOnHover: true, // หยุด autoplay เมื่อเมาส์เลื่อนมาที่สไลด์
                  }}
                >
                  <SplideSlide>
                    <a href={linkLogin}>
                      <img src={BannerPro1} alt="" className="w-100" />
                    </a>
                  </SplideSlide>
                  <SplideSlide>
                    <a href={linkLogin}>
                      <img src={BannerPro2} alt="" className="w-100" />
                    </a>
                  </SplideSlide>
                  <SplideSlide>
                    <a href={linkLogin}>
                      <img src={BannerPro3} alt="" className="w-100" />
                    </a>
                  </SplideSlide>
                  <SplideSlide>
                    <a href={linkLogin}>
                      <img src={BannerPro4} alt="" className="w-100" />
                    </a>
                  </SplideSlide>
                  <SplideSlide>
                    <a href={linkLogin}>
                      <img src={BannerPro5} alt="" className="w-100" />
                    </a>
                  </SplideSlide>
                  <SplideSlide>
                    <a href={linkLogin}>
                      <img src={BannerPro6} alt="" className="w-100" />
                    </a>
                  </SplideSlide>
                </Splide>
              </div>
              <div className="promotion-text">
                <p>
                  มวยเดี่ยว ที่มีการเเทงถูกติดต่อกัน 5 คู่ หรือ เเทงผิดติดต่อกัน 5 คู่ 
                  บอลเดี่ยว ที่มีการเเทงถูกติดต่อกัน 5 คู่ หรือ เเทงผิดติดต่อกัน 5 คู่ 
                  สามารถเเคปบิลเเจ้งแอดมินผ่านไลน์เพื่อรับโบนัสได้ ทันที 1,000 บาท 
                  (บิลขั้นต่ำ 200 บาท ขึ้นไป)
                </p>
                <span>**เงื่อนไข</span>
                <p>
                  - บอลเดี่ยวต้องมีค่าน้ำ 0.75 ขึ้นไป ไม่ต่ำกว่า -0.75 เท่านั้น<br/>
                  - มวยเดี่ยวต้องมีค่าน้ำ 0.60 ขึ้นไป ไม่ต่ำกว่า -0.60 เท่านั้น<br/>
                  - มวยต้องเป็นมวยก่อนชกเท่านั้น ไม่นับรวม สูง/ต่ำ ทั้ง 5 คู่<br/>
                  - กีฬาต้องแทงก่อนการแข่งขัน เต็มเวลาเท่านั้น (HDP) ทั้ง 5 คู่ <br/>
                  - มวย หรือ บอล สามารถรวมกันได้ตามเงื่อนไข หากมี Live เข้ามาคั่น
                </p>
              </div>
            </div>
          </div>
          <div className="games-section">
            <div className="games-title">
              <img src={gamestitle} alt="games" />
            </div>
            <div className="games-box">
              <div className="games-category">
                {gameCategories.map((category) => (
                  <div
                    key={category}
                    className={`category ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    <div className={`category-${category}`}></div>
                    <span>{category === 'slot' ? 'สล็อต' : category === 'lotto' ? 'หวย' : category === 'casino' ? 'คาสิโน' : 'กีฬา'}</span>
                  </div>
                ))}
              </div>

              <div className="games-list">
                  {displayedGames.map((image, index) => (
                    <a href={linkLogin}>
                      <div key={index} className="icon-games">
                        <img src={image} alt={selectedCategory} />
                      </div>
                    </a>
                    ))}
              </div>
            </div>
          </div>
          <div className="question-section">
            <div className="question-text">
              <p>
                ทำไมคุณควรตัดสินใจเลือกเรา ?<br/><br/>

                ประสบการณ์การเดิมพันที่หลากหลายและน่าตื่นเต้นลไม่ว่าคุณจะชอบเดิมพันกีฬา 
                คาสิโนสด สล็อต หรือเกมต่างๆแพลตฟอร์มของเรามีทุกสิ่งที่คุณต้องการ เรามีพันธมิตรกับผู้ให้บริการเกมชั้นนำระดับโลกทำให้คุณมั่นใจได้ว่าคุณจะได้รับ
                ประสบการณ์การเล่นที่ลื่นไหล ภาพกราฟิกสวยงาม และฟีเจอร์พิเศษต่างๆ ที่จะทำให้คุณตื่นเต้นทุกครั้งที่เข้าสู่ระบบ
              </p>
            </div>
            <div className="question-banner">
              <img src={question} alt="banner" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}