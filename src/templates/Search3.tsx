import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import '../Styles/place.less';
import xiaoshi from '../images/xiaoshi.jpg';
import Next from '../images/下一步.png';
import tsg from '../images/图书馆.jpg'
import eight from '../images/八号楼.jpg'

const Search3 = () => {

    const library: Array<string> = [
        '第四站 图书馆',
        '没有找到大门，但留下来看了会儿书',
        '还担心没有地方学习？',
        '图书馆等着你！',
        tsg
    ];

    const bahao = [
        '第四站 八号楼',
        '没有找到大门，但留下来自习',
        '全新修缮的八号教学楼',
        '承载华师学子的独家记忆',
        eight
    ]

    const location = useLocation();
    // @ts-ignore
    const data = location.state.data;


    const nav = useNavigate()
    const left = () => {
        const data = library;
        nav('/search4', {replace: false, state: {data}})
    }
    const right = () => {
        const data = bahao;
        nav('/search4', {replace: false, state: {data}})
    }
    const look = () => {
        if (data[0] == '第三站 恽代英广场')
            nav('/collect3_1', {replace: false});
        else if (data[0] == '第三站 露天电影场')
            nav('/collect3_2', {replace: false});
    }

    const [text, setText] = useState(true);
    const [next, setNext] = useState(true);

    function toButton(): any {
        setText(false);
        setNext(false)
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
export default Search3;