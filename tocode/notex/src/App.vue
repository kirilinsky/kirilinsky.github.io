<template>
  <div class="wrap" id="app">
    <!-- newNote -->
    <newNote 
      :note="note"
      :active="active"
      @addNote="addNote"
    ></newNote>
    <!-- end newNote -->
    <navbar @changeLayout="changeLayout"></navbar>
    <box :notes="notes" :listLayout="listLayout"></box>
  </div>
</template>

<script>
import moment from 'moment'
import newNote from '@/components/NewNote.vue'
import navbar from '@/components/Navbar.vue'
import box from '@/components/Notes.vue'
export default {
  components:{
    newNote,navbar,box
  },
  data() {
    return {
      note: {
        title: '',
        text: '',
        edit:false,
        emodji:'2'
      },
      notes: [
        {
          title: "Hello ",
          text: "Im fuckin best procrastinator",
          emodji:'1',
          edit:false,
          dt: moment('2019-04-11 11:07').format('LLL')
        },
        {
          title: "B-b!",
          text: "See ya later",
          emodji:'3',
          edit:false,
          dt: moment('2019-04-14 21:23').format('LLL')
        }
      ],
      listLayout: false,
      active:false
    };
  },
  methods: {
    addNote() {
      this.active = true;
      if (!this.errorsCheck) {
        let { title, text,emodji } = this.note;
        this.notes.push({
          title,
          text,
          dt: moment.utc(Date.now()).format('LLL'),
          emodji
        });
        this.note.title = ""
        this.note.text = ""
        this.active = false
        this.note.emodji = "2"
        this.notice = ''
      }
    },
    changeLayout(bool){
      if(bool){
        this.listLayout = true
      }  if(!bool) {
        this.listLayout = false
      }
    }

  },
  computed:{
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
    }
  }
};
</script>
