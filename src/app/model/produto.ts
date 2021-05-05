export class Produto {
	id: number | undefined;
	nome: string | undefined;
	quantidade = 1;
	valorCompra = 0;
	valorVenda = 0;
	dataCompra: Date | undefined;
	dataVenda: Date | undefined;
	status: string | undefined;
}