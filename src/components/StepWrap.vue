<template>
  <div class="step-wrap-container">
    <div class="step-box">
      <div class="step-title" :class="[step === 1 ? activeClass : successClass]">
        <span class="number">1</span>
        <span class="text">About You</span>
      </div>
      <div class="step-title" :class="[step === 2 ? activeClass : '', step === 3 ? successClass : '']">
        <span class="number">2</span>
        <span class="text">About your Company</span>
      </div>
      <div class="step-title" :class="[step === 3 ? activeClass : '']">
        <span class="number">3</span>
        <span class="text">Finishing Up</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'step-wrap-container',
  props: {
    step: Number
  },
  data() {
    return {
      activeClass: 'active',
      successClass: 'success',
    }
  }
};
</script>
<style scoped>
.step-wrap-container {
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgb(0 0 0 / 20%), 6px 12px 20px rgb(0 0 0 / 10%);
  margin-top: 15px;
  padding: 20px;
}

.step-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.step-title {
  padding: 8px 20px;
  border-radius: 12px;
  background-color: #f3f3f3;
}

.step-title.active {

  border: 2px solid #9fbcd7;
}

.step-title.success {

  border: 2px solid #32683c;
}

.number {
  display: inline-block;
  font-size: 16px;
  width: 24px;
  height: 24px;
  line-height: 24px;
  border-radius: 50%;
  color: #f7f7f7;
  background-color: #969899;
  margin-right: 8px;
}

.text {

  color: #8f9294;
  font-size: 14px;
  font-weight: 500;
}
</style>