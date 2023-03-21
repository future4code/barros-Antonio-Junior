import React from 'react';
import { useForm } from '../hooks/useForm';
import * as S from "../Style"
import * as Rot from "../Routers/Coordinator"
import  axios from "axios"
import { BASE_URL } from '../constants/constants';
import {useNavigate} from "react-router-dom"

export default function NewTripPage() {
  const navigate=useNavigate()
  const [form, onChange, clear] = useForm({ name: "", planet: "", date: ""})
  
  const cadastrarViagem = (event) => {
    event.preventDefault()
    const body={ name:form.name , 
                 planet: form.planet, 
                 date: form.date, 
                 description: "sem valor", 
                 durationInDays: 100}
    console.log(body);
    axios.post(`${BASE_URL}junior-prado/trips`,body,{headers:{auth:localStorage.getItem('token')}})
      .then((response) => {
        alert("Viagem cadastrada com sucesso")
        clear();
      })
      .catch((error) => console.log(error))
    }


  return (
    <S.TPage>
      <h1>Cadastro de viagens</h1>
      <S.MyForm onSubmit={cadastrarViagem}>
        <h1>Resitar nova viagem</h1>
        <label htmlFor='name'>Nome</label>
        <input type="text" name='name' value={form.name} id="name" onChange={onChange} required />
        <label htmlFor='planet'>Destino</label>
        <input type="text" name='planet' value={form.planet} id="planet" onChange={onChange} required />
        <label htmlFor='date'>Data</label>
        <input type="text" name='date' value={form.date} id="date" onChange={onChange} pattern="^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$" required />
        <S.MyButton>Cadastrar viagem</S.MyButton>
        <S.MyButton type='button ' onClick={()=>{Rot.goToBack(navigate)}}>Voltar</S.MyButton>
      </S.MyForm>
    </S.TPage>
  );
}