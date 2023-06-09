# Desafio 1 (JS) - Monitoria ES 23.1

Este é o repositório do Desafio 1 da monitoria de Engenharia de Software do curso de Sistemas de Informação do Centro de Informática da UFPE, do semestre 2023.1


## Requirements

  
Crie uma classe Book com as seguintes propriedades:
 
> title: string
> 
> description: string
> 
> author: string
>
Crie uma classe Library com a seguinte propriedade:
> books: Book[]
> 
e com os seguintes métodos:
> 
> adicionar: addBook(bookInfo: Omit<Book, ‘id’>): Book
> 
> listar todos: getBooks(): Book[]
> 
> remover: removeBookById(id: string): void
> 
> mostrar um: getBookById(id: string): Book
> 
> editar um: updateBookById(id: string, info: { title?: string, description?: string, author?: string }): Book  
  
  
Como desenvolvedor(a) que usarei seu programa, devo poder criar Books e Libraries e executar os métodos presentes em Library.

Forma de entrega:
1ª opção: Criar um repositório no github e colocar o link na atividade (aproveita e já pratica Git 😉)
2ª opção: Colocar o arquivo com o código aqui na atividade

