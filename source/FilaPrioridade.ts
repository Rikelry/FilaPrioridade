export class FilaPrioridade {
    private capacidadeMaxima: number
    private total: number

    private muitoBaixa: number[]
    private baixa: number[]
    private normal: number[]
    private alta: number[]
    private muitoAlta: number[]

    constructor(capacidade: number) {
        this.capacidadeMaxima = capacidade
        this.total = 0

        this.muitoBaixa = []
        this.baixa = []
        this.normal = []
        this.alta = []
        this.muitoAlta = []
    }

    inserir(valor: number, prioridade: number): void {
        if (this.estaCheia()) {
            console.error("Fila cheia")
            return
        }

        switch (prioridade) {
            case 5:
                this.muitoAlta.push(valor)
                break
            case 4:
                this.alta.push(valor)
                break
            case 3:
                this.normal.push(valor)
                break
            case 2:
                this.baixa.push(valor)
                break
            case 1:
                this.muitoBaixa.push(valor)
                break
            default:
                console.error("Prioridade inválida")
                return
        }

        this.total++
    }

    remover(): number | null {
        if (this.estaVazia()) {
            console.error("Fila vazia")
            return null
        }

        if (this.muitoAlta.length > 0) {
            this.total--
            return this.muitoAlta.shift()!
        }
        if (this.alta.length > 0) {
            this.total--
            return this.alta.shift()!
        }
        if (this.normal.length > 0) {
            this.total--
            return this.normal.shift()!
        }
        if (this.baixa.length > 0) {
            this.total--
            return this.baixa.shift()!
        }
        if (this.muitoBaixa.length > 0) {
            this.total--
            return this.muitoBaixa.shift()!
        }

        return null
    }

    proximo(): number | null {
        if (this.muitoAlta.length > 0) return this.muitoAlta[0]
        if (this.alta.length > 0) return this.alta[0]
        if (this.normal.length > 0) return this.normal[0]
        if (this.baixa.length > 0) return this.baixa[0]
        if (this.muitoBaixa.length > 0) return this.muitoBaixa[0]
        return null
    }

    estaVazia(): boolean {
        return this.total === 0
    }

    estaCheia(): boolean {
        return this.total >= this.capacidadeMaxima
    }

    quantidade(): number {
        return this.total
    }

    limpar(): void {
        this.muitoBaixa = []
        this.baixa = []
        this.normal = []
        this.alta = []
        this.muitoAlta = []
        this.total = 0
    }
}
