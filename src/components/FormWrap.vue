<template>
  <div class="form-wrap-container">
    <div class="form-content" v-if="step === 1">
      <label>Full Name</label>
      <input type="text" v-model="form.name" :class="[error.name !== undefined ? requiredClass : '']" />
      <p v-if="error.name !== undefined">{{ error.name }}</p>
      <label>Your Email</label>
      <input type="text" v-model="form.email" :class="[error.email !== undefined ? requiredClass : '']" />
      <p v-if="error.email">{{ error.email }}</p>
    </div>
    <div class="form-content" v-if="step === 2">
      <label>Your Company Name</label>
      <input type="text" v-model="form.company" :class="[error.company !== undefined ? requiredClass : '']" />
      <p v-if="error.company">{{ error.company }}</p>
      <label>Number of Employees</label>
      <input type="text" v-model="form.employees" :class="[error.employees !== undefined ? requiredClass : '']" />
      <p v-if="error.employees">{{ error.employees }}</p>
    </div>
    <div class="form-content" v-if="step === 3">
      <label>From Where did you hear about us</label>
      <select @change="selectHear($event)" class="dropdown"
        :class="[error.selected !== undefined ? requiredClass : '']">
        <option selected disabled hidden value="">--Please
          choose answer--</option>
        <option value="facebook">Facebook</option>
        <option value="friend">Friend</option>
      </select>
      <p v-if="error.selected">{{ error.selected }}</p>
      <div class="accept-box"> <input type="checkbox" @change="acceptTerm($event)"
          :class="[error.acceptTerm !== undefined ? requiredClass : '']" />
        <label class="accpetTerm">I accept
          terms &
          conditions</label>
      </div>
      <p v-if="error.acceptTerm">{{ error.acceptTerm }}</p>
    </div>
    <div class="form-button">
      <button class="prev-button" v-if="step !== 3" @click="pre()">Previous</button>
      <button class="next-button" v-if="step !== 3" @click="next()">Next</button>
      <button class="reset-button" v-if="step === 3" @click="reset()">Reset</button>
      <button class="send-button" v-if="step === 3" @click="sendData()">Send</button>
    </div>
  </div>
</template>

<script>
import store from '@/store';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'form-wrap-container',
  props: {

    step: Number
  },
  data() {
    return {
      form: [],
      error: [],
      requiredClass: 'required',
      regexEmail: /^[a-zA-Z0-9.]+@+[a-zA-Z0-9]+.+[A-z]/,
      regexNumber: /^[0-9]/,
    }
  }, computed: {
    ...mapGetters(['userData'])
  }
  ,
  methods: {
    selectHear(e) { this.form.selected = e.target.value },
    acceptTerm(e) {
      this.form.acceptTerm = e.target.checked
    }, checkForm() {
      if (this.step === 1) {
        let count = 0;
        this.error = [];
        if (!this.form.name || this.form.name === '') { this.error.name = "The field is required!"; count++; }
        if (this.regexEmail.test(this.form.email) === false) { this.error.email = "The field must be email!"; count++; }
        if (!this.form.email || this.form.email === '') { this.error.email = "The field is required!"; count++; }
        if (count !== 0) {
          return false;
        }
        if (this.form.name && this.form.email) { return true; }
        return true;
      }
      if (this.step === 2) {
        let count = 0;
        this.error = [];
        if (!this.form.company || this.form.company === '') { this.error.company = "The field is required!"; count++; }
        if (this.regexNumber.test(this.form.employees) === false) { this.error.employees = "Should be a valid value!"; count++; }
        if (!this.form.employees || this.form.employees === '') { this.error.employees = "The field is required!"; count++; }
        if (count !== 0) {
          return false;
        }
        if (this.form.company && this.form.employees) { return true; }
        return true;
      }
      if (this.step === 3) {
        let count = 0;
        this.error = [];
        if (!this.form.selected || this.form.selected === '') { this.error.selected = "The field is required!"; count++; }
        if (!this.form.acceptTerm || this.form.acceptTerm === false) { this.error.acceptTerm = "The field is required!"; count++; }
        if (count !== 0) {
          return false;
        }
        if (this.form.selected && this.form.acceptTerm) { return true; }
        return true;

      }
      return true;
    },

    next() {
      if (this.checkForm()) {
        this.$emit('next-click');
      }

    },
    pre() {
      this.$emit('pre-click');
    },
    reset() {
      this.form = []
      this.$emit('reset-click');
    }, sendData() {
      console.log("check", this.checkForm())

      if (this.checkForm()) {
        store.commit('setUserData', this.form)
        this.$emit('send-click');
      }
    },
    ...mapMutations(['setUserData']),




  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  color: #586068;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: 3px solid transparent;
}

input :focus {
  border: 1px solid rgb(179, 179, 236);
}

input.required {

  border: 1px solid #aa4651;
}

.form-content {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgb(0 0 0 / 20%), 6px 12px 20px rgb(0 0 0 / 10%);
  margin-top: 15px;
  padding: 25px;
}

label {
  align-self: start;
  font-size: 16px;
  /* display: block; */
  margin: 15px 0 10px 0;
}

p {
  height: 20px;
  color: red;
  font-size: 12px;
  align-self: start;
}

button {
  margin-top: 20px;
  display: inline-block;
  border: unset;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
  padding: 8px 24px;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgb(0 0 0 / 40%);
  transition: box-shadow .35s ease-out;
}

.prev-button {

  background-color: #72e6b1;
}

.next-button {

  background-color: #1e68cf;
  margin-left: 16px;
}

.reset-button {

  background-color: #1d719a;
}

.send-button {
  margin-left: 16px;
  background-color: #72e6b1;
}

select {
  border: 1px solid #ccc;
  border-radius: 6px;
  position: relative;
  cursor: pointer;
  height: 45px;
  font-size: 16px;
}

.dropdown:required {

  border: 1px solid #aa4651 !important;
}

.accept-box {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.accpetTerm {
  margin: 0;
}
</style>