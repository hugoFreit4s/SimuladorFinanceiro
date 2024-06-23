'use client'
import { formContext } from "@/store/form-context"
import { useContext } from "react"

export default function Page() {
    const c = useContext(formContext)
    return <div className="h-screen w-full">
        {c?.nome}
        <button onClick={async() => {
            fetch("http://localhost:9090/api/user", {method: "POST", body: JSON.stringify({name: c?.nome})})
        }}>Mandar pro banco de dados</button>
    </div>
}