import { Component, OnInit, Input } from '@angular/core';
import { Livro } from '../livro.mode'

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnInit {
  @Input() livros: Livro[] = [];
  constructor() { }
  ngOnInit(): void { }
}
