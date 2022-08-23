import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import '../Styles/place.less';
import xiaoshi from '../images/xiaoshi.jpg';
import Next from '../images/下一步.png';
import ydy from '../images/恽代英广场.jpg'
import dyy from '../images/露天电影场.jpg'

const Boya = () => {

    const Yundaiying = [
        '第三站 恽代英广场',
        '没有找到大门，但邂逅了伟人',
        '恽代英是我校知名校友，',
        '中国无产阶级革命家',
        ydy
    ]

    const cinima = [
        '第三站 露天电影场',
        '没有找到大门，但留下看了一场电影',
        '已经走过60载日月，',
        '如今仍然承接学校各类大型活动晚会',
        dyy
    ]

//接收参数
    const location = useLocation();
    // @ts-ignore
    const data = location.state.data;

    // const {state} = location
    // console.log(location, state);
//页面跳转传参
    const nav = useNavigate()
    const left = () => {
        const data = Yundaiying;
        nav('/Search3', {replace: false, state: {data}});
    }

    const right = () => {
        const data = cinima;
        nav('/Search3', {replace: false, state: {data}});
    }

    const look = () => {
        if (data[0] == '第二站 博雅广场')
            nav('/collect2_1', {replace: false});
        else if (data[0] == '第二站 文华公书林')
            nav('/collect2_2', {replace: false});
    }

    const [text, setText] = useState(true);
    const [next, setNext] = useState(true);

    function toButton(): any {
        setText(false);
        setNext(false);
    }

    return (
        <div className="place">
            <img className="tupian" src={data[4]} alt=""></img>
            {/* <div className="tupian"></div> */}
            {text ? <div className="text">
                <div className="title">{data[0]}</div>
                <p>{data[1]}</p>
                <p>{data[2]}</p>
                <p>{data[3]}</p>
            </div> : ''}
            {text ? '' : <div className="choose">
                <div className="t">接下来，你准备</div>
                <div className="b">
                    <button onClick={left}>向左转</button>
                    <button onClick={right}>向右转</button>
                    <button onClick={look}>仔细看看</button>
                </div>
            </div>}
            <img src={xiaoshi} className='xiaoshi' alt=""></img>
            {next ? <img src={Next} className='next' onClick={toButton} alt=""></img> : ''}
        </div>
    )
}
export default Boya;