import React, {useState} from "react";
import './index.less';

export default function Badge(props: any) {

    const [hide, setHide] = useState(true)
    const word = props.word
    const url = "/src/images/" + word + ".png"
    const back = () => {
        window.history.back();
        window.history.back()

    }
    return (
        <div>
            <div className="badge_box">
                <img src="/src/images/xiaohui.png" alt="" className={hide ? "xh" : "f"} onClick={() => {
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