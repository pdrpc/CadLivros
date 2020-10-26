import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InserirLivrosComponent } from './Livros/inserir-livros/inserir-livros.component';
import { ListaLivrosComponent } from './Livros/lista-livros/lista-livros.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    InserirLivrosComponent,
    ListaLivrosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
