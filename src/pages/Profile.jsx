import React,{useState, useEffect} from 'react';
import axios from "axios";
import styled from 'styled-components'
import {getCookie, removeCookie} from "../Cookie";
import {useNavigate} from "react-router-dom";


const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`

const Profile = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    // 로그아웃
    const onLogOut = () => {
       if(window.confirm('정말 로그아웃 하시겠습니까?')) {
           removeCookie('token')
           navigate('/')
       }else {
           return;
       }
    }

    const getProfileInfo = async () => {
        try {
            // const token = localStorage.getItem('token')
            const token = getCookie('token')
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
        <div>
            <div>
                {/*<Image*/}
                {/*    width={200}*/}
                {/*    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"*/}
                {/*/>*/}
            </div>
            <h1>
                {email}
            </h1>
            <h1>
                {name}
            </h1>
            <button onClick={onLogOut}>로그아웃</button>
        </div>
        </Wrapper>
    );
};

export default Profile;