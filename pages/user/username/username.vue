<template>
	<view>
		<view class="uni-form-item uni-column">
			<input class="uni-input" focus placeholder="请输入您的真实姓名" />
			<view class="title">4-20个字符，可有中英文、数字、“_”、“-”组成</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	page{background: #FFFFFF;}
	.uni-column{margin: 0 5%; width: 90%;}
	.uni-input{border-radius: 10upx;} 
	.title {
		padding: 10upx 25upx;text-align: center; color: #999;
	}
</style>
