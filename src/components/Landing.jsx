import React from "react";
import styles from "../styles";

const Landing = () => {
  return (
    <>
    <section style={{height: '45vh', background: '#3188ff', color: 'white'}}>
    <div className="ui center aligned container" >
    <br/><br/>
      <h1 style={{marginTop: '10%', fontSize: '3em'}}>팀 칼리스토</h1>
    <p className="ui inverted header">작은 움직임으로 세상을 바꾸기위해 모였습니다.</p>
    <a href="/team/about" className="ui black button">소개보기</a>
    </div>
    </section>
    <section style={{height: '70vh', color: 'white', backgroundSize: 'cover', backgroundImage: 'url(/images/wb-corona.png)', backgroundRepeat: 'no-repeat'}}>
    <div className="ui right aligned container" >
    <br/><br/>
      <h1 style={{marginTop: '20%', fontSize: '3em'}}>2017년의 작은 봇부터...</h1>
      <br/>
    <p className="ui inverted header">2017년의 작은 봇부터 시작해 2000서버의 봇, 그리고 지금의 팀이 되었습니다.</p>
    <a className="ui discord button" href="/projects/wonderbot">원더봇 확인하기</a>
    </div>
    </section>
    <section style={{height: '55vh', color: 'white', background: '#05a4e0f2'}}>
    <div className="ui left aligned container" >
    <br/><br/>
      <h1 style={{marginTop: '15%', fontSize: '3em'}}>이제는 디스코드를 넘어서서...</h1>
      <br/>
    <p className="ui inverted header">디스코드를 넘어서서 카카오톡봇도 제작중입니다.</p>
    <a className="ui kakao button" href="http://pf.kakao.com/_eVJxlxb">코로나봇 확인하기</a>

    </div>
    </section>
    <section style={{height: '50vh', background: '#363636', color: 'white'}}>
    <div className="ui right aligned container" >
    <br/><br/>
      <h1 style={{marginTop: '10%', fontSize: '3em'}}>부분 유료화</h1>
    <p className="ui inverted header">기존 서비스는 무료로 이용할 수 있지만, 부분 유료화로 더 질 높은 서비스를 제공합니다.</p>
    <a className="ui teal disabled button">상점 바로가기(준비중)</a>
    </div>
    </section>
    </>
  )
}

export default Landing;
