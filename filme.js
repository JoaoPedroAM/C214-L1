class Filme {
    constructor(titulo, ano, genero, duracao, avaliacao) {
      this.titulo = titulo;
      this.ano = ano;
      this.genero = genero;
      this.duracao = duracao;
      this.assistido = false;
      this.avaliacao = avaliacao;
    }
  
    mostraDetalhe() {
      console.log(`Titulo: ${this.titulo}`);
      console.log(`Ano: ${this.ano}`);
      console.log(`Genero: ${this.genero}`);
      console.log(`Duraçao: ${this.duracao}`);
      console.log(`Assistido: ${this.assistido}`);
      console.log(`Avaliação: ${this.avaliacao}`);
    }
  
    assistir() {
      this.assistido = true;
    }
  
    avaliar(nota) {
      this.nota = nota;
    }
  }
  
  const filme1 = new Filme("gato de botas", 2022, "Animaçao", 210, 3);
  const filme2 = new Filme("Sherk", 2008, "Animaçao", 180, 5);
  const filme3 = new Filme("Vingadores", 2022, "Animaçao", 210, 3);
  

  filme1.assistir();
  filme1.avaliacao();
  filme1.mostraDetalhe();
  