import React from "react";
import {useNavigate} from 'react-router-dom';
import '../Styles/south.less';
import xiaoshi from '../images/xiaoshi.jpg';
import south from '../images/南门.jpg'

const Nanmen = () => {

    const nav = useNavigate()
    const go = () => {
        nav('/end', {replace: false})
    }

    const look = () => {
        nav('/collect5', {replace: false})
    }

    // const [text, setText] = useState(true);

    return (
        <div className="nanmen">
            <div className="tt">终点站 新南门</div>
            <img className="tupian" src={south} alt=""></img>
            <div className="text">
                <p>眼前便是你寻找的大门（南门）</p>
                <p>恢弘大气是它的代名词</p>
                <p>精美壮丽的外表想要展示的更多是</p>
                <p>千千万万个华师人含蓄深沉的内涵</p>
                <p>踏入这座大门 你将开始人生全新的篇章</p>
            </div>
            <div className="choose">
                <div className="b">
                    <button onClick={go}>领取结局</button>
                    <button onClick={look}>仔细看看</button>
                </div>
            </div>
            <img src={xiaoshi} className='xiaoshi' alt=""></img>

        </div>
    )
}
export default Nanmen;