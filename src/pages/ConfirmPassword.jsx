import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import styled from 'styled-components'
import {Button} from 'antd'
import img from '../img/이메일인증.png'
import MainHeader from "../components/MainHeader";

const Wrapper = styled.div`
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
  
   p {
     margin-top: 30px;
     color: #76adff;
     font-size: 14px;
     font-weight: bold;
   }
`

const STButton = styled(Button)`
  display: block;
  margin: 0 auto;
  min-width: 240px;
  height: 56px;
  background: #76adff;
  color:white;
`

const ConfirmPassword = () => {

    const location = useLocation()
    const token = location.search.slice(7)
    const navigate = useNavigate()
    console.log(token)

    const confirmEmail = async () => {
        try {

            const {data} = await axios.post('http://localhost:8080/auth/confirm', { token })

            if(data.statusCode === 200) {
                alert('비밀번호 인증 완료')
                navigate('/')
            }
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <>
            <MainHeader/>
            <Wrapper>
                <div>
                    <img src={img} width={500}/>
                    <STButton onClick={confirmEmail}>인증 완료</STButton>
                    <p>
                        버튼을 눌러 비밀번호 인증을 완료해 주세요!
                    </p>
                </div>
            </Wrapper>
        </>
    );
};

export default ConfirmPassword;