import React from 'react';
import styled from 'styled-components';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Widgets() {

   const newArticle = (heading, subtitle) => (
       <div className="widgets_article">
           <div className="widgets_articleLeft">
              <FiberManualRecordIcon />
           </div>
           <div className="widgets_articleRight">
               <h4>{heading}</h4>
               <p>{subtitle}</p>
           </div>
       </div>
   )

    return (
        <Div>
            <div className="widgets_header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>
            <div>
            {newArticle("Python for beginners", "Top News - 9088 readers")}
            {newArticle("Find a job during the COVID-19", " 3050 readers")}
            {newArticle("React-Redux Crush Course", "1599 readers")}
            {newArticle("Junior Developers community", "1470 readers")}
            {newArticle("Unity 3D Game Developers", "1465 readers")}
            {newArticle("How to stay healthy these days", "1380 readers")}
            </div>
        </Div>
    )
}

export default Widgets;

const Div = styled.div`
   flex: 0.2;
   position: sticky;
   top: 80px;
   background-color: white;
   border-radius: 10px;
   border: 1px solid lightgray;
   height: fit-content;
   padding-bottom: 10px;

   .widgets_header{
       display: flex;
       align-items: center;
       justify-content: space-between;
       padding: 10px;
   }

   .widgets_header > h2{
       font-size: 16px;
       font-weight: 400;
   }

   .widgets_article{
       display: flex;
       padding: 10px;
       cursor: pointer;
   }

   .widgets_article:hover{
       background-color: whitesmoke;
   }

   .widgets_articleLeft{
       color: #0177b7;
       margin-right: 5px;
   }

   .widgets_articleLeft > .MuiSvgIcon-root {
       font-size: 15px;
   }

   .widgets_articleRight{
       flex: 1;
   }

   .widgets_articleRight > h4{
       font-size: 14px;
   }

   .widgets_articleRight > p{
       font-size: 12px;
       color: gray;
   }
`


