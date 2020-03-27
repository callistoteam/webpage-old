import React, { useState } from "react";
import styles from "../styles"

const Navigation = props => {
  const [ opened, setOpen] = useState(false)
  const open = () => {
    if(opened) setOpen(false)
    else setOpen(true)
  }
  return (
    <div>
    <div {...styles.Menu}>
    <div className="ui container">
    <div className="ui secondary pointing menu" style={{fontSize: '15px', border: 'transparent'}}>
      <a href="/" className="active item">
        홈
      </a>
      <div className="right menu">
      <div className="ui simple dropdown item" {...styles.NoMobile}>
        팀
    <i className="dropdown icon"></i>
    <div className="menu" {...styles.Dropdown}>
      <a href="/team/about" className="item">소개</a>
      <a href="/team/members" className="item">팀원</a>
      <a href="/team/join" className="item">채용</a>
    </div>
  </div>
      <a className="item" {...styles.NoMobile}>
        Friends
      </a>
      <a className="item" onClick={open} {...styles.OnlyMobile}>
        { opened ? <i className="icon close"/> : <i className="icon bars"/>}
      </a>
      </div>
    </div>
    </div>
    </div>
    { opened ? ( 
    <div className="ui segment">
      <div className="ui inverted relaxed divided list">
    <div className="item">
      <div className="content">
        <div className="header">Snickerdoodle</div>
        An excellent companion
      </div>
    </div>
    <div className="item">
      <div className="content">
        <div className="header">Poodle</div>
        A poodle, its pretty basic
      </div>
    </div>
    <div className="item">
      <div className="content">
        <div className="header">Paulo</div>
        He's also a dog
      </div>
    </div>
  </div>
</div>) : (<></>)}
    </div>
  );
};

export default Navigation;
