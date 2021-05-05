import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { Router } from '@angular/router';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-produto-cadastrar',
  templateUrl: './produto-cadastrar.component.html',
  styleUrls: ['./produto-cadastrar.component.css']
})
export class ProdutoCadastrarComponent implements OnInit {

  produto: Produto = new Produto();

  constructor(
    private service: ProdutoService,
    private router: Router) { }

  ngOnInit(): void {
  }


  save(): void {
    this.service.save(this.produto)
      .subscribe(() => {
        console.log(this.produto);
        alert('Produto salvo com sucesso!');
        this.router.navigate(['listar']);
      });
  }

}
