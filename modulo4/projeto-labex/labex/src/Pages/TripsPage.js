import CardTrip from "../components/CardTrip";
import { BASE_URL } from "../constants/constants"
import { useProtectePage } from "../hooks/useProtectePage";
import useRequestDataTrips from "../hooks/useRequestDataTrips";
import * as S from "../Style"
import * as Rot from "../Routers/Coordinator"
import {useNavigate} from "react-router-dom"
export function TripsPage(){
    useProtectePage()
    onbeforeunload = function() {
        localStorage.removeItem("token");
      };
    const navigate=useNavigate();

    
    const [data,isLoading]=useRequestDataTrips(`${BASE_URL}junior-prado/trips`)

    console.log(data);
    const myTrips=data&&data.trips.map((trip)=>{
        return (
            <CardTrip key={trip.id} name={trip.name}  planet={trip.planet}  date={trip.date}/>
        )
    })

    return(
        <S.TPage>
            <S.MyButton onClick={()=>{Rot.goToBack(navigate)}}>Voltar</S.MyButton>
            <h1>Viagens Agendadas</h1>            
            {isLoading&&"Carregando!..."}
            {!isLoading&&data&&data.trips&&myTrips}
            {!isLoading&&data&&!data.trips&&"Ops! Algo deu errado!"}
        </S.TPage>
        
    )
}
