import React,{useState} from 'react'
import {Button, Form, Image, Input, Space, Checkbox, Divider,Row,Col} from 'antd';
import axios from 'axios'
import {useNavigate} from "react-router-dom";
import styled from 'styled-components'
import Header from '../components/MainHeader'


const CheckboxGroup = Checkbox.Group;

const plainOptions = ['이용약관(필수)', '개인 정보 처리 방침(필수)', '만 14세이상 확인(필수)','마케팅활용 동의(선택)'];
const defaultCheckedList = ['이용약관(필수)','개인 정보 처리 방침(필수)','만 14세이상 확인(필수)'];


const Wrapper = styled.div`
  max-width:540px;
  min-height: 800px;
  overflow-y: scroll;
  border: 1px groove #76adff;
  display: block;
  margin: 0 auto;
  .signup_title-eng {
    color: #76adff;
    font-size:20px;
    margin-top: 44px;
    margin-left:50px;
  }
  
  .signup_title-ko {
    color: #4a4a4a;
    font-size: 20px;
    margin-left: 50px;
    margin-top: 24px;
  }

  .input-box {
    min-width: 440px;
    width: 440px;
    min-height: 60px;
    background: #f5f5f5;
  }
  
`

const Title = styled.div`
  display: block;
  margin-top: 84px;
  text-align: center;
  
  .signup-title > h1{
      color: #76adff;
      font-size:36px;
  }
  
  .signup-form {
    margin-left:40px;
    padding-left: 40px;
    height: 300px;
  }
  
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap:10px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  Button {
    width: 240px;
    height: 56px;
    color: #ffff;
    background: #76adff;
  }
`

const SignUp = () => {

    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);
    const onChange = (list) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };
    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };


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
        <>
        <Header/>
            <Title>
                <div className='image-wrapper'>
                <Image  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" width={80}/>
                   <div className='signup-title'>
                       <h1>데이케어에 오신 걸 </h1>
                       <h1>환영합니다.</h1>
                   </div>
                </div>
            </Title>
            <Wrapper>
               <Space direction='vertical'>
                   <h1 className='signup_title-eng'>Sign up</h1>
                   <h1 className='signup_title-ko'>회원가입</h1>
               </Space>
                <Form
                    layout='vertical'
                    className='signup-form'
                    name="basic"
                    style={{
                        maxWidth: 400,
                        marginLeft:'50px'
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="이름"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '이름(실명)을 입력해주세요',
                            },
                        ]}
                    >
                        <Input placeholder= '이름(실명)을 입력해주세요' className='input-box'/>
                    </Form.Item>
                    <Form.Item
                        label="이메일"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: '이메일 주소를 입력해 주세요',
                            },
                        ]}
                    >
                        <Input placeholder='이메일 주소를 입력해 주세요' className='input-box'/>
                    </Form.Item>
                    <Form.Item
                        label="비밀번호"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '8자리 이상 비밀번호를 입력해 주세요',
                            },
                        ]}
                    >
                        <Input placeholder='8자리 이상 비밀번호를 입력해 주세요' className='input-box' type='password'/>
                    </Form.Item>

                    <Form.Item
                        label="비밀번호 확인"
                        name="passwordConfirm"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input placeholder='비밀번호와 똑같이 입력해 주세요' className='input-box' type='password'/>
                    </Form.Item>
                    <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                        모두 선택
                    </Checkbox>
                    <Divider />
                    <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />

                   <ButtonWrapper>
                       <Button type="primary" htmlType="submit">
                           회원가입
                       </Button>
                       <Button type="primary" htmlType="submit" onClick={goLogin}>
                           로그인
                       </Button>
                   </ButtonWrapper>
                </Form>
            </Wrapper>
        </>
    );
}
export default SignUp;