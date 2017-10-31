<template>
  <div>
  	我是中间组件{{texttwo}}
  	<button @click="show">点击</button>
  </div>
</template>
<script>
export default{
	data(){
		return {}
	},
	props:["texttwo"],
	methods:{
		show(){
			alert(this.texttwo);
		}
	}
}
</script>
<style>
</style>