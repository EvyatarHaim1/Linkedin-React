import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, login, logout } from './features/userSlice';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Login from './components/Login';
import './App.css';
import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged( userAuth => {
      if(userAuth){
          dispatch(login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          }));
      } else{
          dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="App">

      {!user ? <Login /> :(
        <>
       <Header />
      <div className="app_body">
          <Sidebar />
          <Feed />
          <Widgets />
      </div>
      </>
      )}

    </div>
  );
}

export default App;
