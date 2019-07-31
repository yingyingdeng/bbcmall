<template>
	<view class="animated fadeIn">
		<view class="zhanghao">
			<view class="my">
				我的账户余额：<text class="iconzhibi">1</text>  0 
			</view>
		</view>
		<view class="space2"></view>
		<view class="chongzhi">
			<view  v-for="(amount,index) in amountList" :key="index" >
				<view class="list uf-ac-ajc" @tap="select(amount)" :class="{'active':amount == inputAmount}">
					{{amount}}
				</view>
			</view>
		</view>
		<view class="zidingyi">
			<view class="uf-ac-jc">
				<view class="input-box">
					<input  type="number" placeholder="自定义充值金额" v-model="inputAmount" />
				</view>
			</view>
		</view>
		<view class="qianbao">
			
			<view class="uf-ac-jc xiala">
				<view class="moren">
					当前选择（默认OMC）
				</view>
				<view class="uf-ac-ajc">
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="uni-input red">{{array[index].name}}</view>
					</picker>
					<view class="icon iconfont icon-arrow-right-copy"></view>
				</view>
			</view>
			
			<view class="jine">≈￥7.00/个 您需转账 1000.00000000</view>
			<view class="jine">0x921cf4e8d2d4fff3bbda3e29278862840314d02e</view>
		</view>
		<view class="qianbao">
			<view class="margin30">
				<input class="inputbox"  placeholder="请输入您的钱包地址" />
			</view>
			<view class="margin30">
				<input class="inputbox" placeholder="请输入您的姓名" />
			</view>
		</view>
		<view class="pay">
			<view class="tis">
				点击立即充值，即代表您同意<view class="terms">
					《条款协议》
				</view>
			</view>
		</view>
		<view class="space"></view>
		<view class="paybtn"  @tap="doDeposit">
			<button type="primary" class="btn">我已转码，立即充值</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				inputAmount:'',//金额
				amountList:[10,50,100,300,500,1000],//预设3个可选快捷金额
				paytype:'alipay',//支付类型
				array: [{name:'OMC'},{name: 'YSC'}],
				
			};
		},
		methods:{
			onNavigationBarButtonTap(e) {
				if (e.index==0) {
					uni.navigateTo({
						url:'deposit-list'
					});
				}	
			},
			bindPickerChange: function(e) {
				
				this.index = e.target.value
			},
			select(amount){
				this.inputAmount = amount;
			},
			doDeposit(){
				if (parseFloat(this.inputAmount).toString() == "NaN") {
					uni.showToast({title:'请输入正确金额',icon:'none'});
					return ;
				}
				if(this.inputAmount<=0){
					uni.showToast({title:'请输入大于0的金额',icon:'none'});
					return ;
				}
				if(parseFloat(this.inputAmount).toFixed(2)!=parseFloat(this.inputAmount)){
					uni.showToast({title:'最多只能输入两位小数哦~',icon:'none'});
					return ;
				}
				//模板模拟支付，实际应用请调起微信/支付宝
				uni.showLoading({
					title:'支付中...'
				});
				setTimeout(()=>{
					uni.hideLoading();
					uni.showToast({
						title:'支付成功'
					});
					setTimeout(()=>{
						uni.redirectTo({
							url:'../../pay/success/success?amount='+this.inputAmount
						});
					},300);
				},700)
			}
			
		},
		onLoad() {
			
		},
	}
</script>

<style>
	page{background: #f1f1f1;}
	.chongzhi{ flex-wrap: wrap;display: flex;align-items: center;justify-content: center;background: #fff;padding: 30upx 2% 0 2%;}
	.chongzhi>view{width: 33.33%;}
	.list{border: 1upx solid #F1F1F1; border-radius: 10upx; padding: 15upx 0;font-size: 40upx; margin: 0 10upx 30upx 10upx;color: #797979;}
	.active{color: #fff; background: linear-gradient(to right, #ff4672 , #fe3612);}
	.zhanghao{background: #c9141d;color: #fff; padding: 5upx 3%;position: fixed;top:0;left: 0;z-index: 10;width: 94%; height: 50upx;}
	.iconzhibi{ background:url(../../../static/womc-logo.png) no-repeat left center;background-size:32upx; padding-left: 32upx;}
	.zidingyi{background: #fff;border-radius:0 0 20upx 20upx;padding: 0upx 2% 30upx 2%;}
	.uf-ac-jc{border-bottom: 1upx solid #f9f9f9;}
	.input-box{ padding: 10upx 0 20upx 0;width: 100%;}
	.input-box input{padding:0 10upx;font-size: 34upx;background:url(../../../static/homc-logo.png) no-repeat right center;background-size:40upx; margin-right: 20upx;}
	.qianbao{margin-top: 20upx;background: #fff;border-radius:20upx;padding: 0upx 2% 40upx 2%;}
	.jine{background: #f1f1f1; margin-top: 20upx; height: 90upx;display: flex;align-items: center; padding: 0 20upx;border-radius: 10upx;color: #787878;font-size: 30upx;}
	.margin30{padding-top: 30upx;width: 100%;}
	.inputbox{border:1upx solid #f1f1f1; height: 90upx; padding: 0 20upx;border-radius: 10upx;color: #787878;font-size: 30upx;}
	
	
	.pay{margin-top: 20upx;width: 100%;display: flex;justify-content: center;flex-wrap: wrap;}
	.pay .tis{margin-top:0upx;width: 100%;font-size: 24upx;display: flex;justify-content: center;align-items: baseline;color: #999;}
	.pay .tis .terms{color: #5a9ef7;}
	.paybtn{position: fixed;bottom: 0; left: 0;z-index: 10;width: 100%;}
	.paybtn .btn{height: 100upx;display: flex;	justify-content: center;align-items: center;color: #fff;background: linear-gradient(to right, #ff4672 , #fe3612);box-shadow: 0upx 5upx 10upx rgba(0,0,0,0.2);border-radius: 0;}
	.space{height: 100upx;}
	.space2{height: 50upx;}
	.xiala{padding: 20upx 10upx 10upx 10upx;}
	.moren{font-size: 34upx;}
	.red{color: #C9141D;font-size: 34upx;}
</style>
