/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../Style/Header.css";

import titlelogo from "../Images/new-center/logo.png";

export default function Header() {
  const [linkLogin, setLinkLogin] = useState("https://lsm99center.l3t.lsmplay.com/login");
  const [linkRegister, setRegister] = useState(
    "https://lsm99center.l3t.lsmplay.com/register?partner=904&channel=xbgcen"
  );
  return (
    <>
      <div>
        <div className="header">
          <div className="header-group">
            <a href={linkLogin}>
              <img src={titlelogo} alt="logo" />
            </a>
            <div className="button-head">
              <a href={linkLogin}>
                <button className="btn-login">เข้าสู่ระบบ</button>
              </a>
              <a href={linkRegister}>
                <button className="btn-register">สมัครสมาชิก</button>
              </a>
            </div>
          </div>
          <div className="button-head-mb">
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
