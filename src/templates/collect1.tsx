import React from 'react'
import '../Styles/collect.less'
import mex from '../images/mmexport1659345932868.jpg'
import xxs from '../images/xiaoxun.jpg'
import xh from '../images/xiaohui.png'
import {useNavigate} from "react-router-dom";
import hua from '../images/hua.png';

const Collect1 = () => {
    const nav = useNavigate()
    const look = () => {
        const data = [hua];
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
                <img src={xh} alt="" className="collect_xh" style={{top: "45vw", left: "10vw"}} onClick={look}/>
            </div>
            <p className="collect_text">拾起校训石附近的校徽</p>
            <p className="collect_text">(点击即可）</p>
        </div>
    )
}
export default Collect1;
