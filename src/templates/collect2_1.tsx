import React from 'react'
import '../Styles/collect.less'
import mex from '../images/mmexport1659345932868.jpg'
import xxs from '../images/博雅广场.jpg'
import xh from '../images/xiaohui.png'
import {useNavigate} from "react-router-dom";

const Collect2_1 = () => {
    const nav = useNavigate()
    const look = () => {
        const data = ['师'];
        nav('/char', {replace: false, state: {data}})
    }

    return (
        <div style={{
            margin: 0,
            height: '100vh',
            backgroundImage: `url(${mex})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflow: 'hidden'
        }}>
            <div className="collect_box">
                <img src={xxs} alt="" className="collect_xxs"/>
                <img src={xh} alt="" className="collect_xh" style={{top: "20vw", left: "80vw"}} onClick={look}/>
            </div>
            <p className="collect_text">拾起博雅广场附近的校徽</p>
            <p className="collect_text">(点击即可）</p>
        </div>
    )
}
export default Collect2_1;