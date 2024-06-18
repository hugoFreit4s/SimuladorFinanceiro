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
      <InputChart title="A.1) Quantidade de Boletos emitidos mensalmente" id="qtdBoletosMensais" disabled={isDisabled} />
      <InputChart title="A.2) % dos titulos emitidos que são liquidados" id="pctgmBoletosLiquidados" disabled={isDisabled} />
      <InfoChart title="(I) % da Quantidade em Rede Bancária" id="pctgmRedeBancaria" chartData={43} disabled={isDisabled} />
      <InfoChart title="(II) % da Quantidade em Rede Sicoob" id="pctgmRedeSicoob" chartData={7} disabled={isDisabled} />
      <InfoChart title="(III) % da Quantidade em Líq. Própia Cooperativa" id="pctgmLiqPropriaCoop" chartData={7} disabled={isDisabled} />
      <InfoChart title="(IV) % da Quantidade em Líq. Correspondente Bancária" id="pctgmLiqCorrespondenteBancaria" chartData={43} disabled={isDisabled} />
      <InfoChart title="A.3) % dos titulos emitidos que são baixaods" id="pctgmTitulosBaixados" chartData={20} disabled={isDisabled} />
      <InputChart title="(I) % dos titulos baixados pedido Cedente" id="pctgmBaixadosCedente" disabled={isDisabled} />
      <InputChart title="(II) % dos titulos baixados por Decurso de prazo" id="pctgmDecursoPrazo" disabled={isDisabled} />
      <InfoChart title="A.4) Direcionadores para precificação do Funding" id="pctgmDirecionadoresPrecFunding" chartData={100} disabled={isDisabled} />
      <InfoChart title="(I) % Centralização Financeira" id="pctgmCentralizacaoFinanceira" chartData={100} disabled={isDisabled} />
      <InfoChart title="(II) % de Saldo Médio" id="pctgmSaldoMedio" chartData={0} disabled={isDisabled} />
      <InfoChart title="(III) % Taxa % CDI no ano (a.a)" id="pctgmTaxaCdiAno" chartData={13.75} disabled={isDisabled} />
      <InputChart title="(IV) Dias de Float" id="diasFloat" disabled={isDisabled} />
      <InputChart title="A.5) Ticket-Médio da Carteira" id="ticketMedio" disabled={isDisabled} />

      <hr className="w-full h-1 my-0 border-0 rounded bg-white my-10 lg:my-20"/>

      <h2 className="font-sans text-1xl lg:text-3xl font-md text-[#FFFFFF] self-center mt-4 lg:my-10">SIMULAÇÃO DE PRODUTOS</h2>
      <Buttons text="SIMULAR" />

      <div className="inline-flex items-center justify-center w-full lg:my-56 my-10 order-last">
        <hr className="w-full h-1 my-0 bg-black-200 border-0 rounded dark:bg-white" />
          <div className="flex justify-center items-center absolute -translate-x-1/2 bg-white left-1/2 h-[50px] lg:h-[100px] dark:bg-[#003641] rounded-md w-[40%]">
            <img src="Logo All White.png" alt="" className="h-[60px] lg:h-[200px] text-red-500 mx-auto" />
          </div>
      </div>
    </main>
  );
};