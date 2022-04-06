import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PASSWORD_RESET } from '../../api';
import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import Error from '../Helper/Error'
import Head from '../Helper/Head';

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');

  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = PASSWORD_RESET({
      login,
      key,
      passowrd: password.value
    })
    const {response} = await request(url, options);
    if(response.ok) navigate('/login');
  }

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  return (
    <div>
      <Head title="Resete a Senha"/>
      <h1 className='title'>Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova Senha" type="password" name="password" />
        {loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button>}
      </form>
      <Error error={error}/>
    </div>
  )
}

export default LoginPasswordReset