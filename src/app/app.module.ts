import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoCadastrarComponent } from './produto/produto-cadastrar/produto-cadastrar.component';
import { ProdutoListarComponent } from './produto/produto-listar/produto-listar.component';
import { MenuComponent } from './menu/menu.component';
import { DesempenhoComponent } from './desempenho/desempenho.component';

export const appRouters: Routes = [
  { path: 'cadastrar', component: ProdutoCadastrarComponent },
  { path: 'listar', component: ProdutoListarComponent },
  { path: 'desempenho', component: DesempenhoComponent }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(appRouters);


@NgModule({
  declarations: [
    AppComponent,
    ProdutoCadastrarComponent,
    ProdutoListarComponent,
    MenuComponent,
    DesempenhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    routes,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
