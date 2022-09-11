import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import '../Styles/place.less';
import xiaoshi from '../images/xiaoshi.jpg';
import Next from '../images/next.png';

const Search4 = () => {

    const location = useLocation();
    // @ts-ignore
    const data = location.state.data;

    const nav = useNavigate()
    const final = () => {
        nav('/south', {replace: false})
    }
    const look = () => {
        if (data[0] == '第四站 图书馆')
            nav('/collect4_1', {replace: false});
        else if (data[0] == '第四站 八号楼')
            nav('/collect4_2', {replace: false});
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
                    <button onClick={final} style={{marginBottom: 15}}>走向终点</button>
                    <button onClick={look}>仔细看看</button>
                </div>
            </div>}
            <img src={xiaoshi} className='xiaoshi' alt=""></img>
            {next ? <img src={Next} className='next' onClick={toButton} alt=""></img> : ''}

        </div>
    )
}
export default Search4;