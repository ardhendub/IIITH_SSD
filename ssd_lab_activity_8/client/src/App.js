import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Dash from "./pages/Dash"
import AddQuery from './pages/AddQuery'

const App = ()=>{
    return (<div>
        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Landing/>}></Route>
            <Route path="/login" exact element={<Landing/>}></Route>
            <Route path="/signup" exact element={<Landing/>}/>
            <Route path="/dash" exact element={<Dash/>}/>
            <Route path="/addQuery" exact element={<AddQuery/>}/>
            </Routes>
        </BrowserRouter>
    </div>)
}

export default App



