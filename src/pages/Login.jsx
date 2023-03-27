import { Button, Form, Input } from 'antd';
import axios from 'axios'
import {useNavigate} from "react-router-dom";


const Login = () => {


    const navigate = useNavigate()

    const onFinish = async (values) => {

        const { username, password } = values

        console.log(values)

        try {
            const userInput = {
                email:username,
                password
            }
            const {data , status} = await axios.post('http://localhost:8080/auth/login', userInput)


            if (status === 200) {
                await localStorage.setItem('token', data.data.accessTokenCookie)
                navigate('/profile')

            }

        } catch (err) {
            console.log(err.message)
        }

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );

}




export default Login;
