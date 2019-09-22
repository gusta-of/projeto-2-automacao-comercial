
export class ProdutoModel {

    produtoNome: string;

    quantidade: number;

    total: number;

    listaTesteEntidade: ProdutoModel[] =[];


    caixaModel(produtoNome:string,quantidade:number,total:number,listaTesteEntidade: ProdutoModel[]){

        let produto1 = new ProdutoModel;

        produto1.produtoNome = "Mercadoria 01";

        produto1.quantidade = 2;

        produto1.total = 100.00;

        listaTesteEntidade.push(produto1);

        let produto2 = new ProdutoModel;

        produto1.produtoNome = "Mercadoria 02";

        produto1.quantidade = 3;

        produto1.total = 100.00;

        listaTesteEntidade.push(produto2);

        let produto3 = new ProdutoModel;

        produto1.produtoNome = "Mercadoria 03";

        produto1.quantidade = 3;

        produto1.total = 100.00;

        listaTesteEntidade.push(produto3);

        let produto4 = new ProdutoModel;

        produto1.produtoNome = "Mercadoria 04";

        produto1.quantidade = 5;

        produto1.total = 100.00;

        listaTesteEntidade.push(produto4);

        let produto5 = new ProdutoModel;

        produto1.produtoNome = "Mercadoria 05";

        produto1.quantidade = 6;

        produto1.total = 100.00;

        listaTesteEntidade.push(produto5);
    }
}