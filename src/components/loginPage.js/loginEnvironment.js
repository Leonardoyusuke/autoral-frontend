import styled from "styled-components"
export default function loginEnvironment(){
    return(<><Forms>
        <Input username placeholder='   Email' />
        <Input placeholder='   Password' />
        <Button login >Entrar</Button>
        <p>Esqueceu a senha?</p>
    </Forms>
    <Layout3>
        <Line></Line>
        <Button>Cadastre-se</Button>
    </Layout3></>)
}
export const Line = styled.div`
margin-top: 0.5vw;
border: 1px solid gray;
width: 17vw;
`

export const Layout3 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const Button = styled.button`
width: 17.5vw;
height: 2vw;
border-radius: 3px;
background-color: ${props => (props.login ? "#1977F2" : "#42B729")};
margin-top: 1vw;


`
export const Forms = styled.form`
display: flex;
flex-direction: column;
align-items: center;
p{
    color: #1977F2;
}
`
export const Input = styled.input`
margin-top: ${props => (props.username ? "3vw" : "1vw")};   
height: 2vw;
width: 17vw;
border-radius: 1px;
`

export const Display = styled.div`
display:flex;`

export const Layout = styled.div`
margin-top:10vw;
margin-left:15vw;
`
export const Layout2 = styled.div`
margin-top:10vw;
margin-left:15vw;
width: 25vw;
height: 25vw;
border-radius:10px;
border-color: #8A8D91;
background-color:white;
`

export const Text = styled.text`
font-size:8vw;
color: #1977F2;
p{
    font-size: 1.5vw;
    margin-top: -1vw;
    color : black;
}

`