import {Checkbox, Image, Input , Button , Space , Layout ,Form } from 'antd';
import axios from 'axios'
import {useNavigate} from "react-router-dom";
import styled from 'styled-components'
import MainHeader from "../components/MainHeader";
import {useState} from "react";

const { Header } = Layout;

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`

const LoginCard = styled.div`
  border: 1px solid #76adff;
  border-radius: 4px;
  min-width: 940px;
  min-height: 600px;
`

const ContentWrapper = styled.div`
  .content-title {
    padding-top: 30px;
    padding-left:70px;
    font-size:20px;
    color: #76ADFF;
  }
  
  .content-title:hover{
    cursor:pointer;
  }
  
  .title-korean {
    padding-top: 10px;
    padding-left:70px;
    color:#4A4A4A;
    font-size: 24px;
  }
  
  .input-wrapper {
    margin-top: 20px;
  }
  
  .input-box {
    min-width: 440px;
    width: 440px;
    min-height: 60px;
    background: #f5f5f5;
    margin-left:70px;
  }
  
  .loginwithfindpassword {
    display: flex;
    min-width: 440px;
    min-height: 60px;
    margin-left: 70px;
    margin-top:38px;
    justify-content: space-between;
    .find {
      color: #76adff;
      cursor:pointer;
    }
  }
  
  .login-btn {
    display: flex;
    justify-content: center;
    margin-left: 70px;
    Button {
      min-width: 240px;
      min-height: 56px;
      background: #76adff;
      color: white;
    }
  }
  
  .not-member {
    margin-left: 70px;
    display: flex;
    justify-content: center;
    .go-signup:hover {
      cursor: pointer;
      transform: scale(1.2);
      transition : all 300ms ease-in;
      color:blue;
    }
  }
`



const Login = () => {


    const navigate = useNavigate()
    const [inputs, setInputs] = useState({
        email:'',
        password:''
    })

    const onChange = (event) => {
        const {name, value} = event.target

        const nextInput = {
            ...inputs,
            [name] : value
        }

        setInputs(nextInput)
    }

    const onFinish = async (values) => {

        const { email, password } = inputs


        try {
            const userInput = {
                email:email,
                password
            }
            const {data , status} = await axios.post('http://localhost:8080/auth/login', userInput)

            console.log(data)
            console.log(data.data.accessTokenCookie)
            if (status === 200) {
                await localStorage.setItem('token', data.data.accessTokenCookie)
                navigate('/profile')
            }

        } catch (err) {
            console.log(err.message)
        }
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
        <>
        <MainHeader/>
            <Wrapper>
                <div>
                    <LoginCard>
                        <div style={{display:'flex'}}>
                            <Image
                                width={360}
                                height={600}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            />
                            <ContentWrapper>
                                <p className='content-title'>Login</p>
                                <h1 className='title-korean'>로그인</h1>
                              <Form>
                                  <Space className='input-wrapper' direction='vertical'>
                                      <Input className='input-box' placeholder='이메일 입력' name='email' onChange={onChange} />
                                      <Input className='input-box' placeholder='비밀번호 입력' type='password' name='password' onChange={onChange}/>
                                  </Space>
                              </Form>
                                <div className='loginwithfindpassword'>
                                    <div className='self-login'>
                                        <Space>
                                            <Checkbox />
                                            <span>자동 로그인</span>
                                        </Space>
                                    </div>
                                    <span className='find'>
                                        <span onClick={goFindPassword}>비밀번호 찾기</span> /
                                        <span onClick={goChangePassword}>변경하기</span>
                                    </span>
                                </div>
                                <div className='login-btn'>
                                    <Button onClick={onFinish}>로그인</Button>
                                </div>
                                <div className='not-member'>
                                    <Space style={{marginTop:'20px'}}>
                                        <span>아직 회원이 아니신가요?</span>
                                        <span className='go-signup' onClick={goSignup}>회원가입</span>
                                    </Space>
                                </div>
                            </ContentWrapper>
                        </div>
                    </LoginCard>
                </div>
            </Wrapper>
        </>


    );

}




export default Login;
