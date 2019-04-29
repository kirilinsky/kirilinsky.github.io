<template>
<div class="container" >
  <h2 class="m-2">{{ text}}</h2>
  <hr>
  <div class="btn-group m-4" role="group" aria-label="Basic example">
    <button @click="modalTriggers[0].active = !modalTriggers[0].active" class="btn btn-secondary">first</button>
    <button @click="modalTriggers[1].active = !modalTriggers[1].active" class="btn btn-secondary">second</button>
  </div>
  <!-- first modal -->
  <section>
    <transition name="fade">
    <modal v-show="modalTriggers[0].active"
     title="first title"
     @close="modalTriggers[0].active = false"
     >
      <div slot="body">
          <button @click="modalTriggers[0].active = !modalTriggers[0].active">Coo-koo</button>
      </div>
     </modal>
    </transition>
  </section>
  <!-- end first modal -->

  <!-- second modal -->
  <section>
    <transition name="fade">
    <modal v-show="modalTriggers[1].active"
     title="second title"
     @close="modalTriggers[1].active = false"
     >
      <div slot="body">
          <button @click="modalTriggers[1].active = !modalTriggers[1].active">Coo;-koo</button>
      </div>
     </modal>
    </transition>
  </section>
  <!-- end second modal -->

</div>

</template>

<script>
import modal from '@/components/Modal.vue'
export default {
  components: {
    modal
  },
  data() {
    return {
      text:'Hi, im lesson with modal windows!',
      modalTriggers:[
        {number:1,active:false},
        {number:2,active:false,name:'',email:''}
      ]
    }
  }
}
</script>
