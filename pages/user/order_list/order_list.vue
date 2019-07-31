<template>
	<view>

	<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabTabs1="tabTab"></swiper-tab-head>
	<view class="uni-tab-bar">
		<swiper :style="{height:swiperheight+'px'}" class="swiper-box" @change="tabChange" :current="tabIndex">
			<swiper-item v-for="(order,did) in order_pay_list" :key="did">
				<scroll-view class="list" scroll-y  >
					<view class="order-list">
						
						<template v-if="order_pay_list[did]">
							<view class="list">
								<block v-for="(i,k) in order_group_list[did].order_list" :key="k">
									<view class="row">
									<!-- 店铺 -->
										<view class="uf-ac-jc">
											<view class="shop uf-ac-ajc"><text class="icon iconfont icon-dianpu"></text> {{i.store_name}} </view>
											<view class="type">{{i.state_desc}}</view>
										</view>
											<!-- 产品 -->
										<block v-for="(p,pid) in i.goods_list" :key="pid">
											<view class="order-info">
												<view class="left">
													<image :src="p.goods_image" mode="widthFix" lazy-load></image>
												</view>
												<view class="right">
													<view class="name">
														{{p.goods_name}}
													</view>
													<view class="price-number uf-ac-jc">
														<view class="price">价格：<text class="iconzhibi">{{p.goods_price}}</text></view>
														<view class="number">数量：{{p.goods_num}}</view>
													</view>
												</view>
											</view>
										</block>
											<!-- 赠品 -->
										<block v-for="(zp,zid) in i.zengpin_list" :key="zid">
											<view class="zengpin uf">
												<view class="zppic"><image :src="zp.goods_image" lazy-load mode="widthFix"></image></view>
												<view class="zptitle">
													<view class="zpbttitle">{{zp.goods_name}}</view>
													<view class="uf-ac-jc num">
														<view class="zp"><text>{{zp.goods_type_cn}}</text></view>
														<view>数量：{{zp.goods_num}}</view>
													</view>
												</view>
											</view>
										</block>
											<!-- 结算 -->
										<view class="detail">
											<view class="number font32">共<text class="red font32">{{i.goods_count}}</text>件商品</view>
											<view class="sum font32">
												合计：<view class="price"><text class="iconzhibi font32">{{order_group_list[did].pay_amount}}</text></view>
											</view>
											<view class="nominal">（含运费 <text class="iconzhibi">333</text>）</view>
										</view>
											<!-- 按钮 -->
										 <view class="btns">
											<view class="default" @tap="toReturngoods">取消订单</view>
											<view class="pay" @tap="toPayment(row)">付款</view>
											<view class="default" @tap="toShow">查看物流</view>
											<view class="default" @tap="toHaoping">评价</view>
											<!-- <view class="default">提醒发货</view>
										
											
											<view class="pay">确认收货</view>
											<view class="pay">我要退货</view>
										 
											<view class="default" @tap="toHaoping">评价</view>
											<view class="default">再次购买</view>

											<view class="default">再次购买</view>
										
											<view class="default">查看进度</view> -->

										</view>
									</view>
								</block>	
							</view>
						</template>
						
						<template v-else>
							<view class="list">
								<view class="onorder">
									<image src="../../../static/5.png"></image>
									<view class="text">
										没有相关订单
									</view>
								</view>
							</view>
						</template>
						
					</view>
				</scroll-view>
			</swiper-item>
			
		</swiper>
	</view>

	</view>
