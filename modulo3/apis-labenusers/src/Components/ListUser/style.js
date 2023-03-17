import styled from 'styled-components';

export const ButtonNavigate = styled.div`
    button{
            height:4vh;
            cursor:pointer;
            display:flex;
            align-items:center;
            border-radius:10px;
        }

`

export const PageTitle = styled.div`
    h1{
        text-align:center;
    }
`
export const ContainerList = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width: 15vw;
    padding:10px;
    margin-left:570px;
    border-radius:10px;
    box-shadow: 2px 2px 5px 2px black;

    button{
        cursor:pointer;
        border-radius:10px;
    }

    button:hover{
        background-color:red;
    }

`

export const ContainerSearch = styled.div`

    display:flex;
    flex-direction:column;
    align-items:center;

    input{
        border-radius:10px;
    }

    button{
        margin-top:5px;
        cursor:pointer;
        border-radius:10px;
    }

`

