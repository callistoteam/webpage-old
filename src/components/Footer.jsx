import React from "react";

const Footer = () => {
  return (
  <>
  <div className="ui section divider" />
  <div className="ui container">
    <div className="ui vertical footer segment">
        <div className="ui stackable grid">
        <div className="four wide column">
          <div className="ui header">소개</div>
          <div className="ui list">
          <a className="item" href="/about">팀</a>
          
        </div>
        </div>
        <div className="two wide column">
        <div className="ui header">프로젝트</div>
        <div className="ui list">
          <a className="item" href="/projects/wonderbot">원더봇</a>
          <a className="item" href="/projects/parkbot">파크봇</a>
          <a className="item" href="/projects/coronabot">코로나봇</a>
        </div>
          
        </div>
        </div>
        
    </div>
    <h1 className="ui header">팀 칼리스토</h1>
        <h4 className="ui header" style={{marginTop: '-15px'}}>Team. Callisto</h4>
        <p>사업자등록번호: 422-13-01081 | 대표: 박준서</p>
        <p>Copyright 2020 Team. Callisto, All rights reserved.</p>
    <div className="ui horizontal list">
          <a href='/tos' className="item">이용약관</a> <a href='/privacy' className="item">개인정보취급방침</a>
        </div>
  </div>
  </>
  );
};

export default Footer;
