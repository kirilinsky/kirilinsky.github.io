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
      <alert v-if="errorsCheck && active"></alert>
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
        v-for="(item,index) in notes"
        :key="index"
        :style="listLayout?'width:95%':'width:45%'"
      >
        <div class="note__header">{{ item.title }}</div>
        <div class="note__body">{{ item.text }}</div>
        <div class="note__date">{{ item.dt }}</div>
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
        title: "",
        text: ""
      },
      showNewBlock: true,
      active: false,
      notes: [
        {
          title: "Hello ",
          text: "Im fuckin best procrastinator",
          dt: Date(Date.now())
        },
        {
          title: "Hello ",
          text: "Im fuckin best ffff",
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
        let { title, text } = this.note;
        this.notes.push({
          title,
          text,
          dt: Date(Date.now())
        });
        this.note.title = "";
        this.note.text = "";
        this.active = false;
      }
    }
  },
  computed: {
    heightNewBlock() {
      if (this.showNewBlock) {
        return `min-height:$645px`;
      } else {
        return "height:65px";
      }
    },
    errorsCheck() {
      if (this.note.title == "" || this.note.text == "") {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style>
</style>
