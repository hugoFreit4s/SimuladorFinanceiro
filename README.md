/**Hugo de Freitas - Desenvolvedor Web Fullstack | 04/06/2024**/

O projeto consiste inicialmente em suprir 2 necessidades: Simulação de renda de boletos e simulação de renda de produtos no geral.

-BOLETOS:
A instituição recebe pagamentos via boleto e esses pagamentos geram gastos ou faturamento. O foco é simular com base em algumas informações (custo por boleto, tarifas, quantidade de boletos, etc) o quanto de lucro, ou de prejuízo, a instituição gera com esses boletos atualmente.

-PRODUTOS:
Assim como os boletos, a instituição possui produtos (máquinas de cartão de crédito, seguros, etc) que também podem gerar lucro ou prejuízo. O foco desta parte também consiste em simular a receita que pode prover um produto X para um cliente Y em um período de tempo Z.

-OVERVIEW:
A aplicação é feita inicialmente com HTML, SASS, e JQUERY. Optei por essas tecnologias por, a princípio, ser algo simples, mas podem embarcar novas tecnologias com o passar do tempo e com novas necessidades. A tela inicial é simples e consiste apenas em 2 botões, um levando para a área de simulação de Produtos e outro para a área de simulação de Boletos. Na tela de Boletos o usuário insere os valores necessários e aciona o botão "SIMULAR", que o redireciona para outra página com os resultados baseados nas informações passadas por ele.
Foi aplicado um sistema de rotas no JS para que os scripts de todas as páginas estejam unificados em um único arquivo, a princípio essa me pareceu uma ideia boa e uma oportunidade de fazer algo que nunca tinha feito antes, então optei por implementar ela.