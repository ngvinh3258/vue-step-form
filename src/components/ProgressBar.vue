<template>
  <div class="progress-bar-container">
    <div v-if="step === 1" class="progress-content" style="width: 34%;"></div>
    <div v-if="step === 2" class="progress-content" style="width: 67%;"></div>
    <div v-if="step === 3" class="progress-content" style="width: 100%;"></div>
  </div>
</template>
<script>
export default {
  name: 'progress-bar-container'
  , props: {
    step: Number,
  }

}
</script>
<style scoped>
.progress-bar-container {
  width: 100%;
  height: 18px;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
}

.progress-content {
  width: 34%;
  height: 100%;
  background-color: #437fe8;
  border-radius: 12px;
  transition: width .5s ease;
}
</style>