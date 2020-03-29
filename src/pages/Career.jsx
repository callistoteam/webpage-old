import React from 'react'
import { useParams } from 'react-router-dom'

import career from '../career'

const Career = ( ) => {
    const params = useParams()
    
    let res = career.career.find(el=> el.id===params.id)
    const join = () => {
        window.open('/team/submit/'+res.id, '', 'width=1000,height=1000')
    }
    console.log(res)
return(
    <div>
        
        
            
        
        {
            res ? (
                <>
                    <section style={{height: '35vh', background: '#3188ff', color: 'white'}}>
                    <div className="ui center aligned container">
                    <br/><br/>
                        <h1 style={{marginTop: '10%'}}>{res.open ? '[모집중]' : '[모집종료]'} {res.name}</h1>
                    <p className="ui inverted header">{res.description}</p>
                    </div>
                    </section>
                <div className="ui container">
                    <br/>
                <h1 className="ui header">{res.name}</h1>
                <p className="ui header">{res.todo}</p>
                <h1 className="ui header">모집 인원</h1>
                <p className="ui header">{res.count}</p>
                <h1 className="ui header">모집 기간</h1>
                <p className="ui header">{res.date}</p>
                <h1 className="ui header">자격 요건</h1>
                <div className="ui bulleted list">
                    {
                        res.content.must.map(el=>{
                            return(
                                <div className="item" >
                                    {el}
                                </div>
                            )
                        })
                    }
                </div>
                <h1 className="ui header">우대 사항</h1>
                <div className="ui bulleted list">
                    {
                        res.content.good.map(el=>{
                            return(
                                <div className="item">
                                    {el}
                                </div>
                            )
                        })
                    }
                </div>
                <br/>
                <a onClick={res.open ? join : ""}className={(res.open ? "" : "disabled ") + "ui primary button"}>지원하기{(res.open ? "" : "(종료됨)")}</a>
                </div>
                </>
            ) : 
            (
                <div className="ui center aligned container">
                    <br/>
                    <br/>
                <h1 className="ui header">URL이 잘못되었거나 없는 직종입니다.</h1>
                </div>
            )
        }
        </div>
)
}

export default Career