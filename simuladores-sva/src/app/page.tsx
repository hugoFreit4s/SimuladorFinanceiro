'use client';

import Image from "next/image";
import Inputs from "../app/components/inputs";
import React, {useState} from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between items-center p-10 lg:p-24">
      <h1 className="font-sans text-2xl font-bold">Sicoob Vale do Aço</h1>
      {/* <Inputs type="text" value="{email}" label="E-mail" onChange={handleEmailChange}/> */}
      <Image
        src={"/home/Logo.png"}
        width={"150"}
        height={"150"}
        alt="Logo Sicoob Vale do Aço" />
    </main>
  );
}
