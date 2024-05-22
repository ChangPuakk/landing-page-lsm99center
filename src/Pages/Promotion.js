/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react";
import Header from "../Pages/Header";
import { Row, Col, Tab, Tabs } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Promotion.css";

import BannerPro01 from "../Images/sport/1.jpg";
import BannerPro02 from "../Images/sport/2.png";
import BannerPro03 from "../Images/sport/3.png";
import BannerPro04 from "../Images/sport/4.png";
import BannerPro05 from "../Images/sport/5.png";
import BannerPro06 from "../Images/sport/6.png";
import BannerPro07 from "../Images/sport/7.png";
import BannerPro08 from "../Images/sport/8.png";
import BannerPro09 from "../Images/sport/9.png";
import BannerPro010 from "../Images/sport/10.png";

import BannerPro011 from "../Images/casino/1.png";
import BannerPro012 from "../Images/casino/2.png";
import BannerPro013 from "../Images/casino/3.jpg";
import BannerPro014 from "../Images/casino/4.png";
import BannerPro015 from "../Images/casino/5.png";
import BannerPro016 from "../Images/casino/6.png";

import BannerPro020 from "../Images/slot/1.jpg";
import BannerPro021 from "../Images/slot/2.png";
import BannerPro022 from "../Images/slot/3.png";
import BannerPro023 from "../Images/slot/4.png";
import BannerPro024 from "../Images/slot/5.png";
import BannerPro025 from "../Images/slot/6.png";
import BannerPro026 from "../Images/slot/7.png";
import BannerPro027 from "../Images/slot/8.png";
import BannerPro028 from "../Images/slot/9.png";
import BannerPro029 from "../Images/slot/10.png";
import BannerPro030 from "../Images/lotto/1.png";

import protabp from "../Images/Promotion/protab.png";
import protabp1 from "../Images/Promotion/protab1.png";

import Bgtextshow from "../Images/Mb/ImgMb28.png";
import closetextshow from "../Images/Mb/ImgMb27.png";

export default function Promotion() {
  const [closeMarquee, setCloseMarquee] = useState(true);
  const [linkLogin, setLinkLogin] = useState("https://game.lsm99center.com/login");

  return (
    <>
      <div>
        <Header />
        <div className="promotion">
          <div className="promotion-section">
            <div className="promotion--PC">
              <div className="table--games--PC">
                <Row>
                  <img src={"https://fs.cdnxn.com/landingCenter/Images/Promotion/protab.png"} alt="" className="Bg--Tab--Text" />
                  <Tabs defaultActiveKey="tab-1">
                    <Tab eventKey="tab-1" title="ทั้งหมด">
                      <Row>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/1.jpg"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/2.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/3.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/4.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/5.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/6.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/7.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/8.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/9.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/10.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/casino/1.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/casino/2.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/casino/3.jpg"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/casino/4.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/casino/5.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/casino/6.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/1.jpg"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/2.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/3.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/4.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/5.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/6.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/7.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/8.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/9.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/10.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/1.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="tab-2" title="กีฬา">
                      <Row>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/1.jpg"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/2.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/3.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/4.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/5.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/6.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/7.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/8.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/9.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/10.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="tab-3" title="คาสิโน">
                      <Row>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/casino/1.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/casino/2.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/casino/3.jpg"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/casino/4.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/casino/5.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/casino/6.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="tab-4" title="สล๊อต">
                      <Row>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/1.jpg"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/2.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/3.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/4.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/5.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/6.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/7.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/8.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/9.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/10.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="tab-5" title="หวย">
                      <Row>
                        <Col md={6} xs={6} className="games PC-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/1.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                      </Row>
                    </Tab>
                  </Tabs>
                </Row>
              </div>
              <div className="All--Games"></div>
            </div>

            <div className="Promotion--Mb">
              <div className="text--box--mbP">
                {closeMarquee === true ? (
                  <>
                    <div className="text--show--MbP">
                      <img
                        src={"https://fs.cdnxn.com/landingCenter/Images/Mb/ImgMb28.png"}
                        alt=""
                        className="Bgtext--show--MbP"
                      ></img>
                      <img
                        src={"https://fs.cdnxn.com/landingCenter/Images/Mb/ImgMb27.png"}
                        alt=""
                        className="closetext--show--MbP"
                        onClick={() => setCloseMarquee(false)}
                      ></img>
                      <div className="text--tab--mbP">
                        <marquee scrollamount="6">
                          เมื่ออยากหาอะไรสนุกๆเล่นแก้เบื่อ ให้นึกถึงเรา
                          LSM99CENTER เว็บพนันออนไลน์ที่มีทั้งเกมส์ กีฬา คาสิโน
                          หวย พร้อมด้วยโปรโมชั่นที่รองรับการเล่นของสมาชิกทุกชนิด
                          บริการรวดเร็วทันใจด้วยระบบ Auto แอดมินบริการ 24
                          ชั่วโมง ติดปัญหาส่วนใดเเจ้งน้องแอดมินได้ตลอดเลยนะคะ
                        </marquee>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>

              <div className="table--games--PC">
                <Row>
                  <img src={"https://fs.cdnxn.com/landingCenter/Images/Promotion/protab1.png"} alt="" className="Bg--Tab--TextP" />
                  <Tabs defaultActiveKey="tab-1">
                    <Tab eventKey="tab-1" title="ทั้งหมด">
                      <Row>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/1.jpg"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/2.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/3.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/4.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/5.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/6.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/7.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/8.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/9.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/10.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/casino/1.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/casino/2.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/casino/3.jpg"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/casino/4.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/casino/5.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/casino/6.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/1.jpg"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/2.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/3.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/4.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/5.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/6.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/7.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/8.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/9.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/10.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/1.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="tab-2" title="กีฬา">
                      <Row>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/1.jpg"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/2.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/3.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/4.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/5.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/6.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/7.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/8.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/9.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/sport/10.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="tab-3" title="คาสิโน">
                      <Row>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/casino/1.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/casino/2.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/casino/3.jpg"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/casino/4.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/casino/5.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/casino/6.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="tab-4" title="สล๊อต">
                      <Row>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/1.jpg"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/2.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/3.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/4.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/5.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/6.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/7.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/8.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/9.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/10.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="tab-5" title="หวย">
                      <Row>
                        <Col md={12} className="games Mb-2">
                          <a href={linkLogin}>
                            <img src={"https://fs.cdnxn.com/landingCenter/Images/slot/1.png"} alt="" className="w-100" />
                          </a>
                        </Col>
                      </Row>
                    </Tab>
                  </Tabs>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
