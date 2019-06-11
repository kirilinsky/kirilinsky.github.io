<template>
    <div class="default">
        <h2>This is my page</h2>
        <div class="card">12</div>
        <select name="1" id="a21">
            <option value="123">123</option>
        </select>
        <input type="checkbox" name="1" id="a1">
        <input type="color" name="1" id="a4" v-model="color">
        <p>your color</p>
        <span>{{ color }}</span>
    </div>
</template>
<script>
export default {
    data(){
        return {
            color:null
        }
    }
}
</script>
