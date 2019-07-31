<template>
	<view>
		<view class="uni-form-item uni-column">
			
			<view class="with-fun">
				<input class="uni-input" placeholder="请输入支付密码" :password="showPassword" />
				<view class="uni-icon uni-icon-eye" :class="[!showPassword ? 'uni-active' : '']" @click="changePassword"></view>
			</view>
			<view class="title">4-20个字符，可有中英文、数字、“_”、“-”组成</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showPassword: true,
			}
		},
		methods: {
			changePassword: function() {
				this.showPassword = !this.showPassword;
			},
		}
	}
</script>

<style>
page{background: #f1f1f1;}
	.uni-column{margin: 0 5%; width: 90%;}
	.uni-input{border-radius: 10upx;} 
	.title {
		padding: 10upx 25upx;text-align: center; color: #999;
	}
</style>
