import React, {useState,useEffect} from "react";
import '../Styles/Routine.less';
import {useNavigate} from 'react-router-dom';
import start from '../images/start.png';
import xiaoshi from '../images/xiaoshi.jpg';
import map from '../images/map.jpg';

const Routine = () => {

    const width= screen.width 
    const totip=()=>{
        nav('/tip', {replace: false});
    }

useEffect(()=>{
   
    if(width>450)
    {
        totip();
    }
        })

    //跳转页面
    const nav = useNavigate()
    const go = () => {
        nav('stone', {replace: false})
    }


    const [page, setPage] = useState(0);
    // const [place,setPlace]=useState('');
    // const [text,setText]=useState(true);
    function changePage(): any {
        setPage(page + 1);
    }

    return (
        <div>
            {page == 0 ? <div className="start" onClick={() => changePage()}>
                <img src={start} alt=""></img>
                <div className="t">嗨，桂子山的新山民们，欢迎你们来到美丽的CCNU 你能否走出重重迷宫找到华师的大门？</div>
            </div> : ''}
            {page == 1 ? <div className="one">
                <img src={map} className='map' alt=""></img>
                <img src={xiaoshi} className='xiaoshi' alt=""></img>
                <div className="text">嗨，桂子山的新山民们，欢迎你们来到美丽的CCNU 你能否走出重重迷宫找到华师的大门？</div>
                <button>开始冒险</button>
                <div className="btn" onClick={go}></div>
            </div> : ''}
            {/* 第一站 */}


        </div>
    )

}

export default Routine