<template>
	<view>
		<view class="page-body">
			<view class="kftype">咨询类型</view>
			<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
				<view class="uni-input uf-ac-jc">
					<text>{{array[index].name}}</text>
					<view class="icon iconfont icon-xiajiantou"></view>
				</view>
				<view class="kfcont">{{array[index].cont}}</view>
			</picker>
			<view class="kftype">咨询内容</view>
			<view class="uni-textarea">
				<textarea placeholder-style="color:#999" placeholder="请输入您的咨询内容"/>
			</view>
			<button class="kfbtn" @tap="toServiceList">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array: [
					{
						name:'订单咨询',
						cont:"请写明要咨询的订单编号。如需处理交易中产生的纠纷，请选择投诉",
					},
					{
						name: '商品咨询',
						cont:"请写明商品链接，或平台货号。如果您对商品规格、介绍等有疑问，可以在商品详情页“购买咨询”处发起咨询，会得到及时专业的回复。",
					}
				],
				index: 0
			}
		},
		methods: {
			bindPickerChange: function(e) {
				
				this.index = e.target.value
			},
			toServiceList(){
				uni.navigateTo({
					url: 'servicelist',
				});
			}
		}
	}
</script>

<style>
	.kftype{ font-size: 32upx; padding:20upx 10upx;}
	.page-body{ padding:0 3%; width: 94%;}
	.icon-xiajiantou{font-size: 20upx; color: #999999;}
	.kexiala{ background: #0081FF;}
	.uni-input{ background: #f9f9f9; border-radius: 10upx; }
	.uni-input text{color: #666; font-size: 30upx;}
	.uni-textarea{ background: #f9f9f9; border-radius: 10upx;font-size: 30upx; }
	.kfbtn{ height: 90upx; color: #FFFFFF;  background: #C9141D; font-size: 32upx; margin-top: 30upx; line-height: 90upx;}
	.kfcont{ color: #AAAAAA; padding: 20upx 10upx 0upx 10upx;}
</style>
