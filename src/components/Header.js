import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { auth } from '../firebase';
import { logout, selectUser } from '../features/userSlice';
function Header() {

    const user = useSelector(selectUser)
    const dispatch = useDispatch();

    const logoutofApp = () => {
        dispatch(logout())
        auth.signOut();
    }

    return (
        <Div>
            <HeaderLeft>
                <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlfcwxpxBo_uFK-p4fNNG-2XEJvhLq01ypfQ&usqp=CAU" 
                        alt="linkedinIcon" />
                <div className="header_search">
                    <SearchIcon />
                    <input placeholder="search" type="text"/>
                </div>
            </HeaderLeft>

            <HeaderRight>
                <HeaderOption title="Home" Icon={HomeIcon} />
                <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
                <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
                <HeaderOption title="Messaging" Icon={ChatIcon} />
                <HeaderOption title="Notifications" Icon={NotificationsIcon} />
                <HeaderOption title="Me" onClick={logoutofApp}
                avatar={user} />

                

            </HeaderRight>


        </Div>
    )
}

export default Header;

const Div = styled.div`
   display: flex;
   position: sticky;
   background-color: white;
   top: 0;
   justify-content: space-evenly;
   border-bottom: 0.1px solid lightgray;
   padding-top: 10px;
   padding-bottom: 10px;
   width: 100%;
   z-index: 999;
`
const HeaderLeft = styled.div`
    display: flex;
    margin-left: -10%;

    img {
    object-fit: contain;
    height: 35px;
    margin-right: 10px;
        }
    
    .header_search{
        padding: 10px;
        display: flex;
        align-items: center;
        border-radius: 5px;
        height: 22px;
        color: gray;
        background-color: #eef3f8;
    }

    .header_search > input {
        outline: none;
        border: none;
        background:none;
    }
`

const HeaderRight = styled.div`
     display: flex;
     `
