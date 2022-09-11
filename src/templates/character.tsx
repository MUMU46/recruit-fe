import React from 'react'
import '../Styles/character.less'
import Badge from "../Components/Badge";
import mex from '../images/mmexport1659345932868.jpg'
import img from '../images/xiaoshi.jpg'
import {useLocation} from "react-router-dom";

const Character = () => {
    const location = useLocation();
    // @ts-ignore
    const data = location.state.data;
    console.log(location)

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
            <div className="char_bieji">
                <img src={img} alt="" className="char_img"/>
                <div className="char_dialog">
                    <p>别急着去下一个地方,校徽背面好像有字......</p>
                </div>
            </div>
            <Badge word={data[0]}/>
        </div>
    )
}
export default Character;