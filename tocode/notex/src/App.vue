<template>
  <div class="wrap" id="app">
    <!-- newNote -->
    <newNote 
      :note="note"
      @addNote="addNote"
      @emodjiCheck="emodjiCheck"
    ></newNote>
    <!-- end newNote -->
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
        :class="emodjiCheck(item.emodji,true)"
        v-for="(item,index) in notes"
        :key="index"
        :style="listLayout?'width:95%':'width:45%'"
      >
        <div class="note__header">{{ item.title }}</div>
        <div class="note__body">{{ item.text }}</div>
        <div class="note__date"><span>{{ emodjiCheck(item.emodji,false) }}</span><span>{{ item.dt }}</span></div>
        <div class="note__burn" @click="deleteNote(index)" title="fire">
          <i class="fas fa-fire"></i>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import newNote from '@/components/NewNote.vue'
export default {
  components:{
    newNote
  },
  data() {
    return {
      note: {
        title: '',
        text: '',
        emodji:'2'
      },
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
    emodjiCheck(n,needClass){
      if(needClass){
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
      }else{
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
      }
    }
  }
};
</script>

<style>
</style>
