import { useEffect, useState } from "react";
import axios from 'axios';
const useRequestDataTripsDetail=(url,headers)=>{
    
  const [data, setData] = useState(undefined)

  useEffect(() => {
    axios.get(url,headers).then((response) => {
      setData(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [url])

    return data;

}
export default useRequestDataTripsDetail;