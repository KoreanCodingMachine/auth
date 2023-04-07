import React,{useState, useEffect} from 'react';
import axios from "axios";
import styled from 'styled-components'
import {useNavigate} from "react-router-dom";
import {Button, Image, Space} from 'antd';
import img from '../img/이메일인증.png'


const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  .border {
    border: 3px solid #76adff;
    height: 500px;
    min-width: 800px;
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


const Profile = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    // 로그아웃
    const onLogOut = () => {
       if(window.confirm('정말 로그아웃 하시겠습니까?')) {
           localStorage.removeItem('token')
           navigate('/')
       }else {
           return;
       }
    }

    // 로그인 후 비밀번호 변경
    const onChangePasswordAfterLogin = () => {
        navigate('/change/password/after')
    }

    const getProfileInfo = async () => {
        try {
            const token = localStorage.getItem('token')
            const config = {
                headers: {
                    authorization: 'bearer ' + token
                }
            }
            const {data, status} = await axios.get('http://localhost:8080/auth', config)

            if (status === 200) {
                setName(data.data.username)
                setEmail(data.data.email)
            }
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        getProfileInfo()
    },[])


    return (
        <Wrapper>
        <div className='border'>
            <div>
                <Image
                    width={200}
                    src={img}
                />
            </div>
            <h1>
                이메일: {email}
            </h1>
            <h1>
                이름: {name}
            </h1>
          <Space direction='vertical'>
              <STButton onClick={onLogOut}>로그아웃</STButton>
              <STButton onClick={onChangePasswordAfterLogin}>비밀번호 변경</STButton>
          </Space>
        </div>
        </Wrapper>
    );
};

export default Profile;