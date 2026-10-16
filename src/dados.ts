import type { Tarefa } from "./tipo";

export const tarefas: Tarefa[] = [
    {
        id: 1, 
        titulo: "Estudar interfaces",
        descricao: "Estudar interfaces em TypeScript",
        prioridade: "alta",
        status: "pendente",
        tags: ["typescript", "interfaces", "estudo"],
        criadoEm: new Date()
    },
    {
        id: 2, 
        titulo: "Comprar Café",
        descricao: "Comprar café para a reunião",
        prioridade: "media",
        status: "pendente",
        tags: ["compras", "café", "reunião"],
        criadoEm: new Date()
    },
    {
        id: 3, 
        titulo: "Pratica de TypeScript",
        descricao: "Praticar conceitos de TypeScript",
        prioridade: "alta",
        status: "em_andamento",
        tags: ["typescript", "prática", "estudo"],
        criadoEm: new Date()
    },
    {
        id: 4, 
        titulo: "Aula de Python",
        descricao: "Estudar conceitos de Python",
        prioridade: "baixa",
        status: "pendente",
        tags: ["python", "estudo"],
        criadoEm: new Date()
    },
    {
        id: 5, 
        titulo: "Revisar GIT",
        descricao: "Revisar conceitos de GIT",
        prioridade: "media",
        status: "concluida",
        tags: ["git", "estudo"],
        criadoEm: new Date()
    },
]