import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Navbar = () => {

    const [home, setHome] = useState(true)
    const [upload, setUpload] = useState(false)
    const [notification, setNotification] = useState(false)
    const [user, setUser] = useState(false)

    const handleClickhome = ()=>{
        setHome(true);
        setUpload(false);
        setNotification(false)
        setUser(false)
    }

    const handleClickupload = ()=>{
        setUpload(true);
        setNotification(false)
        setUser(false)
        setHome(false);
    }

    const handleClicknoti = ()=>{
        setNotification(true);
        setHome(false);
        setUpload(false);
        setUser(false)
    }

    const handleClickuser = ()=>{
        setUser(true);
        setNotification(false);
        setHome(false);
        setUpload(false);
    }

    return (
        <>
        <div className="bg-gray-200">
            <div className="Navbar">
                <div className="Nav__items  grid grid-flow-col grid-cols-3 gap-2  py-1">
                    <div className="Nav__logo  Nav__item w-max flex ml-2">
                        {/* <img src="../" alt="instagram" /> */}
                        <i className="fa fa-anchor"></i>
                        </div>
                    <div className="Nav__search Nav__item w-max flex  rounded p-1 focus:ring-2" >
                        <div className="searchbox">

                        <i className="fa fa-search mx-2 absolute text-gray-200 left-100 top-4"></i>
                        <input type="search" placeholder="Search" className="py-1 pl-9 w-full text-gray-100 bg-blue-500 border-0 border-b outline-none placeholder-gray-200 rounded focus:border-green-600 focus:outline-none focus:ring-green-100 focus:ring-2 " />
                        </div>
                         {/* <Searchbar /> */}

                    </div>
                    <div className="Nav__icon  Nav__item hidden md:flex">
                        <div className="Nav__icon_item  flex m-auto">
                            <Link to="/" onClick={handleClickhome}>
                           {home ? <HomeIcon /> : <HomeOutlinedIcon /> }
                            {/* <i className="fa fa-home"></i> */}
                            </Link></div>
                        <div className="Nav__icon_item  flex m-auto">
                            {/* upload btn */}
                            <Link to="/upload" onClick={handleClickupload}>

                                {/* font icon */}
                                {/* <i className="fa fa-plus-square-o" id="Upload_btn"></i> */}

                                {/* material icon */}
                                {upload? <AddBoxIcon />:  <AddBoxOutlinedIcon />}

                                </Link></div>
                        <div className="Nav__icon_item flex m-auto">
                            <Badge badgeContent={notification ? 0 : 10} color="secondary" >
                                {/* notification */}
                                <Link to="/notification" onClick={handleClicknoti}> 
                                {/* <i className="fa fa-bell-o"  id="Notification_btn"></i> */}

                               {notification ?  <NotificationsIcon /> : <NotificationsNoneOutlinedIcon  />}
                                    </Link>
                            </Badge>
                        </div>
                        <div className="Nav__icon_item flex m-auto" onClick={handleClickuser}>
                            {/* user */}
                            <Link to="/user" >
                                 {/* <i className="fa fa-user-o"   id="User_btn"></i> */}
                               {user ? <AccountCircleIcon />  : <AccountCircleOutlinedIcon />}
                                </Link></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="mobie flex bg-gray-400 bottom-0 md:hidden fixed w-full">
                <div className="Nav__icon  Nav__item flex gap-4 justify-evenly">
                        <div className="Nav__icon_item px-3 flex m-auto ">
                            <Link to="/" onClick={handleClickhome}>
                           {home ? <HomeIcon /> : <HomeOutlinedIcon /> }
                            {/* <i className="fa fa-home"></i> */}
                            </Link></div>
                        <div className="Nav__icon_item px-3 flex m-auto ">
                            {/* upload btn */}
                            <Link to="/upload" onClick={handleClickupload}>

                                {/* font icon */}
                                {/* <i className="fa fa-plus-square-o" id="Upload_btn"></i> */}

                                {/* material icon */}
                                {upload? <AddBoxIcon />:  <AddBoxOutlinedIcon />}

                                </Link></div>
                        <div className="Nav__icon_item px-3 flex m-auto ">
                            <Badge badgeContent={notification ? 0 : 10} color="secondary" >
                                {/* notification */}
                                <Link to="/notification" onClick={handleClicknoti}> 
                                {/* <i className="fa fa-bell-o"  id="Notification_btn"></i> */}

                               {notification ?  <NotificationsIcon /> : <NotificationsNoneOutlinedIcon  />}
                                    </Link>
                            </Badge>
                        </div>
                        <div className="Nav__icon_item px-3 flex m-auto ">
                            {/* user */}
                            <Link to="/user"  onClick={handleClickuser}>
                                 {/* <i className="fa fa-user-o"   id="User_btn"></i> */}
                               {user ? <AccountCircleIcon />  : <AccountCircleOutlinedIcon />}
                                </Link></div>
                    </div>
        </div>
        </>
    )
}
