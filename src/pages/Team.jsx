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
                <div data-aos="fade-up"  data-aos-delay="1000" data-aos-duration="2000">
                <h2  class="ui icon header">
                 세상을 편하게 바꿉니다.
                </h2>
                <br/>
                <div/>
            </div>
            <i style={{marginTop: '55vh'}}className="icon arrow down"/>
            </div>
            <br/>
           <section id="opensoruce" style={{width: '100%'}} >
                <div className="ui right aligned container">
                <h1 style={{fontSize: '2em'}} class="ui right aligned icon massive header" data-aos="fade-right" data-aos-duration="2000" >
                 오픈소스
                </h1>
                <p  class="ui right aligned icon header">
                 팀 칼리스토의 모든 프로젝트는 소스 공개를 원칙으로합니다.<br/>오픈소스 커뮤니티에 기여하거나 도움받으며, 함께 발전해나갑니다.
                </p>
                <br/><a class="ui small secondary button"   href="https://github.com/callistoteam/"><i class="github icon"></i>프로젝트 소스코드 확인하기</a>
                <a class="ui small primary button"   href="/license"><i class="icon balance scale"></i>오픈소스 라이선스 확인하기</a>
                </div>
           </section>
           <section id="team" style={{width: '100%', background: '#f9f9f9'}} >
           <div className="ui divider"/>
                <div className="ui left aligned container">
                <h1 style={{fontSize: '2em'}} class="ui left aligned icon massive header" data-aos="fade-right" data-aos-duration="2000" >
                 10대로 구성된 팀원
                </h1>
                <p  class="ui left aligned icon header">
                 모든 팀원은 10대로 구성되어 활기차고, 열정이 가득합니다.
                </p>
                <br/><a class="ui small secondary button"  href="/team/members"><i class="icon users"></i>팀원 보기</a>
                
                </div>
                <br/>
                <div className="ui divider"/>
           </section>
           <section id="join" style={{width: '100%' }} >

                <div className="ui center aligned container">
                <h1 style={{fontSize: '2em'}} class="ui center aligned icon massive header" >
                 함께 하실래요?
                </h1>
                <p  class="ui center aligned icon header">
                 팀이 맘에 드시나요? <br/>
                 저희는 열정이 가득한 여러분와 함께하고 싶습니다.
                </p>
                <br/><a class="ui small secondary button"  href="/team/join"><i class="icon plus"></i>지원하기</a>
                </div>
                <br/>
           </section>
           
            </div>

    )
}

export default Wonderbot
