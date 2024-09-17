/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../Style/Header.css";
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";

export default function Header() {
  const [linkLogin, setLinkLogin] = useState("https://lsm99center.l3t.lsmplay.com/login");
  const [linkRegister, setRegister] = useState(
    "https://lsm99center.l3t.lsmplay.com/register"
  );
  return (
    <>
      <div>
        <div className="header">
          <div className="button-head">
            <a href={linkLogin}>
              <button className="btn-login">เข้าสู่ระบบ</button>
            </a>
            <a href={linkRegister}>
              <button className="btn-register">สมัครสมาชิก</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
