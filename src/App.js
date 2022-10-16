import {Routes, Route} from 'react-router-dom'
import 'bulma/css/bulma.min.css'
import {useState} from "react"

import {MainLayout, MovieLayout} from "./layouts";
import {Header} from "./components";


function App() {
    const [isDark, setIsDark] = useState(false)
    const onThemeChange = (value) => {
        setIsDark(value)
    }
    return (
        <div className={`${isDark ? "dark" : ""}`}>
            <div > <Header isDark={isDark} handleTheme={onThemeChange}/></div>
            <Routes>
                <Route path={'/'} element={<MainLayout isDark={isDark}/>}/>
                <Route path={'/:id'} element={<MovieLayout isDark={isDark} />}/>
                <Route path={'/search'} element={<MainLayout isDark={isDark} />}/>}/>
            </Routes>
        </div>
    );
}

export default App;
