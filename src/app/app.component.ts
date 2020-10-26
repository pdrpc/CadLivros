import { Component } from '@angular/core';
import { Livro } from './Livros/livro.mode'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  livros: Livro[] = [];
  onLivroAdicionado(livro){
    this.livros = [...this.livros, livro]
  }
}
