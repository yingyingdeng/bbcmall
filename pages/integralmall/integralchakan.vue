<template>
	<view>
		
		<view class="dingdan uf-ac-jc">
			<view class="address">
				<view class="city"><text>收货地址</text>{{address_info.area_info}}</view>
				<view class="add">{{address_info.address_detail}}</view>
				<view class="uf">
					<view class="name">
						{{address_info.address_realname}}
					</view>
					<view class="tel">
						{{address_info.address_mob_phone}}
					</view>
				</view>
			</view>
		</view>
		
		
		<view class="duihuan">
			<view class="msgtitle"><text>物流信息</text></view>
			<view class="uf-ac-jc kuaidi">
				<view>
					<view>快递：<text>顺丰快递</text></view>
					<view>单号：1234567899654122</view>
				</view>
				<view><text class="icon iconfont icon-arrow-right-copy"></text></view>
			</view>
		</view>
		
		<view class="duihuan">
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
			
			<view class="shouhuo">
				<view class="chakan">确认收货</view>
			</view>
		</view>
		<view class="duihuan">
			<view class="msgtitle"><text>订单信息</text></view>
			<view class="xinxi">
				<view>兑换单号：<text class="danhao">12345678912345678912</text></view>
				<view>下单时间：2019/01/01 08:00</view>
				<view>发货时间：2019/01/01 08:00</view>
				<view>收货时间：2019/01/01 08:00</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default{
		data(){
			return{
				address_info: {
					address_id: 1,
					member_id: 2,
					address_realname: "老常",
					city_id: 36,
					area_id: 38,
					area_info: "陕西省-西安市-高新区",
					address_detail: "唐延路1号旺座国际城A座1301",
					address_tel_phone: null,
					address_mob_phone: "18209180239",
					address_is_default: "1",
					dlyp_id: 0,
					address_longitude: null,
					address_latitude: null,
					address_mob_phone_lang: "86"
				},
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
	.shouhuo{display: flex;align-items: center;justify-content: flex-end;}
	
	.dingdan{background: url(../../static/adbg.jpg) repeat-x bottom #fff;background-size:100upx;border-radius: 0 0 20upx 20upx;padding: 30upx 30upx 30upx 10upx;color: #333;min-height: 80upx;}
	.address{ padding-left: 20upx}
	.city{font-size: 32upx}
	.city text{background: #f52d19; border-radius: 5upx; height: 32upx; font-size: 26upx; color: #f3f3f3; margin-right: 15upx;line-height: 32upx; padding: 0upx 10upx;}
	.add{font-size: 36upx;font-weight: bold;}
	.name,.tel{font-size: 30upx; margin-right: 30upx;}
	.msgtitle{font-size: 32upx;font-weight: bold;color: #333;}
	.msgtitle text{border-left: 5upx solid #c9141d;padding-left:15upx;line-height: 2}
	.xinxi{padding: 20upx}
	.xinxi>view{padding: 10upx 0;}
	.kuaidi{background: #f9f9f9;color: #333;padding: 20upx; border-radius: 10upx;margin: 15upx 0;}

</style>
