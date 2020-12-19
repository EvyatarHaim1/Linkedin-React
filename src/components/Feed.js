import React, { useState, useEffect } from 'react';
import Post from './Post';
import styled from 'styled-components';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
function Feed() {

    const [posts, setPosts] = useState([]);

    return (
        <Div>
            <div className="feedInput_container"> 
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type="submit"> Send </button>
                    </form>
                </div>
                <div className="feedInput_option">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7fc15e"/>

                </div>
            </div>

            <Post 
                  name="Evyatar Haim" 
                  description="Heyyyyyy" 
                  message = "hello world"
                  photoURL="https://media-exp1.licdn.com/dms/image/C4E35AQHUgd2Cs-FccA/profile-framedphoto-shrink_100_100/0/1606480219666?e=1608328800&v=beta&t=2bfDS5gu-EpJ1OjNOyIPS6wHxYvXGi20unqIGe1LZlQ"
            />
        </Div>
    )
}

export default Feed;

const Div = styled.div`
   flex: 0.6;
   margin: 0 20px;

   .feedInput_container{
       background-color: white;
       padding: 10px;
       padding-bottom: 20px;
       border-radius: 10px;
       margin-bottom: 20px;
   }

   .feed_input{
       border: 1px solid lightgray;
       border-radius: 30px;
       display: flex;
       padding: 10px;
       color: gray;
       padding-left: 15px;
   }

   .feed_input > form {
       display: flex;
       width: 100%;
   }

   .feed_input > form > input {
       border: none;
       flex: 1;
       margin-left: 10px;
       outline-width: 0;
       font-weight: 600;
   }

    .feed_input > form > button{
       display: none;
    }

    .feedInput_option{
        display: flex;
        justify-content: space-evenly;
    }
    `