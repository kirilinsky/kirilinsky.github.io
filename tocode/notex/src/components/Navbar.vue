<template>
    <section class="nav">
      <h3>Search notes</h3>
      <div>
        <input type="text" class="search">
        <span>
          <i class="fas fa-search"></i>
        </span>
      </div>
      <div class="buttons">
        <i class="fas fa-table" @click="changeLayout(false)"></i>
        <i class="fas fa-bars" @click="changeLayout(true)"></i>
      </div>
    </section>
</template>
<script>
export default {

  methods:{
    changeLayout(bool){
      if(bool){
         this.$emit('changeLayout',true)
      } else{
         this.$emit('changeLayout',false)
      }
    }
  }
}
</script>