import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    axios.post('http://localhost:5000/api/login', data)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        // Redirect to dashboard
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} placeholder="Email" />
      <input {...register('password')} type="password" placeholder="Пароль" />
      <button type="submit">Войти</button>
    </form>
  );
}