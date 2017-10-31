<template>
  <div>
  	<button @click="callPhone">打电话</button>
  </div>
</template>
<script>
import connector from "../connect.js";
export default{
	data(){
		return {}
	},
	methods:{
		callPhone(){
            connector.$emit("phone","daddy");
		}
	}
}
</script>
<style>
</style>