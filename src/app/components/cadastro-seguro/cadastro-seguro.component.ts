import { Component, OnInit } from '@angular/core';
import { Seguro } from 'src/app/models/Seguro';
import { Observable } from 'rxjs';
import { MarcaCarro } from 'src/app/models/MarcaCarros';
import { MarcaCarroService } from 'src/app/services/marca-carro.service';

@Component({
  selector: 'app-cadastro-seguro',
  templateUrl: './cadastro-seguro.component.html',
  styleUrls: ['./cadastro-seguro.component.css']
})
export class CadastroSeguroComponent implements OnInit {

  public seguro = new Seguro();
  public marcasCarro$ : Observable<MarcaCarro[]>

  constructor(private marcaCarroService: MarcaCarroService) { }

  ngOnInit(): void {
    this.marcasCarro$ = this.marcaCarroService.getMarcas();
  }

}
