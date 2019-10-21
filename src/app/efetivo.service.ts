import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EfetivoService {

  private readonly URL_SALVA_EFETIVO = `${environment.apiUrl}/efetivos-astic`;
  private readonly URL_BUSCA_TODOS = `${environment.apiUrl}/efetivos-astic`;

  constructor(private http: HttpClient) {}

  buscaTodos(): Promise<any> {
    return this.http.get(this.URL_BUSCA_TODOS)
                  .toPromise();
  }

  salvaEfetivo(efetivo: any): Promise<any> {
    return this.http.post(this.URL_SALVA_EFETIVO, efetivo)
                  .toPromise();
  }

}