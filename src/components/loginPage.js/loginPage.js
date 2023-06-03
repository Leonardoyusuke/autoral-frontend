'use client'
import { useState } from 'react'
import styled from 'styled-components'
export default function LoginPage() {
    const [registerEnvironment, setRegisterEnvironment] = useState(true)

    return (
        <Display><Layout>
            <Text><p>Conecte-se com seus amigos</p>
                <p> do mundo todo enquanto aposta</p> </Text>
        </Layout>

        </Display>
    )
}
const Line = styled.div`
margin-top: 0.5vw;
border: 1px solid gray;
width: 17vw;
`

const Layout3 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Button = styled.button`
width: 17.5vw;
height: 2vw;
border-radius: 3px;
background-color: ${props => (props.login ? "#1977F2" : "#42B729")};
margin-top: 1vw;


`
const Forms = styled.form`
display: flex;
flex-direction: column;
align-items: center;
p{
    color: #1977F2;
}
`
const Input = styled.input`
margin-top: ${props => (props.username ? "3vw" : "1vw")};   
height: 2vw;
width: 17vw;
border-radius: 1px;
`

const Display = styled.div`
display:flex;`

const Layout = styled.div`
margin-top:10vw;
margin-left:15vw;
`
const Layout2 = styled.div`
margin-top:10vw;
margin-left:15vw;
width: 25vw;
height: 25vw;
border-radius:10px;
border-color: #8A8D91;
background-color:white;
`

const Text = styled.text`
font-size:8vw;
color: #1977F2;
p{
    font-size: 1.5vw;
    margin-top: -1vw;
    color : black;
}

`