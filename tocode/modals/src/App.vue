<template>
<div class="container" >
  <h2 class="m-2">{{ text}}</h2>
  <button @click="modalTriggers[0].first.active = !modalTriggers[0].first.active">123</button>
  <section>
    <modal v-if="modalTriggers[0].first.active"
     title="first title"
     @close="modalTriggers[0].first.active = !modalTriggers[0].first.active"
     >
      <div slot="body">
          <button @click="modalTriggers[0].first.active = !modalTriggers[0].first.active">Coo-koo</button>
      </div>
     </modal>
    
  </section>
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
        {
          first:{
            active:false
          }
        }
      ]
    }
  }
}
</script>
