import { FormInput, SubmitButton } from "../components";
import { Form, useNavigate } from "react-router-dom";

const Login = () => {
  const navigation = useNavigate();

  const handleGoToRegister = () => {
    navigation('/register');
  };

  return (
    <section className="grid min-h-[100vh] place-items-center px-8">
      <Form 
        method='post' 
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h2 className="text-center text-3xl font-bold">Login</h2>

        <FormInput 
          type='text'
          placeholder='Email'
          label='Email'
          defaultValue='test@test.com'
        />
        <FormInput 
          type='password'
          placeholder='Password'
          label='Password'
          defaultValue='secret'
        />

        <SubmitButton text={'Login'} />
        <button className="btn btn-primary btn-block">Guest user</button>

        <p className="text-center">
          Not a member yet? 
          <a onClick={handleGoToRegister} className="ml-2 link-secondary">Register</a> 
        </p>
      </Form>
    </section>
  )
}

export default Login;
