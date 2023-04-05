import React, {useState} from 'react';
import axios from "axios";

const FindPassword = () => {

    const [mail,setMail] = useState('')
    const onChange = (e) => {
        setMail(e.target.value)
    }

    const onClick = async () => {
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
        <div>
            <h1>비밀번호 찾기</h1>
                <h1>가입한 이메일 주소를 입력해 주세요</h1>
                <input onChange={onChange}/>
                <button onClick={onClick}>submit</button>
        </div>
    );
};

export default FindPassword;