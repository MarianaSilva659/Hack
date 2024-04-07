<template>
    <header class="w3-container" style="position: relative; background-color: #222222;">
        <div>
            <img src="../assets/logo.jpeg" alt="Logo" class="w3-image" ref="imag">
        </div>
    </header>

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
            <img class="img" src="../assets/mamamia.png" alt="Sua Imagem" />


            <div class="textBox">
                <p class="text titulo">{{ tituloFilme }}<br></p>
                <p class="text sinopse">Sinopse<br><br>
                    {{ sinops }}</p>
                <div class="categories-actors">
                    <div class="text categorias">
                        <span style="    font-weight: bold;">Categorias</span><br><br>
                        <span v-for="(cat, index) in category" :key="index">{{ cat }}<br></span>
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
</template>

<style scoped>
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
  animation: shadow 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
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
    animation: anim 3s infinite;
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
            category: ["Comédia", "Musical", "Romance"],
            elenco: ["Meryl Streep", "Pierce Brosnan", "Amanda Seyfried", "Colin Firth"],
            tituloFilme: "Mamammia",
            sinops : "Na ilha grega de Kalokairi, Sophie (Amanda Seyfried) está prestes a se casar e, sem saber quem é seu pai, envia convites para Sam Carmichael (Pierce Brosnan), Harry Bright (Colin Firth) e Bill Anderson (Stellan Skarsgard). Eles vêm de diferentes partes do mundo, dispostos a reencontrar a mulher de suas vidas: Donna (Meryl Streep), mãe de Sophie. Ao chegarem Donna é surpreendida, tendo que inventar desculpas para não revelar quem é o pai de Sophie. ",
            startX: 0,
            startY:0
        };
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
            console.log("Direction:", direction);

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
        }
    }
}

</script>

