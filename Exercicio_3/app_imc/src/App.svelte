<script>
	let peso = 0;
	let altura = 0;
	let imc = 0;
	let classificacao = "Normal"


	function calcularIMC() {
	  if (peso > 0 && altura > 0) {
		imc = (peso / Math.pow(altura, 2)).toFixed(2);
		classificaIMC(imc)
	  } else {
		imc = 0;
	  }
	}

	function classificaIMC(imc){
		if(imc < 18.5){
			classificacao = "Abaixo do peso"
		}else if(imc>= 18.6 && imc < 24.9){
			classificacao = "Peso ideal(parabens)"
		}else if(imc >= 25 && imc < 29.9){
			classificacao = "Levemente acima do peso"
		}else if(imc >= 30 && imc < 34.9){
			classificacao = "Obesidade grau 1"
		}else if(imc >= 35 && imc < 39.9){
			classificacao = "Obesidade grau 2 (Severa)"
		}else{
			classificacao = "Obesidade grau 3 (Mórbida)"
		}
	}
</script>

<main>
<div>
	<h1>Calculadora de IMC</h1>
	<label>
	  Peso (kg): <input type="number" bind:value={peso} on:input={calcularIMC} />
	</label>
	<label>
	  Altura (m): <input type="number" bind:value={altura} on:input={calcularIMC} />
	</label>
	{#if imc > 0}
	  <h2>Seu IMC é {imc}. Você está {classificacao}.</h2>
	{/if}
</div>
</main>


<style>
	
	main{
		margin: 100px;
		border: 100px;
	}
	div {
	  font-family: sans-serif;
	  text-align: center;
	  padding: 2rem;
	  
	}
  
	h1 {
	  font-size: 2.5rem;
	  margin-bottom: 1rem;
	  padding-bottom: 30px;
	  
	}
  
	label {
  font-size: 16px;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
}

  
input {
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
  font-size: 16px;
}

input:focus {
  outline: none;
  border-color: #000;
}
</style>