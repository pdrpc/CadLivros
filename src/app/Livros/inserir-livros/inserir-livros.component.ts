import { Component, EventEmitter, Output } from '@angular/core';
import { Livro } from '../livro.mode';
@Component({
  selector: 'app-inserir-livros',
  templateUrl: './inserir-livros.component.html',
  styleUrls: ['./inserir-livros.component.css'],
})
export class InserirLivrosComponent {
  @Output() livroAdicionado = new EventEmitter<Livro>();
  
  id: string;
  titulo: string;
  autor: string;
  paginas: string;

  onAdicionarLivro() {
    const livro: Livro = {
      id: this.id,
      titulo: this.titulo,
      autor: this.autor,
      paginas: this.paginas,
    };
    this.livroAdicionado.emit(livro);

  }
}
