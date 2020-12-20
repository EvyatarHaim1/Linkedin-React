import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

function HeaderOption({ avatar, Icon , title, onClick }) {
    return (
        <Div onClick={onClick}>
            {Icon && <Icon className="headerOption_icon" />}
            {avatar && (
                <Avatar className="headerOption_icon" src={avatar.photoURL}>
                    {avatar.email[0]}
                </Avatar>
            )}
            <h3 className="headerOption_title">{title}</h3>
        </Div>
    )
}

export default HeaderOption;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    color: gray;
    cursor: pointer;

    :hover{
        color: black;
    }

    .headerOption_title{
        font-size: 12px;
        font-weight: 400;
    }

    .headerOption_icon{
        object-fit: contain;
        height: 25px !important;
        width: 25px !important;
    }
`
