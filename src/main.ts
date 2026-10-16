import { elemento } from "./dom";
import { tarefas } from "./dados";

const nomeDoSistema: string = "TaskFlow";
const versaoDoSistema: string = "1.0.0";
const hoje: string = new Date().toLocaleDateString("pt-BR");
const autor: string = "Turma CCO - A : Matheus Abruzzato Accarini";

elemento("nome-do-sistema").textContent = nomeDoSistema;
elemento("versao").textContent = `v${versaoDoSistema}`;
elemento("data-de-hoje").textContent = hoje;
console.log(`TASKFLOW iniciado. Autor: ${autor}`);

const lista = elemento("lista");
for(const tarefa of tarefas) {
    const item = document.createElement("li");
    item.className = `tarefa tarefa--${tarefa.prioridade}`;
    const titulo = document.createElement("H3");
    titulo.className = "tarefa__titulo";
    titulo.textContent = `#${tarefa.id} - ${tarefa.titulo}`;
    const etiqueta = document.createElement("span");
    etiqueta.className = `etiqueta etiqueta--${tarefa.prioridade}`;
    etiqueta.textContent = tarefa.prioridade;
    item.appendChild(titulo);
    item.appendChild(etiqueta);
    lista.appendChild(item);
}