import {BrowserRouter, Route, Routes,useNavigate} from "react-router-dom"
import { useEffect } from "react"
import Routine from './templates/Routine'
import Search from './templates/Search1'
import Search2 from './templates/Search2'
import Search3 from './templates/Search3'
import Search4 from './templates/Search4'
import Nanmen from "./templates/Nanmen";
import Character from "./templates/character";
import Collect1 from "./templates/collect1";
import Collect2_1 from "./templates/collect2_1";
import Collect2_2 from "./templates/collect2_2";
import Collect3_1 from "./templates/collect3_1";
import Collect3_2 from "./templates/collect3_2";
import Collect4_1 from "./templates/collect4_1";
import Collect4_2 from "./templates/collect4_2";
import Collect5 from "./templates/collect5";
import End from "./templates/end";
import Tip from "./templates/tip"


function App() {



    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Routine/>}/>
                <Route path='/stone' element={<Search/>}/>
                <Route path='/search2' element={<Search2/>}/>
                <Route path='/search3' element={<Search3/>}/>
                <Route path='/search4' element={<Search4/>}/>
                <Route path='/south' element={<Nanmen/>}/>
                <Route path='/collect1' element={<Collect1/>}/>
                <Route path='/collect2_1' element={<Collect2_1/>}/>
                <Route path='/collect2_2' element={<Collect2_2/>}/>
                <Route path='/collect3_1' element={<Collect3_1/>}/>
                <Route path='/collect3_2' element={<Collect3_2/>}/>
                <Route path='/collect4_1' element={<Collect4_1/>}/>
                <Route path='/collect4_2' element={<Collect4_2/>}/>
                <Route path='/collect5' element={<Collect5/>}/>
                <Route path='/char' element={<Character/>}/>
                <Route path='/end' element={<End/>}/>
                <Route path='/tip' element={<Tip />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
