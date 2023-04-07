import React, {useState} from 'react';
import axios from "axios";
import MainHeader from "../components/MainHeader";
import img from "../img/이메일인증.png";
import styled from "styled-components";
import {Button, Input, Image} from "antd";



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

const FindPassword = () => {

    const [mail,setMail] = useState('')
    const onChange = (e) => {
        setMail(e.target.value)
    }

    const onEmailConfirm = async () => {
        try {
            const {data,status} = await axios.post('http://localhost:8080/user/find/password',{
                   email:mail
            })
            console.log(data)

            if (status === 200) {
                alert('요청해주신 이메일을 확인해보세요')
            } else {
                alert('가입해주신 이메일로 입력해주세요')
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
                    <Input className='input-box' placeholder='가입해주신 이메일을 입력하세요' onChange={onChange}/>
                    <p>
                        가입하신 이메일을 입력하신 후 이메일을 확인해 보세요!
                    </p>
                    <STButton onClick={onEmailConfirm}>이메일 전송</STButton>
                </div>
            </Wrapper>
        </>
    );
};

export default FindPassword;