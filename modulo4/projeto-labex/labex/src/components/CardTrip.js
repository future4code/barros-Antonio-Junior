import React from 'react';
import * as S from "../Style"

export default function CardTrip({name,planet,date}) {
 return (
   <S.Trip>
      <h1>{name||"Indefinido"}</h1>
      <S.InfoTrip>
        <p>Destino: {planet||"Indefinido"}</p>
        <p>Data: {date||"Indefinido"}</p>
      </S.InfoTrip>
   </S.Trip>
 );
}