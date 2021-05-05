import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${API_CONFIG.baseUrl}/produtos`);
  }

  findById(produto: Produto): Observable<Produto> {
    return this.http.get<Produto>(`${API_CONFIG.baseUrl}/produtos${produto.id}`);
  }

  save(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${API_CONFIG.baseUrl}/produtos`, produto);
  }

  update(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${API_CONFIG.baseUrl}/produtos`, produto);
  }

  delete(produto: Produto): Observable<void> {
    return this.http.delete<void>(`${API_CONFIG.baseUrl}/produtos/${produto.id}`);
  }

  findByNome(nomeProduto: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${API_CONFIG.baseUrl}/produtos/nome?nome=${nomeProduto}`);
  }

  orderByDataVenda(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${API_CONFIG.baseUrl}/produtos/ordenar`);
  }

}
