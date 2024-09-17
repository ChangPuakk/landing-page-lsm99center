import React, { useState, useEffect } from "react";
import Header from "../Pages/Header";
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
import titlelogo from "../Images/new-center/logo.png";
import titlemenu1 from "../Images/new-center/menu1.png";
import titlemenu2 from "../Images/new-center/menu2.png";
import titlemenu3 from "../Images/new-center/menu3.png";

import promotiontitle from "../Images/new-center/bg-tab0.png";
import gamestitle from "../Images/new-center/bg-tab1.png";

import iconBank1 from "../Images/new-center/icon-bank/b1.png";
import iconBank2 from "../Images/new-center/icon-bank/b2.png";
import iconBank3 from "../Images/new-center/icon-bank/b3.png";
import iconBank4 from "../Images/new-center/icon-bank/b4.png";
import iconBank5 from "../Images/new-center/icon-bank/b5.png";
import iconBank6 from "../Images/new-center/icon-bank/b6.png";
import iconBank7 from "../Images/new-center/icon-bank/b7.png";

import iconGames1 from "../Images/new-center/icon-games/s1.png";
import iconGames2 from "../Images/new-center/icon-games/s2.png";
import iconGames3 from "../Images/new-center/icon-games/s3.png";
import iconGames4 from "../Images/new-center/icon-games/s4.png";
import iconGames5 from "../Images/new-center/icon-games/s5.png";
import iconGames6 from "../Images/new-center/icon-games/s6.png";
import iconGames7 from "../Images/new-center/icon-games/s7.png";
import iconGames8 from "../Images/new-center/icon-games/s8.png";

import iconGamec1 from "../Images/new-center/icon-games/c1.png";
import iconGamec2 from "../Images/new-center/icon-games/c2.png";
import iconGamec3 from "../Images/new-center/icon-games/c3.png";
import iconGamec4 from "../Images/new-center/icon-games/c4.png";
import iconGamec5 from "../Images/new-center/icon-games/c5.png";
import iconGamec6 from "../Images/new-center/icon-games/c6.png";
import iconGamec7 from "../Images/new-center/icon-games/c7.png";
import iconGamec8 from "../Images/new-center/icon-games/c8.png";

import iconGamesp1 from "../Images/new-center/icon-games/sp1.png";
import iconGamesp2 from "../Images/new-center/icon-games/sp2.png";
import iconGamesp3 from "../Images/new-center/icon-games/sp3.png";
import iconGamesp4 from "../Images/new-center/icon-games/sp4.png";
import iconGamesp5 from "../Images/new-center/icon-games/sp5.png";

import iconGamel1 from "../Images/new-center/icon-games/l1.png";
import iconGamel2 from "../Images/new-center/icon-games/l2.png";
import iconGamel3 from "../Images/new-center/icon-games/l3.png";

import question from "../Images/new-center/banner-logo2.png";

export default function Home() {
  const [linkLogin, setLinkLogin] = useState("https://lsm99center.l3t.lsmplay.com");

  const [selectedCategory, setSelectedCategory] = useState('slot');
  const [displayedGames, setDisplayedGames] = useState([]);
  const gameCategories = ['slot', 'lotto', 'casino', 'sport'];

  const gameImages = {
    slot: [iconGames1, iconGames2, iconGames3, iconGames4, iconGames5, iconGames6, iconGames7, iconGames8],
    lotto: [iconGamel1, iconGamel2, iconGamel3],
    casino: [iconGamec1, iconGamec2, iconGamec3, iconGamec4, iconGamec5, iconGamec6, iconGamec7, iconGamec8],
    sport: [iconGamesp1, iconGamesp2, iconGamesp3, iconGamesp4, iconGamesp5],
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
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div>
        <div className="header-section"></div>
        <div className="center-container">
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
                    rewind: true,
                    gap: "10px",
                    type: "loop",
                    autoplay: true,
                    interval: 3000,
                    arrows: false,
                    pauseOnHover: true,
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
          <div className="footer-section">
          <div>
            <div className="footerlogo">
              <img src={titlelogo} alt="logo" />
            </div>
            <div className="footer-text">
              <span>
                LSM99CENTER ศูนย์รวมเว็บพนันออนไลน์ทุกชนิด ฝาก-ถอนด้วยระบบออโต้ทำรายการไม่กี่วินาที พร้อมรูปแบบการเล่นง่าย สมัครง่ายในไม่กี่ขั้นตอน
                บริการด้วยระบบออนไลน์มาตรฐานสากล เท่าไหร่ก็จ่าย
              </span>
            </div>
            <div className="icon-bank">
              <img src={iconBank1} alt="icon-bank" />
              <img src={iconBank2} alt="icon-bank" />
              <img src={iconBank3} alt="icon-bank" />
              <img src={iconBank4} alt="icon-bank" />
              <img src={iconBank5} alt="icon-bank" />
              <img src={iconBank6} alt="icon-bank" />
              <img src={iconBank7} alt="icon-bank" />
            </div>
          </div>
          </div>
        </div>

      </div>
    </>
  );
}