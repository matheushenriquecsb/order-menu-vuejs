<script>
import Message from './Message.vue'

export default {
  name: 'BurgerForm',

  data() {
    return {
      paes: null,
      carnes: null,
      molhos: null,
      opcionaisData: null,
      nome: null,
      molho: null,
      pao: null,
      carne: null,
      opcionais: [],
      status: 'Solicitado',
      msg: null
    }
  },
  methods: {
    async getIngredientes() {
      try {
        const req = await fetch('https://order-menu-vuejs-1.onrender.com/ingredientes')
        const data = await req.json()
        this.paes = data.paes
        this.carnes = data.carnes
        this.molhos = data.molhos
        this.opcionaisData = data.opcionais
      } catch (error) {
        console.error('Erro ao obter ingredientes:', error)
      }
    },

    async createBurguer(e) {
      try {
        e.preventDefault()

        const data = {
          nome: this.nome,
          carne: this.carne,
          pao: this.pao,
          molho: this.molho,
          opcionais: Array.from(this.opcionais),
          status: 'Solicitado'
        }

        const dataJson = JSON.stringify(data)

        const req = await fetch('https://order-menu-vuejs-1.onrender.com/burgers', {
          method: 'POST',
          body: dataJson
        })

        const res = await req.json()

        this.msg = `Pedido nº${res.id} realizado com sucesso!`

        setTimeout(() => {
          this.msg = ''
          this.nome = ''
          this.carne = ''
          this.pao = ''
          this.molho = ''
          this.opcionais = []
        }, 3000)
      } catch (error) {
        console.error('Erro ao criar hambúrguer:', error)
      }
    }
  },
  mounted() {
    this.getIngredientes()
  },
  components: {
    Message
  }
}
</script>

<template>
  <Message :msg="msg" v-show="msg" />
  <div>
    <div>
      <form id="burguer-form" @submit="createBurguer">
        <div class="input-container">
          <label id="opcionais-title" for="name">Digite seu nome</label>
          <input type="text" id="nome" name="nome" v-model="nome" placeholder="Insira seu nome" />
        </div>
        <div class="input-container">
          <label for="pao">Selecione o pão:</label>
          <select name="pao" id="pao" v-model="pao">
            <option value="">Escolha o pão</option>
            <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{ pao.tipo }}</option>
          </select>
        </div>
        <div class="input-container">
          <label for="carnes">Selecione a carne:</label>
          <select class="teste" name="carnes" id="carnes" v-model="carne">
            <option value="">Escolha a carne</option>
            <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">
              {{ carne.tipo }}
            </option>
          </select>
        </div>
        <div class="input-container">
          <label for="molho">Selecione o molho:</label>
          <select name="molho" id="molho" v-model="molho">
            <option value="">Escolha o molho</option>
            <option v-for="molho in molhos" :key="molho.id" :value="molho.tipo">
              {{ molho.tipo }}
            </option>
          </select>
        </div>

        <div id="opcionais-container" class="input-container">
          <label id="opcionais-title" for="opcionais">Selecione os opcionais:</label>
          <div class="checkbox-container" v-for="opcional in opcionaisData" :key="opcional.id">
            <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo" />
            <span>{{ opcional.tipo }}</span>
          </div>
        </div>
        <div class="input-container">
          <input class="submit-btn" type="submit" value="Criar meu Burguer!" />
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
#burguer-form {
  margin-top: 15px;
  max-width: 400px;
  margin: 0 auto;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #fcba03;
}

input,
select {
  padding: 5px 10px;
  width: 300px;
}

#opcionais-container {
  flex-direction: row;
  flex-wrap: wrap;
}

#opcionais-title {
  width: 100%;
}

.checkbox-container {
  display: flex;
  align-items: flex-start;
  width: 50%;
  margin-bottom: 20px;
}

.checkbox-container span,
.checkbox-container input {
  width: auto;
}

.checkbox-container span {
  margin-left: 15px;
  font-weight: bold;
}

.submit-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 20px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  justify-content: center;
  transition: 0.5s;
}

.submit-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>
