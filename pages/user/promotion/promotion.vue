<template>
	<view>
		<view class="promotion">
			<view class="left_r"></view>
			<view class="right_r"></view>
			<view class="user">
				<view class="face"><image src="../../../static/chn.jpg" mode="aspectFill" lazy-load></image></view>
				<view class="username">VIP会员10240</view>
			</view>
			<view class="uf-ac-ajc eweima">
				<image src="../../../static/ewm.jpg" mode="widthFix" lazy-load></image>
			</view>
			<view class="url">
				
				http://192.168.3.59:8028/home/Login/register.html?inviter_id=5
			</view>
			<view class="btns">
				<view class="default">保存二维码 </view>
				<view class="default">复制</view>
			</view>
		</view>
		<view class="space"></view>
		<view class="uf-ac-jc footer">
			<view>推广会员</view>
			<view @tap="toYongjin">推广佣金</view>
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
			toYongjin(){
				uni.navigateTo({
					url: 'yongjin',
				});
			}
		}
	}
</script>

<style  lang="scss">
	page{ background: #f3f3f3;}
	.promotion{margin: 50upx 5% 0 5%;padding: 20upx 20upx 50upx 20upx;background: #FFFFFF;border-radius: 20upx;position: relative;}
	.left_r,.right_r{position: absolute;z-index: 10;top: 200upx;background: #f3f3f3;width: 40upx;height: 40upx;border-radius: 20upx;}
	.left_r{left: -20upx;}
	.right_r{right: -20upx;}
	.user{display: flex;align-items: center;justify-content: center; height: 200upx;border-bottom: 2upx dashed #f3f3f3;flex-direction: column;}
	.face{width: 100upx; }
	.face image{width: 100upx;height: 100upx;border-radius: 100upx;box-shadow: 0 0 5upx #7a000a;}
	.username{font-size: 30upx;color: #666;display: flex;align-items: center;justify-content: flex-start;font-weight: bold}
	.eweima{padding: 30upx 10%;}
	.eweima image{width: 100%; height: 100%;}
	.url{background: #f3f3f3;border-radius: 10upx;padding: 20upx 30upx;margin:0 20upx 20upx 20upx;word-wrap:break-word;line-height: 1.2;color: #999;}
	.footer{position: fixed;left: 0;bottom: 0;width: 100%;z-index: 10;;height: 100upx;border: 1upx solid #f1f1f1;background: #FFFFFF}
	.footer>view{flex: 1;display:flex;justify-content: center;align-items: center;border-right: 1upx solid #f1f1f1;font-size: 32upx;color: #666;}
	.footer>view:last-child{border-right: 0}
	.space{height: 100upx}
	.btns{
		padding: 20upx 0;
		display: flex;
		align-items: center;
		justify-content: center;
		view{
			min-width: 120upx;
			height: 50upx;
			padding: 0 20upx;
			border-radius: 50upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28upx;
			margin-left: 20upx;
		}
		.default{
			border: solid 1upx #ccc;
			color: #666;
		}
		.pay{
			border: solid 1upx #c9141d;
			color: #c9141d;
		}
	}
</style>
