import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';

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
                <HeaderOption title/>
            </HeaderRight>


        </Div>
    )
}

export default Header;

const Div = styled.div`
   display: flex;
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

const HeaderRight = styled.div``
