document.addEventListener("DOMContentLoaded", function () {
    function handleRoutes() {
        const path = window.location.pathname;
        console.log(`path ${path}`);

        switch (path) {
            case '/index.html':
            default:
                handleIndex();
                break;
            case '/form.html':
                handleForm();
                break;
            case '/investimento.html':
                handleInvestimento();
                break;
            case '/resultadoSimulacao.html':
                handleResultSimulacao();
                break;
        }
    }

    async function exibicaoTaxaCDI() {
        try {
            const response = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.1178/dados/ultimos/1?formato=json');
            const data = await response.json();
            const taxaAnual = data[0].valor;
            let taxaMensal = taxaAnual / 12;
            let taxaDiaria = taxaMensal / 22;

            taxaMensal = taxaMensal.toFixed(4);
            taxaDiaria = taxaDiaria.toFixed(4);

            $('#taxa-cdi').text(taxaMensal + '%');
            $('#taxa-cdi-auferida').text(taxaDiaria + '%');

        } catch (error) {
            console.error('Erro ao obter taxa do CDI:', error);
        }
    }

    function handleInvestimento() {
        const titulosEmitidos = parseInt($('#boletos-mensais').val());
        const ticketMedioCarteira = parseFloat($('#ticket-medio').val());
        let baixados = parseInt($('#baixados').val());
        let titulosLiquidados = parseInt($('#titulos-liquidados').val());

        const quantidadeRedeBancaria = 43;
        const quantidadeRedeSicoob = 7;
        const quantidadeLiqPropriaCooperativa = 7;
        const quantidadeLiqCorrespondenteBancario = 43;

        if (isNaN(titulosLiquidados)) {
            titulosLiquidados = 0;
        }

        if (isNaN(baixados)) {
            baixados = 0;
        }

        if (baixados > 100 || titulosLiquidados > 100 || baixados + titulosLiquidados > 100) {
            $('.errorMsg').text("SOMA DE TITULOS LIQUIDADOS E BAIXADOS SUPERIOR A 100%");
            $('.errorMsg').css({
                "color": "red",
                "font-weight": "700"
            });
            $('.errorMsg').removeClass('hidden');
        } else {
            $('.errorMsg').addClass('hidden');
        }

        if (baixados + titulosLiquidados < 100) {
            $('.errorMsg').text("SOMA DE TITULOS LIQUIDADOS E BAIXADOS INFERIOR A 100%");
            $('.errorMsg').css({
                "color": "#7FE706",
                "font-weight": "700"
            });
            $('.errorMsg').removeClass('hidden');
        }

        const diasDeFloat = parseInt($('#dias-de-float').val());
        const saldoMedio = ((titulosLiquidados * (titulosEmitidos * ticketMedioCarteira)) / 100);
        localStorage.setItem('boletos-emitidos', titulosEmitidos);
        localStorage.setItem('titulos-liquidados', titulosLiquidados);
        localStorage.setItem('dias-de-float', diasDeFloat);
        localStorage.setItem('quantidadeRedeBancaria', quantidadeRedeBancaria);
        localStorage.setItem('quantidadeRedeSicoob', quantidadeRedeSicoob);
        localStorage.setItem('quantidadeLiqCorrespondenteBancario', quantidadeLiqCorrespondenteBancario);
        localStorage.setItem('quantidadeLiqPropriaCooperativa', quantidadeLiqPropriaCooperativa);
        localStorage.setItem('saldoMedio', saldoMedio);
        $('#simulate-button').bind("click", () => {
            window.location.href = "resultadoSimulacao.html";
        });

        setTimeout(handleInvestimento, 1000);
    }

    function handleIndex() {

    }

    function handleForm() {
        $(document).ready(function () {
            enableCheckboxes();
        });
    }

    function handleResultSimulacao() {
        const diasDeFloat = localStorage.getItem('dias-de-float');
        const saldoMedio = localStorage.getItem('saldoMedio');
        const boletosEmitidos = localStorage.getItem('boletos-emitidos');
        const boletosLiquidadosPorcentagem = localStorage.getItem('titulos-liquidados');
        const boletosLiquidadosQtd = (boletosLiquidadosPorcentagem * boletosEmitidos) / 100;

        const receitaEstimadaFloat = (saldoMedio * parseFloat($("#taxa-cdi-auferida").val())) / 100;
        console.log($('#taxa-cdi-auferida').val());

        $('#saldo-medio').text(saldoMedio);
        $('#dias-de-float').text(diasDeFloat);
        $('#receita-estimada-float').text(parseFloat(receitaEstimadaFloat.toFixed(3)));
        $('#quantidade-boletos-liquidados').text(parseInt(boletosLiquidadosQtd));

        enableCheckboxes();
        changeCheckboxes($('#emissao-segunda-via-sim'), $('#emissao-segunda-via-nao'));
        changeCheckboxes($('#banco-correspondente-sim'), $('#banco-correspondente-nao'));
        exibicaoTaxaCDI();
    }

    handleRoutes();

    function enableCheckboxes() {
        $('.option-checkbox').change(function () {
            const targetId = $(this).data('target');
            const inputSet = $('#' + targetId);

            if ($(this).is(':checked')) {
                inputSet.removeClass('hidden').slideDown();
                inputSet.find('.sub-option-checkbox').prop('disabled', false);
            } else {
                inputSet.slideUp();
                inputSet.find('.sub-option-checkbox').prop('disabled', true);
                inputSet.find('.sub-option-input').val('');
            }
        });

        $('.sub-option-checkbox').change(function () {
            const input = $(this).closest('.input-group').find('.sub-option-input');
            input.prop('disabled', !$(this).is(':checked'));
            if (!$(this).is(':checked')) {
                input.val('');
            }
        });


        $('.erase-icon').click(function () {
            $(this).closest('.input-set').find('.sub-option-input').val('');
        });
    }

    function changeCheckboxes(checkbox1, checkbox2) {
        $(checkbox1).change(function () {
            if ($(this).is(':checked')) {
                $(checkbox2).prop('checked', false);
            }
        });

        $(checkbox2).change(function () {
            if ($(this).is(':checked')) {
                $(checkbox1).prop('checked', false);
            }
        });
    }
});
