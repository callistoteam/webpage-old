import React from 'react'
import styles from '../styles'

import AOS from 'aos';
const Wonderbot = () => {
    AOS.init()
    return (
        <div class="ui center aligned container" {...styles.Landing}>
            <h1 style={{fontSize: '4em'}} class="ui aligned icon massive header" data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" data-aos-duration="2000" >
            <img style={{height: '5em', width: '5em', marginBottom: '16px', }} className="ui tiny image" alt="원더봇" src="/images/wonderbot.png" />
                 원더봇,
                </h1>
                <h2  class="ui aligned icon header" data-aos="zoom-in-up" data-aos-delay="1000" data-aos-duration="2000">
                 디스코드를 더 재밌게.
                </h2>
                <div className="button" data-aos="zoom-in-up" data-aos-delay="1000" data-aos-duration="2000">
                <a href="https://wonderbot.xyz" className="ui primary circular big button"><i className="globe icon"/>웹사이트</a> 
                <a href="https://wonderbot.xyz/invite" className="ui discord circular big button"><i className="discord icon"/>초대하기</a> <br/>
                </div>
                {/* <img style={{height: '600px', width: '600px', marginBottom: 0, transform: 'opacity 1s ease,background-color 0.35s cubic-bezier(.65,0,.35,1)', opacity: 1 }} className="" alt="원더봇" src="/images/wonderbot.png" /> */}


        </div>
    )
}

export default Wonderbot
