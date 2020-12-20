import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase';
import {login } from '../features/userSlice';

function Login() {

   const [ name, setName ] = useState('');
   const [ email, setEmail ] = useState('');
   const [ password, setPassword ] = useState('');
   const [ profilePic, setProfilePic ] = useState('');
   const dispatch = useDispatch();

   const loginToApp = (e) => {
       e.preventDefault();
      
   };

   const register = () => {
      if(!name){
          return alert('Please enter a full name');
      }

      auth.createUserWithEmailAndPassword(email, password)
      .then(( userAuth ) => {
          userAuth.user.updateProfile({
              displayName: name,
              photoURL: profilePic,
          })
          .then(() => {
             dispatch(login({
                 email: userAuth.user.email,
                 uid: userAuth.user.uid,
                 displayName: name,
                 photoURL: profilePic,
             })
            );
          })
      })
      .catch(error => alert(error));
   };

    return (
        <Div>
            <img
               src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c528.png"
               alt="" 
            />

            <form>
               <input  placeholder="Full Name (required if registering)"
                       type="text" 
                       value={name}
                       onChange={e=> setName(e.target.value)}
               />
               <input type="text" 
                      placeholder="Profile pic URL (optional)"
                      value={profilePic}
                       onChange={e=> setProfilePic(e.target.value)}
               />
               <input type="email" 
                      placeholder="Email"
                      value={email}
                       onChange={e=> setEmail(e.target.value)}
               />
               <input type="password" 
                      placeholder="Password"
                      value={password}
                       onChange={e=> setPassword(e.target.value)}
               />
               <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member?{" "}
                <span className="login_register"
                      onClick={register}>
                Register Now
                </span>
            </p>
        </Div>
    )
}

export default Login;

const Div = styled.div`
   display: grid;
   place-items: center;
   margin-left: auto;
   margin-right: auto;
   padding-top: 100px;
   padding-bottom: 100px;
   /* height: 100%; */

   img{
       object-fit: contain;
       height: 70px;
       margin-top: 20px;
       margin-bottom: 20px;
   }

   form{
       display: flex;
       flex-direction: column;
   }

   form > input {
       width: 350px;
       height: 50px;
       font-size: 20px;
       padding-left: 10px;
       margin-bottom: 10px;
       border-radius: 5px;
   }

   form > button {
       width: 365px;
       height: 50px;
       font-size: large;
       color: #fff;
       background-color: #0074b1;
       border-radius: 5px;
   }

   .login_register{
       color: #0177b7;
       cursor: pointer;
   }

   p{
       margin-top: 20px;
   }
`