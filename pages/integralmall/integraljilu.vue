<template>
	<view>
		<view class="duihuan">
			<view class="uf-ac-jc">
				<view>兑换单号：<text class="danhao">12345678912345678912</text></view>
				<view>状态：<text class="red">待发货</text></view>
			</view>
			<view class="uf-ac-jc jifen">
				<view class="uf">
					<view class="lipinimg"><image src="../../static/goods/p8.jpg" mode="widthFix" lazy-load></image></view>
					<view>
						<view class="lptitle">礼品名称礼品名称礼品名称礼品名称礼品名称礼品名称礼品名称礼品名称</view>
						<view class="uf-ac-jc">
							<view>积分：<text class="red">1</text></view>
							<view>数量：<text class="red">1</text></view>
						</view>
						<view class="">合计：<text class="red">1</text></view>
					</view>
				</view>
			</view>
			<view class="uf-ac-jc">
				<view class="uf-ac"><text class="icon iconfont icon-shijian"></text>06/10 12:12</view>
				<view class="uf-ac-jc">
					<view class="chakan" @tap="toChakan">查看</view>
					<view class="quxiao">取消</view>
				</view>
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
			toChakan(){
				uni.navigateTo({
					url:'integralchakan'
				})
			}
		}
	}
</script>

<style>
	page{background: #f3f3f3;}
	.duihuan{background: #fff;margin: 20upx 2% 0 2%;border-radius: 20upx;padding: 20upx 3%;color: #797979;}
	.lipinimg{width: 130upx;padding-right: 20upx;}
	.lipinimg image{width: 130upx; height: 130upx;border-radius: 10upx;}
	.jifen{margin-top: 20upx;}
	.lptitle{display: -webkit-box;-webkit-box-orient: vertical;overflow: hidden;-webkit-line-clamp: 1;font-size: 30upx; color: #333; line-height: 1.5;}
	.icon-shijian{margin-right: 10upx;font-size: 28upx;}
	.chakan{background: linear-gradient(to right, #ff4672 , #fe3612);padding: 10upx 20upx;line-height: 1.5;color: #fff;border-radius: 10upx;font-size: 24upx;}
	.quxiao{background: #f1f1f1;color: #333333;padding: 10upx 20upx;line-height: 1.5;border-radius: 5upx;font-size: 24upx;margin-left: 20upx;}
	.red{color: #C9141D;}
	.danhao{color: #333333;}
	.green{color: #1AAD19;}
</style>
