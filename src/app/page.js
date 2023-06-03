'use client';
import LoginPage from '@/components/loginPage.js/loginPage';
import styled from 'styled-components'

export default function Home() {
  return (<Header>
    <LoginPage></LoginPage>
  </Header>
  
  )
}

const Header = styled.body`
background-color: #EFF2F5;
margin: 0;
;`