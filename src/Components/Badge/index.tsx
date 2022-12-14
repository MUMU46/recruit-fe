import React, {useState} from "react";
import './index.less';
import xiaohui from '../../images/xiaohui.png'

export default function Badge(props: any) {

    const [hide, setHide] = useState(true)
    const word = props.word
    console.log(word)
    const url = word
    const back = () => {
        window.history.go(-2);

    }
    return (
        <div>
            <div className="badge_box">
                <img src={xiaohui} alt="" className={hide ? "xh" : "f"} onClick={() => {
                    setHide(false)
                }}/>
                <img src={url} alt="" className={hide ? "back_back" : "b"}/>
            </div>
            {hide ?
                <p className="badge_text">(点击进行翻转）</p> :
                <div className="badge_back" onClick={back}>返回</div>
            }
        </div>
    )
}