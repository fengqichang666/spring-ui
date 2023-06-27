<template>
	<div></div>
</template>

<script setup lang="ts">
	import { ref, onBeforeMount, onMounted } from 'vue'
	onBeforeMount(() => {
		console.log('1.组件挂载页面之前执行----onBeforeMount')
	})
	onMounted(() => {
		console.log('2.-组件挂载到页面之后执行-------onMounted')
	})
</script>
<style scoped lang="less"></style>
