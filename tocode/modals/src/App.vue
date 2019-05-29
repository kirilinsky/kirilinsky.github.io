<template>
<div class="container" >
  <h2 class="m-2">{{ text}}</h2>
  <hr>
  <div class="btn-group m-4" role="group" aria-label="Basic example">
    <button @click="modalTriggers[0].active = !modalTriggers[0].active" class="btn btn-secondary">first</button>
    <button @click="modalTriggers[1].active = !modalTriggers[1].active" class="btn btn-success">second</button>
    <button class="btn btn-primary" @click="modalValidate = !modalValidate">Check & Open</button>
  </div>
  <!-- first modal -->
  <section>
    <transition name="fade">
    <modal v-show="modalTriggers[0].active"
     title="First title"
     @close="modalTriggers[0].active = false"
     >
      <div slot="body">
          <button @click="modalTriggers[0].active = !modalTriggers[0].active">Close</button>
      </div>
     </modal>
    </transition>
  </section>
  <!-- end first modal -->

  <!-- second modal -->
  <section>
    <transition name="fade">
    <modal v-show="modalTriggers[1].active"
     title="Second title"
     @close="modalTriggers[1].active = false"
     >
      <div slot="body">
          <form @submit.prevent="submitForm">
            <div class="form-row align-items-center">
              <div class="col-auto">
                <label class="sr-only" for="inlineFormInput">Name</label>
                <input type="text" required class="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe"  v-model="modalTriggers[1].name">
              </div>
              <div class="col-auto">
                <label class="sr-only" for="inlineFormInputGroup">E-mail</label>
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">@</div>
                  </div>
                  <input type="email" class="form-control" id="inlineFormInputGroup" placeholder="E-mail" v-model="modalTriggers[1].email">
                </div>
              </div>
              <div class="col-10 d-flex justify-content-between">
                <button type="submit" class="btn btn-primary">Submit</button>
                <button @click="modalTriggers[1].active = !modalTriggers[1].active" class="btn btn-primary mb-2">Close</button>
              </div>
            </div>
          </form>
      </div>
     </modal>
    </transition>
  </section>
  <!-- end second modal -->

  <!-- validate -->

  <modalValidate 
  v-show="modalValidate"
  @close="modalValidate = false"
   />

  <!-- end validate -->

</div>

</template>

<script>
import modal from '@/components/UI/Modal.vue'
import modalValidate from '@/components/UI/ModalValidate.vue'
export default {
  components: {
    modal, modalValidate
  },
  data() {
    return {
      text:'Hi, im lesson with modal windows!',
      modalValidate:false,
      modalTriggers:[
        {number:1,active:false},
        {number:2,active:false,name:'',email:''}
      ]
    }
  },
  methods:{
    submitForm(){
      alert(`name is ${this.modalTriggers[1].name}, and e-mail is ${this.modalTriggers[1].email}`)
    }
  }
}
</script>
