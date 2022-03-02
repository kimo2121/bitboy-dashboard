import { useEffect, useState } from 'react';
import Menu from '../menu/Menu';
import Topbar from '../topbar/Topbar'
import './whiteHome.scss'
import { useMediaQuery } from 'react-responsive'
export default function WhiteHome() {
    const [menuOpen, setMenuOpen] = useState(false);
    const isTabletOrMobile = useMediaQuery({ query: 'screen and (max-width: 768px) and (orientation:portrait)' })
    const isLandOrMobile = useMediaQuery({ query: 'screen and (max-height: 768px) and (orientation:landscape)' })
    useEffect(() => {
        if (isTabletOrMobile){
        }

        if (isLandOrMobile){
        }
        if (!isLandOrMobile && !isTabletOrMobile){
            setMenuOpen(false)
        }
        
    }, [isTabletOrMobile, isLandOrMobile, setMenuOpen]);
    return (
        <div className="whiteHome">
            <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
            <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
            <div className="homeContent">
                <div className="wrapper">
                    <h1>WhitePapeer</h1>
                </div>
            </div>
        </div>
    )
}
