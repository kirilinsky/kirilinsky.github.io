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
      <!-- как заставить работать emodjiCheck? -->
      <label for="emodji">Your mood {{ emodjiCheck(note.emodji,false) }}</label>
      <!-- как запустится addNote если первым условием ему нужен компьютед errorsCheck, как его туда передать?  -->
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
          //как должен работать этот эмит, что должен отдавать?
          this.$emit('emodjiCheck',this.note.emodji)
      }
  },
  computed: {
    //валидатор
    errorsCheck() {
      if (this.note.title == ""){
        //отдает ошибку о пустом заголовке
        this.notice = 'empty title'
        return true;
      } if(this.note.text == "") {
         //отдвет ошибку об отсутствии текста
         this.notice = 'empty text'
        return true;
      } else {
         this.notice = ''
         return false;
      }
    },
    heightNewBlock() {
      if (this.showNewBlock) {
        return 'height:700px';
      } else {
        return "height:65px";
      }
    }
  }
}
</script>
