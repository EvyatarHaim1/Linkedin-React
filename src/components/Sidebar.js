import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';

function Sidebar() {

    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <Sidebar_recentItem>
             <span className="sidebar_hash">#</span>
             <p>{topic}</p>
        </Sidebar_recentItem>
    )

    return (
        <Div>
            <Sidebar_top>
                <img src="https://media-exp1.licdn.com/dms/image/C4D16AQHfVv3xD2Rasw/profile-displaybackgroundimage-shrink_350_1400/0/1606146638746?e=1613606400&v=beta&t=NaxbLqDHhUxMgkTd9HIEy3pzC8wtaW8ieMjhHW9kum4" alt="coverImg" />
                <Avatar className="sidebar_avatar" src={user.photoURL}>
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </Sidebar_top>

            <Sidebar_stats>
                 <div className="sidebar_stat">
                      <p>Who viewed you</p>
                      <p className="sidebar_statNumber">2,543</p>
                 </div>
                 <div className="sidebar_stat">
                      <p>Viewes on post</p>
                      <p className="sidebar_statNumber">2,448</p>
                </div>   
            </Sidebar_stats>

            <Sidebar_bottom>
                 <p> Recent </p>
                 {recentItem('reactjs')}
                 {recentItem('programming')}
                 {recentItem('softwareengineer')}
                 {recentItem('design')}
                 {recentItem('developer')}
            </Sidebar_bottom>
        </Div>
    )
}

export default Sidebar;

const Div = styled.div`
 flex: 0.2;
 position: sticky;
 top: 80px;
 border-radius: 10px;
 height: fit-content;
`
const Sidebar_top = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   border: 1px solid lightgray;
   border-bottom: 0;
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
   background-color: white;
   padding-bottom: 10px;
   
   h4{
       color: gray;
       font-size: 12px;
   }

   h2{
        font-size:18px;

   }

   img{
       margin-bottom: -20px;
       width: 100%;
       height: 60px;
       border-top-left-radius: 10px;
       border-top-right-radius: 10px;
       object-fit: cover;
   }

.sidebar_avatar{
    margin-bottom: 10px;
    object-fit: contain;
}`

const Sidebar_stats = styled.div`

     padding: 10px;
     margin-bottom: 10px;
     border: 1px solid lightgray;
     background-color: white;
     border-bottom-left-radius: 10px;
     border-bottom-right-radius: 10px;

    .sidebar_stat{
        margin-top: 10px;
        display: flex;
        justify-content: space-between;

        .sidebar_statNumber{
            font-weight: bold;
            color: #0a66c2 !important;
        }
    }

    .sidebar_stat > p {
        color: gray;
        font-size: 13px;
        font-weight: 600;
    }
`

const Sidebar_bottom = styled.div`
    text-align: left;
    padding: 10px;
    border: 1px solid lightgray;
    background-color: white; 
    border-radius: 10px;
    margin-top: 10px;

    p{
        font-size: 13px;
        padding-bottom: 10px;
    }
`
const Sidebar_recentItem = styled.div`
    display: flex;
    font-size: 13px;
    color: gray;
    font-weight: bolder;
    cursor: pointer;
    margin-bottom: 5px;
    padding: 5px;

    .sidebar_hash{
        margin-right: 10px;
        margin-left: 5px;
    }

    :hover{
        background-color: whitesmoke;
        border-radius: 10px;
        cursor: pointer;
        color: black;
    }
    `


