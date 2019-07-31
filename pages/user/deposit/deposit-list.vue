<template>
	<view>
		<view class="uf-ac-jc zhanghu">
			<view class="yue uf">
				<view>账户余额</view>
				<text class="iconzhibi red">123.00</text></view>
			<view class="dongjie uf">
				<view>冻结</view>
				<text class="hiconzhibi">56.00</text></view>
		</view>
		<view class="space"></view>
		
		<view>
			<block v-for="(pay,index) in list.paylist" :key="index">
			<template v-if="!pay.shouru">
				<view class=" money" @tap="toShow">
					<view class="uf-ac-jc">
						<view>
							<view class="title blue">支出</view>
							<view class="times">{{pay.times}}</view>
						</view>
						<view>
							<view class="sum blue"> - {{pay.zhichu}}</view>
							<view class="zt green">冻结：{{pay.dongjie}}</view>
						</view>
					</view>
					<view class="xiangxi">{{pay.mingxi}}</view>
				</view>
			</template>
			<template v-else>
				
				<view class=" money" @tap="toShow">
					<view class="uf-ac-jc">
						<view>
							<view class="title red">收入</view>
							<view class="times">{{pay.times}}</view>
						</view>
						<view>
							<view class="sum red">+ {{pay.shouru}}</view>
							<view class="zt green">冻结：{{pay.dongjie}}</view>
						</view>
					</view>
					<view class="xiangxi">{{pay.mingxi}}</view>
				</view>
			</template>
			
			
				
			<!-- <view class="mingxi">
				
				<view class="uf-ac times"><text class="icon iconfont icon-shijian"></text> {{pay.times}}</view>
				
				<view class="zhichu">
					<view class="uf-ac-jc">
						<view class="red">
							<view>{{pay.shouru}}</view>
							<view>收入</view>
						</view>
						
						<view class="blue">
							<view>{{pay.zhichu}}</view>
							<view>支出</view>
						</view>
						
						<view class="green">
							<view>{{pay.dongjie}}</view>
							<view>冻结</view>
						</view>
					</view>
					<view class="xiangxi">{{pay.mingxi}}</view>
				</view>
				
			</view> -->
			</block>
		</view>
	</view>
</template>

<script>
	
	export default {
		
		data() {
			return {
				index: 0,
				list:{
					
					paylist:[
						{
							times:"2019/09/25 09:52",
							shouru:"10.00",
							zhichu:"",
							dongjie:"33.00",
							mingxi:"下单，冻结预存款，订单号: 1000000000001801"
							
						},
						{
							times:"2019/09/25 09:52",
							shouru:"10.00",
							zhichu:"",
							dongjie:"0.00",
							mingxi:"管理员调节预存款【增加】，充值单号: 18092509520506515001,备注："
							
						},
						{
							times:"2019/09/25 09:52",
							shouru:"",
							zhichu:"12.00",
							dongjie:"333.00",
							mingxi:"管理员调节预存款【增加】，充值单号: 18090309295320280001,备注：YSC充值"
							
						},
						
					]
				}
				
				
			};
		},
		methods:{
			onNavigationBarButtonTap(e) {
				if (e.index==0) {
					uni.navigateTo({
						url:'deposit'
					});
				}	
			},
			
		}
	}
</script>

<style>
	page{background: #f3f3f3;}
	.space2{height: 50upx;}

	.money{background: #fff;border-bottom: 1upx solid #f1f1f1;padding:20upx 30upx;}
	.title{font-size: 30upx;line-height: 1;}
	.type,.times{line-height: 1;color: #999999;font-size:24upx ;padding-top: 20upx;}
	.sum{font-size: 30upx;line-height: 1;display: flex;justify-content: flex-end;}
	.zt{font-size: 28upx;line-height: 1;padding-top: 20upx;display: flex;justify-content: flex-end;}
	
	.xiangxi{margin-top: 15upx; padding:8upx 15upx;color: #797979; background: #f9f9f9; border-radius: 10upx;}
	.red{color: #C9141D;}
	.blue{color: #007AFF;}
	.green{color: #1AAD19;}
	.red{color: #C9141D;}
	
	.yue,.dongjie{ flex-direction: column;line-height: 1;padding: 30upx 0upx;color: #999999;}
	.yue text,.dongjie text{font-size: 42upx;line-height: 1;}
	.zhanghu{padding: 0upx 3%;position: fixed;top: 0;left: 0;width: 94%;height: 160upx;background: #FFFFFF;}
	.space{height: 180upx;}
	.yue{padding-left: 40upx;}
	.dongjie{padding-right: 40upx;}
	.iconzhibi{ background:url(../../../static/omc-logo.png) no-repeat left top;background-size:32upx; padding-left: 32upx;}
	.hiconzhibi{ background:url(../../../static/homc-logo.png) no-repeat left top;background-size:32upx; padding-left: 32upx;}
</style>
