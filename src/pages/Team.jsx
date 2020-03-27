import React from 'react'
import styles from '../styles'

import AOS from 'aos';
const Wonderbot = () => {
    AOS.init()
    return (
        <div>
            <div className="ui center aligned container" style={{height: '100vh'}}>
            <h1 style={{fontSize: '3em', marginTop: '30%'}} class="ui icon massive header" data-aos="fade-up"
            data-aos-duration="2000" >
                 팀 칼리스토,
                </h1>
                <div data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2000">
                <h2  class="ui icon header">
                 세상을 편하게 바꿉니다.
                </h2>
                <br/>
                <a href="#description" className="ui primary circular big button">더 알아보기</a> 
                <div/>
            </div>
            </div>
            <br/>
           <section id="description" style={{width: '100%'}} className="ui center aligned container">
                <h1 style={{fontSize: '2em'}} class="ui right aligned icon massive header" data-aos="fade-right"
                    data-aos-duration="2000" >
                 오픈소스
                </h1>
                <h2  class="ui right aligned icon header" data-aos="fade-left" data-aos-delay="1000" data-aos-duration="2000">
                 세상을 편하게 바꿉니다.
                </h2>
           </section>
           
           
            </div>

    )
}

export default Wonderbot
