import React from 'react';
import * as S from "../Style"
import * as Rot from "../Routers/Coordinator"
import {useNavigate} from "react-router-dom"
export default function UserPage() {
  const navigate=useNavigate()
  return (
    <S.TPage>
      <h1>Este é seu sistema de viagens!</h1>
      <S.MyButton onClick={()=>{Rot.goToTripsPage(navigate)}}>Minhas Viagens</S.MyButton>
      <S.MyButton onClick={()=>{Rot.goToNewTripPage(navigate)}}>Adicionar Viagens</S.MyButton>
      <S.MyButton onClick={()=>{Rot.goToLoginPage(navigate)}}>Trocar de Usuário</S.MyButton>
    </S.TPage>
  );
}