import { FilaPrioridade } from "./FilaPrioridade"

console.log("=== TESTE DA FILA DE PRIORIDADE ===")

const fila = new FilaPrioridade(5)

console.log("\nFila criada")
console.log("Está vazia?", fila.estaVazia())
console.log("Está cheia?", fila.estaCheia())
console.log("Quantidade:", fila.quantidade())

console.log("\nInserindo elementos...")
fila.inserir(10, 3) // normal
fila.inserir(20, 5) // muito alta
fila.inserir(30, 1) // muito baixa
fila.inserir(40, 4) // alta
fila.inserir(50, 2) // baixa

console.log("Quantidade após inserções:", fila.quantidade())
console.log("Está cheia?", fila.estaCheia())
console.log("Próximo elemento:", fila.proximo())

console.log("\nTentando inserir com fila cheia:")
fila.inserir(60, 5)

console.log("\nRemovendo elementos (respeitando prioridade):")
while (!fila.estaVazia()) {
    console.log("Removido:", fila.remover())
}

console.log("\nFila após remoções")
console.log("Está vazia?", fila.estaVazia())
console.log("Quantidade:", fila.quantidade())

console.log("\nInserindo novamente após limpar...")
fila.inserir(100, 2)
fila.inserir(200, 5)

console.log("Próximo elemento:", fila.proximo())
console.log("Quantidade:", fila.quantidade())

console.log("\nLimpando a fila...")
fila.limpar()

console.log("Está vazia?", fila.estaVazia())
console.log("Quantidade final:", fila.quantidade())

console.log("\n=== FIM DO TESTE ===")
