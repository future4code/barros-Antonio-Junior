import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {baseURL} from '../../constants/index';
import { ButtonNavigate, PageTitle, ContainerList, ContainerSearch } from './style';


function ListUser(props) {
  const [allUsers, setAllUsers] = useState([])
  const [search, setSearch] =useState('')
  const [filteredUsers, setFilteredUsers] = useState(false)


  const onChange =(e)=>{
      setSearch(e.target.value)
  }


  useEffect(() =>{
      getAllUsers()
  }, [])

  const headers ={
      headers:{
        Authorization: "antonio-braz-barros"
      }
  }

  function getAllUsers(){
        axios
        .get(`${baseURL}`, headers)
        .then((response) =>{
          setAllUsers(response.data)
        })
        .catch((err) =>{
          console.log(err)
        })

        if(filteredUsers){
          setFilteredUsers(!filteredUsers)
        }
  }


  const searchUsers =() =>{  
      axios
      .get(`${baseURL}/search?name=${search}&email=`, headers)
      .then((response) =>{
        setAllUsers(response.data)
        setFilteredUsers(!filteredUsers)
        setSearch("")
      })
      .catch((err) =>{
          console.log(err)
      })
  }


  const deleteUsers =(id) =>{
      axios
      .delete(`${baseURL}/${id}`, headers)
      .then((response) =>{
      console.log(response.data)
      alert('Usuário deletado com sucesso')
      })
      .catch((err) =>{
          console.log(err)
      })
  }

 


  return (
    <div>
        <ButtonNavigate>
          <button onClick={() => props.changeScreen('start')}>Ir para tela inicial</button>
        </ButtonNavigate>
          <PageTitle>
            <h1>Tela Usuários</h1>
          </PageTitle>
          <ContainerList>
            <h2>Lista Usuários:</h2>
              {allUsers.map((item) =>{
                return(
                  <div key={item.id}>
                    <li>{item.name}</li>
                  <button onClick={()=> deleteUsers(item.id)}>Deletar usuário</button>
                  </div>
                )
              })}
          </ContainerList>
        <ContainerSearch>
          <h3>Busca por usuários:</h3>
          <input placeholder='Busca por usuários'
              value={search}
              onChange={onChange}
          />
          {filteredUsers ? <button onClick={() => getAllUsers()}>Voltar</button> : <button onClick={() =>searchUsers(search)}>Buscar Usuários</button> }
        </ContainerSearch>
    </div>
  );
}

export default ListUser;