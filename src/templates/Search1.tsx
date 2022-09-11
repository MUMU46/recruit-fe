import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import '../Styles/place.less';
import xiaoshi from '../images/xiaoshi.jpg';
import Next from '../images/next.png';
import stone from '../images/xiaoxun.jpg'
import ground from '../images/boyaground.jpg'
import wenhua from '../images/wenhua.jpg'

const Search = () => {

    const boya: Array<string> = [
        '第二站 博雅广场',
        '没有找到大门，但来到了广场',
        '休闲散步背书，',
        '晒太阳、看月亮的好去处。',
        ground
    ];

    const lin = [
        '第二站 文华公书林',
        '没有找到大门',
        '但来到了老图书馆',
        '也是学生事务大厅所在地',
        wenhua
    ];

//跳转页面
    const nav = useNavigate()
    const left = () => {
        const data = boya;
        nav('/search2', {replace: false, state: {data}}) //传参
    }
    const right = () => {
        const data = lin;
        nav('/search2', {replace: false, state: {data}})
    }

    const look = () => {
        nav('/collect1', {replace: false})
    }

    const [text, setText] = useState(true);
    const [next, setNext] = useState(true);

    function toButton(): any {
        setText(false);
        setNext(false)
    }

    return (
        <div className="place">
            <img className="tupian" src={stone} alt=""></img>
            {/* <div className="tupian"></div> */}
            {text ? <div className="text">
                <div className="title">第一站 校训石</div>
                <p>求实创新，立德树人,是每个新山民学习的第一课</p>
                {/* <p>是每个新山民学习的第一课</p> */}
                <p>既是华师校训，</p>
                <p>也是华师人的座右铭。</p>
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
export default Search;