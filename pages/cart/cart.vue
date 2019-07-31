<template>
	<view>
		<view class="tis" v-if="store_list.length==0">购物车是空的哦~</view>
		<block  v-for="(shop,index) in store_list" :key="index" >
		<view class="cart-body">
			<view class="uf-ac-jc">
				<view class="cart-title uf-ac"><text class="icon iconfont icon-dianpu"></text>{{shop.store_name}}</view>
				<block v-for="(t,k) in mansong_rule_list[index]" :key="k">
					<view class="huodong">{{t}}<text class="icon iconfont icon-arrow-right-copy"></text></view>
				</block>
			</view>
			
			<block v-for="(good,index2) in store_cart_list[index]" :key="index2">
			
				
				<template v-if="!good.bl_id"><!--判断是否有优惠套装-->
					<view class="cart-bottom-line uf">
						<view class="checkbox-box" @tap="selected(index,index2)">
							<view class="checkbox" :class="[good.selected?'on':'']"></view>
						</view>
					
						<view class="cart-list-pro uf">
							<view class="cart-list-pic"><image :src="good.goods_image" mode="widthFix" lazy-load></image></view>
							<view class="cart-list-title">
								<view class="cartitle">{{good.goods_name}}</view>
								<view class="cartjiage">
									<view class="cartnum"><text class="iconzhibi">{{good.goods_price}}</text></view>
								</view>
								<view class="number">
									<view class="sub" @tap.stop="sub(index2)">
										<view class="icon iconfont icon-jiahaob"></view>
									</view>
									<view class="input" @tap.stop="discard">
										<input type="number" v-model="good.goods_num" @input="sum($event,index2)" />
									</view>
									<view class="add"  @tap.stop="add(index2)">
										<view class="icon iconfont icon-jian"></view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</template>
				<template v-else>
					<view>
						<view class="cart-bottom-line uf">
							<view class="checkbox-box2" @tap="selected(index,index2)">
								<view class="checkbox" :class="[good.selected?'on':'']"></view>
							</view>
							<view>
								
								<view class="cart-mansong">
									<text>套装</text>{{good.goods_name}}
								</view>
								<block v-for="(bl,i) in good.bl_goods_list" :key="i">
										<view class="cart-list-pro uf">
										<view class="cart-list-pic"><image :src="bl.goods_image" mode="widthFix" lazy-load></image></view>
										<view class="cart-list-title">
											<view class="cartitle">{{bl.goods_name}}</view>
											<view class="cartjiage">
												<view class="cartnum">优惠价：<text class="iconzhibi">{{(bl.blgoods_price-bl.down_price)}}</text></view>
												<view class="cartnum-line">原价:<text class="iconzhibi-line">{{bl.blgoods_price}}</text></view>
											</view>
										</view>
									</view>
									
								</block>
								
							</view>
						</view>
						<view class="uf-ac-jc tcjiage">
							<view>
								<text class="tancanjia">套餐价：</text><text class="tancanjia iconzhibi">{{good.goods_total}}</text>
								<text class="sheng">省</text><text class="huang">: {{good.down_price}}</text>
							</view>
							<view class="number">
								<view class="sub" @tap.stop="sub(index,index2)">
									<view class="icon iconfont icon-jiahaob"></view>
								</view>
								<view class="input" @tap.stop="discard">
									<input type="number" v-model="good.goods_num" @input="sum($event,index2)" />
								</view>
								<view class="add"  @tap.stop="add(index,index2)">
									<view class="icon iconfont icon-jian"></view>
								</view>
							</view>
						</view>
					</view>
				</template>
			</block>
		</view>
		</block>
		<view class="place"></view>
		
		<view class="footer">
			
			<view class="checkbox-box" @tap="allSelect">
				<view class="checkbox">
					<view :class="[isAllselected?'on':'']"></view>
				</view>
				<view class="text">全选</view>
			</view>
			
			<view class="delBtn" @tap="deleteList">删除</view>
			
			<view class="settlement">
				<view class="sum">合计:<view class="money iconzhibi">3000.99</view></view>
				<view class="btn" @tap="toConfirmation">结算(1)</view>
			</view>
			
		</view>
		
	</view>
</template>

