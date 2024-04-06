

<script>
export default {
  data() {
    return {
      imagemHeight:0,
      grupo: ''
      
    }
  },
  methods: {
    updateGrupo(event) {
      // Verifica se a tecla pressionada foi "Enter"
      if (event.key === 'Enter') {
        this.grupo = event.target.value;
        // Navegar para a nova página
      //  router.push('/loadPag');
      }
    },
    irParaCriarRoom(){
      console.log("aaaaaaaa");
      this.$router.push('/create');
    }
    }
}
</script>

<template>
  <div class="w3-card-4">
    <!-- Cabeçalho -->
    <header class="w3-container" style="position: relative;background-color: #222222;">
      <div><img src="../assets/logo.jpeg" alt="Imagem de Exemplo" class="w3-image" ref="imag">
      </div>
      </header>
  </div>

  <div class="form-control">
    <input type="text" v-model="grupo" @keydown.enter="updateGrupo" required>
    <label>
        <span style="transition-delay:0ms">E</span>
        <span style="transition-delay:50ms">n</span>
        <span style="transition-delay:100ms">t</span>
        <span style="transition-delay:150ms">e</span>
        <span style="transition-delay:200ms">r</span>
        <span style="transition-delay:250ms"> </span>
        <span style="transition-delay:300ms">R</span>
        <span style="transition-delay:350ms">o</span>
        <span style="transition-delay:400ms">o</span>
        <span style="transition-delay:450ms">m</span>
        <span style="transition-delay:500ms"> </span>
        <span style="transition-delay:550ms">I</span>
        <span style="transition-delay:600ms">D</span>



    </label>
</div>
  <div>
      <button @click="irParaCriarRoom">Create Room</button>
  </div>
  
</template>




<style scoped>
@import url('../assets/w3.css');

.centered {
  text-align: center; /* Centraliza o conteúdo horizontalmente */
  font-size: 100px;
  margin: 100px; 
  font-family: Gill Sans;
  background-image: linear-gradient(to right, 
        #FF7F7F, #FF6666, #FF4C4C, #FF3333, #FF1919, #FF0000);
      -webkit-background-clip: text; /* Para navegadores WebKit (Safari, Chrome) */
      background-clip: text;
      color: transparent; /* Torna o texto invisível */
      font-size: 72px; /* Tamanho da fonte */
      font-weight: bold; /* Peso da fonte */
      font-family: sans-serif; /* Família da fonte */
      text-align: center;
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
  font-size: 100px;
  cursor: pointer;
  margin: 200px auto; /* Centraliza o botão horizontalmente */
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
  font-size: 100px;
  color: #080808;
}

.form-control input:focus,
.form-control input:valid {
  outline: 0;
  border-bottom-color: rgb(0, 0, 0);
}

.form-control label {
  position: absolute;
  top: 40px;
  left: 0;
  pointer-events: none;
}

.form-control label span {
  display: inline-block;
  font-size: 100px;
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