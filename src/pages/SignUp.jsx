import {Button, Col, Form, Input, Row, Space } from 'antd';
import axios from 'axios'
import {useNavigate} from "react-router-dom";
import styled from 'styled-components'


const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`


const SignUp = () => {

    const navigate = useNavigate()
    const onFinish = async (values) => {

        const {email, username, password, passwordConfirm} = values

        if(password !== passwordConfirm) {
            alert('please check password and confirm password')
        }


        try {
            const userInput = {
                email, username, password
            }
            const {data , status} = await axios.post('http://localhost:8080/auth/signup', userInput)

            if (status === 201) {
                alert('이메일 확인해 주세요')
            }
            console.log(data)
        } catch (err) {
            console.log(err.message)
        }

        console.log(values)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const goLogin = () => {
        navigate('/')
    }

    return (
        <Wrapper>
            <div>
                <Space align='center' >
        <Row>
            <Col span={24}>
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
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
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
                label="PasswordConfirm"
                name="passwordConfirm"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            <hr/>
            <Button type="primary" htmlType="submit" onClick={goLogin}>
                로그인
            </Button>
        </Form>
            </Col>
        </Row>
                </Space>
            </div>
        </Wrapper>
    );
}
export default SignUp;