import { useEffect, useState } from "react";
import axios from 'axios';
const useRequestDataTrips=(url)=>{
    
  const [isLoading, setIsLoading] = useState(undefined)
  const [data, setData] = useState(undefined)
  const [erro, setErro] = useState("")

  useEffect(() => {
    setIsLoading(true);
    axios.get(url).then((response) => {
      setIsLoading(false)
      setData(response.data)
    }).catch((error) => {
      setIsLoading(false)
      setErro(error)
    })
  }, [])

    return [data,isLoading,erro];

}
export default useRequestDataTrips;