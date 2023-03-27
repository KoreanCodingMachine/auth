import React,{useState, useEffect} from 'react';
import axios from "axios";

const Profile = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

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
        <div>
            <h1>
                {email}
            </h1>
            <h1>
                {name}
            </h1>
        </div>
    );
};

export default Profile;