'use client';

import Image from "next/image";
import React, { useState } from 'react';
import InfoChart from "./components/infochart";
import InputChart from "./components/inputchart";
import CheckSimulation from "./components/isSimulated";
import Buttons from "./components/button";

export default function Home() {
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <main className="flex flex-col p-8 lg:p-24 bg-[#003641] min-h-screen overflow-y-auto">
      <h1 className="font-sans text-2xl lg:text-4xl font-bold text-[#FFFFFF] order-first self-center">SICOOB VALE DO AÇO</h1>
      <h2 className="font-sans text-1xl lg:text-3xl font-md text-[#FFFFFF] order-first self-center mt-4 lg:mt-10">SIMULAÇÃO DE BOLETOS</h2>
      <CheckSimulation isDisabled={isDisabled} onChange={setIsDisabled} />
      <InputChart title="% BLiquidados" id="boletos-liquidados" disabled={isDisabled} />
      <InfoChart title="% da Quantidade em Rede Bancária" chartData={43} disabled={isDisabled} />
      <Buttons text="SIMULAR"/>
    </main>
  );
}