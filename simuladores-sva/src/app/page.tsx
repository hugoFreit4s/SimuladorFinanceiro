'use client';

import React, { useState } from 'react';
import InfoChart from "./components/Infochart";
import InputChart from "./components/Inputchart";
import CheckSimulation from "./components/IsSimulated";
import Buttons from "./components/Button";
import Footer from './components/Footer';

export default function Home() {
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <main className="flex flex-col p-8 lg:p-24 bg-[#003641] min-h-screen overflow-y-auto">
      <h1 className="font-sans text-2xl lg:text-4xl font-bold text-[#FFFFFF] order-first self-center">SICOOB VALE DO AÇO</h1>
      <h2 className="font-sans text-1xl lg:text-3xl font-md text-[#FFFFFF] order-first self-center mt-4 lg:mt-10">SIMULAÇÃO DE BOLETOS</h2>
      <CheckSimulation isDisabled={isDisabled} onChange={setIsDisabled} />
      <InputChart title="A.1) Quantidade de Boletos emitidos mensalmente" id="qtdBoletosMensais" disabled={isDisabled} />
      <InputChart title="A.2) % dos titulos emitidos que são liquidados" id="pctgmBoletosLiquidados" disabled={isDisabled} />
      <InfoChart title="(I) % da Quantidade em Rede Bancária" id="pctgmRedeBancaria" chartData={43} disabled={isDisabled} />
      <InfoChart title="(II) % da Quantidade em Rede Sicoob" id="pctgmRedeSicoob" chartData={7} disabled={isDisabled} />
      <InfoChart title="(III) % da Quantidade em Líq. Própia Cooperativa" id="pctgmLiqPropriaCoop" chartData={7} disabled={isDisabled} />
      <InfoChart title="(IV) % da Quantidade em Líq. Correspondente Bancária" id="pctgmLiqCorrespondenteBancaria" chartData={43} disabled={isDisabled} />
      <InfoChart title="A.3) % dos titulos emitidos que são baixados" id="pctgmTitulosBaixados" chartData={20} disabled={isDisabled} />
      <InputChart title="(I) % dos titulos baixados pedido Cedente" id="pctgmBaixadosCedente" disabled={isDisabled} />
      <InputChart title="(II) % dos titulos baixados por Decurso de prazo" id="pctgmDecursoPrazo" disabled={isDisabled} />
      <InfoChart title="A.4) Direcionadores para precificação do Funding" id="pctgmDirecionadoresPrecFunding" chartData={100} disabled={isDisabled} />
      <InfoChart title="(I) % Centralização Financeira" id="pctgmCentralizacaoFinanceira" chartData={100} disabled={isDisabled} />
      <InfoChart title="(II) % de Saldo Médio" id="pctgmSaldoMedio" chartData={0} disabled={isDisabled} />
      <InfoChart title="(III) % Taxa % CDI no ano (a.a)" id="pctgmTaxaCdiAno" chartData={13.75} disabled={isDisabled} />
      <InputChart title="(IV) Dias de Float" id="diasFloat" disabled={isDisabled} />
      <InputChart title="A.5) Ticket-Médio da Carteira" id="ticketMedio" disabled={isDisabled} />
      
      <Buttons text="PRÓXIMA ETAPA" route='./simuladorProdutos'/>
      <Footer />
    </main>
  );
};