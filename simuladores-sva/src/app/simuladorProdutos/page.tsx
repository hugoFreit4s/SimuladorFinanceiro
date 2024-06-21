'use client'

import ReturnBtn from "../components/ReturnBtn"
import Buttons from "../components/Button"
import Footer from "../components/Footer"
import Dropdown from "../components/Dropdown"

export default function SimuladorProdutos() {
    return (
        <main className="flex flex-col p-2 lg:p-5 bg-[#003641] min-h-screen overflow-y-auto">
            <ReturnBtn />

            <h1 className="font-sans text-2xl lg:text-4xl font-bold text-[#FFFFFF] self-center mt-3">SICOOB VALE DO AÇO</h1>
            <h2 className="font-sans text-1xl lg:text-3xl font-md text-[#FFFFFF] self-center mt-4 lg:mt-10">SIMULAÇÃO DE PRODUTOS</h2>

            <Dropdown />

            <Buttons text="SIMULAR" route='./Resultado' />
            <Footer />
        </main>
    )
}