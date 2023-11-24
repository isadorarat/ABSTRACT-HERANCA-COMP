import { PessoJuridica } from "./PessoJuridica";
import { PessoaFisica } from "./PessoaFisica";

export class NotaFiscal {
    private numeroNotaFiscal: string;
    public pessoaJ = new PessoJuridica('', '')
    public pessoaF = new PessoaFisica('', '')

    constructor(_numeroNotaFiscal: string) {
        this.numeroNotaFiscal = _numeroNotaFiscal;
    }

    public setNumeroNotaFiscal(_numeroNotaFiscal: string): void {
        this.numeroNotaFiscal = _numeroNotaFiscal;
    }
    public getNumeroNotaFiscal(): string {
        return this.numeroNotaFiscal;
    }
}