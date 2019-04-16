<template>
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
        <div class="note__header" v-if="!item.edit" @dblclick="item.edit = true">{{ item.title }}</div>
        <div class="forHiddenInput" v-if="item.edit">
            <input type="text" class="hiddenInput"  v-model="item.title" @keyup.enter="item.edit=false">
            <span class="hiddenButton" v-if="item.title.length >= 1" @click="item.edit=false"><i class="far fa-check-square"></i></span>
        </div>
        <div class="note__body" @dblclick="changeItem(index,'text',$event)">{{ item.text }}</div>
        <div class="note__date"><span>{{ emodjiCheck(item.emodji,false) }}</span><span>{{ item.dt }}</span></div>
        <div class="note__burn" @click="deleteNote(index,$event)" title="fire">
          <i class="fas fa-fire"></i>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    props:{
        notes:{
            type:Array
        },
        listLayout:{
            type:Boolean
        }
    },
    methods:{
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
        } else {
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
        },
        deleteNote(ind,event){
            (event.target).parentNode.parentNode.classList.add('fire')
            setTimeout(()=>{this.notes.splice(ind,1)},1000)
        }
    }
}
</script>
