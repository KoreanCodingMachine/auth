import React, {useState} from 'react';
import axios from 'axios'
import {useLocation,useNavigate} from "react-router-dom";
import styled from "styled-components";
import {Button, Image, Input, Space} from "antd";
import img from "../img/이메일인증.png";
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

  .input-box {
    min-width: 440px;
    width: 440px;
    min-height: 60px;
    background: #f5f5f5;
    display: block;
    margin: 0 auto;
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


const ChangePassword = () => {

    const location = useLocation()
    const navigate = useNavigate()

    // 리다이렉트 토큰
    const token = location.search.slice(7)

    console.log(token)

    const [inputs, setInputs] = useState({
        newPassword:'',
        newPasswordConfirm:''
    })

    const onChange = (event) => {
        const {value, name} = event.target
        setInputs({
            ...inputs,
            [name] : value
        })
    }

    const onClick = async () => {

        const {newPassword, newPasswordConfirm} = inputs

        console.log(newPassword,newPasswordConfirm)

        try {
            
            if(newPassword !== newPasswordConfirm) {
                alert('다시 입력해라')
            }
            
            const userInput = {
                token,
                newPassword
            }

            const {data, status} = axios.post('url',userInput)

            console.log(data)

            if(status === 200) {
                alert('비밀번호 변경이 완료되었습니다.')
                navigate('/login')
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
                    <Image src={img} width={500}/>
                    <h1>
                        비밀번호 변경
                    </h1>
                    <Space direction={"vertical"}>
                        <Input placeholder='새로운 비밀번호를 입력해주세요' type='text' onChange={onChange} name='newPassword' className='input-box' required/>
                        <Input placeholder='새로운 비밀번호를 확인해 주세요' type="text" onChange={onChange} name='newPasswordConfirm' className='input-box' required/>
                        <STButton onClick={onClick}>비밀번호 변경하기</STButton>
                    </Space>
                </div>
            </Wrapper>
        </>

    );
};

export default ChangePassword;