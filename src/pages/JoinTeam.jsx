import React from 'react'

import career from '../career'

import AOS from 'aos';
const Wonderbot = () => {
    AOS.init()
    return (
        <div>
            <div className="ui center aligned container" style={{height: '80vh'}}>
            <h1 style={{fontSize: '3em', marginTop: '30%'}} class="ui icon massive header" data-aos="fade-up"
            data-aos-duration="2000" >
                 팀에 합류하고 싶으신가요?
                </h1>
                <div data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2000">
                <p  class="description">
                <i className="icon small left quote" style={{color: 'gray'}}/> 팀 칼리스토가 여러분을 기다립니다. <i className="icon small left gray right quote" style={{color: 'gray'}}/> 
                </p>
                <br/>
                <a href="#hello" className="ui primary circular big button">팀에 합류하기</a> 
                <div/>
            </div>
            </div>
            <br/>
            <section id="hello" style={{ width: '100%' }} >
                <div className="ui left aligned container">
                <h1 style={{fontSize: '2em'}} class="ui left aligned icon massive header" data-aos="fade-right" data-aos-duration="2000" >
                 안녕하세요, 팀 칼리스토입니다!
                </h1>
                <br/>
                <div  class="ui left aligned icon header" data-aos="fade-left" data-aos-delay="1000" data-aos-duration="2000">
                <h2>인사말</h2>
                 <p>
                작은 봇에서 시작해서 이렇게 팀이 만들어지기까지... 처음에는 저 혼자 시작했지만, 이젠 팀원분들과 함께 나아가고 있습니다.<br/>
                 또 하나의 역사를 써주실 팀원분들이 필요합니다. 같이 나아가실래요?
                 </p>
                 <p>
                     <h2>평가&보상</h2>
                    팀원끼리 항시 서로 피드백을 장려하며, 함께하기 어려운 팀원은 지속적인 경고가 누적되면, 팀을 떠나는 절차를 논의하게됩니다.
                    팀에서 발생한 수익은, 팀 프로젝트 지원비에 먼저 사용되고, 팀원분들에게 배분해드립니다. 수익은 열심히하신만큼 나눠드립니다.
                 </p>
                 <br/>
                </div>
                </div>
                <br/>
           </section>
           <section id="description" style={{width: '100%', background: '#f9f9f9'}} >
                <div className="ui right aligned container">
                <br/>
                <h1 style={{fontSize: '2em'}} class="ui right aligned icon massive header" data-aos="fade-right" data-aos-duration="2000" >
                 핵심 가치
                </h1>
                <p  class="ui right aligned icon header" data-aos="fade-left" data-aos-delay="1000" data-aos-duration="2000">
                 팀 칼리스토가 중요하게 생각하는 가치들입니다.
                </p>
                <br/>
                <div className="ui three stackable cards" style={{width: '100%'}}>
            <a className="ui fluid large card" >
            <div className="content">
                <br/>
            <div className="center aligned header"><a style={{color: '#3188ff', fontSize: '2em'}} > 1 </a> <br/>자율성</div>
            <div className="center aligned description">
                팀 프로젝트가 아닌 개인 프로젝트도 존중해주며, 지원도 해드립니다. <br/>자유로워야 일의 효율도 올라간다고 생각합니다.
            </div>
            </div>
            </a>
            <a className="ui fluid large card" >
            <div className="content">
                <br/>
            <div className="center aligned header"><a style={{color: '#3188ff', fontSize: '2em'}} > 2 </a> <br/>팀워크</div>
            <div className="center aligned description">
                저희 팀은 팀워크를 중요시합니다.<br/>모든 일이든 팀워크가 있어야 해낼 수 있습니다.
            </div>
            </div>
            </a>
            <a className="ui fluid large card" >
            <div className="content">
                <br/>
            <div className="center aligned header"><a style={{color: '#3188ff', fontSize: '2em'}} > 3 </a> <br/>소통</div>
            <div className="center aligned description">
                소통은 팀에서 가장 중요합니다. 서로 의견이 달라 갈등이 일어날 수도 있지만, 갈등을 두려워하지 않는 용기도 필요합니다.
            </div>
            </div>
            </a>
            </div>
                <div className="ui divider"/>
                </div>
           </section>
           <section id="team" style={{ width: '100%' }} >
                <div className="ui left aligned container">
                <h1 style={{fontSize: '2em'}} class="ui left aligned icon massive header" data-aos="fade-right" data-aos-duration="2000" >
                 모집중인 분야
                </h1>
                <p  class="ui left aligned icon header" data-aos="fade-left" data-aos-delay="1000" data-aos-duration="2000">
                 아래는 팀에서 모집중인 분야입니다.
                </p>
                <br/>
                </div>
                <br/>
                <div className="ui container">
                <div className="ui three stackable cards" style={{width: '100%'}}>
                {   
                    career.career.sort((a,b) =>{
                        if((b.open && a.open)||(!b.open && !a.open)) return 0
                        else if(b.open) return 1
                        else return -1 
                    }).map(o=> {
                        return (
                            <a className="ui fluid large card" href={"/team/join/" + o.id} key={o.id}> 
                                <div className="content">
                                <br/>
                                <div className="center aligned header"><a style={{color: o.open ? '#3188ff' : 'gray', fontSize: '1em'}} > [{o.open ? '모집중' : '모집완료'}] {o.name} </a> </div>
                                <div className="center aligned description">
                                   {o.description}
                                <br/>
                                <br/>
                                <div className="extra content">
                                    <div className="ui divider"/>
                                <div className="center aligned author" style={{color: o.open ? '#3188ff' : 'gray'}}>
                                {o.open ? '자세히보거나 지원하기' : '자세히보기'}
                                </div>
                                </div>
                                </div>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
            </div>
           </section>
           
            </div>

    )
}

export default Wonderbot
