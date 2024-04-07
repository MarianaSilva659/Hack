<template>
    <header class="w3-container" style="position: relative; background-color: #222222;">
        <div>
            <img src="../assets/logo.jpeg" alt="Logo" class="w3-image" ref="imag">
        </div>
    </header>

    <div class="centered">
        <div class="card">
            <svg class="img" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="100%" height="100%"
                version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
                image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 784.37 1277.39"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <g id="_1421394342400">
                        <g>
                            <polygon fill="#343434" fill-rule="nonzero" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54"></polygon>
                            <polygon fill="#8C8C8C" fill-rule="nonzero" points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33"></polygon>
                            <polygon fill="#3C3C3B" fill-rule="nonzero" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89"></polygon>
                            <polygon fill="#8C8C8C" fill-rule="nonzero" points="392.07,1277.38 392.07,956.52 -0,724.89"></polygon>
                            <polygon fill="#141414" fill-rule="nonzero" points="392.07,882.29 784.13,650.54 392.07,472.33"></polygon>
                            <polygon fill="#393939" fill-rule="nonzero" points="0,650.54 392.07,882.29 392.07,472.33"></polygon>
                        </g>
                    </g>
                </g>
            </svg>

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
</template>

<style scoped>
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
    height: 30%;
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
      
    }
}

</script>

