import React from 'react'
import styles from '../styles'

const Wonderbot = () => {
    return (
        <div class="ui center aligned container" {...styles.Landing}>
            <h1 style={{fontSize: '5em'}}class="ui center aligned icon massive header">
                 원더봇
                </h1>
                <h2  class="ui center aligned icon header">
                 디스코드를 더 재밌게.
                </h2>
                <a href="https://wonderbot.xyz" className="ui primary circular big button"><i className="globe icon"/>웹사이트</a> 
                <a href="https://wonderbot.xyz/invite" className="ui discord circular big button"><i className="discord icon"/>초대하기</a> <br/>
                <img style={{height: '600px', width: '600px', marginBottom: 0, transform: 'opacity 1s ease,background-color 0.35s cubic-bezier(.65,0,.35,1)', opacity: 1 }} className="" alt="원더봇" src="/images/wonderbot.png" />

        </div>
    )
}

export default Wonderbot
