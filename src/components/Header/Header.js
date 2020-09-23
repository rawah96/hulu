import React from 'react'
import './Header.css'
import HomeIcon from '@material-ui/icons/LiveTv';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import FlashOnIcon from '@material-ui/icons/FlashOn'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'

function Header() {
    return (
        <div className="header">
            <div className="icons">
                <div className="icon">
                    <HomeIcon />
                    <p>home</p>
                </div>
                <div className="icon">
                    <FlashOnIcon />
                    <p>Trending</p>
                </div>
                <div className="icon">
                    <LiveTvIcon />
                    <p>Verified</p>
                </div>
                <div className="icon">
                    <VideoLibraryIcon />
                    <p>Collections</p>
                </div>
                <div className="icon">
                    <SearchIcon />
                    <p>Search</p>
                </div>
                <div className="icon">
                    <PersonOutlineIcon />
                    <p>Account</p>
                </div>
            </div>
            <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" alt="" />
        </div>
    )
}

export default Header
