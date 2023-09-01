class Filme {
  constructor(titulo, ano, genero, duracao) {
      this.titulo = titulo;
      this.ano = ano;
      this.genero = genero;
      this.duracao = duracao;
      this.assistido = false;
      this.avaliacao = undefined;
  }

  exibirDetalhes() {
      console.log(`Título: ${this.titulo}`);
      console.log(`Ano: ${this.ano}`);
      console.log(`Gênero: ${this.genero}`);
      console.log(`Duração: ${this.duracao} minutos`);
      console.log(`Assistido: ${this.assistido ? 'Sim' : 'Não'}`);
      console.log(`Avaliação: ${this.avaliacao ? this.avaliacao : 'Não avaliado'}`);
  }

  marcarComoAssistido() {
      this.assistido = true;
  }

  avaliar(nota) {
      if (0 <= nota && nota <= 10) {
          this.avaliacao = nota;
      } else {
          throw new Error("Nota inválida. A avaliação deve ser entre 0 e 10.");
      }
  }
}

module.exports = Filme;