/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../Pages/Header";
import Games from "../Pages/Games";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import BannerPro1 from "../Images/Promotion/Banner1.png";
import BannerPro2 from "../Images/Promotion/Banner2.png";
import BannerPro3 from "../Images/Promotion/Banner3.png";
import BannerPro4 from "../Images/Promotion/Banner4.png";
import BannerPro5 from "../Images/Promotion/Banner5.png";
import BannerPro6 from "../Images/Promotion/Banner6.png";

import icongoubgames from "../Images/Mb/ImgMb12.png";

import iconslot from "../Images/Mb/ImgMb14.png";
import iconallgame from "../Images/Mb/ImgMb15.png";
import iconsport from "../Images/Mb/ImgMb16.png";
import iconcasino from "../Images/Mb/ImgMb18.png";
import iconloto from "../Images/Mb/ImgMb19.png";

import icongamehot from "../Images/Mb/ImgMb13.png";
import game1 from "../Images/Center/game1.png";
import game2 from "../Images/Center/game2.png";
import game3 from "../Images/Center/game3.png";
import game4 from "../Images/Center/game4.png";
import game5 from "../Images/Center/game5.png";
import game6 from "../Images/Center/game6.png";
import game7 from "../Images/Center/game7.png";

import Bgtextshow from "../Images/Mb/ImgMb28.png";
import closetextshow from "../Images/Mb/ImgMb27.png";
import iconline from "../Images/Mb/ImgMb3.png";


export default function Home() {
  const [closeMarquee, setCloseMarquee] = useState(true);
  const [linkLogin, setLinkLogin] = useState("https://game.lsm99king.bet");
  return (
    <>
      <div>
        <Header />
        <div className="home">
          <div className="home--Pc">
            <div className="home--section--Pc">
              <div className="home--center--Pc">
                <div className="home--banner--Pc">
                  <Splide
                    className="slide"
                    options={{
                      rewind: false,
                      gap: "10px",
                      type: "loop",
                      autoplay: true,
                      arrows: false,
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
                <div className="home--games--Pc">
                <a href={linkLogin}><img
                    src={icongoubgames}
                    alt=""
                    className="icon--goubgames--Pc"
                  ></img></a>
                  <div className="home--icon--game--Pc">
                    <div>
                    <a href={linkLogin}><img
                        src={iconslot}
                        alt=""
                        className="icon--game--Pc"
                      ></img></a>
                      <a href={linkLogin}><img
                        src={iconsport}
                        alt=""
                        className="icon--game--2Pc"
                      ></img></a>
                    </div>
                    <a href={linkLogin}><img
                      src={iconallgame}
                      alt=""
                      className="icon--gameall--Pc"
                    ></img></a>
                    <div>
                    <a href={linkLogin}><img
                        src={iconcasino}
                        alt=""
                        className="icon--game--Pc"
                      ></img></a>
                      <a href={linkLogin}><img
                        src={iconloto}
                        alt=""
                        className="icon--game--2Pc"
                      ></img></a>
                    </div>
                  </div>
                </div>               
              </div>
              <div className="home--footter--Pc">
                <div className="icon--text--pc">
                  <a href={linkLogin}><img src={icongamehot} alt="" className="icon--gamehot--Pc"></img></a>
                </div>
                <div className="icon--gameall--pc">
                  <a href={linkLogin}><img src={game1} alt="" className="games--Pc"></img></a>
                  <a href={linkLogin}><img src={game2} alt="" className="games--Pc"></img></a>
                  <a href={linkLogin}><img src={game3} alt="" className="games--Pc"></img></a>
                  <a href={linkLogin}><img src={game4} alt="" className="games--Pc"></img></a>
                  <a href={linkLogin}><img src={game5} alt="" className="games--Pc"></img></a>
                  <a href={linkLogin}><img src={game6} alt="" className="games--Pc"></img></a>
                  <a href={linkLogin}><img src={game7} alt="" className="games--Pc"></img></a>
                </div>
              </div>

            </div>
          </div>
          <div className="home--Mb">
            <div className="home--section--Mb">
            {closeMarquee === true ? (
                <>
                <div className="text--show--Mb">
                  <img src={Bgtextshow} alt="" className="Bgtext--show--Mb"></img>
                  <img src={closetextshow} alt="" className="closetext--show--Mb"onClick={() => setCloseMarquee(false)} ></img>
                  <div className="text--tab--mb">
                    <marquee scrollamount="6">
                    เมื่ออยากหาอะไรสนุกๆเล่นแก้เบื่อ ให้นึกถึงเรา LSM99CENTER เว็บพนันออนไลน์ที่มีทั้งเกมส์ กีฬา คาสิโน หวย พร้อมด้วยโปรโมชั่นที่รองรับการเล่นของสมาชิกทุกชนิด บริการรวดเร็วทันใจด้วยระบบ Auto แอดมินบริการ 24 ชั่วโมง ติดปัญหาส่วนใดเเจ้งน้องแอดมินได้ตลอดเลยนะคะ
                    </marquee>
                  </div>
                  </div>
                </>
              ) : null}
                <div className="banner--box--Mb">
                <div className="home--banner--Mb">
                  <Splide
                      className="slide"
                      options={{
                        rewind: false,
                        gap: "10px",
                        type: "loop",
                        autoplay: true,
                        arrows: false,
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
                </div>
                <div className="home--line--Mb">
                <a href={linkLogin}><img src={iconline} alt="" className="line--Mb"></img></a>
              </div>
              <div className="home--games--Mb">
              <a href={linkLogin}><img src={icongoubgames} alt="" className="homegames--Mb"></img></a>
              </div>
              <div className="icon--games--Mb">
                <div> 
                <a href={linkLogin}><img src={iconslot} alt="" className="icon--game--Mb"></img></a>
                <a href={linkLogin}><img src={iconsport} alt="" className="icon--game--2Mb"></img></a>
                </div>
                <a href={linkLogin}><img src={iconallgame} alt="" className="icon--gameall--Mb"></img></a>
                <div>
                <a href={linkLogin}><img src={iconcasino} alt="" className="icon--game--Mb"></img></a>
                <a href={linkLogin}><img src={iconloto} alt="" className="icon--game--2Mb"></img></a>
                </div>
              </div>
              <div className="home--gameall--Mb">
              <a href={linkLogin}><img src={icongamehot} alt="" className="gameall--Mb"></img></a>
              </div>    
              <div className="icon--gameall--Mb">
              <a href={linkLogin}><img src={game1} alt="" className="games--Mb"></img></a>
              <a href={linkLogin}><img src={game2} alt="" className="games--Mb"></img></a>
              <a href={linkLogin}><img src={game3} alt="" className="games--Mb"></img></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
