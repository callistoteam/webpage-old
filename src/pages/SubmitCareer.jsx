import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import career from '../career'

const Career = ( ) => {
    const params = useParams()
    const [data, setData] = useState({})
    const [filled, setFill] = useState('')
    let res = career.career.find(el=> el.id===params.id)

    const updateInfo = (e) => {
        
        data[e.target.id] = !e.target.value ? undefined : e.target.value
        setData(data)
    }
    const getInfo = () => {
        if((data.nickname&&data.tag&&data.id)&&(Object.values(res.form).map(r=> data[r.id]).findIndex(r=> r===undefined))=== -1) setFill(true)
        else setFill(false)
    }
    const close = () => {
        console.log(window)
        window.close()
    }
return(
    <div>
        {
            res ? (
                res.open ? (
                    <div className="ui container">
                    <br/>
                    <div className="ui header">
                        <a style={{color: '#3188ff'}}>{res.name}</a>에 지원합니다
                    </div>
                    {
                        filled !==false ? ''  : (
                            <div className="ui error message">
                                모든 칸을 채워주세요.
                            </div>
                        )
                    }
                    <form className="ui form">
                    <h4 className="ui dividing header">지원자 정보</h4>
                    <div className="field">
                    <label>디스코드 닉네임</label>
                    <div className="fields">
                    <div className="twelve wide field">
                        <input type="text" name="DiscordNickname" placeholder="디스코드 닉네임" id="nickname" onChange={updateInfo} required readOnly={filled}/>
                    </div>
                    <div className="inline field">
                    <label>#</label>
                        <input type="number" name="DiscordTag" placeholder="태그" id="tag" onChange={updateInfo} required readOnly={filled}/>
                    </div>
                    </div>
                    <div className="field">
                        <label>디스코드 ID</label>
                        <input type="number" name="DiscordID" maxLength="18" placeholder="000000000000000000" id="id" onChange={updateInfo} required readOnly={filled}/>
                    </div>
                    </div>
                    <h4 className="ui dividing header">추가 양식</h4>
                    {
                        Object.keys(res.form).map(el=> {
                            return(
                                <div className="field">
                                <label>{el}</label>
                                { res.form[el].type === 'textarea' ? (
                                    <textarea id={res.form[el].id} placeholder={res.form[el].placeholder} onChange={updateInfo} readOnly={filled}/>
                                ) : (
                                    <input id={res.form[el].id} placeholder={res.form[el].placeholder} onChange={updateInfo} readOnly={filled}/>
                                )}
                                </div>
                            )
                        })
                    }
                    <br/>
                    {
                        filled===true ? (
                            <div>
                            <h2 className="ui header">계속해서 신청하시려면 디스코드 서버를 이용해주세요.</h2>
                            <a href="https://invite.gg/wonderbot" className="ui button discord"><i className="icon discord"/>팀 칼리스토 디스코드</a>
                            <h3 className="ui header">디스코드 서버에서 아무채널에 아래 명령어를 붙여넣습니다.</h3>
                            <textarea defaultValue={`sudo submit career ${res.id} `+Object.keys(data).map(r=> `${r}: ${data[r].replace(/[|]/gi, ' ').replace(/\n/gi, '\n')}` ).join(' | ')} readOnly></textarea>
                            <h3 className="ui header">기다리시면 1주일안에 DM으로 연락드립니다. DM을 허용해주세요</h3>
                            <a className="ui button" onClick={close}>완료</a>
                            </div>
                        ) : (
                            <>
                            <p style={{color: 'gray'}}>팀원에 지원하면, 개인정보제공에 동의하게됩니다.</p>
                            <div class="ui submit primary button" onClick={getInfo}>신청하기</div>
                            </>
                        )
                    }
                    </form>
                </div>
                ) : (
                    <div className="ui center aligned container">
                    <br/>
                    <br/>
                <h1 className="ui header" >지원이 종료되었습니다.</h1>
                </div>
                )
            ) : 
            (
                <div className="ui center aligned container">
                    <br/>
                    <br/>
                <h1 className="ui header" >URL이 잘못되었거나 없는 직종입니다.</h1>
                </div>
            )
        }

        </div>

)
}

export default Career

