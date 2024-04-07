<template>
  <header class="w3-container" style="position: relative;background-color: #222222;">
      <div><img src="../assets/logo.jpeg" alt="Imagem de Exemplo" class="w3-image" ref="imag">
      </div>
      </header>
<div class="container">
    <div class="content">
      <form class="w3-container" @submit.prevent="submitTodo">
  <fieldset>
    <legend style="font-size: 60px;">Fill in the information below</legend>
    <div class="form-group">
      <label for="numero" style="font-size: 40px;">Number of participants:</label>
<input id="numero" class="w3-input w3-round" type="text" v-model="numero" style="font-size: 30px;" />
    </div>
  </fieldset>
  <label style="font-size: 60px;">Choose the categories you prefer:</label>

  <fieldset>
      <legend style="font-size: 40px;">Categories</legend>
      <div class="options-container">
        <div v-for="(label, value, index) in category" :key="value" class="option-item" :style="{ 'margin-bottom': index % 2 === 0 ? '10px' : '0' }">
          <input class="w3-check" :id="value" type="checkbox" :name="value" :value="value" style="font-size: 20px;" v-model="categoryOpcao" />
          <label :for="value" style="font-size: 30px; margin-left: 10px;">{{ label }}</label>
        </div>
      </div>
    </fieldset>
    
    <fieldset>
      <legend style="font-size: 40px;">Styles</legend>
      <div class="options-container">
        <div v-for="(label, value, index) in options" :key="value" class="option-item" :style="{ 'margin-bottom': index % 2 === 0 ? '10px' : '0' }">
          <input class="w3-check" :id="value" type="checkbox" :name="value" :value="value" style="font-size: 20px;" v-model="opcao" />
          <label :for="value" style="font-size: 30px; margin-left: 10px;">{{ label }}</label>
        </div>
      </div>
    </fieldset>
      <br/>
      <div class="button-group">
          <button @click="waitGroup">Create Room</button>
          <button @click="voltarInicial">Voltar</button>
        </div>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categoryOpcao: [], // Array para armazenar opções selecionadas de categorias
      opcao: [],
      numero: 0,
      options: {
        'action': 'Action',
        'adventure': 'Adventure',
        'comedy': 'Comedy',
        'drama': 'Drama',
        'horror': 'Horror',
        'romance': 'Romance',
        'sci-fi': 'Sci-Fi',
        'thriller': 'Thriller',
        'animation': 'Animation',
        'documentary': 'Documentary'
      },
      category:{
        'movie':'Movie',
        'game': 'Game'
      }
    };

  },
  methods: {
    submitTodo() {
      // Aqui você pode acessar this.opcao para obter a opção selecionada
      console.log('Opção selecionada:', this.opcao);
      console.log("sss", this.numero);
      // Faça o que precisa fazer com a opção selecionada, por exemplo, enviar para o servidor
    },
    waitGroup(){
      console.log("aaaaaaaa");
      console.log("ccc", this.categoryOpcao);
      console.log("ooo", this.opcao);

      this.$router.push('/waitgroup');
      console.log('Opção selecionada:', this.opcao);
      console.log("sss", this.numero);
    },
    voltarInicial(){
      this.$router.push('/');
    }
  }
}
</script>



<style scoped>

.button-group {
  display: flex;
  justify-content: space-between; /* Distribui os elementos uniformemente ao longo do espaço disponível */
}

.button-group button {
  flex: 1; /* Ocupa todo o espaço disponível */
  margin: 0 5px; /* Adiciona margem entre os botões */
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Isso faz com que o container ocupe toda a altura da tela */
}

.content {
  margin-top: -300px; /* Ajuste conforme necessário */
  width: 60%; /* Ajuste conforme necessário */
}
.options-container {
    display: flex;
    flex-wrap: wrap;
}

.option-item {
    margin-right: 20px; /* Espaço entre os itens */
    flex: 1 0 calc(50% - 20px); /* Duas colunas */
}
.select {
  width: fit-content;
  cursor: pointer;
  position: relative;
  transition: 300ms;
  color: white;
  overflow: hidden;
}

.selected {
  background-color: #373a40;
  padding: 5px;
  margin-bottom: 3px;
  border-radius: 5px;
  position: relative;
  z-index: 100000;
  font-size: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.arrow {
  position: relative;
  right: 0px;
  height: 10px;
  transform: rotate(-90deg);
  width: 25px;
  fill: white;
  z-index: 100000;
  transition: 300ms;
}

.options {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 5px;
  background-color: #606269;
  position: relative;
  top: -100px;
  opacity: 0;
  transition: 300ms;
  width: fit-content;
}

.select:hover > .options {
  opacity: 1;
  top: 0;
}

.select:hover > .selected .arrow {
  transform: rotate(0deg);
}

.option {
  border-radius: 5px;
  padding: 5px;
  transition: 300ms;
  background-color: #323741;
  width: 400px;
  display: flex;
  font-size: 70px;
}
.option:hover {
  background-color: #606269;
}

.options input[type="radio"] {
  display: none;
}

.options label {
  display: inline-block;
}
.options label::before {
  content: attr(data-txt);
}

.options input[type="radio"]:checked + label {
  display: none;
}


.select:has(.options input[type="radio"]#Movie:checked) .selected::before {
  content: attr(data-one);
}
.select:has(.options input[type="radio"]#Game:checked) .selected::before {
  content: attr(data-two);
}
.select:has(.options input[type="radio"]#option-3:checked) .selected::before {
  content: attr(data-three);
}

button {
  width: 10em;
  position: relative;
  height: 3.5em;
  border: 3px ridge #000000;
  outline: none;
  background-color: transparent;
  color: rgb(0, 0, 0);
  transition: 1s;
  border-radius: 0.3em;
  font-size: 40px;
  cursor: pointer;
  margin: 0px auto; /* Centraliza o botão horizontalmente */
  display: block; /* Garante que o botão ocupe toda a largura disponível */
}

button::after {
  content: "";
  position: absolute;
  top: -10px;
  left: 3%;
  width: 95%;
  height: 40%;
  transition: 0.5s;
  transform-origin: center;
}

button::before {
  content: "";
  transform-origin: center;
  position: absolute;
  top: 80%;
  left: 3%;
  width: 95%;
  height: 40%;
  transition: 0.5s;
}

button:hover::before, button:hover::after {
  transform: scale(0)
}

button:hover {
  box-shadow: inset 0px 0px 25px #000000;
}

.form-control {
  position: relative;
  margin: 100px auto; /* Define margens superior e inferior de 40px e margem automática nos lados, o que centraliza horizontalmente */
  width: 800px;
  text-align: center; /* Centraliza o conteúdo dentro do elemento */
}

.form-control input {
  background-color: transparent;
  border: 0;
  border-bottom: 2px #0f0e0e solid;
  display: block;
  width: 100%;
  padding: 25px 0;
  font-size: 40px;
  color: #080808;
}

.form-control input:focus,
.form-control input:valid {
  outline: 0;
  border-bottom-color: rgb(0, 0, 0);
}

.form-control label {
  position: absolute;
  top: 0px;
  left: 0;
  pointer-events: none;
}

.form-control label span {
  display: inline-block;
  font-size: 40px;
  min-width: 45px;
  color: #000000;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.form-control input:focus+label span,
.form-control input:valid+label span {
  color: rgb(0, 0, 0);
  transform: translateY(-140px);
}

</style>
