import React, {useState} from 'react';
import axios from 'axios'
import {useLocation,useNavigate} from "react-router-dom";

const ChangePassword = () => {


    const location = useLocation()
    const navigate = useNavigate()

    // 리다이렉트 토큰
    const token = location.search.slice(7)

    console.log(token)

    // const [newPassword, setNewPassword] = useState()
    // const [newPasswordConfirm, setNewPasswordConfirm] = useState()

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
        <div>
            <h1>
                비번 바꾸기
            </h1>
            <input type='text' onChange={onChange} name='newPassword' required/>
            <hr/>
            <input type="text" onChange={onChange} name='newPasswordConfirm' required/>
            <button onClick={onClick}>submit</button>
        </div>
    );
};

export default ChangePassword;