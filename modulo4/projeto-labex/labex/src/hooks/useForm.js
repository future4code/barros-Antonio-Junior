import { useState } from "react"


export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChange = (event) =>{
        const { name, value } = event.target //desestruturação do event.target.name e event.target.value
        setForm({...form, [name]: value}) //[name] => sintaxe de [] para acessar propriedades de objetos
    }

    const clear = () => {
        setForm(initialState) //limpar inputs
    }

    return [form, onChange, clear]
}