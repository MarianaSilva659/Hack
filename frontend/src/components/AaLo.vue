<template>
    <header class="w3-container" style="position: relative; background-color: #222222;">
        <div>
            <img src="../assets/logo.jpeg" alt="Logo" class="w3-image" ref="imag">
        </div>
    </header>
    <div >
  <h1 class="chosen-film-text" style="  font-size: 60px; font-weight: bold;
">This film matched!!!</h1>
</div>

<div> <h1 class="fas fa-times" style="position:absolute;font-size: 100px ;left: 20%;  top: 50%; transform: translateY(-50%); font-weight: bold ;color: #f23f3f;" aria-role="presentation" aria-label="CROSS MARK">X</h1>
</div>
    <div class="centered">
        <div 
        class="card" 
        ref="card"
        @mousedown="handleMouseDown"
        @mousemove="handleMouseMove"
        @mouseup="handleMouseUp"
        @mouseleave="handleMouseUp"
        >
        <div class="card">
            <img class="img" src="../assets/l.jpg" alt="Sua Imagem" />


            <div class="textBox">
                <p class="text titulo">{{ movies[index].tituloFilme }}<br></p>
                <p class="text sinopse">Sinopse<br><br>
                    {{ movies[index].sinops }}</p>
                <div class="categories-actors">
                    <div class="text categorias">
                        <span style="    font-weight: bold;">Categorias</span><br><br>
                        <span v-for="(cat, index) in movies[index].category" :key="index">{{ cat }}<br></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="preloader">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="shadow"></div>
    </div>
    <div class="button-group">
          <button @click="voltarInicial">Voltar</button>
        </div>
</template>

