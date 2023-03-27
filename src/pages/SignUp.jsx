import {Button, Checkbox, Col, Form, Input, Row, Space} from 'antd';
import axios from 'axios'
import {useNavigate} from "react-router-dom";

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
                navigate('/login')
            }
            console.log(data)
        } catch (err) {
            console.log(err.message)
        }

        console.log(values)
        // try {
        //     await axios.post(values)
        //
        // } catch (err) {
        //     console.log(err.message)
        // }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };



    return (
        <div className="space-align-container">
            <div className="space-align-block">
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
        </Form>
            </Col>
        </Row>
                </Space>
            </div>
        </div>
    );
}
export default SignUp;