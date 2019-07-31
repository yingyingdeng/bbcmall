<template>
	<view>
		<view class="loadtext">{{loadtext}}</view>
	</view>
</template>

<script>
	export default {
		props:{
			loadtext:String
			
		}
	}
</script>

<style>
.loadtext{ text-align:center; color: #aaa;padding: 15upx}
</style>
