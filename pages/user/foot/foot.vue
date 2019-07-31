<template>
	<view>
		<view class="footlist">
			<view class="times">今天11:11</view>
			<view class="uf list">
				<view class="footpic"><image src="../../../static/goods/p1.jpg" mode="widthFix" lazy-load></image></view>
				<view class="foottitle">
					<view class="title">Midea/美的 T1-L101B多功能电烤箱家用烘焙小烤箱控</view>
					<view class="uf-ac-jc a-s">
						<view><text class="iconzhibi">123.00</text></view>
						<view class="uf jc">
							<view class="border-gw">加入购物车</view>
							<view class="gouwuche">购买</view>
						</view>
					</view>
				</view>
			</view>
			<view class="uf list">
				<view class="footpic"><image src="../../../static/goods/p1.jpg" mode="widthFix" lazy-load></image></view>
				<view class="foottitle">
					<view class="title">Midea/美的 T1-L101B多功能电烤箱家用烘焙小烤箱控</view>
					<view class="uf-ac-jc a-s">
						<view><text class="iconzhibi">123.00</text></view>
						<view class="uf jc">
							<view class="border-gw">加入购物车</view>
							<view class="gouwuche">购买</view>
						</view>
					</view>
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
			
		}
	}
</script>

<style>
	.footlist{margin: 0 3%;}
	.times{font-size: 40upx; padding-top: 15upx;}
	.footpic{width: 180upx;margin-right: 20upx;}
	.footpic image{width: 180upx; height: 180upx; border-radius: 10upx;}
	.foottitle{height: 180upx;width: 100%;} 
	.title{line-height: 1.5;display: -webkit-box;-webkit-box-orient: vertical;overflow: hidden;-webkit-line-clamp: 2;font-size: 32upx; color: #333; height: 90upx;}
	.list{margin-top: 15upx;}
	.a-s{align-self: flex-end;height: 90upx; align-items: flex-end;}
	.iconzhibi{background: url(../../../static/omc-logo.png) no-repeat left center;background-size: 30upx; padding-left: 35upx; color: #C9141D;font-size: 32upx;}
	.icon-gouwuche{color: #C9141D;}
	.border-gw,.gouwuche{border-radius: 10upx; padding:5upx 15upx;margin-left: 10upx;font-size: 24upx;}
	.border-gw{color: #797979;border:1upx solid #ddd;}
	.gouwuche{border:1upx solid #C9141D;color: #C9141D;}
	.jc{justify-content: flex-end;align-items: center;}
</style>
