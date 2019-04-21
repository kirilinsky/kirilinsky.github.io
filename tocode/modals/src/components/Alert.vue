<template>
  <div class="alert">
    <h2>
      <i class="fas fa-exclamation-triangle"></i> alert
    </h2>
    <p>{{ notice }}</p>
  </div>
</template>


<script>
export default {
  props:{
    notice:{
      type:String,
      required:true
    }
  }
};
</script>
