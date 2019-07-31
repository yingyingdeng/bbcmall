<template>
	<view>
		<view class="uf-ac-jc zhanghu">
			<view class="yue uf">
				<view>账户余额</view>
				<text class="iconzhibi red">1213.00</text>
			</view>
			<view class="dongjie uf">
				<view>冻结</view>
				<text class="hiconzhibi">1256.00</text>
			</view>
		</view>
		<view class="space"></view>
		
		<view class="uf-ac-jc money" @tap="toShow">
			<view>
				<view class="title">充值数量</view>
				<view class="type">类型：OMC</view>
				<view class="times">06-25 12:00</view>
			</view>
			<view>
				<view class="sum red">+500.00</view>
				<view class="zt yellow">处理中</view>
			</view>
		</view>
		<view class="uf-ac-jc money">
			<view>
				<view class="title">充值数量</view>
				<view class="type">类型：OMC</view>
				<view class="times">06-25 12:00</view>
			</view>
			<view>
				<view class="sum red">+50</view>
				<view class="zt green">已完成</view>
			</view>
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
			toShow(){
				uni.navigateTo({
					url: 'moneyshow',
				});
			}
		}
	}
</script>

<style>
	page{background: #f3f3f3;}
	.money{background: #fff;border-bottom: 1upx solid #f1f1f1;padding:20upx 30upx;}
	.title{font-size: 30upx;line-height: 1;}
	.type,.times{line-height: 1;color: #999999;font-size:24upx ;padding-top: 15upx;}
	.sum{font-size: 38upx;line-height: 1;}
	.zt{font-size: 28upx;line-height: 1;padding-top: 20upx;display: flex;justify-content: flex-end;}
	.yellow{color: #EB632C;}
	.red{color: #C9141D;}
	.green{color: #09BB07;}
	.yue,.dongjie{ flex-direction: column;line-height: 1;padding: 30upx 0upx;color: #999999;}
	.yue text,.dongjie text{font-size: 42upx;line-height: 1;}
	.zhanghu{padding: 0upx 3%;position: fixed;top: 0;left: 0;width: 94%;height: 160upx;background: #FFFFFF;}
	.space{height: 180upx;}
	.yue{padding-left: 40upx;}
	.dongjie{padding-right: 40upx;}
	.iconzhibi{ background:url(../../../static/omc-logo.png) no-repeat left top;background-size:32upx; padding-left: 32upx;}
	.hiconzhibi{ background:url(../../../static/homc-logo.png) no-repeat left top;background-size:32upx; padding-left: 32upx;}
</style>
