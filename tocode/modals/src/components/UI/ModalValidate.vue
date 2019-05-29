<template>
    <modal 
     title="Third title"
     @close="$emit('close')"
     >
      <div slot="body">
          <form @submit.prevent="">
            <div class="form-row align-items-center">
              <div class="col-auto" :class="{ errorInput: $v.name.$error }">
                <label class="sr-only" for="inlineFormInput">Name</label>
                <p class="errorText" v-if="!$v.name.required">Field is required</p>
                <p class="errorText" v-if="!$v.name.minLength">Minimum {{$v.name.$params.minLength.min}} chars</p>
                <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Name Name" v-model="name"
                :class="{ error: $v.name.$error }"
                @change="$v.name.$touch()"
                >
              </div>
              <div class="col-auto" :class="{ errorInput: $v.email.$error }">
                <label class="sr-only" for="inlineFormInputGroup">E-mail</label>
                <p class="errorText" v-if="!$v.email.required">Field is required</p>
                <p class="errorText" v-if="!$v.email.minLength">Minimum {{$v.name.$params.minLength.min}} chars</p>
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">@</div>
                  </div>
                  <input type="email" class="form-control" id="inlineFormInputGroup" placeholder="E-mail" v-model="email"
                  :class="{ error: $v.email.$error }"
                  @change="$v.email.$touch()">
                </div>
              </div>
              <div class="col-10 d-flex justify-content-between">
                <button type="submit" class="btn btn-primary">Submit</button>
                <button @click="$emit('close')" class="btn btn-primary mb-2">Close</button>
              </div>
            </div>
          </form>
      </div>
     </modal>
</template>
<script>
import {required, minLength, email} from 'vuelidate/lib/validators'
import modal from '@/components/UI/Modal.vue'
export default {
    components:{modal},
    data(){
      return {
        name:'',
        email:''
      }
    },
    validations:{
      name:{
        required,
        minLength:minLength(4)
      },
      email:{
        required,
        email
      }
    }
}
</script>
<style lang="stylus">
.errorText{
  display none
  margin-bottom 0
  font-size 1.4rem
  color tomato
}
.errorInput .errorText{
  display block  
}
input.error{
  border 1px solid tomato
  transition 1s
}
</style>
