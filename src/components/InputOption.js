import React from 'react';
import styled from 'styled-components';

function InputOption({ Icon, title, color }) {
    return (
        <Div>
            <Icon style={{ color: color}} />
            <h4> {title} </h4>
        </Div>
    )
}

export default InputOption;

const Div = styled.div`
 display: flex;
 align-items: center;
 margin-top: 15px;
 color: gray;
 padding: 10px;
 cursor: pointer;

 :hover{
     background-color: whitesmoke;
     border-radius: 10px;
 }

 h4{
     margin-left:5px;
 }
`