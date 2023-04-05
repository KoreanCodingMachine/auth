import { Button, Form, Input } from 'antd';
import axios from 'axios'
import {useNavigate} from "react-router-dom";
import styled from 'styled-components'
import {setCookie} from "../Cookie";


const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`

const Login = () => {


    const navigate = useNavigate()

    const onFinish = async (values) => {

        const { username, password } = values


        try {
            const userInput = {
                email:username,
                password
            }
            const {data , status} = await axios.post('http://localhost:8080/auth/login', userInput)

            console.log(data)
            console.log(data.token)
            if (status === 200) {
                await localStorage.setItem('token', data.token)
                // setCookie('token',data.data.token,{
                //     path:'/',
                //     sameSite:'strict',
                // })
                navigate('/profile')

            }

        } catch (err) {
            console.log(err.message)
        }

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const goSignup = () => {
        navigate('/signup')
    }

    const goFindPassword = () => {
        navigate('/find/password')
    }

    const goChangePassword = () => {
        navigate('/change/password')
    }

    return (
        <Wrapper>
            <div>
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
                            로그인
                        </Button>
                        <hr/>
                        <Button type="primary" htmlType="submit" onClick={goSignup}>
                            회원가입
                        </Button>
                        <hr/>
                        <Button type="primary" htmlType="submit" onClick={goFindPassword}>
                            비밀번호 찾기
                        </Button>
                        <hr/>
                        <Button type="primary" htmlType="submit" onClick={goChangePassword}>
                            비밀번호 변경하기
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </Wrapper>

    );

}




export default Login;
