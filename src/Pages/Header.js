/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../Style/Header.css";
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";

import BgheaderPc from "../Images/Pc/ImgPc24.png";
import BgiconPc from "../Images/Pc/ImgPc25.png";
import IconLsmPc from "../Images/Pc/ImgPc6.gif";

import IconwalletPc from "../Images/Pc/ImgPc7.png";
import IcondepositPc from "../Images/Pc/ImgPc8.png";
import IconPlayPc from "../Images/Pc/ImgPc9.png";
import IconwithdrawPc from "../Images/Pc/ImgPc10.png";
import IconPromotionPc from "../Images/Pc/ImgPc11.png";

import IconlinePc from "../Images/Pc/ImgPc3.png";
import IconnotifriPc from "../Images/Pc/ImgPc2.png";
import IcontabbarPc from "../Images/Pc/ImgPc1.png";

import IconloginPc from "../Images/Pc/ImgPc4.png";
import IconregisterPc from "../Images/Pc/ImgPc5.png";

/*mobie */
import BgheaderMb from "../Images/Mb/ImgMb21.png";
import IconLsmMb from "../Images/Mb/ImgMb6-.gif";
import BgfootterMb from "../Images/Mb/ImgMb22.png";

import IconwalletMb from "../Images/Mb/ImgMb7.png";
import IcondepositMb from "../Images/Mb/ImgMb8.png";
import IconPlayMb from "../Images/Mb/ImgMb9.png";
import IconwithdrawMb from "../Images/Mb/ImgMb10.png";
import IconPromotionMb from "../Images/Mb/ImgMb11.png";
import Iconclose from "../Images/Mb/ImgMb27.png";

import IconnotifriMb from "../Images/Mb/ImgMb2.png";
import IcontabbarMb from "../Images/Mb/ImgMb1.png";

import IconloginMb from "../Images/Mb/ImgMb4.png";
import IconregisterMb from "../Images/Mb/ImgMb5.png";

import tx1 from "../Images/Headerimg/img1.png";
import tx2 from "../Images/Headerimg/img2.png";
import tx3 from "../Images/Headerimg/img3.png";
import tx4 from "../Images/Headerimg/img4.png";
import tx5 from "../Images/Headerimg/img5.png";
import tx6 from "../Images/Headerimg/img6.png";
import tx7 from "../Images/Headerimg/img7.png";
import tx8 from "../Images/Headerimg/img8.png";

import protab from "../Images/Promotion/protab.png";

