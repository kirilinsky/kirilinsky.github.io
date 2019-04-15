<template>
    <section class="new" :style="heightNewBlock">
      <div class="hide" @click="hideOrShowNewBlock()" :title="showNewBlock?'hide':'show'"></div>
      <h1>add new noteX</h1>
      <div class="line"></div>
      <label for="title">Title</label>
      <input type="text" id="title" autocomplete="off" v-model="note.title">
      <label for="text">Text</label>
      <textarea id="text" v-model="note.text"></textarea>
      <input type="range" min="1" max="3" v-model="note.emodji" step="1">
      <label for="emodji">Your mood {{ emodjiCheck(note.emodji) }}</label>
      <alert v-if="errorsCheck && active" :notice="notice"></alert>
      <button class="btn" @click="addNote()">create new</button>
    </section>
</template>


<script>
import alert from '@/components/Alert.vue'
export default {
    components:{
        alert
  },
  props:{
      note:{
          type:Object,
          required:true
      }
  },
  data(){
      return {
                showNewBlock: true,
                active: false,
                notice:''
      }
  },
  methods:{
      hideOrShowNewBlock(){
          this.showNewBlock = !this.showNewBlock
      },
      addNote(){
          this.$emit('addNote', this.note)
      },
      emodjiCheck(){
          this.$emit('emodjiCheck')
      }
  },
  computed: {
    errorsCheck() {
      if (this.note.title == ""){
        this.notice = 'empty title'
        return true;
      } if(this.note.text == "") {
         this.notice = 'empty text'
        return true;
      } else {
         this.notice = ''
         return false;
      }
    }
  }
}
</script>
