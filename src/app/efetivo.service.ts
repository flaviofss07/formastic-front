import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EfetivoService {

  constructor(private http: HttpClient) {}
 
  private readonly URL_EFETIVO = `${environment.apiUrl}/efetivos-astic`;
  
  buscaTodos(): Promise<any> {
    return this.http.get(this.URL_EFETIVO)
                  .toPromise();
  }

  salvaEfetivo(efetivo: any): Promise<any> {
    return this.http.post(this.URL_EFETIVO, efetivo)
                  .toPromise();
  }

}