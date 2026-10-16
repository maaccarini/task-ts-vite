export type Prioridade = "alta" | "media" | "baixa";
export type Status = "pendente" | "em_andamento" | "concluida";
export interface Tarefa {
    readonly id: number;
    titulo: string;
    descricao?: string;
    prioridade: Prioridade;
    status: Status;
    tags: string[];
    criadoEm: Date;
}
/**
 * Tipo para criar uma nova tarefa, omitindo propriedades geradas automaticamente.
 */
export type NovaTarefa = Omit<Tarefa, "id" | "status" | "criadoEm">;