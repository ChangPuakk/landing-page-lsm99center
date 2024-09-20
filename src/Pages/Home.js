import React, { useState, useEffect } from "react";
import Header from "../Pages/Header";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

// รวม import รูปภาพทั้งหมดที่ใช้
import BannerPro1 from "../Images/new-center/Promotion/Pro1.png";
import BannerPro2 from "../Images/new-center/Promotion/Pro2.png";
import BannerPro3 from "../Images/new-center/Promotion/Pro3.png";
import BannerPro4 from "../Images/new-center/Promotion/Pro4.png";

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

import textbg from "../Images/new-center/bg-text02.png";

export default function Home() {
  const [linkLogin, setLinkLogin] = useState("https://lsm99center.l3t.lsmplay.com");

  const [selectedCategory, setSelectedCategory] = useState("slot");
  const [displayedGames, setDisplayedGames] = useState([]);
  const gameCategories = ["slot", "lotto", "casino", "sport"];

  const [currentBanner, setCurrentBanner] = useState(0);

  const gameImages = {
    slot: [iconGames1, iconGames2, iconGames3, iconGames4, iconGames5, iconGames6, iconGames7, iconGames8],
    lotto: [iconGamel1, iconGamel2, iconGamel3],
    casino: [iconGamec1, iconGamec2, iconGamec3, iconGamec4, iconGamec5, iconGamec6, iconGamec7, iconGamec8],
    sport: [iconGamesp1, iconGamesp2, iconGamesp3, iconGamesp4, iconGamesp5],
  };

  // Resize effect to control displayed games
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1100) {
        setDisplayedGames(gameImages[selectedCategory].slice(0, 6));
      } else {
        setDisplayedGames(gameImages[selectedCategory]);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [selectedCategory]);

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

  const promotionTexts = [
    {
      title: (
        <>
          บอลสเต็ป ถูกหรือผิดติดต่อกัน 5-9 คู่บอลสเต็ป<br />
          - ถูกเต็มทั้งหมด 5-9 คู่ หรือผิดเต็มทั้งหมด 5-9 คู่<br />
          - รับโบนัส 10 เท่าของยอดแทง จ่ายสูงสุด 3,999 บาท <br />
          - บิลขั้นต่ำ 10 บาทขึ้นไป
        </>
      ),
      conditions: [
        <span>เงื่อนไข</span>,
        "- บอลแต่ละคู่ต้องมีค่าน้ำ 1.75 - 2.35 เท่านั้น",
        "- บอล นับเฉพาะเต็มเวลา (HDP) ไม่รวมการเล่น 1x2",
        "- สามารถแทงสลับคู่ต่อบิลได้ไม่เกิน 4 บิล",
        "- โปรโมชั่นประเภทกีฬาทั้งหมด ***สามารถแจ้งรับได้แค่ 1 โปรเท่านั้น",
        "- แจ้งรับได้ภายใน 24 ชั่วโมง (โดยยึดวันที่ วันต่อวัน ตามรอบบิลในประวัติการแทงนะคะ",
        <span>**รับได้เฉพาะ กีฬา SPORT LSM และ กีฬา SBOBET</span>
      ]
    },
    {
      title: (
        <>
          ทายหวยง่าย ๆ เพียง แคปหน้าจอประวัติยอดเงินรวมการซื้อหวยส่งให้ทางแอดมิน <br />
          - ทายถูก 3 ตัวบน รับ ทองคำหนัก 1 บาท<br />
          - ทายถูก 2 ตัวล่าง รับ ทองคำหนัก 1 สลึง<br />
        </>
      ),
      conditions: [
        <span>เงื่อนไขโปรโมชั่น</span>,
        "- บิลการเล่นหวยทุกชนิดสามารถลุ้นรับได้ เพียงเเค่มีการแทงหวย 2,000 บาทขึ้นไป",
        "- สามารถทายได้ก่อนวันหวยออก 3 วัน",
        "- 1 สิทธิ์ สามารถเลือกทายได้แค่ 1 อย่าง (ทาย 3 ตัวบน หรือ 2 ตัวล่าง) (ให้เลือกทายหวย 3 ตัวบน หรือ 2 ตัวล่าง อย่างใดอย่างหนึ่งเท่านั้น)",
        "- ต้องเป็นบิลที่ไม่สามารถยกเลิกได้",
        "- หากเลขนั้นๆมีผู้ทายก่อนแล้ว จะไม่สามารถทายซ้ำได้",
      ]
    },
    {
      title: "โบนัสสล็อตแตก 0 บาท (ซื้อฟีเจอร์คืนทุน 100%)",
      conditions: [
        "หลังจากจบการหมุนฟีเจอร์ครบแล้วยอดรวมเป็น 0 บาท รับโบนัสคืนทุนทันที 150 บาท",
        "(หากชื่อซ้ำ หรือ IP ซ้ำกันทางเว็บจะตัดสิทธิ์ในการรับโบนัสทันที)",
        <span>ทางเว็บ ขอสงวนสิทธิ์ในการตัดสินใจเพียงผู้เดียว หากมีสิ่งที่นอกเหนือจากนี้ คำตัดสินของทางเว็บจะถือเป็นข้อสิ้นสุดค่ะ</span>
      ]
    },
    {
      title: (
        <>
          เดิมพันคาสิโน บิล 100 บาทขึ้นไป ลุ้นรับโบนัสสูงสุด 100,000 บาท <br />
          - ถูก หรือ ผิด ติดต่อกัน 9 ตา รับเพิ่ม 5 เท่า สูงสุดถึง 5,000 บาท<br />
          - ถูก หรือ ผิด ติดต่อกัน 10 ตา รับเพิ่ม 10 เท่า สูงสุดถึง 10,000 บาท<br />
          - ถูก หรือ ผิด ติดต่อกัน 11 ตา รับเพิ่ม 15 เท่า สูงสุดถึง 20,000 บาท<br />
          - ถูก หรือ ผิด ติดต่อกัน 13 ตา รับเพิ่ม 20 เท่า สูงสุดถึง 50,000 บาท<br />
          - ถูก หรือ ผิด ติดต่อกัน 15 ตา รับเพิ่ม 30 เท่า สูงสุดถึง 100,000 บาท<br />
          - ถูก หรือ ผิด ติดต่อกัน 20 ตา รับทันที 100,000 บาท<br />
          - ยอดเดิมพันต่อบิล 100 บาทขึ้นไป
        </>
      ),
      conditions: [
        <span>ตัวอย่าง</span>,
        "หากลูกค้าเดิมพันใน 15 ตา และชนะติดต่อกัน จะนับโบนัสจากยอดเดิมพัน ที่ต่ำสุด ",
        "เช่น ตาที่ต่ำสุดคือ เดิมพัน Player 3,000 บาท หากเข้าตามเงื่อนไข",
        "ยอดโบนัสที่ลูกค้าจะได้รับเพิ่มคือ 3,000X30 เท่ากับ 90,000 บาท",
      ]
    },
  ];

  const handleMove = (splide, newIndex) => {
    setCurrentBanner(newIndex);
  };

  return (
    <>
      <div>
        <div className="header-section">
          <Header />
        </div>
        <div className="center-container">
          <div className="title-section">
            <div className="title-box">
              <div className="title-text">
                {/* <div className="title-logo">
                  <img src={titlelogo} alt="logo" />
                </div> */}
                <h1>“ก้าวสู่โลกแห่งการเดิมพันที่ดีที่สุดกับ”</h1>
                <span>LSM99CENTER</span>
                <p>ยินดีต้อนรับสู่โลกแห่งการเดิมพันออนไลน์ที่เหนือกว่ากับ LSM99CENTER<br /> ที่นี่คือจุดหมายปลายทางสำหรับนักเดิมพันที่ต้องการสัมผัสประสบการณ์สุดพิเศษและคุ้มค่าอย่างแท้จริงเราเข้าใจว่าคุณต้องการไม่เพียงแค่ความสนุกและความบันเทิงแต่ยังต้องการแพลตฟอร์มที่ปลอดภัย รวดเร็ว และน่าเชื่อถือ นั่นคือสิ่งที่เราพร้อมมอบให้คุณ ที่หาไม่ได้จากที่อื่น!</p>
              </div>
              <div className="title-banner">
                <img src={titlebanner} alt="banner" />
              </div>
            </div>
            <div className="title-menu" id="scrollableDiv">
              <img src={titlemenu1} alt="menu" />
              <img src={titlemenu2} alt="menu" />
              <img src={titlemenu3} alt="menu" />
            </div>
            <Splide
              className="custom-slider"
              options={{
                rewind: true,
                gap: "10px",
                type: "loop",
                autoplay: true,
                interval: 3000,
                arrows: false,
                pauseOnHover: false,
                perPage: 1,
                focus: 'center',
                padding: {
                  left: '20%',
                  right: '20%'
                }
              }}
            >
              <SplideSlide className="custom-slider">
                <img src={titlemenu1} alt="" className="w-100" />
              </SplideSlide>
              <SplideSlide className="custom-slider">
                <img src={titlemenu2} alt="" className="w-100" />
              </SplideSlide>
              <SplideSlide className="custom-slider">
                <img src={titlemenu3} alt="" className="w-100" />
              </SplideSlide>
            </Splide>


          </div>
          <div className="promotion-section">
            <div className="promotion-title">
              <img src={promotiontitle} alt="promotion" />
            </div>
            <div className="promotion-box">
              <div className="promotion-banner">
                <Splide
                  className="slide_promotion"
                  options={{
                    rewind: true,
                    gap: "10px",
                    type: "loop",
                    autoplay: true,
                    interval: 3000,
                    arrows: false,
                    pauseOnHover: false,
                  }}
                  onMove={handleMove}
                >
                  <SplideSlide className="slide_promotion">
                    <img src={BannerPro1} alt="" className="w-100" />
                  </SplideSlide>
                  <SplideSlide className="slide_promotion">
                    <img src={BannerPro2} alt="" className="w-100" />
                  </SplideSlide>
                  <SplideSlide className="slide_promotion">
                    <img src={BannerPro3} alt="" className="w-100" />
                  </SplideSlide>
                  <SplideSlide className="slide_promotion">
                    <img src={BannerPro4} alt="" className="w-100" />
                  </SplideSlide>
                </Splide>
              </div>
              <div className="promotion-text">
                <div className="promotion-text-box">
                  <p>{promotionTexts[currentBanner].title}</p>
                  <p>
                    {promotionTexts[currentBanner].conditions.map((condition, index) => (
                      <React.Fragment key={index}>
                        {condition}<br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>
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
                  <a href={linkLogin} key={index}>
                    <div className="icon-games">
                      <img src={image} alt={selectedCategory} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="question-section">
            <div className="group-question">
              <div className="question-text-bg">
                <img src={textbg} alt="logo" />
              </div>
              <div className="question-text">
                <p>
                  ทำไมคุณควรตัดสินใจเลือกเรา ?<br /><br />

                  ประสบการณ์การเดิมพันที่หลากหลายและน่าตื่นเต้นไม่ว่าคุณจะชอบเดิมพันกีฬา
                  คาสิโน สล็อต หรือเกมต่างๆแพลตฟอร์มของเรามีทุกสิ่งที่คุณต้องการ เรามีพันธมิตรกับผู้ให้บริการเกมชั้นนำระดับโลกทำให้คุณมั่นใจได้ว่าคุณจะได้รับ
                  ประสบการณ์การเล่นที่ลื่นไหล ภาพกราฟิกสวยงาม และฟีเจอร์พิเศษต่างๆ ที่จะทำให้คุณตื่นเต้นทุกครั้งที่เข้าสู่ระบบ
                </p>
              </div>
            </div>
            <div className="question-banner">
              <img src={question} alt="banner" />
            </div>
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
    </>
  );
}