</template>
<script>
	import swiperTabHead from "../../../components/swiper-tab-head/swiper-tab-head.vue";
	export default {
		components: {
			swiperTabHead
		},
		data() {
			return {
				
				tabbarIndex:0,
				tabIndex: 0,
				swiperheight:0,
				tabBars: [
					{name: '全部订单',id: 'all'},
					{name: '待付款',id: 'daifukuan'},
					{name: '待发货',id: 'daifahuo'},
					{name: '待收货',id: 'daishouhuo'}, 
					{name: '待评价',id: 'daipingjia'},
				],
				"order_pay_list": {
					  "19061720135243361035": {
							"pay_id": 270,
							"pay_sn": "19061720135243361035",
							"buyer_id": 35,
							"api_paystate": "0"
						},
						"19061720300736991035": {
							"pay_id": 286,
							"pay_sn": "19061720300736991035",
							"buyer_id": 35,
							"api_paystate": "0"
						},
						"19061720312689375035": {
							"pay_id": 287,
							"pay_sn": "19061720312689375035",
							"buyer_id": 35,
							"api_paystate": "0"
						},
						"19061720314661824035": {
							"pay_id": 288,
							"pay_sn": "19061720314661824035",
							"buyer_id": 35,
							"api_paystate": "0"
						},
						"19061809361325243035": {
							"pay_id": 289,
							"pay_sn": "19061809361325243035",
							"buyer_id": 35,
							"api_paystate": "0"
						}
					
				},
				"order_group_list": {
					"19061809361325243035": {
						"order_list": [
							{
								"order_id": 306,
								"order_sn": "2000000000028901",
								"pay_sn": "19061809361325243035",
								"store_id": 1,
								"store_name": "bbcmall",
								"buyer_id": 35,
								"buyer_name": "cy28414082",
								"buyer_email": null,
								"add_time": 1560821772,
								"payment_code": "online",
								"payment_time": 0,
								"finnshed_time": 0,
								"goods_amount": "217.80",
								"order_amount": "217.80",
								"rcb_amount": "0.00",
								"pd_amount": "0.00",
								"shipping_fee": "0.00",
								"evaluation_state": 0,
								"order_state": 10,
								"refund_state": 0,
								"lock_state": 0,
								"delete_state": 0,
								"refund_amount": "0.00",
								"delay_time": 0,
								"order_from": 2,
								"shipping_code": "",
								"order_type": null,
								"ob_no": 0,
								"state_desc": "待付款",
								"payment_name": "在线付款",
								"extend_order_common": {
									"order_id": 306,
									"store_id": 1,
									"shipping_time": 0,
									"shipping_express_id": 0,
									"evaluation_time": 0,
									"evalseller_state": "0",
									"evalseller_time": 0,
									"order_message": "",
									"order_pointscount": 0,
									"voucher_price": null,
									"voucher_code": null,
									"deliver_explain": null,
									"daddress_id": 0,
									"reciver_name": "老大",
									"reciver_info": {
										"phone": "15165463346",
										"mob_phone": "15165463346",
										"tel_phone": null,
										"address": "陕西省西安植物园 长啦路28号",
										"area": "陕西省西安植物园",
										"street": "长啦路28号"
									},
									"reciver_province_id": 0,
									"reciver_city_id": 36,
									"invoice_info": [],
									"promotion_info": "",
									"dlyo_pickup_code": null
								},
								"extend_store": {
									"store_id": 1,
									"store_name": "bbcmall",
									"grade_id": 1,
									"member_id": 1,
									"member_name": "cy1330928",
									"seller_name": "cy1330928",
									"store_state": 1,
									"store_qq": "2963919720",
									"store_ww": "robin",
									"store_phone": "18511377098"
								},
								"extend_order_goods": [
									{
										"rec_id": 577,
										"order_id": 306,
										"goods_id": 2166,
										"goods_name": "红米小金刚7 Pro 全网通 黑 64G",
										"goods_price": "217.80",
										"goods_num": 1,
										"goods_image": "1_2019032117045244214.jpg",
										"goods_pay_price": "217.80",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "7",
										"promotions_id": 0,
										"commis_rate": 0,
										"gc_id": 75
									},
									{
										"rec_id": 578,
										"order_id": 306,
										"goods_id": 232,
										"goods_name": "俄罗斯原装进口糖果 散拼糖全巧克力多品种1000g散装糖果",
										"goods_price": "0.00",
										"goods_num": 1,
										"goods_image": "http://192.168.1.110:8028/uploads/home/store/goods/1/1_2019011620114935820_240.jpg",
										"goods_pay_price": "0.00",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "5",
										"promotions_id": 0,
										"commis_rate": 0,
										"gc_id": 0
									},
									{
										"rec_id": 579,
										"order_id": 306,
										"goods_id": 233,
										"goods_name": "俄罗斯进口混合糖果500g 紫皮糖夹心巧克力散装混合糖",
										"goods_price": "0.00",
										"goods_num": 1,
										"goods_image": "http://192.168.1.110:8028/uploads/home/store/goods/1/1_2019011620144161221_240.jpg",
										"goods_pay_price": "0.00",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "5",
										"promotions_id": 0,
										"commis_rate": 0,
										"gc_id": 0
									}
								],
								"if_cancel": true,
								"if_refund_cancel": false,
								"if_complain": false,
								"if_receive": false,
								"if_lock": false,
								"if_deliver": false,
								"if_evaluation": false,
								"if_delete": false,
								"if_drop": false,
								"if_restore": false,
								"goods_list": [
									{
										"rec_id": 577,
										"order_id": 306,
										"goods_id": 2166,
										"goods_name": "红米小金刚7 Pro 全网通 黑 64G",
										"goods_price": "217.80",
										"goods_num": 1,
										"goods_image": "1_2019032117045244214.jpg",
										"goods_pay_price": "217.80",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "7",
										"promotions_id": 0,
										"commis_rate": 0,
										"gc_id": 75,
										"goods_type_cn": "会员折扣",
										"goods_url": "/api/goods/index/goods_id/2166.html"
									}
								],
								"zengpin_list": [
									{
										"rec_id": 578,
										"order_id": 306,
										"goods_id": 232,
										"goods_name": "俄罗斯原装进口糖果 散拼糖全巧克力多品种1000g散装糖果",
										"goods_price": "0.00",
										"goods_num": 1,
										"goods_image": "http://192.168.1.110:8028/uploads/home/store/goods/1/1_2019011620114935820_240.jpg",
										"goods_pay_price": "0.00",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "5",
										"promotions_id": 0,
										"commis_rate": 0,
										"gc_id": 0,
										"goods_type_cn": "赠品",
										"goods_url": "/api/goods/index/goods_id/232.html"
									},
									{
										"rec_id": 579,
										"order_id": 306,
										"goods_id": 233,
										"goods_name": "俄罗斯进口混合糖果500g 紫皮糖夹心巧克力散装混合糖",
										"goods_price": "0.00",
										"goods_num": 1,
										"goods_image": "http://192.168.1.110:8028/uploads/home/store/goods/1/1_2019011620144161221_240.jpg",
										"goods_pay_price": "0.00",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "5",
										"promotions_id": 0,
										"commis_rate": 0,
										"gc_id": 0,
										"goods_type_cn": "赠品",
										"goods_url": "/api/goods/index/goods_id/233.html"
									}
								],
								"goods_count": 2
							}
						],
						"pay_amount": 217.80000000000001,
						"add_time": 1560821772,
						"pay_info": {
							"pay_id": 289,
							"pay_sn": "19061809361325243035",
							"buyer_id": 35,
							"api_paystate": "0"
						}
					},
					"19061720314661824035": {
						"order_list": [
							{
								"order_id": 305,
								"order_sn": "2000000000028801",
								"pay_sn": "19061720314661824035",
								"store_id": 1,
								"store_name": "bbcmall",
								"buyer_id": 35,
								"buyer_name": "cy28414082",
								"buyer_email": null,
								"add_time": 1560774706,
								"payment_code": "online",
								"payment_time": 0,
								"finnshed_time": 0,
								"goods_amount": "847.44",
								"order_amount": "847.44",
								"rcb_amount": "0.00",
								"pd_amount": "0.00",
								"shipping_fee": "0.00",
								"evaluation_state": 0,
								"order_state": 10,
								"refund_state": 0,
								"lock_state": 0,
								"delete_state": 0,
								"refund_amount": "0.00",
								"delay_time": 0,
								"order_from": 2,
								"shipping_code": "",
								"order_type": null,
								"ob_no": 0,
								"state_desc": "待付款",
								"payment_name": "在线付款",
								"extend_order_common": {
									"order_id": 305,
									"store_id": 1,
									"shipping_time": 0,
									"shipping_express_id": 0,
									"evaluation_time": 0,
									"evalseller_state": "0",
									"evalseller_time": 0,
									"order_message": "",
									"order_pointscount": 0,
									"voucher_price": null,
									"voucher_code": null,
									"deliver_explain": null,
									"daddress_id": 0,
									"reciver_name": "老大",
									"reciver_info": {
										"phone": "15165463346",
										"mob_phone": "15165463346",
										"tel_phone": null,
										"address": "陕西省西安植物园 长啦路28号",
										"area": "陕西省西安植物园",
										"street": "长啦路28号"
									},
									"reciver_province_id": 0,
									"reciver_city_id": 36,
									"invoice_info": [],
									"promotion_info": null,
									"dlyo_pickup_code": null
								},
								"extend_store": {
									"store_id": 1,
									"store_name": "bbcmall",
									"grade_id": 1,
									"member_id": 1,
									"member_name": "cy1330928",
									"seller_name": "cy1330928",
									"store_state": 1,
									"store_qq": "2963919720",
									"store_ww": "robin",
									"store_phone": "18511377098"
								},
								"extend_order_goods": [
									{
										"rec_id": 576,
										"order_id": 305,
										"goods_id": 2136,
										"goods_name": "华为 HUAWEI P30 Pro 超大广角 超感光徕卡四摄10倍混合变焦 全网通4G 亮黑色 8+",
										"goods_price": "847.44",
										"goods_num": 1,
										"goods_image": "1_2019040715273548662.jpg",
										"goods_pay_price": "847.44",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "7",
										"promotions_id": 0,
										"commis_rate": 0,
										"gc_id": 2314
									}
								],
								"if_cancel": true,
								"if_refund_cancel": false,
								"if_complain": false,
								"if_receive": false,
								"if_lock": false,
								"if_deliver": false,
								"if_evaluation": false,
								"if_delete": false,
								"if_drop": false,
								"if_restore": false,
								"goods_list": [
									{
										"rec_id": 576,
										"order_id": 305,
										"goods_id": 2136,
										"goods_name": "华为 HUAWEI P30 Pro 超大广角 超感光徕卡四摄10倍混合变焦 全网通4G 亮黑色 8+",
										"goods_price": "847.44",
										"goods_num": 1,
										"goods_image": "1_2019040715273548662.jpg",
										"goods_pay_price": "847.44",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "7",
										"promotions_id": 0,
										"commis_rate": 0,
										"gc_id": 2314,
										"goods_type_cn": "会员折扣",
										"goods_url": "/api/goods/index/goods_id/2136.html"
									}
								],
								"goods_count": 1
							}
						],
						"pay_amount": 847.44000000000005,
						"add_time": 1560774706,
						"pay_info": {
							"pay_id": 288,
							"pay_sn": "19061720314661824035",
							"buyer_id": 35,
							"api_paystate": "0"
						}
					},
					"19061720312689375035": {
						"order_list": [
							{
								"order_id": 304,
								"order_sn": "2000000000028701",
								"pay_sn": "19061720312689375035",
								"store_id": 1,
								"store_name": "bbcmall",
								"buyer_id": 35,
								"buyer_name": "cy28414082",
								"buyer_email": null,
								"add_time": 1560774686,
								"payment_code": "online",
								"payment_time": 0,
								"finnshed_time": 0,
								"goods_amount": "201.96",
								"order_amount": "201.96",
								"rcb_amount": "0.00",
								"pd_amount": "0.00",
								"shipping_fee": "0.00",
								"evaluation_state": 0,
								"order_state": 10,
								"refund_state": 0,
								"lock_state": 0,
								"delete_state": 0,
								"refund_amount": "0.00",
								"delay_time": 0,
								"order_from": 2,
								"shipping_code": "",
								"order_type": null,
								"ob_no": 0,
								"state_desc": "待付款",
								"payment_name": "在线付款",
								"extend_order_common": {
									"order_id": 304,
									"store_id": 1,
									"shipping_time": 0,
									"shipping_express_id": 0,
									"evaluation_time": 0,
									"evalseller_state": "0",
									"evalseller_time": 0,
									"order_message": "",
									"order_pointscount": 0,
									"voucher_price": null,
									"voucher_code": null,
									"deliver_explain": null,
									"daddress_id": 0,
									"reciver_name": "老大",
									"reciver_info": {
										"phone": "15165463346",
										"mob_phone": "15165463346",
										"tel_phone": null,
										"address": "陕西省西安植物园 长啦路28号",
										"area": "陕西省西安植物园",
										"street": "长啦路28号"
									},
									"reciver_province_id": 0,
									"reciver_city_id": 36,
									"invoice_info": [],
									"promotion_info": null,
									"dlyo_pickup_code": null
								},
								"extend_store": {
									"store_id": 1,
									"store_name": "bbcmall",
									"grade_id": 1,
									"member_id": 1,
									"member_name": "cy1330928",
									"seller_name": "cy1330928",
									"store_state": 1,
									"store_qq": "2963919720",
									"store_ww": "robin",
									"store_phone": "18511377098"
								},
								"extend_order_goods": [
									{
										"rec_id": 575,
										"order_id": 304,
										"goods_id": 2133,
										"goods_name": "依相悦 女士职业套装两件套 时尚 L(165/88A)",
										"goods_price": "201.96",
										"goods_num": 1,
										"goods_image": "1_2019041822030658785.jpg",
										"goods_pay_price": "201.96",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "7",
										"promotions_id": 0,
										"commis_rate": 0,
										"gc_id": 441
									}
								],
								"if_cancel": true,
								"if_refund_cancel": false,
								"if_complain": false,
								"if_receive": false,
								"if_lock": false,
								"if_deliver": false,
								"if_evaluation": false,
								"if_delete": false,
								"if_drop": false,
								"if_restore": false,
								"goods_list": [
									{
										"rec_id": 575,
										"order_id": 304,
										"goods_id": 2133,
										"goods_name": "依相悦 女士职业套装两件套 时尚 L(165/88A)",
										"goods_price": "201.96",
										"goods_num": 1,
										"goods_image": "1_2019041822030658785.jpg",
										"goods_pay_price": "201.96",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "7",
										"promotions_id": 0,
										"commis_rate": 0,
										"gc_id": 441,
										"goods_type_cn": "会员折扣",
										"goods_url": "/api/goods/index/goods_id/2133.html"
									}
								],
								"goods_count": 1
							}
						],
						"pay_amount": 201.96000000000001,
						"add_time": 1560774686,
						"pay_info": {
							"pay_id": 287,
							"pay_sn": "19061720312689375035",
							"buyer_id": 35,
							"api_paystate": "0"
						}
					},
					"19061720300736991035": {
						"order_list": [
							{
								"order_id": 303,
								"order_sn": "2000000000028602",
								"pay_sn": "19061720300736991035",
								"store_id": 4,
								"store_name": "炎妃熙娆",
								"buyer_id": 35,
								"buyer_name": "cy28414082",
								"buyer_email": null,
								"add_time": 1560774606,
								"payment_code": "online",
								"payment_time": 0,
								"finnshed_time": 0,
								"goods_amount": "38.00",
								"order_amount": "38.00",
								"rcb_amount": "0.00",
								"pd_amount": "0.00",
								"shipping_fee": "0.00",
								"evaluation_state": 0,
								"order_state": 10,
								"refund_state": 0,
								"lock_state": 0,
								"delete_state": 0,
								"refund_amount": "0.00",
								"delay_time": 0,
								"order_from": 2,
								"shipping_code": "",
								"order_type": null,
								"ob_no": 0,
								"state_desc": "待付款",
								"payment_name": "在线付款",
								"extend_order_common": {
									"order_id": 303,
									"store_id": 4,
									"shipping_time": 0,
									"shipping_express_id": 0,
									"evaluation_time": 0,
									"evalseller_state": "0",
									"evalseller_time": 0,
									"order_message": "",
									"order_pointscount": 0,
									"voucher_price": null,
									"voucher_code": null,
									"deliver_explain": null,
									"daddress_id": 0,
									"reciver_name": "老大",
									"reciver_info": {
										"phone": "15165463346",
										"mob_phone": "15165463346",
										"tel_phone": null,
										"address": "陕西省西安植物园 长啦路28号",
										"area": "陕西省西安植物园",
										"street": "长啦路28号"
									},
									"reciver_province_id": 0,
									"reciver_city_id": 36,
									"invoice_info": [],
									"promotion_info": null,
									"dlyo_pickup_code": null
								},
								"extend_store": {
									"store_id": 4,
									"store_name": "炎妃熙娆",
									"grade_id": 3,
									"member_id": 17,
									"member_name": "琦琦6567",
									"seller_name": "琦琦6567",
									"store_state": 1,
									"store_qq": "452055256",
									"store_ww": "",
									"store_phone": "18182529357"
								},
								"extend_order_goods": [
									{
										"rec_id": 574,
										"order_id": 303,
										"goods_id": 200,
										"goods_name": "风衣2019春季韩版新品翻领长袖双排扣长款上衣纯色英伦外套 长款风衣 黄色 均码",
										"goods_price": "38.00",
										"goods_num": 1,
										"goods_image": "4_2019011420315519651.png",
										"goods_pay_price": "38.00",
										"store_id": 4,
										"buyer_id": 35,
										"goods_type": "1",
										"promotions_id": 0,
										"commis_rate": 1,
										"gc_id": 363
									}
								],
								"if_cancel": true,
								"if_refund_cancel": false,
								"if_complain": false,
								"if_receive": false,
								"if_lock": false,
								"if_deliver": false,
								"if_evaluation": false,
								"if_delete": false,
								"if_drop": false,
								"if_restore": false,
								"goods_list": [
									{
										"rec_id": 574,
										"order_id": 303,
										"goods_id": 200,
										"goods_name": "风衣2019春季韩版新品翻领长袖双排扣长款上衣纯色英伦外套 长款风衣 黄色 均码",
										"goods_price": "38.00",
										"goods_num": 1,
										"goods_image": "4_2019011420315519651.png",
										"goods_pay_price": "38.00",
										"store_id": 4,
										"buyer_id": 35,
										"goods_type": "1",
										"promotions_id": 0,
										"commis_rate": 1,
										"gc_id": 363,
										"goods_type_cn": "",
										"goods_url": "/api/goods/index/goods_id/200.html"
									}
								],
								"goods_count": 1
							},
							{
								"order_id": 302,
								"order_sn": "2000000000028601",
								"pay_sn": "19061720300736991035",
								"store_id": 1,
								"store_name": "bbcmall",
								"buyer_id": 35,
								"buyer_name": "cy28414082",
								"buyer_email": null,
								"add_time": 1560774606,
								"payment_code": "online",
								"payment_time": 0,
								"finnshed_time": 0,
								"goods_amount": "1980.86",
								"order_amount": "1980.86",
								"rcb_amount": "0.00",
								"pd_amount": "0.00",
								"shipping_fee": "0.00",
								"evaluation_state": 0,
								"order_state": 10,
								"refund_state": 0,
								"lock_state": 0,
								"delete_state": 0,
								"refund_amount": "0.00",
								"delay_time": 0,
								"order_from": 2,
								"shipping_code": "",
								"order_type": null,
								"ob_no": 0,
								"state_desc": "待付款",
								"payment_name": "在线付款",
								"extend_order_common": {
									"order_id": 302,
									"store_id": 1,
									"shipping_time": 0,
									"shipping_express_id": 0,
									"evaluation_time": 0,
									"evalseller_state": "0",
									"evalseller_time": 0,
									"order_message": "",
									"order_pointscount": 0,
									"voucher_price": null,
									"voucher_code": null,
									"deliver_explain": null,
									"daddress_id": 0,
									"reciver_name": "老大",
									"reciver_info": {
										"phone": "15165463346",
										"mob_phone": "15165463346",
										"tel_phone": null,
										"address": "陕西省西安植物园 长啦路28号",
										"area": "陕西省西安植物园",
										"street": "长啦路28号"
									},
									"reciver_province_id": 0,
									"reciver_city_id": 36,
									"invoice_info": [],
									"promotion_info": "满1000减100 送[赠品]",
									"dlyo_pickup_code": null
								},
								"extend_store": {
									"store_id": 1,
									"store_name": "bbcmall",
									"grade_id": 1,
									"member_id": 1,
									"member_name": "cy1330928",
									"seller_name": "cy1330928",
									"store_state": 1,
									"store_qq": "2963919720",
									"store_ww": "robin",
									"store_phone": "18511377098"
								},
								"extend_order_goods": [
									{
										"rec_id": 568,
										"order_id": 302,
										"goods_id": 1417,
										"goods_name": "男式板鞋低帮四季款休闲鞋韩版潮流百搭飞织男鞋低帮单鞋 黑色 38",
										"goods_price": "48.51",
										"goods_num": 1,
										"goods_image": "1_2019031322270683688.jpg",
										"goods_pay_price": "46.51",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "7",
										"promotions_id": 0,
										"commis_rate": 0,
										"gc_id": 273
									},
									{
										"rec_id": 569,
										"order_id": 302,
										"goods_id": 1568,
										"goods_name": "春季新款女装韩版外搭线衣宽松针织开衫女 钉钻中长款外套女 藏青色 M",
										"goods_price": "34.65",
										"goods_num": 1,
										"goods_image": "1_2019031416433145903.jpg",
										"goods_pay_price": "33.65",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "7",
										"promotions_id": 0,
										"commis_rate": 0,
										"gc_id": 373
									},
									{
										"rec_id": 570,
										"order_id": 302,
										"goods_id": 2066,
										"goods_name": "华为 HUAWEI Mate 20 RS 保时捷设计 麒麟980芯片全面屏超大广角徕卡三摄 瑞红色 ",
										"goods_price": "1850.00",
										"goods_num": 1,
										"goods_image": "http://192.168.3.59:8028/uploads/home/store/goods/1/1_2019032122122428333_240.jpg",
										"goods_pay_price": "1762.00",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "4",
										"promotions_id": 1,
										"commis_rate": 0,
										"gc_id": 2314
									},
									{
										"rec_id": 571,
										"order_id": 302,
										"goods_id": 254,
										"goods_name": "2018新款男士手提包大容量耐磨防水休闲旅行包",
										"goods_price": "80.80",
										"goods_num": 1,
										"goods_image": "http://192.168.3.59:8028/uploads/home/store/goods/1/1_2019011720242346595_240.png",
										"goods_pay_price": "77.80",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "4",
										"promotions_id": 1,
										"commis_rate": 0,
										"gc_id": 303
									},
									{
										"rec_id": 572,
										"order_id": 302,
										"goods_id": 259,
										"goods_name": "2018新款真皮女包欧美时尚大单肩斜跨包 裸粉色",
										"goods_price": "66.90",
										"goods_num": 1,
										"goods_image": "http://192.168.3.59:8028/uploads/home/store/goods/1/1_2019011720390841632_240.png",
										"goods_pay_price": "60.90",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "4",
										"promotions_id": 1,
										"commis_rate": 0,
										"gc_id": 308
									},
									{
										"rec_id": 573,
										"order_id": 302,
										"goods_id": 233,
										"goods_name": "俄罗斯进口混合糖果500g 紫皮糖夹心巧克力散装混合糖",
										"goods_price": "0.00",
										"goods_num": 1,
										"goods_image": "1_2019011620144161221.jpg",
										"goods_pay_price": "0.00",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "5",
										"promotions_id": 0,
										"commis_rate": 0,
										"gc_id": 0
									}
								],
								"if_cancel": true,
								"if_refund_cancel": false,
								"if_complain": false,
								"if_receive": false,
								"if_lock": false,
								"if_deliver": false,
								"if_evaluation": false,
								"if_delete": false,
								"if_drop": false,
								"if_restore": false,
								"goods_list": [
									{
										"rec_id": 568,
										"order_id": 302,
										"goods_id": 1417,
										"goods_name": "男式板鞋低帮四季款休闲鞋韩版潮流百搭飞织男鞋低帮单鞋 黑色 38",
										"goods_price": "48.51",
										"goods_num": 1,
										"goods_image": "1_2019031322270683688.jpg",
										"goods_pay_price": "46.51",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "7",
										"promotions_id": 0,
										"commis_rate": 0,
										"gc_id": 273,
										"goods_type_cn": "会员折扣",
										"goods_url": "/api/goods/index/goods_id/1417.html"
									},
									{
										"rec_id": 569,
										"order_id": 302,
										"goods_id": 1568,
										"goods_name": "春季新款女装韩版外搭线衣宽松针织开衫女 钉钻中长款外套女 藏青色 M",
										"goods_price": "34.65",
										"goods_num": 1,
										"goods_image": "1_2019031416433145903.jpg",
										"goods_pay_price": "33.65",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "7",
										"promotions_id": 0,
										"commis_rate": 0,
										"gc_id": 373,
										"goods_type_cn": "会员折扣",
										"goods_url": "/api/goods/index/goods_id/1568.html"
									},
									{
										"rec_id": 570,
										"order_id": 302,
										"goods_id": 2066,
										"goods_name": "华为 HUAWEI Mate 20 RS 保时捷设计 麒麟980芯片全面屏超大广角徕卡三摄 瑞红色 ",
										"goods_price": "1850.00",
										"goods_num": 1,
										"goods_image": "http://192.168.3.59:8028/uploads/home/store/goods/1/1_2019032122122428333_240.jpg",
										"goods_pay_price": "1762.00",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "4",
										"promotions_id": 1,
										"commis_rate": 0,
										"gc_id": 2314,
										"goods_type_cn": "优惠套装",
										"goods_url": "/api/goods/index/goods_id/2066.html"
									},
									{
										"rec_id": 571,
										"order_id": 302,
										"goods_id": 254,
										"goods_name": "2018新款男士手提包大容量耐磨防水休闲旅行包",
										"goods_price": "80.80",
										"goods_num": 1,
										"goods_image": "http://192.168.3.59:8028/uploads/home/store/goods/1/1_2019011720242346595_240.png",
										"goods_pay_price": "77.80",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "4",
										"promotions_id": 1,
										"commis_rate": 0,
										"gc_id": 303,
										"goods_type_cn": "优惠套装",
										"goods_url": "/api/goods/index/goods_id/254.html"
									},
									{
										"rec_id": 572,
										"order_id": 302,
										"goods_id": 259,
										"goods_name": "2018新款真皮女包欧美时尚大单肩斜跨包 裸粉色",
										"goods_price": "66.90",
										"goods_num": 1,
										"goods_image": "http://192.168.3.59:8028/uploads/home/store/goods/1/1_2019011720390841632_240.png",
										"goods_pay_price": "60.90",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "4",
										"promotions_id": 1,
										"commis_rate": 0,
										"gc_id": 308,
										"goods_type_cn": "优惠套装",
										"goods_url": "/api/goods/index/goods_id/259.html"
									}
								],
								"zengpin_list": [
									{
										"rec_id": 573,
										"order_id": 302,
										"goods_id": 233,
										"goods_name": "俄罗斯进口混合糖果500g 紫皮糖夹心巧克力散装混合糖",
										"goods_price": "0.00",
										"goods_num": 1,
										"goods_image": "1_2019011620144161221.jpg",
										"goods_pay_price": "0.00",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "5",
										"promotions_id": 0,
										"commis_rate": 0,
										"gc_id": 0,
										"goods_type_cn": "赠品",
										"goods_url": "/api/goods/index/goods_id/233.html"
									}
								],
								"goods_count": 6
							}
						],
						"pay_amount": 2018.8599999999999,
						"add_time": 1560774606,
						"pay_info": {
							"pay_id": 286,
							"pay_sn": "19061720300736991035",
							"buyer_id": 35,
							"api_paystate": "0"
						}
					},
					"19061720135243361035": {
						"order_list": [
							{
								"order_id": 270,
								"order_sn": "2000000000027001",
								"pay_sn": "19061720135243361035",
								"store_id": 1,
								"store_name": "bbcmall",
								"buyer_id": 35,
								"buyer_name": "cy28414082",
								"buyer_email": null,
								"add_time": 1560773631,
								"payment_code": "online",
								"payment_time": 0,
								"finnshed_time": 0,
								"goods_amount": "1980.86",
								"order_amount": "1980.86",
								"rcb_amount": "0.00",
								"pd_amount": "0.00",
								"shipping_fee": "0.00",
								"evaluation_state": 0,
								"order_state": 10,
								"refund_state": 0,
								"lock_state": 0,
								"delete_state": 0,
								"refund_amount": "0.00",
								"delay_time": 0,
								"order_from": 2,
								"shipping_code": "",
								"order_type": null,
								"ob_no": 0,
								"state_desc": "待付款",
								"payment_name": "在线付款",
								"extend_order_common": {
									"order_id": 270,
									"store_id": 1,
									"shipping_time": 0,
									"shipping_express_id": 0,
									"evaluation_time": 0,
									"evalseller_state": "0",
									"evalseller_time": 0,
									"order_message": "",
									"order_pointscount": 0,
									"voucher_price": null,
									"voucher_code": null,
									"deliver_explain": null,
									"daddress_id": 0,
									"reciver_name": "老大",
									"reciver_info": {
										"phone": "15165463346",
										"mob_phone": "15165463346",
										"tel_phone": null,
										"address": "陕西省西安植物园 长啦路28号",
										"area": "陕西省西安植物园",
										"street": "长啦路28号"
									},
									"reciver_province_id": 0,
									"reciver_city_id": 36,
									"invoice_info": [],
									"promotion_info": "满1000减100 送[赠品]",
									"dlyo_pickup_code": null
								},
								"extend_store": {
									"store_id": 1,
									"store_name": "bbcmall",
									"grade_id": 1,
									"member_id": 1,
									"member_name": "cy1330928",
									"seller_name": "cy1330928",
									"store_state": 1,
									"store_qq": "2963919720",
									"store_ww": "robin",
									"store_phone": "18511377098"
								},
								"extend_order_goods": [
									{
										"rec_id": 456,
										"order_id": 270,
										"goods_id": 1417,
										"goods_name": "男式板鞋低帮四季款休闲鞋韩版潮流百搭飞织男鞋低帮单鞋 黑色 38",
										"goods_price": "48.51",
										"goods_num": 1,
										"goods_image": "1_2019031322270683688.jpg",
										"goods_pay_price": "46.51",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "7",
										"promotions_id": 0,
										"commis_rate": 0,
										"gc_id": 273
									},
									{
										"rec_id": 457,
										"order_id": 270,
										"goods_id": 1568,
										"goods_name": "春季新款女装韩版外搭线衣宽松针织开衫女 钉钻中长款外套女 藏青色 M",
										"goods_price": "34.65",
										"goods_num": 1,
										"goods_image": "1_2019031416433145903.jpg",
										"goods_pay_price": "33.65",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "7",
										"promotions_id": 0,
										"commis_rate": 0,
										"gc_id": 373
									},
									{
										"rec_id": 458,
										"order_id": 270,
										"goods_id": 2066,
										"goods_name": "华为 HUAWEI Mate 20 RS 保时捷设计 麒麟980芯片全面屏超大广角徕卡三摄 瑞红色 ",
										"goods_price": "1850.00",
										"goods_num": 1,
										"goods_image": "http://192.168.3.59:8028/uploads/home/store/goods/1/1_2019032122122428333_240.jpg",
										"goods_pay_price": "1762.00",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "4",
										"promotions_id": 1,
										"commis_rate": 0,
										"gc_id": 2314
									},
									{
										"rec_id": 459,
										"order_id": 270,
										"goods_id": 254,
										"goods_name": "2018新款男士手提包大容量耐磨防水休闲旅行包",
										"goods_price": "80.80",
										"goods_num": 1,
										"goods_image": "http://192.168.3.59:8028/uploads/home/store/goods/1/1_2019011720242346595_240.png",
										"goods_pay_price": "77.80",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "4",
										"promotions_id": 1,
										"commis_rate": 0,
										"gc_id": 303
									},
									{
										"rec_id": 460,
										"order_id": 270,
										"goods_id": 259,
										"goods_name": "2018新款真皮女包欧美时尚大单肩斜跨包 裸粉色",
										"goods_price": "66.90",
										"goods_num": 1,
										"goods_image": "http://192.168.3.59:8028/uploads/home/store/goods/1/1_2019011720390841632_240.png",
										"goods_pay_price": "60.90",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "4",
										"promotions_id": 1,
										"commis_rate": 0,
										"gc_id": 308
									},
									{
										"rec_id": 461,
										"order_id": 270,
										"goods_id": 233,
										"goods_name": "俄罗斯进口混合糖果500g 紫皮糖夹心巧克力散装混合糖",
										"goods_price": "0.00",
										"goods_num": 1,
										"goods_image": "1_2019011620144161221.jpg",
										"goods_pay_price": "0.00",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "5",
										"promotions_id": 0,
										"commis_rate": 0,
										"gc_id": 0
									}
								],
								"if_cancel": true,
								"if_refund_cancel": false,
								"if_complain": false,
								"if_receive": false,
								"if_lock": false,
								"if_deliver": false,
								"if_evaluation": false,
								"if_delete": false,
								"if_drop": false,
								"if_restore": false,
								"goods_list": [
									{
										"rec_id": 456,
										"order_id": 270,
										"goods_id": 1417,
										"goods_name": "男式板鞋低帮四季款休闲鞋韩版潮流百搭飞织男鞋低帮单鞋 黑色 38",
										"goods_price": "48.51",
										"goods_num": 1,
										"goods_image": "1_2019031322270683688.jpg",
										"goods_pay_price": "46.51",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "7",
										"promotions_id": 0,
										"commis_rate": 0,
										"gc_id": 273,
										"goods_type_cn": "会员折扣",
										"goods_url": "/api/goods/index/goods_id/1417.html"
									},
									{
										"rec_id": 457,
										"order_id": 270,
										"goods_id": 1568,
										"goods_name": "春季新款女装韩版外搭线衣宽松针织开衫女 钉钻中长款外套女 藏青色 M",
										"goods_price": "34.65",
										"goods_num": 1,
										"goods_image": "1_2019031416433145903.jpg",
										"goods_pay_price": "33.65",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "7",
										"promotions_id": 0,
										"commis_rate": 0,
										"gc_id": 373,
										"goods_type_cn": "会员折扣",
										"goods_url": "/api/goods/index/goods_id/1568.html"
									},
									{
										"rec_id": 458,
										"order_id": 270,
										"goods_id": 2066,
										"goods_name": "华为 HUAWEI Mate 20 RS 保时捷设计 麒麟980芯片全面屏超大广角徕卡三摄 瑞红色 ",
										"goods_price": "1850.00",
										"goods_num": 1,
										"goods_image": "http://192.168.3.59:8028/uploads/home/store/goods/1/1_2019032122122428333_240.jpg",
										"goods_pay_price": "1762.00",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "4",
										"promotions_id": 1,
										"commis_rate": 0,
										"gc_id": 2314,
										"goods_type_cn": "优惠套装",
										"goods_url": "/api/goods/index/goods_id/2066.html"
									},
									{
										"rec_id": 459,
										"order_id": 270,
										"goods_id": 254,
										"goods_name": "2018新款男士手提包大容量耐磨防水休闲旅行包",
										"goods_price": "80.80",
										"goods_num": 1,
										"goods_image": "http://192.168.3.59:8028/uploads/home/store/goods/1/1_2019011720242346595_240.png",
										"goods_pay_price": "77.80",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "4",
										"promotions_id": 1,
										"commis_rate": 0,
										"gc_id": 303,
										"goods_type_cn": "优惠套装",
										"goods_url": "/api/goods/index/goods_id/254.html"
									},
									{
										"rec_id": 460,
										"order_id": 270,
										"goods_id": 259,
										"goods_name": "2018新款真皮女包欧美时尚大单肩斜跨包 裸粉色",
										"goods_price": "66.90",
										"goods_num": 1,
										"goods_image": "http://192.168.3.59:8028/uploads/home/store/goods/1/1_2019011720390841632_240.png",
										"goods_pay_price": "60.90",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "4",
										"promotions_id": 1,
										"commis_rate": 0,
										"gc_id": 308,
										"goods_type_cn": "优惠套装",
										"goods_url": "/api/goods/index/goods_id/259.html"
									}
								],
								"zengpin_list": [
									{
										"rec_id": 461,
										"order_id": 270,
										"goods_id": 233,
										"goods_name": "俄罗斯进口混合糖果500g 紫皮糖夹心巧克力散装混合糖",
										"goods_price": "0.00",
										"goods_num": 1,
										"goods_image": "1_2019011620144161221.jpg",
										"goods_pay_price": "0.00",
										"store_id": 1,
										"buyer_id": 35,
										"goods_type": "5",
										"promotions_id": 0,
										"commis_rate": 0,
										"gc_id": 0,
										"goods_type_cn": "赠品",
										"goods_url": "/api/goods/index/goods_id/233.html"
									}
								],
								"goods_count": 6
							}
						],
						"pay_amount": 1980.8599999999999,
						"add_time": 1560773631,
						"pay_info": {
							"pay_id": 270,
							"pay_sn": "19061720135243361035",
							"buyer_id": 35,
							"api_paystate": "0"
						}
					}		
				},
				//订单列表 演示数据
			};
		},
		onLoad(option) {
			
			uni.getSystemInfo({
				success: (res)=> {
					let height = res.windowHeight - uni.upx2px(100);
					this.swiperheight = height
				}
			});
			this.tabIndex = option.tabIndex;
		},
		
		methods: {
			tabTab(index){
				uni.showLoading();
				this.tabIndex=index;
				uni.hideLoading();
			},
			
			tabChange(e){
				uni.showLoading();
				this.tabIndex=e.detail.current;
				uni.hideLoading();
			},
			toShow(){
				uni.navigateTo({
					url: 'order-show',
				});
			},
			toHaoping(){
				uni.navigateTo({
					url: '../haopin/haopin',
				});
			},
			toReturngoods(){
				uni.navigateTo({
					url: '../returngoods/returngoods',
				});
			},
			toPayment(row){
				uni.navigateTo({
					url: '../../pay/payment/payment',
					
				});
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #f3f3f3;
}

	.zengpin{background: #f6f6f6;border-radius: 20upx;padding: 20upx; margin: 30upx 10upx;}
	.zppic{width: 120upx}
	.zppic image{width: 120upx;height: 120upx;border-radius: 10upx}
	.zptitle{margin-left: 20upx;font-size: 28upx; color: #333; line-height: 1.5}
	.zpbttitle{display: -webkit-box;-webkit-box-orient: vertical;overflow: hidden;-webkit-line-clamp: 1;}
	.num{margin-top: 20upx}
	.zp text{background: #ef824a; color:#fff; font-size: 24upx; border-radius: 5upx;padding: 5upx 10upx;line-height: 1;}
	.num{margin-top: 20upx}
	.zp text{background: #ef824a; color:#fff; font-size: 24upx; border-radius: 5upx;padding: 5upx 10upx;line-height: 1;}
	.manjiansong{ padding: 0upx 20upx 20upx 20upx;border-bottom: 1upx solid #f3f3f3; font-size: 30upx;color: #C9141D;}
	.iconzhibi{background: url(../../../static/omc-logo.png) no-repeat left center;background-size: 30upx; padding-left: 35upx; font-size: 30upx;color: #C9141D;}
	.red{color: #C9141D;}
	.font32{font-size: 32upx;}
.shop{padding-top: 20upx;font-size: 32upx;}
.icon-dianpu{color:#c9141d; margin-right: 10upx; }
.order-list{
	
	padding-top: 20upx;
	width: 100%;
	.list{
		width: 100%;
		margin: 0;
		.onorder{
			width: 100%;
			height: 50vw;
			display: flex;
			justify-content: center;
			align-content: center;
			flex-wrap: wrap;
			image{
				width: 60vw;
				
				
			}
			.text{
				width: 100%;
				height: 60upx;
				font-size: 28upx;
				color: #444;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
		.row{
			width: calc(100% - 40upx);
			padding: 10upx 20upx;
			border-radius: 20upx;
			background-color: #fff;
			margin-bottom: 20upx;
			.type{
				font-size: 30upx;
				color: #c9141d;
				
				display: flex;
				padding-right: 10upx;
				align-items: center;
			}
			.order-info{
				margin-top: 30upx;
				padding:0 10upx 40upx 10upx;
				display: flex;
				border-bottom: 1upx solid #f3f3f3;
				.left{
					flex-shrink: 0;
					width: 160upx;
					height: 160upx; margin-right: 20upx;
					image{
						width: 160upx;
						height: 160upx;
						border-radius: 10upx;
					}
				}
				.right{
					width: 100%;
					margin-left: 10upx;
					position: relative;
					.name{
						width: 100%;
						font-size: 30upx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
					}
					.spec{
						color: #a7a7a7;
						font-size: 22upx;

					}
					.price-number{
						position: absolute;
						bottom: 0;
						width: 100%;
						font-size: 30upx;
						color: #333;
						.price{
							font-size: 30upx;
							margin-right: 5upx;
						}
						
					}
				}
			}
			.detail{
				display: flex;
				justify-content: flex-end;
				align-items: flex-end;
				height: 60upx;
				font-size: 30upx;
				.sum{
					padding: 0 8upx;
					display: flex;
					align-items: flex-end;
					.price{
						font-size: 30upx;
					}
				}
				
			}
			.btns{
				padding: 20upx 0;
				height: 80upx;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				view{
					min-width: 120upx;
					height: 50upx;
					padding: 0 20upx;
					border-radius: 50upx;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 28upx;
					margin-left: 20upx;
				}
				.default{
					border: solid 1upx #ccc;
					color: #666;
				}
				.pay{
					border: solid 1upx #c9141d;
					color: #c9141d;
				}
			}
		}
	}
}
</style>
