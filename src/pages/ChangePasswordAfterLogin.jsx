import React, {useState} from 'react';
import {Button, Image, Input, Space} from "antd";
import styled from 'styled-components'
import img from "../img/이메일인증.png";
import MainHeader from "../components/MainHeader";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;

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

const ChangePasswordAfterLogin = () => {

    const navigate = useNavigate()

    const [inputs, setInputs] = useState({
        currentPassword:'',
        newPassword:''
    })

    const onChange = (event) => {
        const {name,value} = event.target

        setInputs({
            ...inputs,
            [name]:value
        })
    }

    const onChangePassword = async () => {

        const {currentPassword,newPassword} = inputs
        const token = localStorage.getItem('token')

        try{
            const userInput = {
                token,
                currentPassword,
                newPassword
            }

             const {data, status} = axios.post('url',userInput)

             if (status === 200) {
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
                    <div>
                        <Image
                            width={500}
                            src={img}
                        />
                    </div>

                    <Space direction='vertical'>
                        <Input placeholder='현재 비밀번호를 입력해주세요' type='text' onChange={onChange} name='currentPassword' className='input-box' required/>
                        <Input placeholder='새로운 비밀번호를 입력해주세요' type="text" onChange={onChange} name='newPassword' className='input-box' required/>
                        <STButton onClick={onChangePassword}>비밀번호 변경</STButton>
                    </Space>
                </div>
            </Wrapper>
        </>

    );
};

export default ChangePasswordAfterLogin;