<template>
  <div class="wrap" id="app">
    <section class="new" :style="heightNewBlock">
      <div class="hide" @click="hideOrShowNewBlock()" :title="showNewBlock?'hide':'show'"></div>
      <h1>add new noteX</h1>
      <div class="line"></div>
      <label for="title">Title</label>
      <input type="text" id="title" autocomplete="off" v-model="note.title">
      <label for="text">Text</label>
      <textarea id="text" v-model="note.text"></textarea>
      <span class="emodji">{{ emodjiCheck(note.emodji) }}</span>
      <input type="range" min="1" max="3" v-model="note.emodji" step="1">
      <label for="emodji">Your mood</label>
      <alert v-if="errorsCheck && active" :notice="notice"></alert>
      <button class="btn" @click="addNote()">create new</button>
    </section>
    <section class="nav">
      <h3>Search notes</h3>
      <div>
        <input type="text" class="search">
        <span>
          <i class="fas fa-search"></i>
        </span>
      </div>
      <div class="buttons">
        <i class="fas fa-table" @click="listLayout = false"></i>
        <i class="fas fa-bars" @click="listLayout = true"></i>
      </div>
    </section>
    <section class="notes">
      <div class="alert" v-show="notes.length == 0">
        <h2>
          <i class="fas fa-exclamation-triangle"></i> No notes
        </h2>
        <p>create first note</p>
      </div>
      <div
        class="note"
        :class="classEmodjiCheck(item.emodji)"
        v-for="(item,index) in notes"
        :key="index"
        :style="listLayout?'width:95%':'width:45%'"
      >
        <div class="note__header">{{ item.title }}</div>
        <div class="note__body">{{ item.text }}</div>
        <div class="note__date"><span>{{ emodjiCheck(item.emodji) }}</span><span>{{ item.dt }}</span></div>
        <div class="note__burn" @click="deleteNote(index)" title="fire">
          <i class="fas fa-fire"></i>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import alert from '@/components/Alert.vue'
export default {
  components:{
    alert
  },
  data() {
    return {
      note: {
        title: '',
        text: '',
        emodji:'2'
      },
      showNewBlock: true,
      active: false,
      notice:'',
      notes: [
        {
          title: "Hello ",
          text: "Im fuckin best procrastinator",
          emodji:'1',
          dt: Date(Date.now())
        },
        {
          title: "B-b!",
          text: "See ya later",
          emodji:'3',
          dt: Date(Date.now())
        }
      ],
      listLayout: false
    };
  },
  methods: {
    hideOrShowNewBlock() {
      this.showNewBlock = !this.showNewBlock;
    },
    deleteNote(n) {
      this.notes.splice(n, 1);
    },
    addNote() {
      this.active = true;
      if (!this.errorsCheck) {
        let { title, text,emodji } = this.note;
        this.notes.push({
          title,
          text,
          dt: Date(Date.now()),
          emodji
        });
        this.note.title = ""
        this.note.text = ""
        this.active = false
        this.note.emodji = "2"
         this.notice = ''
      }
    },
    emodjiCheck(n){
      switch(n){
        case '1':
          return '😒 - sad'
          break
        case '2':
          return '😐 - neutral'
          break
        case '3':
          return '😃 - happy'
          break
      }
    },
    classEmodjiCheck(n){
      switch(n){
        case '1':
          return 'sad'
          break
        case '2':
          return 'neutral'
          break
        case '3':
          return 'happy'
          break
      }
    }
  },
  computed: {
    heightNewBlock() {
      if (this.showNewBlock) {
        return 'height:700px';
      } else {
        return "height:65px";
      }
    },
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
};
</script>

<style>
</style>
