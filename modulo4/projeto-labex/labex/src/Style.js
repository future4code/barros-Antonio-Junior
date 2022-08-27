import styled from "styled-components"

export const Trip=styled.div`
    border:2px  darkviolet ;
    border-style: dashed;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
    padding: 20px;
    width: max-content;
    border-radius: 15px;
    margin-top: 10px;
    h1{
        text-transform: uppercase;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    `
export const InfoTrip=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: flex-start;
    width: max-content;
    p{
        font-weight: bold;
        margin:1px 0 1px 0;
        font-size: 15pt;
    }
    `
export const TPage=styled.div`
    width: max-content;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border: 3px solid darkorange;
    justify-content: stretch;
    align-items: center;
    `
export const MyForm=styled.form`
    display: flex;
    flex-direction:column;
    
    margin: 0 auto;
    width: max-content;
    padding: 30px;
    border: 2px solid darkorange;
    border-radius: 15px;
    label{
        font-size: 20px;
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
    }
    input{
        font-size: 16px;
        padding: 5px;
        border: 1px solid black;
        background: lightcyan;
        margin: 4px 0 4px 0;
        font-weight: bold;
    }
  
`
export const MyButton=styled.button`
        padding:10px ;
        width: 100%;
        margin-top: 2px;
        background: darkorange;
        font-weight: bold;
        text-transform: uppercase;
        color: white;
        font-size:15px ;
        text-shadow: 1px 1px 2px black;
        :hover{
            background-color: lightcoral;
        }
`
export const MyHeader=styled.header`
        padding:10px ;
        width: 100%;
        margin-top: 2px;
        background: darkorange;
        font-weight: bold;
        text-transform: uppercase;
        color: white;
        font-size:15px ;
        text-shadow: 1px 1px 2px black;
        :hover{
            background-color: lightcoral;
        }
`