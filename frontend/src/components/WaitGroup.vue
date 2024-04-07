<template>
    <header class="w3-container" style="position: relative;background-color: #222222;">
        <div><img src="../assets/logo.jpeg" alt="Imagem de Exemplo" class="w3-image" ref="imag"></div>
    </header>
    <div class="centered">
        <div class="info" style="margin-top: 100px;">
            <div class="info__title">The entry key for the group is: {{ chave }} </div>
        </div>
    </div>
    <div class="centered" style="margin-top: 100px">
        <h1 class="waiting-text">Waiting to complete the group {{ numPessoasGrupo }} / {{ total }}</h1>
    </div>
    <div class="centered"  style="margin-top: 250px">
        <div class="loader3">
            <div class="circle1"></div>
            <div class="circle1"></div>
            <div class="circle1"></div>
            <div class="circle1"></div>
            <div class="circle1"></div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            chave: 'AQ2013',
            total: 2 ,
            numPessoasGrupo: 1
        };
    },
    methods: {
        voltarInicial() {
            this.$router.push('/');
        }
    },
    watch: {
        total(newValue) {
            this.verificarTotalENumPessoasGrupo();
        },
        numPessoasGrupo(newValue) {
            this.verificarTotalENumPessoasGrupo();
        }
    },
    mounted() {
        this.verificarTotalENumPessoasGrupo();
    },
    methods: {
        verificarTotalENumPessoasGrupo() {
            if (this.total === this.numPessoasGrupo) {
                this.$router.push('/pagPrincipal');
            }
        }
    }
}
</script>

<style scoped>
.centered {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh; /* Isso é opcional, dependendo do seu layout */
}

.info {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 1650px;
    height: 200px; /* Ajuste da altura para 200px */
    padding: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center; /* Centraliza horizontalmente */
    background: #d74545;
    border-radius: 8px;
    box-shadow: 0px 0px 5px -3px #111;
    overflow-y: auto; /* Tornar o conteúdo rolável verticalmente */
}

.info__title {
    font-weight: 500;
    font-size: 90px;
    color: #fff;
    text-align: center; /* Centraliza o texto dentro do elemento */
    display: flex; /* Para alinhar verticalmente */
    align-items: center; /* Alinha verticalmente */
}


.loader3 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle1 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 25px;
  background-color: #333;
  animation: circle1 1s ease-in-out infinite;
}

.circle1:nth-child(2) {
  animation-delay: 0.2s;
}

.circle1:nth-child(3) {
  animation-delay: 0.4s;
}

.circle1:nth-child(4) {
  animation-delay: 0.6s;
}

.circle1:nth-child(5) {
  animation-delay: 0.8s;
}

@keyframes circle1 {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.waiting-text {
    font-size: 90px;
    color: #333; /* Cor do texto */
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2); /* Sombra do texto */
    text-align: center; /* Alinhamento central */
    padding: 20px; /* Espaçamento interno */
    border-radius: 10px; /* Bordas arredondadas */
}

</style>
