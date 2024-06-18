'use client';

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
      <InputChart title="Quantidade de Boletos emitidos mensalmente" id="qtdBoletosMensais" disabled={isDisabled} />
      <InputChart title="% dos titulos emitidos que são liquidados" id="pctgmBoletosLiquidados" disabled={isDisabled} />
      <InfoChart title="% da Quantidade em Rede Bancária" id="pctgmRedeBancaria" chartData={43} disabled={isDisabled} />
      <InfoChart title="% da Quantidade em Rede Sicoob" id="pctgmRedeSicoob" chartData={7} disabled={isDisabled} />
      <InfoChart title="% da Quantidade em Líq. Própia Cooperativa" id="pctgmLiqPropriaCoop" chartData={7} disabled={isDisabled} />
      <Buttons text="SIMULAR"/>
    </main>
  );
}