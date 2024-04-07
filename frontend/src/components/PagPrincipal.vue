<template>
    <header class="w3-container" style="position: relative; background-color: #222222;">
        <div>
            <img src="../assets/logo.jpeg" alt="Logo" class="w3-image" ref="imag">
        </div>
    </header>

    <div class="centered">
        <div class="card">
            <img class="img" src="../assets/mamamia.png"alt="Sua Imagem" />


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
      
    }
}

</script>

