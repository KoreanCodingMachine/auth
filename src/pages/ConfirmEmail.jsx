import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

const ConfirmEmail = () => {

    const location = useLocation()
    const token = location.search.slice(7)
    const navigate = useNavigate()
    console.log(token)

    const confirmEmail = async () => {
        try {

           const {data} = await axios.post('http://localhost:8080/auth/confirm', { token })

           if(data.statusCode === 200) {
               alert('메일 인증 됬다')
               navigate('/')
           }
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div>
            <h1>
                ConfirmEmail
            </h1>
            <button onClick={confirmEmail}>이메일 확인</button>
        </div>
    );
};

export default ConfirmEmail;