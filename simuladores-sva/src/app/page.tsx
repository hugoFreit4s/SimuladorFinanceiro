'use client';

import React, { useState } from 'react';
import InfoChart from "./components/Infochart";
import InputChart from "./components/Inputchart";
import CheckSimulation from "./components/IsSimulated";
import DropdownMenu from './components/Dropdown';
import Buttons from "./components/Button";
import Footer from './components/Footer';

export default function Home() {
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <main className="flex flex-col p-8 lg:p-24 bg-[#003641] min-h-screen overflow-y-auto">
      <h1 className="font-sans text-2xl lg:text-4xl font-bold text-[#FFFFFF] order-first self-center">SICOOB VALE DO AÇO</h1>
      <h2 className="font-sans text-1xl lg:text-3xl font-md text-[#FFFFFF] order-first self-center my-4 lg:my-6">SIMULAÇÃO DE TAXAS</h2>
      {/* <CheckSimulation isDisabled={isDisabled} onChange={setIsDisabled} />
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
      <InputChart title="A.5) Ticket-Médio da Carteira" id="ticketMedio" disabled={isDisabled} /> */}
      <div className='w-[70%] flex flex-col mx-auto justify-center my-5'>
        <label className='text-xs lg:text-base'>Insira o nome do cooperado</label>
        <input type='text' placeholder='Fulano da Silva...' className='text-white text-xs lg:text-base p-3 w-full rounded-md bg-[#00A099] placeholder:text-white'></input>
      </div>
      <DropdownMenu
        titleText="Boletos"
        items={[
          { type: 'input', title: 'A.1) Quantidade de Boletos emitidos mensalmente', placeholder: 'Insira a quantidade de boletos emitidos/mês' },
          { type: 'input', title: 'A.2) % dos titulos emitidos que são liquidados', placeholder: 'Insira a % de boletos que serão liquidados' },
          { type: 'card', title: '(I) % da Quantidade em Rede Bancária', content: '43' },
          { type: 'card', title: '(II) % da Quantidade em Rede Sicoob', content: '7' },
          { type: 'card', title: '(III) % da Quantidade em Líq. Própia Cooperativa', content: '7' },
          { type: 'card', title: '(IV) % da Quantidade em Líq. Correspondente Bancária', content: '43' },
          { type: 'card', title: 'A.3) % dos titulos emitidos que são baixado', content: '20' },
          { type: 'input', title: '(I) % dos titulos baixados por pedido Cedente', placeholder: 'Insira a % dos títulos baixados por Pedido Cedente' },
          { type: 'input', title: '(II) % dos titulos baixados por Decurso de prazo', placeholder: 'Insira a % dos títulos baixados por Decurso de Prazo' },
          { type: 'card', title: 'A.4) Direcionadores para precificação do Funding', content: '100' },
          { type: 'card', title: '(I) % Centralização Financeir', content: '100' },
          { type: 'card', title: '(II) % de Saldo Médio', content: '0' },
          { type: 'card', title: '(III) % Taxa % CDI no ano (a.a)', content: '13.75' },
          { type: 'input', title: '(IV) Dias de Float', placeholder: 'Insira a quantidade de Dias de Float' },
          { type: 'input', title: 'A.5) Ticket-Médio da Carteira', placeholder: 'Insira o valor do ticket médio da carteira' }
        ]}
      />

      <DropdownMenu titleText='SIPAG'
        items={[
          { type: 'card', title: 'Juros a.m.', content: '33%' },
          { type: 'input', title: '% Taxa y a.m.', placeholder: 'Insira o valor (%) da taxa X a.m.' }
        ]}
      />

      <Buttons text="PRÓXIMA ETAPA" route='./Resultado' />
      <Footer />
    </main>
  );
};