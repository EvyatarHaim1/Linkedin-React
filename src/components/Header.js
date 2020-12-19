import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
function Header() {
    return (
        <Div>
            <HeaderLeft>
                <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlfcwxpxBo_uFK-p4fNNG-2XEJvhLq01ypfQ&usqp=CAU" 
                        alt="linkedinIcon" />
                <div className="header_search">
                    <SearchIcon />
                    <input type="text"/>
                </div>
            </HeaderLeft>

            <HeaderRight>
                <HeaderOption title="Home" Icon={HomeIcon} />
                <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
                <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
                <HeaderOption title="Messaging" Icon={ChatIcon} />
                <HeaderOption title="Notifications" Icon={NotificationsIcon} />
                <HeaderOption title="Me"
                avatar="https://media-exp1.licdn.com/dms/image/C4E35AQHUgd2Cs-FccA/profile-framedphoto-shrink_100_100/0/1606480219666?e=1608328800&v=beta&t=2bfDS5gu-EpJ1OjNOyIPS6wHxYvXGi20unqIGe1LZlQ" />

                

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

    img {
    object-fit: contain;
    height: 40px;
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
