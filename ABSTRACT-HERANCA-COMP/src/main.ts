import { NotaFiscal } from "./model/NotaFiscal";

const notaF1 = new NotaFiscal(`213578-952`);
notaF1.pessoaF.setNome(``);
notaF1.pessoaF.setCpf(``);
console.log(`Nome: ${notaF1.pessoaF.getNome()}`);
console.log(`CPF: ${notaF1.pessoaF.getCpf()}`);
console.log(`Nota Fiscal nº: ${notaF1.getNumeroNotaFiscal()}`);

const notaF2v = new NotaFiscal(`104829480-13`)
notaF2v.pessoaF.setNome(``);
notaF2v.pessoaF.setCpf(``);
console.log(`Nome: ${notaF1.pessoaF.getNome()}`);
console.log(`CPF: ${notaF1.pessoaF.getCpf()}`);
console.log(`Nota Fiscal nº: ${notaF1.getNumeroNotaFiscal()}`);