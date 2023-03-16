import React,{useState}from 'react';
import axios from 'axios';
import {baseURL} from '../../constants/index';
import { ButtonNavigate, ContainerRegistration, ContainerTitle } from './style';


function UserRegistration(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    

    const onChangeName = (e) =>{
        setName(e.target.value)
    }

    const onChangeEmail = (e) =>{
        setEmail(e.target.value)
    }

    const headers ={
      headers:{
        Authorization: "antonio-braz-barros"
      }
    }

    const body ={
      "name":name,
      "email":email
    }


    const createNewUser =() =>{
      axios
      .post(`${baseURL}`, body, headers)
      .then((response) =>{
        console.log(response.data)
        setName(response.data)
        setEmail(response.data)
        alert('usuario cadastrado com sucesso!!!')
      })
      .catch((err) =>{
        console.log(err)
      })
    }



    return (
      <div>
        <ButtonNavigate>
          <button onClick={() => props.changeScreen('list')}>Ir para Lista de usuários</button>
        </ButtonNavigate>
        <ContainerTitle>
          <h1>Seja Bem vindo !
          </h1>
        </ContainerTitle>
        <ContainerRegistration>
          <h3>Cadastre seu usuário</h3>
          <input 
          placeholder='Nome'
          value={name}
          onChange={onChangeName}
          />
          <input 
          placeholder='Email'
          value={email}
          onChange={onChangeEmail}
          />
          <button onClick={createNewUser}>Criar Usuário</button>
        </ContainerRegistration>
      </div>
    );
}

export default UserRegistration;