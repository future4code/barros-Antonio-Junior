import axios from "axios"
import { BASE_URL } from "../constants/constants"
import { useForm } from "../hooks/useForm"
import { useNavigate } from "react-router-dom"
import * as Rot from "../Routers/Coordinator"
import * as S from "../Style"


export function LoginPage() {

    const [form, onChange] = useForm({ email: "", password: "" })


    const navigate = useNavigate()
    const fazerLogin = (event) => {
        event.preventDefault() //evita que a página seja renderizada novamente ao enviar o formulário
        axios.post(`${BASE_URL}junior-prado/login`,form)
            .then((response) => {

                console.log(response.data);

                localStorage.setItem("token", response.data.token)
                Rot.goToUserPage(navigate);
            })
            .catch((error) => console.log(error.message))
    }

    return (
        <S.TPage>
            <h1> Labex</h1>
            <S.MyForm onSubmit={fazerLogin}>
                <label htmlFor="email"> Email: </label>
                <input
                    name="email" //colocar igual a propriedade que está no estado inicial do useForm!!!!!!
                    id="email" //colocar igual ao htmlFor do label
                    placeholder="E-mail"
                    value={form.email}
                    onChange={onChange}
                    type="email" //faz validações de e-mail
                    required //torna campo obrigatório
                />
                <label htmlFor="senha"> Senha: </label>
                <input
                    name="password" //colocar igual a propriedade que está no estado inicial do useForm!!!!!!
                    id="senha" //colocar igual ao htmlFor do label
                    placeholder="Senha"
                    value={form.password}
                    onChange={onChange}
                    type="password" //oculta senha
                    pattern="^.{3,}$" //padrão Regex
                    title="mínimo de 3 caracteres"
                    required //torna campo obrigatório
                />

                <S.MyButton type="submit" >Logar </S.MyButton>
            </S.MyForm>
        </S.TPage>

    )
}