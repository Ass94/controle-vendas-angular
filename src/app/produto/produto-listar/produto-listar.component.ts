import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-produto-listar',
  templateUrl: './produto-listar.component.html',
  styleUrls: ['./produto-listar.component.css']
})
export class ProdutoListarComponent implements OnInit {

  produtos: Produto[] = [];

  produto: Produto = new Produto();

  exibirTelaCadastro = false;

  p: number = 1;

  nomeProduto: string = '';


  constructor(private service: ProdutoService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll()
      .subscribe(response => {
        this.produtos = response;
      });
  }

  delete(produto: Produto): void {
    this.service.delete(produto)
      .subscribe(() => {
        this.findAll();
      });
  }

  update(): void {
    console.log(this.produto);
    this.service.update(this.produto)
      .subscribe(() => {
        this.findAll();
        this.exibirTelaCadastro = false;
      });
  }

  atualizar(produto: Produto): void {
    this.produto = produto;
    this.exibirTelaCadastro = true;
  }

  findByNome(): void {
    if (this.nomeProduto === '') {
      this.findAll();
    } else {
      this.service.findByNome(this.nomeProduto)
        .subscribe(produtos => {
          this.produtos = produtos;
        });
    }
  }
  
  totalCompra(): number {
    let soma = 0;
    if (this.produtos.length > 0) {
      for (let produto of this.produtos) {
        soma += produto.valorCompra * produto.quantidade;
      }
    }
    return soma;
  }

  totalVenda(): number {
    let soma = 0;
    if (this.produtos.length > 0) {
      for (let produto of this.produtos) {
        soma += produto.valorVenda * produto.quantidade;
      }
    }
    return soma;
  }

}