<script>

	export default {
		data() {
			return {
				index:0,
				isAllselected:false,
				store_list: {
					"1": {
						"store_id": 1,
						"member_id": 1,
						"store_name": "BbcMall 直营店"
					},
					"4": {
						"store_id": 4,
						"member_id": 17,
						"store_name": "炎妃熙娆"
					}
				},
				"store_cart_list": {
					"1": [
						{
							"cart_id": 23,
							"buyer_id": 2,
							"store_id": 1,
							"store_name": "bbcmall",
							"goods_id": 338,
							"goods_name": "新款B57智能手环心率血压健康手表彩色触摸屏防水 金色",
							"goods_price": "24.00",
							"goods_num": 4,
							"goods_image": "../../static/goods/p6.jpg",
							"bl_id": 0,
							"state": true,
							"storage_state": true,
							"goods_commonid": 255,
							"gc_id": 71,
							"transport_id": 0,
							"goods_freight": "0.00",
							"goods_vat": 0,
							"goods_storage": 99,
							"goods_storage_alarm": 0,
							"is_goodsfcode": 0,
							"is_have_gift": 0,
							"groupbuy_info": "",
							"mgdiscount_info": {
								"1": {
									"level_discount": 9.9000000000000004,
									"level_name": "V1",
									"level_name_pic": "../../static/vip/V1.png"
								},
								"2": {
									"level_discount": 9.8000000000000007,
									"level_name": "V2",
									"level_name_pic": "../../static/vip/V2.png"
								},
								"3": {
									"level_discount": 9.6999999999999993,
									"level_name": "V3",
									"level_name_pic": "../../static/vip/V3.png"
								},
								"4": {
									"level_discount": 9.5,
									"level_name": "V4",
									"level_name_pic": "../../static/vip/V4.png"
								}
							},
							"xianshi_info": "",
							"goods_total": "96.00"
						},
						{
							"cart_id": 24,
							"buyer_id": 2,
							"store_id": 1,
							"store_name": "bbcmall",
							"goods_id": 2066,
							"goods_name": "优惠套餐活动开始了",
							"goods_price": "1997.70",
							"goods_num": 1,
							"goods_image": "../../static/goods/p1.jpg",
							"bl_id": 1,
							"state": true,
							"storage_state": true,
							"bl_goods_list": [
								{
									"blgoods_id": 1,
									"blgoods_price": "1850.00",
									"blgoods_appoint": 1,
									"bl_id": 1,
									"goods_id": 2066,
									"goods_name": "华为 HUAWEI Mate 20 RS 保时捷设计 麒麟980芯片全面屏超大广角徕卡三摄 瑞红色 8+512G",
									"goods_image": "../../static/goods/p2.jpg",
									"goods_commonid": 643,
									"store_id": 1,
									"store_name": "bbcmall",
									"transport_id": 0,
									"goods_freight": "0.00",
									"goods_vat": 0,
									"goods_storage": 99,
									"goods_storage_alarm": 0,
									"gc_id": 2314,
									"down_price": "7.00"
								},
								{
									"blgoods_id": 2,
									"blgoods_price": "80.80",
									"blgoods_appoint": 1,
									"bl_id": 1,
									"goods_id": 254,
									"goods_name": "2018新款男士手提包大容量耐磨防水休闲旅行包",
									"goods_image": "../../static/goods/p3.jpg",
									"goods_commonid": 217,
									"store_id": 1,
									"store_name": "bbcmall",
									"transport_id": 0,
									"goods_freight": "0.00",
									"goods_vat": 0,
									"goods_storage": 999,
									"goods_storage_alarm": 10,
									"gc_id": 303,
									"down_price": "9.00"
								},
								{
									"blgoods_id": 3,
									"blgoods_price": "66.90",
									"blgoods_appoint": 1,
									"bl_id": 1,
									"goods_id": 259,
									"goods_name": "2018新款真皮女包欧美时尚大单肩斜跨包 裸粉色",
									"goods_image": "../../static/goods/p4.jpg",
									"goods_commonid": 220,
									"store_id": 1,
									"store_name": "bbcmall",
									"transport_id": 0,
									"goods_freight": "0.00",
									"goods_vat": 0,
									"goods_storage": 99,
									"goods_storage_alarm": 0,
									"gc_id": 308,
									"down_price": "10.00"
								}
							],
							"down_price": "26.00",
							"goods_total": "1997.70"
						}
					],
					"4": [
						{
							"cart_id": 25,
							"buyer_id": 2,
							"store_id": 4,
							"store_name": "炎妃熙娆",
							"goods_id": 199,
							"goods_name": "风衣2019春季韩版新品翻领长袖双排扣长款上衣纯色英伦外套 长款风衣 白色 均码",
							"goods_price": "38.00",
							"goods_num": 2,
							"goods_image": "../../static/goods/p5.jpg",
							"bl_id": 0,
							"state": true,
							"storage_state": true,
							"goods_commonid": 186,
							"gc_id": 363,
							"transport_id": 0,
							"goods_freight": "0.00",
							"goods_vat": 0,
							"goods_storage": 30,
							"goods_storage_alarm": 0,
							"is_goodsfcode": 0,
							"is_have_gift": 0,
							"groupbuy_info": "",
							"mgdiscount_info": null,
							"xianshi_info": "",
							"goods_total": "76.00"
						}
					]
				},
				 "mansong_rule_list": {
					"1": [
						"满500减100 送[赠品]"
					]
				}
			}
		},
		
		onLoad() {
			
		},
		methods: {
			toConfirmation(){
				uni.navigateTo({
					url: '../order/confirmation',
				});
			}
		}
	}
