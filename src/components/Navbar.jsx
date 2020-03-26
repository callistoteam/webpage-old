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
    <h1 class="ui inverted header">Cover</h1>
    <div className="ui secondary pointing menu" style={{fontSize: '15px', border: 'transparent'}}>
      <a href="/" className="active item">
        Home
      </a>
      <div className="right menu">
      <div className="ui simple dropdown item" {...styles.NoMobile}>
        소개
    <i className="dropdown icon"></i>
    <div className="menu" {...styles.Dropdown}>
      <div className="item">팀</div>
      <div className="item">팀원</div>
      <div className="item">채용</div>
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
