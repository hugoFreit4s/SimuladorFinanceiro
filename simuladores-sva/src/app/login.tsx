// components/loginform.tsx

'use client';

import React, { useState } from 'react';
import Inputs from './components/inputs';
import { useRouter } from 'next/router';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Redirecionar para a página do simulador de boletos
    router.push('/simuladorBoletos');
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <Inputs label="Email" type="text" value={email} onChange={handleEmailChange} placeholdertxt="email@exemplo.com" />
      <Inputs label="Senha" type="password" value={password} onChange={handlePasswordChange} placeholdertxt="Insira sua senha..." />
      <button type="submit" className="mt-6 border-solid border-2 border-[#00A295] w-[140px] p-2 rounded-md hover:bg-[#00A295] self-center">LOGAR</button>
    </form>
  );
}

export default LoginForm;