</script>
<style lang="scss">
	page{background: #f3f3f3;}
	.cart-body{background: #fff;border-radius: 20upx; margin-top: 20upx; padding: 0 3%; width: 94%;position: relative}
	.cart{display: flex;}
	.cart-title{padding-top: 35upx;font-size: 32upx; margin-right: 20upx; font-weight: 600; }
	.cart-title text{margin-right: 10upx;color: #C9141D;}
	.cart-list-pic{ width: 200upx;margin-right: 20upx;}
	.cart-list-pic image{width: 200upx; height: 200upx; border-radius: 10upx; }
	.icon-ego-guanbi{position: absolute;top:30upx;right: 30upx;z-index: 10; width: 50upx;height: 50upx;align-items: center;justify-content: center; border: 1upx solid #f3f3f3; border-radius: 40upx;display: flex; font-size: 30upx; box-shadow: 0 0 10upx #f1f1f1;color: #aaa; font-size: 28upx ; background: #fff;}
	.cart-list-title{}
	.iconzhibi { background:url(../../static/omc-logo.png) no-repeat center left;background-size: 32upx; padding-left: 35upx;}	
	.iconzhibi-line { background:url(../../static/line-omc-logo.png) no-repeat center left;background-size: 32upx; padding-left: 35upx;}
	.cart-mansong{font-size: 30upx; color: #333; padding:20upx 0 0upx 0upx;}
	.cart-mansong text{border:1upx #c9141d solid; font-size: 24upx; line-height: 1; padding: 3upx 8upx; margin-right: 10upx; color: #c9141d;border-radius: 10upx;}
	.cart-bottom-line{border-bottom: 1upx solid #f3f3f3;padding-bottom: 20upx;}
	.cart-list-pro{margin-top: 20upx;width: 100%}
	.cartitle{display: -webkit-box;-webkit-box-orient: vertical;overflow: hidden;-webkit-line-clamp: 2;font-size: 28upx; color: #333; line-height: 1.5}
	.cartnum-line{color: #797979;text-decoration: line-through;}
	.cartnum-line text{color: #797979;}
	.cartnum{color: #C9141D;}
	.cartnum text{ font-size: 26upx;}
	.tis{width: 100%;height: 60upx;display: flex;justify-content: center;align-items: center;font-size: 32upx;}
	.cartjiage{ padding-top: 10upx;}
	.huodong{margin-top: 35upx;display: -webkit-box;-webkit-box-orient: vertical;overflow: hidden;-webkit-line-clamp: 1;font-size: 28upx; color: #333; line-height: 1.5;}
	.huodong .icon-arrow-right-copy{font-size: 26upx;color: #999;margin-left: 10upx}
	.tcjiage{padding: 20upx 0;}
	.tancanjia{color: #C9141D}
	.sheng{background: #ef824a; border-radius:60upx; color: #fff;font-size: 22upx;padding: 4upx 8upx;line-height: 1; margin-left: 20upx;}
	.huang{color: #ef824a;}
	.place{
		height: 120upx;
	}
	.checkbox-box{
		display: flex;
		align-items: center;  margin-right: 30upx;
	}
	.checkbox-box2{
		display: flex;
		align-items: flex-start;  margin-right: 30upx; margin-top: 25upx;
	}
	.checkbox{
		width: 45upx;
		height: 45upx;
		border-radius: 100%;
		box-shadow: 0 0 8upx #666;
		display: flex;
		justify-content: center;
		align-items: center;
		}
		.on{
			width: 45upx;
			height: 45upx;
			background: url(../../static/check_selected.png) no-repeat;background-size: 45upx

		}
		.text{
			font-size: 28upx;
			margin-left: 10upx;
		}
		
	.footer{
		width: 94%;
		padding: 0 3%;
		background-color: hsla(100%, 100%, 100%, 0.95);
		border-top: 1upx solid #ddd;
		height: 100upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28upx;
		position: fixed;
		bottom: 0upx;
		z-index: 5;
		.delBtn{
			border: solid 1upx #f06c7a;
			color: #f06c7a;
			padding: 0 30upx;
			height: 40upx;
			border-radius: 30upx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.settlement{
			width: 60%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			.sum{
				width: 100%;
				font-size: 28upx;
				margin-right: 10upx;
				display: flex;
				justify-content: flex-end;
				
				.money{
					font-weight: 600;color: #C9141D;
				}
			}
			.btn{
				padding: 0 20upx;
				height: 60upx;
				background-color: #C9141D;
				color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 60%;
				border-radius: 30upx;
			}
		}
	}
	.number{
		display: flex;
		justify-content: flex-end;
		align-items: center;
		.input{
			width: 60upx;
			height: 60upx;
			margin: 0 10upx;
			background-color: #fff;
			input{
				width: 60upx;
				height: 60upx;
				display: flex;
				justify-content: center;
				align-items: center;
				text-align: center;
				font-size: 32upx;
			}
		}
		.sub ,.add{
			width: 45upx;
			height: 45upx;
			border:1upx #f3f3f3 solid;
			border-radius: 50upx;
			.icon{
				font-size: 26upx;
				width: 45upx;
				height: 45upx;
				display: flex;
				justify-content: center;
				align-items: center;
				
			}
		}
	}
</style>
