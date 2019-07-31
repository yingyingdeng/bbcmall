<template>
	<view>
		<view class="uf-ac-ajc jine">
			<view class="num red">+50</view>
			<view class="chuli green">待处理</view>
		</view>
		<view class="uf-ac-jc list">
			<view class="name">充值单号</view>
			<view class="cont">19062609255170729005</view>
		</view>
		
		<view class="uf-ac-jc list">
			<view class="name">类型</view>
			<view class="cont green">OMC</view>
		</view>
		<view class="uf-ac-jc list">
			<view class="name">兑换数量</view>
			<view class="cont yellow">≈ 10.00000000 币</view>
		</view>
		<view class="uf-ac-jc list">
			<view class="name">充值地址</view>
			<view class="cont font26">0x921cf4e8d2d4fff3bbda3e29278862840314d0</view>
		</view> 
		<view class="uf-ac-jc list">
			<view class="name">收款地址</view>
			<view class="cont font26">0x921cf4e8d2d4fff3bbda3e29278862840314d0</view>
		</view>
		<view class="uf-ac-jc list">
			<view class="name">姓名</view>
			<view class="cont">111</view>
		</view>
		<view class="uf-ac-jc list">
			<view class="name">创建时间</view>
			<view class="cont">2019-06-26</view>
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
	.jine{flex-direction: column;padding: 70upx 0 20upx 0;}
	.num{font-size: 60upx;font-weight: bold;line-height: 1.2;}
	.chuli{font-size: 28upx;}
	.list{padding: 20upx 3%;border-bottom: 1upx solid #F3F3F3;color: #666;}
	.name{width: 160upx;font-size: 28upx;word-wrap:break-word;margin-right: 20upx;}
	.cont{word-wrap:break-word;font-size: 28upx; width: 570upx;text-align: right;}
	.font26{font-size: 26upx;}
	.yellow{color: #EB632C;}
	.red{color: #C9141D;}
	.green{color: #09BB07;}
</style>