export default function Header() {
  const [linkLogin, setLinkLogin] = useState("https://game.lsm99center.com/login");
  const [linkRegister, setRegister] = useState(
    "https://game.lsm99center.com/register"
  );
  const [linelink, setLineLink] = useState("https://line.me/R/ti/p/@344iyomr");

  const [show, setShow] = useState(false);
  const [showNofi, setShowNofi] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseNofi = () => setShowNofi(false);
  const handleShowNofi = () => setShowNofi(true);
  return (
    <>
      <div>
        <div className="header">
          <div className="header--section">
            <div className="header--Pc">
              <div className="header--section--Pc">
                <div className="header--Top--Pc">
                  <img src={BgheaderPc} alt="" className="Bg--header--Pc"></img>
                  <a href="/">
                    <img src={IconLsmPc} alt="" className="Icon--Lsm--Pc"></img>
                  </a>
                  <img src={BgiconPc} alt="" className="Bg--icon--Pc"></img>
                </div>

                <div className="icon--Games--Pc">
                  <a href={linkLogin}>
                    <img
                      src={IconwalletPc}
                      alt=""
                      className="Icon--wallet--Pc"
                    ></img>
                  </a>

                  <a href={linkLogin}>
                    <img
                      src={IcondepositPc}
                      alt=""
                      className="Icon--deposit--Pc"
                    ></img>
                  </a>

                  <a href={linkLogin}>
                    <img
                      src={IconPlayPc}
                      alt=""
                      className="Icon--Play--Pc"
                    ></img>
                  </a>
                  <a href={linkLogin}>
                    <img
                      src={IconwithdrawPc}
                      alt=""
                      className="Icon--withdraw--Pc"
                    ></img>
                  </a>

                  <a href="Promotion/">
                    <img
                      src={IconPromotionPc}
                      alt=""
                      className="Icon--Promotion--Pc"
                    ></img>
                  </a>
                </div>

                <div className="icon--Noti--Pc">
                  <a href={linelink}>
                    <img
                      src={IconlinePc}
                      alt=""
                      className="Icon--line--Pc"
                    ></img>
                  </a>

                  <img
                    src={IconnotifriPc}
                    alt=""
                    className="Icon--notifri--Pc"
                    onClick={handleShowNofi}
                  ></img>
                  <img
                    src={IcontabbarPc}
                    alt=""
                    className="Icon--tabbar--Pc"
                    onClick={handleShow}
                  ></img>
                </div>
                <div className="icon--login--regis--Pc">
                  <a href={linkLogin}>
                    <img
                      src={IconloginPc}
                      alt=""
                      className="Icon--login--Pc"
                    ></img>
                  </a>
                  <a href={linkRegister}>
                    <img
                      src={IconregisterPc}
                      alt=""
                      className="Icon--register--Pc"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="header--Mb">
              <div className="header-section--Mb">
                <div className="header--Top--Mb">
                  <img src={BgheaderMb} alt="" className="Bg--header--Mb"></img>
                  <a href="/">
                    <img src={IconLsmMb} alt="" className="Icon--Lsm--Mb"></img>
                  </a>
                </div>
                <div className="icon--Noti--Mb">
                  <img
                    src={IconnotifriMb}
                    alt=""
                    className="Icon--notifri--Mb"
                    onClick={handleShowNofi}
                  ></img>
                  <img
                    src={IcontabbarMb}
                    alt=""
                    className="Icon--tabbar--Mb"
                    onClick={handleShow}
                  ></img>
                </div>
                <div className="icon--login--regis--Mb">
                  <a href={linkLogin}>
                    <img
                      src={IconloginMb}
                      alt=""
                      className="Icon--login--Mb"
                    ></img>
                  </a>
                  <a href={linkRegister}>
                    <img
                      src={IconregisterMb}
                      alt=""
                      className="Icon--register--Mb"
                    ></img>
                  </a>
                </div>
              </div>
              <div className="header--footter--Mb">
                <img src={BgfootterMb} alt="" className="Bg--footter--Mb"></img>
                <div className="icon--Games--Mb">
                  <a href={linkLogin}>
                    <img
                      src={IconwalletMb}
                      alt=""
                      className="Icongames--Mb"
                    ></img>
                  </a>
                  <a href={linkLogin}>
                    <img
                      src={IcondepositMb}
                      alt=""
                      className="Icongames--Mb"
                    ></img>
                  </a>
                  <a href={linkLogin}>
                    <img
                      src={IconPlayMb}
                      alt=""
                      className="Icon--Play--Mb"
                    ></img>
                  </a>
                  <a href={linkLogin}>
                    <img
                      src={IconwithdrawMb}
                      alt=""
                      className="Icongames--Mb"
                    ></img>
                  </a>
                  <a href="Promotion/">
                    <img
                      src={IconPromotionMb}
                      alt=""
                      className="Icongames--Mb"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
            <Modal
              show={showNofi}
              onHide={handleCloseNofi}
              className="showmenu--nofi--modal"
            >
              <div className="Close--Nofi--Pc">
                <img
                  src={Iconclose}
                  className="Icon--close--Nofi"
                  alt=""
                  onClick={handleCloseNofi}
                />
              </div>

              <div className="wrapper--menu--nofi">
                <div className="text--noti">
                <img src={tx8} alt=""  className="Icon--close--nofi" onClick={handleCloseNofi} />
                  <h2 className="textnoti">แจ้งเตือน</h2>
                </div>
                <div className="wrapper--section--nofi">
                  <img src={protab} alt="" className="bg--tab--blue--nofi" />
                  <div>
                    <div className="menu--nofi">
                      <Container className="box--nofi">
                        <Row>
                          <Tabs defaultActiveKey="tab-1">
                            <Tab eventKey="tab-1" title="ทั้งหมด">
                              <Row>
                                <Col xs={12} className="games mb-2">
                                  คุณไม่มีข้อความ
                                </Col>
                              </Row>
                            </Tab>
                            <Tab eventKey="tab-2" title="ฝากเงิน">
                              <Row>
                                <Col xs={12} className="games mb-2">
                                  คุณไม่มีข้อความ
                                </Col>
                              </Row>
                            </Tab>
                            <Tab eventKey="tab-3" title="ถอนเงิน">
                              <Row>
                                <Col xs={12} className="games mb-2">
                                  คุณไม่มีข้อความ
                                </Col>
                              </Row>
                            </Tab>
                            <Tab eventKey="tab-4" title="โบนัส">
                              <Row>
                                <Col xs={12} className="games mb-2">
                                  คุณไม่มีข้อความ
                                </Col>
                              </Row>
                            </Tab>
                          </Tabs>
                        </Row>
                      </Container>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>

            <Modal show={show} onHide={handleClose} className="showmenu--modal">
              <div className="wrapper--menu">
                <div className="Close--menu--Pc">
                  <img src={tx8} alt="" className="Icon--close--Menu"onClick={handleClose}/>
                </div>
                <div className="wrapper--section-">
                  <div>
                    <div className="menu">
                    <div className="MBButton--tx1">
                    <a href={linkLogin}>
                      <img src={tx1} alt="" className="tx--1"></img>
                    </a>
                    <a href={linkLogin}>
                      <img src={tx2} alt="" className="tx--1"></img>
                    </a>
                  </div>

                  <div className="MBButton--tx2">
                  <a href={linkLogin}>
                      <img src={tx3} alt="" className="tx--1"></img>
                    </a>
                    <a href="Promotion/">
                      <img src={tx4} alt="" className="tx--1"></img>
                    </a>
                  </div>

                  <div className="MBButton--tx3">
                  <a href={linkLogin}>
                      <img src={tx5} alt="" className="tx--1"></img>
                    </a>
                    <a href={linkLogin}>
                      <img src={tx6} alt="" className="tx--1"></img>
                    </a>
                  </div>
                  <div className="MBButton--tx4">
                  <a href={linkLogin}>
                      <img src={tx7} alt="" className="tx--2"></img>
                    </a>
                  </div>
                      <div className="text--bg--menu">

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}
