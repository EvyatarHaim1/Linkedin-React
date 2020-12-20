import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import InputOption from './InputOption';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAlt';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
function Post({ name, description, message, photoURL }) {
    return (
        <Div>
            <Post_header>
                <Avatar src={photoURL}/>
            </Post_header>

            <Post_info>
                <h2> {name} </h2>
                <p> {description} </p>
            </Post_info>

            <Post_body>
                 <p>{message}</p>
            </Post_body>

            <Post_buttons>
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray"/>
                <InputOption Icon={ChatIcon} title="Comment" color="gray"/>
                <InputOption Icon={ShareIcon} title="Share" color="gray"/>
                <InputOption Icon={SendIcon} title="Send" color="gray"/>

            </Post_buttons>
        </Div>
    )
}

export default Post;

const Div = styled.div`
   background-color: white;
   padding: 15px;
   margin-bottom: 10px;
   border-radius: 10px;
`
const Post_header = styled.div`
   display: flex;
   margin-bottom: 10px;
`
const Post_info = styled.div`
   margin-left: 10px;

   p{
       font-size: 12px;
       color: gray;
   }

   h2{
       font-size: 15px;
   }
`
 
const Post_body = styled.div`
    overflow-wrap: anywhere;
`

const Post_buttons = styled.div`
    display: flex;
    justify-content: space-evenly;
`