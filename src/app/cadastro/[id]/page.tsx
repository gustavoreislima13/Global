"use client";

import { TipoCadastro } from "@/types/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditarCadastro({ params }: { params: { cpf: string } }) {
    
    const navigate = useRouter();
    const [cadastro, setCadastro] = useState<TipoCadastro>({
        cpf: "",
        nome: "",
        telefone: 0.0,
        email: "",
        senha: "",
});

useEffect(() => {
    const chamadaApi = async () => {
    const response = await fetch(
        `/http://localhost:8080/guardianshields/clientes${params.cpf}`
    );
    const data = await response.json();
    setCadastro(data);
    };
    chamadaApi();
}, [params]);

const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

    try {
        const response = await fetch(`/http://localhost:8080/guardianshields/clientes${params.cpf}`,{
            method: 'PUT',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(cadastro)            
        });

            if(response.ok){
                alert("cadastro atualizado com sucesso!");
                setCadastro({
                    cpf: "",
                    nome: "",
                    telefone: 0.0,
                    email: "",
                    senha: "",
                });
                navigate.push("/cadastros");
            }

    } catch (error) {
        console.error("Erro na atualização do cadastro...", error);
    }
}

return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">
    <h1 className="text-3xl md:text-4xl font-bold text-pink-400 mb-6">Editar Cadastro</h1>
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md md:max-w-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="idCpf" className="block text-sm font-medium mb-1">cpf:</label>
                <input
                    type="text"
                    name="cpf"
                    id="idCpf"
                    value={cadastro.cpf}
                    onChange={(e)=> setCadastro({...cadastro, cpf: e.target.value})}
                    placeholder="Digite o seu cpf em formato xxxxxxxxxxx"
                    required
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
            </div>
            <div>
                <label htmlFor="idNome" className="block text-sm font-medium mb-1">nome:</label>
                <input
                    type="text"
                    name="nome"
                    id="idNome"
                    value={cadastro.nome}
                    onChange={(e)=> setCadastro({...cadastro, nome: e.target.value})}
                    placeholder="Digite o nome completo"
                    required
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
            </div>
            <div>
                <label htmlFor="idTel" className="block text-sm font-medium mb-1">telefone:</label>
                <input
                    type="number"
                    name="telefone"
                    id="idTel"
                    value={cadastro.telefone}
                    onChange={(e)=> setCadastro({...cadastro, telefone: parseFloat(e.target.value)})}
                    placeholder="Digite o seu telefone"
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
            </div>
            <div>
                <label htmlFor="idEmail" className="block text-sm font-medium mb-1">email:</label>
                <input
                    type="text"
                    name="email"
                    id="idEmail"
                    value={cadastro.email}
                    onChange={(e)=> setCadastro({...cadastro, email: e.target.value})}
                    placeholder="Digite o seu email no formato xxxx@xxx.xxx"
                    required
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
            </div>
            <div>
                <label htmlFor="idSenha" className="block text-sm font-medium mb-1">senha:</label>
                <input
                    type="text"
                    name="senha"
                    id="idSenha"
                    value={cadastro.senha}
                    onChange={(e)=> setCadastro({...cadastro, senha: e.target.value})}
                    placeholder="Digite a senha com até 6 digitos"
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
            </div>
            <div>
                <button
                    type="submit"
                    className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition font-semibold focus:outline-none focus:ring-2 focus:ring-pink-400"
                >
                    Atualizar
                </button>
            </div>
        </form>
    </div>
</div>

);
}