<style scoped>
.centered-message {
  position: absolute;
  top: 20%;
  left: 48%;
  transform: translate(-50%, -50%);
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
.button-group {
  display: flex;
  justify-content: space-between; /* Distribui os elementos uniformemente ao longo do espaço disponível */
}

.button-group button {
  flex: 1; /* Ocupa todo o espaço disponível */
  margin: 0 5px; /* Adiciona margem entre os botões */
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.preloader {
    position:absolute;
    right: 20%; /* Posicionado à direita */
    top: 50%; /* Centralizado verticalmente */
    transform: translateY(-50%);}

@keyframes rotate {
  50% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(720deg);
  }
}

.preloader span {
  --c: #f23f3f;
  position: absolute;
  display: block;
  height: 64px;
  width: 64px;
  background: var(--c);
  border: 1px solid var(--c);
  border-radius: 100%;
}

.preloader span:nth-child(1) {
  transform: translate(-28px, -28px);
}

@keyframes shape_1 {
  60% {
    transform: scale(0.4);
  }
}

.preloader span:nth-child(2) {
  transform: translate(28px, -28px);
}

@keyframes shape_2 {
  40% {
    transform: scale(0.4);
  }
}

.preloader span:nth-child(3) {
  position: relative;
  border-radius: 0px;
  transform: scale(0.98) rotate(-45deg);
}

@keyframes shape_3 {
  50% {
    border-radius: 100%;
    transform: scale(0.5) rotate(-45deg);
  }

  100% {
    transform: scale(0.98) rotate(-45deg);
  }
}

.shadow {
  position: relative;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  height: 16px;
  width: 64px;
  border-radius: 50%;
  background-color: #d9d9d9;
  border: 1px solid #d9d9d9;
}

@keyframes shadow {
  50% {
    transform: translateX(-50%) scale(0.5);
    border-color: #f2f2f2;
  }
}

.card {
    width: calc(585px * 1.1);
    height: calc(855px * 1.1);
    background: #313131;
    border-radius: calc(20px * 1.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    transition: 0.2s ease-in-out;
}

.img {
    height:calc(855px * 1.1);
    border-radius: calc(20px * 1.1);

    position: absolute;
    transition: 0.2s ease-in-out;
    z-index: 1;
}

.textBox {
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: calc(15px * 1.1);
    transition: 0.2s ease-in-out;
    z-index: 2;
}

.textBox > .text {
    font-weight: bold;
}

.textBox > .sinopse {
    font-size: calc(20px * 1.1);
}

.textBox > .titulo {
    font-size: calc(40px * 1.1);
}

.categories-actors {
    display: flex;
    justify-content: space-around;
    width: 80%;
}

.categories-actors > .text {
    font-size: calc(20px * 1.1);
}

.card:hover > .textBox {
    opacity: 1;
}

.card:hover > .img {
    height: calc(65% * 1);
    filter: blur(calc(10px * 1.1));
}

.centered {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 87vh;
}
</style>


<script>
export default {
    data() {
        return {
          movies: [
                {
                    category: ["Comédia", "Musical", "Romance"],
                    tituloFilme: "Mamammia",
                    sinops: "Na ilha grega de Kalokairi, Sophie (Amanda Seyfried) está prestes a se casar e, sem saber quem é seu pai, envia convites para Sam Carmichael (Pierce Brosnan), Harry Bright (Colin Firth) e Bill Anderson (Stellan Skarsgard). Eles vêm de diferentes partes do mundo, dispostos a reencontrar a mulher de suas vidas: Donna (Meryl Streep), mãe de Sophie. Ao chegarem Donna é surpreendida, tendo que inventar desculpas para não revelar quem é o pai de Sophie.",
                    love: false, // Inicializa como não amado
                    reject: false, // Inicializa como não rejeitado
                    startX: 0,
                    startY: 0,
                    num: 0
                },
                {
                    category: ["Comédia", "Musical", "Romance"],
                    tituloFilme: "AAAAAAAAAAAAAAAAAAA",
                    sinops: "Na ilha grega de Kalokairi, Sophie (Amanda Seyfried) está prestes a se casar e, sem saber quem é seu pai, envia convites para Sam Carmichael (Pierce Brosnan), Harry Bright (Colin Firth) e Bill Anderson (Stellan Skarsgard). Eles vêm de diferentes partes do mundo, dispostos a reencontrar a mulher de suas vidas: Donna (Meryl Streep), mãe de Sophie. Ao chegarem Donna é surpreendida, tendo que inventar desculpas para não revelar quem é o pai de Sophie.",
                    love: false, // Inicializa como não amado
                    reject: false, // Inicializa como não rejeitado
                    startX: 0,
                    startY: 0,
                    num:2
                },
                // Outros filmes...
            ],
            index : 0,
            numgroup : 2
        };
        
    },
    computed: {
        maxIndex() {
            return this.movies.length - 2;
        }
    },
    methods: {
        handleMouseDown(event) {
            this.dragging = true;
            this.startX = event.clientX;
            this.startY = event.clientY;
        },

        handleMouseMove(event) {
            if (!this.dragging) return;

            const deltaX = event.clientX - this.startX;
            const deltaY = event.clientY - this.startY;

            // Adjust the card position based on deltaX and deltaY
            const card = this.$refs.card;
            card.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

            // Determine the direction of movement
            const direction = this.calculateDirection(deltaX, deltaY);
            if (direction == "left"){
              this.movies[this.index].reject = true;
            }
            if (direction == "right"){
              this.movies[this.index].love = true;
              this.movies[this.index].num += 1;

              console.log("qqq",this.movies[this.index].love )
            }
            console.log("Direction:", direction);
            if(this.index < this.maxIndex)
              this.index += 1;

            // Update start positions
            this.startX = event.clientX;
            this.startY = event.clientY;
        },

        handleMouseUp() {
            this.dragging = false;
        },

        calculateDirection(deltaX, deltaY) {
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                return deltaX > 0 ? "right" : "left";
            } else {
                return deltaY > 0 ? "down" : "up";
            }
        },
        voltarInicial(){
      this.$router.push('/');
    }
    }
}

</script>

