<template>
	<view>
		<block v-for="(sys,index) in system" :key="index">
		<view class="system">
			<view class="systembt uf-ac-jc">
				<view class="title">{{sys.title}}</view>
				<view class="icon iconfont icon-shanchu"></view>
			</view>
			<view class="systemcont">{{sys.content}}</view>
			<view class="uf-ac-jc systemtime">
				<view class="">{{sys.times}}</view>
				<view class="">查看详细</view>
			</view>
		</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				system:[
					{
						title:"订单出库",
						content:"您的订单号：123456789已出库",
						times:"2019-12-01",
					},
					{
						title:"订单出库",
						content:"您的订单号：123456789已出库",
						times:"2019-12-01"
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	page{background: #f3f3f3;}
	.system{margin: 20upx 2% 0 2%;background: #fff;border-radius: 20upx;}
	.systembt{padding: 20upx 20upx 0upx 20upx;}
	.title{font-size: 30upx; font-weight: bold;display: -webkit-box;-webkit-box-orient: vertical;overflow: hidden;webkit-line-clamp: 1;}
	.systemcont{font-size: 28upx;display: -webkit-box;-webkit-box-orient: vertical;overflow: hidden;padding: 0upx 20upx 20upx 20upx;webkit-line-clamp: 2;color: #797979;border-bottom: 1upx solid #f3f3f3;}
	.icon-shanchu{color: #797979;}
	.systemtime{padding: 10upx 20upx;color: #797979;}
</style>
