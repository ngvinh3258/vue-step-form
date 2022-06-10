<template>
  <div id="app" class="container">
    <div class="box">
      <ProgressBar :step="step" />
      <StepWrap :step="step" />
      <FormWrap :userData="userData" :step="step" @next-click="nextStep" @pre-click="preStep" @reset-click="resetHandle"
        @send-click="sendData" />
    </div>
  </div>
</template>

<script>
import FormWrap from './components/FormWrap.vue'
import StepWrap from './components/StepWrap.vue';
import ProgressBar from './components/ProgressBar.vue';

export default {
  name: 'App',
  components: {
    FormWrap,
    StepWrap,
    ProgressBar
  },
  data() {
    return {
      userData: {
        name: '', email: '', company: '', employees: '', selected: '', acceptTerm: false

      },
      step: 1
    }
  },
  methods: {
    nextStep() {
      console.log("nextStep", this.step)
      this.step++;
    },
    preStep() {
      if (this.step !== 1) {
        this.step--;
      }
    },
    resetHandle() {
      this.step = 1;
      //resetData
    }
    , sendData() {
      console.log("userData", this.userData)
    }
  }

}
</script>

<style>
#app {
  font-family: Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  padding: 60px 20px 0 20px;
}

.container {
  background-color: #f7f7f7;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
}

.box {
  width: 900px;
}
</style>
