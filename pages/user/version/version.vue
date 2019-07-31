<template>
	<view>
		<view class="uf-ac-ajc version">
			<view class="logo"><image src="../../../static/logo.jpg" mode="widthFix" lazy-load></image></view>
			<view class="bianben">
				<view>BBC商城</view>
				<view> 您的版本：V6.0.0.0</view>
			</view>
			<view>
				<button type="warn" class="btn">安装最新版本</button>
			</view>
		</view>
		<view class="footer uf-ac-ajc">
			<view class="">
				BbcMall商城 版权所有
			</view>
			<view>CopyRight © 2019 bbcmall.us ALL Rights Reserved </view>
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
	.logo{width: 200upx;}
	.logo image{width: 200upx;height: 200upx;border-radius: 10upx; }
	.version{flex-direction: column;margin-top: 35%;}
	.bianben{display: flex;align-items: center;justify-content: center;flex-direction: column;color: #666;margin-bottom: 20upx; font-size: 30upx;}
	.btn{border-radius: 50upx;font-size: 28upx;padding: 0 50upx;}
	.footer{position: fixed;z-index: 10;left: 0;bottom: 20upx;flex-direction: column;color: #999;width: 100%;}
	.footer>view{font-size: 26upx;}
</style>
