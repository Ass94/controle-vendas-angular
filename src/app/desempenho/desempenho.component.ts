import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-desempenho',
  templateUrl: './desempenho.component.html',
  styleUrls: ['./desempenho.component.css']
})
export class DesempenhoComponent implements OnInit {

  produtos: Produto[] = [];

  produtosVendidos: Produto[] = [];

  constructor(private service: ProdutoService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll()
      .subscribe(response => {
        this.produtos = response;
        this.filterProdutoVendido();
        this.receitaMensal();
      });
  }

  filterProdutoVendido(): void {
    this.produtosVendidos = this.produtos.filter(produto => produto.status === 'Vendido');
  }

  total(): number {
    let soma = 0;
    for (let produto of this.produtosVendidos) {
      soma += produto.valorVenda;
    }
    return soma;
  }

  quantidade(): number {
    let total = 0
    let qtdeVendido = 0;
    for (let produto of this.produtosVendidos) {
      qtdeVendido += produto.quantidade;
    }
    let qtdeDisponivel = 0;
    for (let produto of this.produtos) {
      qtdeDisponivel += produto.quantidade;
    }

    if (qtdeVendido > qtdeDisponivel) {
      total = qtdeVendido - qtdeDisponivel;
    } else {
      total = qtdeDisponivel - qtdeVendido;
    }
    return total;
  }

  receitaMensal(): void {
    data: new Date();
    for (let produto of  this.produtos) {
      console.log(produto.dataVenda?.getMonth);
    }

  }



}
