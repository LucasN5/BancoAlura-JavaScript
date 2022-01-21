import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

//import {ContaCorrente} from "./ContaCorrente.js";
//import { ContaPoupança } from "./ContaPoupança.js";
//import {ContaSalario} from "./ContaSalario.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 123465498);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 9549841894, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);













// Exemplos de aulas Passadas:



//Após a criação do constructor, a criação de novas contas pode ser feita na parte
// de parametros das classes
const cliente1 = new Cliente("Joao",541515681 ); 

//Metodo antigo antes de usar o constructor:

//cliente1.nome = "Joao";
//cliente1.cpf = 541515681;

const contaCorrenteJoao = new ContaCorrente(cliente1, 1001);
const contaPoupança = new ContaPoupança(50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);  
contaSalario.depositar(100);
contaSalario.sacar(10);



//console.log(contaSalario);
//console.log(contaPoupança);
//console.log(contaCorrenteJoao);




const cliente2 = new Cliente("Juan",238469846);

//cliente2.nome = "Juan";
//cliente2.cpf = 238469846;



//console.log(cliente1);
//console.log(cliente2);





