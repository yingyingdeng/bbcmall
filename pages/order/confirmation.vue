<template>
	<view>
		<!-- 收货地址 -->
		<!-- <view class="dingdan uf-ac-jc">
			<view class="shouhuodizhi"><text class="icon iconfont icon-jiahaob"></text>新增收货地址</view>
			<view class="icon iconfont icon-arrow-right-copy"></view>
		</view> -->
		<view class="dingdan uf-ac-jc"  @tap="selectAddress">
			<view class="address">
				<view class="city"><text>默认</text>{{address_info.area_info}}</view>
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
			<view class="icon iconfont icon-arrow-right-copy"></view>
		</view>
		

		
		<!-- 购买商品列表 -->
		<block  v-for="(shop,index) in store_list" :key="index" >
		<view class="cart-body">
			<!--  店铺名称 -->
			<view class="uf-ac-jc tcpadding">
				<view class="cart-title uf-ac"><text class="icon iconfont icon-dianpu"></text>{{shop.store_name}}</view>
					<template v-if="store_mansong_rule_list[index]">
						<view class="huodong">{{store_mansong_rule_list[index].desc}}<text class="icon iconfont icon-arrow-right-copy"></text></view>
					</template>
			</view>
			<!-- 购买产品列表 -->
			<block v-for="(good,index2) in store_cart_list[index]" :key="index2">
				<!--判断是否有优惠套装-->
				<template v-if="!good.bl_id">
					<view class="cart-bottom-line uf tcpadding">
						
						<view class="cart-list-pro uf">
							<view class="cart-list-pic"><image :src="good.goods_image" mode="widthFix" lazy-load></image></view>
							<view class="cart-list-title">
								<view class="cartitle">{{good.goods_name}}</view>
								<view class="cartjiage uf-ac-jc">
									<view class="cartnum"><text class="iconzhibi">{{good.goods_price}}</text></view>
									<view class="number">
										数量：{{good.goods_num}}
									</view>
								</view>
								
								<view class="uf">
									<template v-if="good.mgdiscount_desc">
										<view class="zekou">
											<text>{{good.mgdiscount_desc}}</text>
										</view>
									</template>
									<template v-if="good.is_have_gift">
										
										<view class="prozeng">
											<text>赠品</text>
										<block v-for="(lp,lpid) in good.gift_list" :key="">
											<image :src="lp.gift_goodsimage" mode="widthFix" lazy-load></image>
										</block>
										</view>
									</template>
								</view>
							</view>
						</view>
					</view>
					
				</template>
				
				<!-- 套餐列表 -->
				<template v-else>
					<view>
						<view class="cart-bottom-line uf tcpadding">
							<view>
								<view class="cart-mansong">
									<text>套装</text>{{good.goods_name}}
								</view>
								<view class="uf-ac-jc tcjiage">
									<view>
										<text class="tancanjia">套餐价：</text><text class="tancanjia iconzhibi">{{good.goods_total}}</text>
										<text class="sheng">省</text><text class="huang">: {{good.down_price}}</text>
									</view>
									<view class="number">
										数量：{{good.goods_num}}
									</view>
								</view>
								<view class="tzbg">
								<block v-for="(bl,i) in good.bl_goods_list" :key="i">
									<view class="cart-list-pro uf">
										<view class="cart-list-pic"><image :src="bl.goods_image" mode="widthFix" lazy-load></image></view>
										<view class="cart-list-title">
											<view class="cartitle">{{bl.goods_name}}</view>
											<view class="cartjiage">
												<view class="cartnum">优惠价：<text class="iconzhibi">{{(bl.blgoods_price-bl.down_price)}}</text></view>
												<view class="cartnum-line">原价：<text class="iconzhibi-line">{{bl.blgoods_price}}</text></view>
											</view>
										</view>
									</view>
									
								</block>
								</view>
							</view>
						</view>
						
					</view>
				</template>
				
			</block>
			
			<!-- 买家留言 -->
			<view class="top-line tcpadding">
				<view class="uni-title">买家留言</view>
				<view>
					<textarea class="textareatype" placeholder-style="color:#aaaaaa" placeholder="选填，可以告诉卖家您对商品的特殊需求，如颜色、尺码等"/>
				</view>
			</view>
			
			<!-- 优惠劵 -->
			<view class="jiesuan">

				<template v-if="store_voucher_list[index]">
					<view class="uf-ac-jc jslanmu" @tap="showCoupon(index)">
						<view class="biaoti">优惠券</view>
						<view><text class="youhuiqan">{{store_voucher_show[index].price}}</text><text class="icon iconfont icon-arrow-right-copy"></text></view>
					</view>
					<!-- 优惠劵列表 -->
					<view class="share" :class="store_voucher_show[index].couponClass" @touchmove.stop.prevent="discard" @tap="hideCoupon(index)">
						<view class="mask"></view>
						<view class="layer" @tap.stop="discard">
							<view class="h2">选择优惠券</view>
							  <radio-group class="coupon" @change="radioChange">
							 	<label class="uf-ac-jc couponlist" v-for="(i,s) in store_voucher_list[index]" :key="s">
							 		<view>
							 			<label class="label-2-text" :for="i.voucher_title">
							 				<text>{{i.desc}}</text>
							 			</label>
							 		</view>
							 		<view>
							 			<radio class="from-radio" :value="i.voucher_price+'|'+index" :checked="i.checked"></radio>
							 		</view>
							 	</label>
							 </radio-group>
							<button class="anniu" type="warn" @tap="hideCoupon(index)">确定</button>
							<view class="guanbi icon iconfont icon-ego-guanbi"  @tap="hideCoupon(index)" ></view>
						</view>
					</view>
				</template>
				<!-- 满减 -->
					<template v-if="store_mansong_rule_list[index]">
						<view class="uf-ac-jc jslanmu" @tap="showMansong(index)">
							<view class="biaoti">{{store_mansong_rule_list[index].mansong_name}}</view>
							<view class="heji">- {{store_mansong_rule_list[index].mansongrule_discount}} <text class="icon iconfont icon-arrow-right-copy"></text></view>
						</view>
						<!-- 满就送赠品产品 -->
						<view class="share" :class="store_mansong_rule_list[index].couponClass" @touchmove.stop.prevent="discard" @tap="hideMansong(index)">
							<view class="mask"></view>
							<view class="layer" @tap.stop="discard">
									<view class="h2">{{store_mansong_rule_list[index].desc}}</view>
									<view class="taozhuang">
										<view class="floor-item">
											<view><image :src="store_mansong_rule_list[index].goods_image" mode="aspectFill" lazy-load></image></view>
											<view class="tzcont">
												<text class="titlex">{{store_mansong_rule_list[index].mansong_goods_name}}</text>
											</view>
										</view>
									</view>
								<view class="guanbi icon iconfont icon-ego-guanbi"  @tap="hideMansong(index)" ></view>
							</view>
						</view>
					</template>
					

				
				<view class="uf-ac-jc jslanmu ">
					<view class="biaoti">运费</view>
					<view>快递：免运费</view>
				</view>
				
				<view class="uf-ac-jc jslanmu">
					<view class="biaoti">本店合计</view>
					<view class="heji"><text class="iconzhibi"></text>{{store_goods_total[index]}}</view>
				</view>
				
			</view>
		</view>
		</block>
			<!-- 支付方式 -->
		<view class="pay">
			<view class="uf-ac-jc">
				<view class="biaoti">
					支付方式
				</view>
				<view>
					在线支付
				</view>
			</view>
		</view>

	
		<view class="pay">
			<view class="uf-ac-jc">
				<view class="biaoti">
					<label>
						<checkbox value="r1" class="checkbox" />充值卡余额
					</label>
				</view>
				<view class="heji">
					<text class="iconzhibi"></text> {{available_rc_balance}}
				</view>
			</view>
		</view>
		<view class="pay">
			<view class="uf-ac-jc">
				<view class="biaoti">
					 <label>
					 	<checkbox class="from-radio" value="r1" />帐号余额
					 </label>
				</view>
				<view class="heji">
					<text class="iconzhibi"></text> {{available_predeposit}}
				</view>
			</view>
		</view>

		<view class="pay">
			<view class="uf-ac-jc">
				<view class="biaoti">
					支付密码
				</view>
				<view class="uf-ac-ajc">
					<view><input class="uni-input" placeholder="请输入密码" password="ture" /></view>
					<view class="zhifubtn"  @tap="doReg">验证</view>
				</view>
			</view>
		</view>
		
		<view class="blck"></view>
		<view class="footer">
			<view class="sum">合计：<view class="money"><text class="iconzhibi"></text>10000</view></view>
			<view class="settlement">
				
				<view class="btn" @tap="toPay">提交订单</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 radioItems: [{
						name: '优惠50',
						value: '优惠券50元'
					},
					{
						name: '优惠100',
						value: '优惠券100元',
						checked: 'true'
					}
				],
				youhuijuan :0,
				hidden: false,
				payClass:'',//支付弹窗css类，控制开关动画
				couponClass:'',// 优惠券弹窗css类，控制开关动画
				zengpinClass:'',//赠品弹窗css类，控制开关动画
				mansongClass:'',//满就送弹窗css类，控制开关动画
				index:0,
				gift_list:{},
				store_cart_list: {
					"1": [
						{
							"cart_id": 23,
							"buyer_id": 2,
							"store_id": 1,
							"store_name": "bbcmall",
							"goods_id": 338,
							"goods_name": "新款B57智能手环心率血压健康手表彩色触摸屏防水 金色",
							"goods_price": 22.800000000000001,
							"goods_num": 5,
							"goods_image": "http://www.bbcmall.us/uploads/home/store/goods/1/1_2019012015254576415_240.jpg",
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
							"mgdiscount_desc": "会员享受9.5折",
							"ifmgdiscount": true,
							"goods_total": "114.00",
							"goods_image_url": "http://www.bbcmall.us/uploads/home/store/goods/1/http://www.bbcmall.us/uploads/home/store/goods/1/1_2019012015254576415_240.jpg"
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
							"goods_image": "1_2019032122122428333.jpg",
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
									"goods_image": "http://www.bbcmall.us/uploads/home/store/goods/1/1_2019032122122428333_240.jpg",
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
									"goods_image": "http://www.bbcmall.us/uploads/home/store/goods/1/1_2019011720242346595_240.png",
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
									"goods_image": "http://www.bbcmall.us/uploads/home/store/goods/1/1_2019011720390841632_240.png",
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
							"goods_total": "1997.70",
							"goods_image_url": "http://www.bbcmall.us/uploads/home/store/goods/1/1_2019032122122428333.jpg"
						},
						{
							"cart_id": 26,
							"buyer_id": 2,
							"store_id": 1,
							"store_name": "bbcmall",
							"goods_id": 540,
							"goods_name": "启蒙拼装积木1409天劫战神6合1机器人合体变形益智拼插玩具礼物",
							"goods_price": 9.5,
							"goods_num": 1,
							"goods_image": "http://www.bbcmall.us/uploads/home/store/goods/1/1_2019030419154454074_240.jpg",
							"bl_id": 0,
							"state": true,
							"storage_state": true,
							"goods_commonid": 369,
							"gc_id": 2313,
							"transport_id": 0,
							"goods_freight": "0.00",
							"goods_vat": 0,
							"goods_storage": 999,
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
							"mgdiscount_desc": "会员享受9.5折",
							"ifmgdiscount": true,
							"goods_total": "9.50",
							"goods_image_url": "http://www.bbcmall.us/uploads/home/store/goods/1/http://www.bbcmall.us/uploads/home/store/goods/1/1_2019030419154454074_240.jpg"
						},
						{
							"cart_id": 27,
							"buyer_id": 2,
							"store_id": 1,
							"store_name": "bbcmall",
							"goods_id": 612,
							"goods_name": "高档保温杯男士女304不锈钢便携水杯子茶杯茶水分离 500ml 本色",
							"goods_price": 13.300000000000001,
							"goods_num": 1,
							"goods_image": "http://www.bbcmall.us/uploads/home/store/goods/1/1_2019030621383586033_240.jpg",
							"bl_id": 0,
							"state": true,
							"storage_state": true,
							"goods_commonid": 410,
							"gc_id": 122,
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
							"mgdiscount_desc": "会员享受9.5折",
							"ifmgdiscount": true,
							"goods_total": "13.30",
							"goods_image_url": "http://www.bbcmall.us/uploads/home/store/goods/1/http://www.bbcmall.us/uploads/home/store/goods/1/1_2019030621383586033_240.jpg"
						},
						{
							"cart_id": 28,
							"buyer_id": 2,
							"store_id": 1,
							"store_name": "bbcmall",
							"goods_id": 1933,
							"goods_name": "1.7升家用304不锈钢快速壶烧水壶 美的MK-HJ1705电热水壶",
							"goods_price": 23.75,
							"goods_num": 1,
							"goods_image": "http://www.bbcmall.us/uploads/home/store/goods/1/1_2019032018523953975_240.jpg",
							"bl_id": 0,
							"state": true,
							"storage_state": true,
							"goods_commonid": 595,
							"gc_id": 651,
							"transport_id": 0,
							"goods_freight": "0.00",
							"goods_vat": 0,
							"goods_storage": 99,
							"goods_storage_alarm": 10,
							"is_goodsfcode": 0,
							"is_have_gift": 1,
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
							"mgdiscount_desc": "会员享受9.5折",
							"ifmgdiscount": true,
							"gift_list": [
								{
									"gift_id": 15,
									"gift_goodsid": 2168,
									"gift_goodsname": "11红米小金刚7 Pro 全网通 金色 128G",
									"gift_goodsimage": "http://www.bbcmall.us/uploads/home/store/goods/1/1_2019032018523953975_240.jpg",
									"gift_amount": 1,
									"goods_id": 337,
									"goods_commonid": 255,
									"goods_storage": 0
								}
							],
							"goods_total": "23.75",
							"goods_image_url": "http://www.bbcmall.us/uploads/home/store/goods/1/http://www.bbcmall.us/uploads/home/store/goods/1/1_2019032018523953975_240.jpg"
						},
						{
							"cart_id": 29,
							"buyer_id": 2,
							"store_id": 1,
							"store_name": "bbcmall",
							"goods_id": 337,
							"goods_name": "新款B57智能手环心率血压健康手表彩色触摸屏防水 黑色",
							"goods_price": 22.800000000000001,
							"goods_num": 1,
							"goods_image": "http://www.bbcmall.us/uploads/home/store/goods/1/1_2019012015254576415_240.jpg",
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
							"is_have_gift": 1,
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
							"mgdiscount_desc": "会员享受9.5折",
							"ifmgdiscount": true,
							"gift_list": [
								{
									"gift_id": 14,
									"gift_goodsid": 2169,
									"gift_goodsname": "红米小金刚7 Pro 全网通 金色 128G",
									"gift_goodsimage": "http://www.bbcmall.us/uploads/home/store/goods/1/1_2019030621383586033_240.jpg",
									"gift_amount": 1,
									"goods_id": 337,
									"goods_commonid": 255,
									"goods_storage": 0
								}
							],
							"goods_total": "22.80",
							"goods_image_url": "http://www.bbcmall.us/uploads/home/store/goods/1/http://www.bbcmall.us/uploads/home/store/goods/1/1_2019012015254576415_240.jpg"
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
							"goods_image": "http://www.bbcmall.us/uploads/home/store/goods/4/4_2019011420315519651_240.png",
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
							"goods_total": "76.00",
							"goods_image_url": "http://www.bbcmall.us/uploads/home/store/goods/4/http://www.bbcmall.us/uploads/home/store/goods/4/4_2019011420315519651_240.png"
						}
					]
				},
				store_goods_total: {
					"1": "2181.05",
					"4": "76.00"
				},
				store_premiums_list: {
					"1": [
						{
							"goods_id": 233,
							"goods_name": "俄罗斯进口混合糖果500g 紫皮糖夹心巧克力散装混合糖",
							"goods_num": 1,
							"goods_price": 0,
							"goods_image": "1_2019011620144161221.jpg",
							"goods_image_url": "http://www.bbcmall.us/uploads/home/store/goods/1/1_2019011620144161221.jpg",
							"goods_storage": 999
						}
					]
				},
				store_mansong_rule_list: {
					"1": {
						"mansongrule_id": 7,
						"mansong_id": 5,
						"mansongrule_price": 1000,
						"mansongrule_discount": 200,
						"mansong_goods_name": "11俄罗斯进口混合糖果500g 紫皮糖夹心巧克力散装混合糖",
						"goods_id": 233,
						"goods_image": "1_2019011620144161221.jpg",
						"goods_image_url": "http://192.168.1.111:8028/uploads/home/store/goods/1/1_2019011620144161221_240.jpg",
						"goods_storage": 999,
						"goods_url": "/api/goods/index/goods_id/233.html",
						"mansong_name": "1全场满1000 送 100",
						"mansong_starttime": 1558581300,
						"mansong_endtime": 1575043200,
						"desc": "满1000减100 送[赠品]1",
						"discount": "100.00",
						"couponClass" :''
					},
					"4": {
						"mansongrule_id": 8,
						"mansong_id": 9,
						"mansongrule_price": 1000,
						"mansongrule_discount": 100,
						"mansong_goods_name": "22俄罗斯进口混合糖果500g 紫皮糖夹心巧克力散装混合糖",
						"goods_id": 238,
						"goods_image": "1_2019011620144161221.jpg",
						"goods_image_url": "http://192.168.1.111:8028/uploads/home/store/goods/1/1_2019011620144161221_240.jpg",
						"goods_storage": 999,
						"goods_url": "/api/goods/index/goods_id/233.html",
						"mansong_name": "2全场满1000 送 100",
						"mansong_starttime": 1558581300,
						"mansong_endtime": 1575043200,
						"desc": "满1000减100 送[赠品]2",
						"discount": "100.00",
						"couponClass" :''
					}
				},
				 store_voucher_show:{
					 "1":{
						 "couponClass": '',
						 "price":'',
						}
				 },
				 store_voucher_list: {
					"1": {
						"8": {
							"voucher_id": 5,
							"voucher_code": "916150613079117002",
							"vouchertemplate_id": 8,
							"voucher_title": "代金券名称",
							"voucher_desc": "代金券描述",
							"voucher_startdate": 1559735117,
							"voucher_enddate": 1585929600,
							"voucher_price": 100,
							"voucher_limit": "500.00",
							"voucher_store_id": 1,
							"voucher_state": 1,
							"voucher_activedate": 1559735117,
							"voucher_type": 0,
							"voucher_owner_id": 2,
							"voucher_owner_name": "cy28414080",
							"voucher_order_id": null,
							"desc": "面额100元 有效期至 2020-04-04  消费满500.00可用"
						},
						"19": {
							"voucher_id": 6,
							"voucher_code": "916150613079117002",
							"vouchertemplate_id": 8,
							"voucher_title": "代金券名称",
							"voucher_desc": "代金券描述",
							"voucher_startdate": 1559735117,
							"voucher_enddate": 1585929600,
							"voucher_price": 100,
							"voucher_limit": "500.00",
							"voucher_store_id": 1,
							"voucher_state": 1,
							"voucher_activedate": 1559735117,
							"voucher_type": 0,
							"voucher_owner_id": 2,
							"voucher_owner_name": "cy28414080",
							"voucher_order_id": null,
							"couponClass":'hide',
							"desc": "面额100 有效期至 2020-04-04  消费满500.00可用"
						}
					}
				},
				need_calc_sid_list: [
					1,
					2,
					3,
					4,
					6
				],
				cancel_calc_sid_list: [],
				freight_list: "rzyYIsnuErkJZuZi-3nhK2JdTT-CQItFros7Tbq4uo9Z1VoKMp46v8lIIayI1G_Y7u5Y0-3VJfgUZmtSS0uVIb4GyTr3Insn7guI2J42Gvu4ipD9XJz-mJJ2zwWu372l7HwgJ5Y04iTga44qWSU",
				address_info: {
					address_id: 1,
					member_id: 2,
					address_realname: "老常",
					city_id: 36,
					area_id: 38,
					area_info: "人性化明哦日",
					address_detail: "送您哦送哦哦亲",
					address_tel_phone: null,
					address_mob_phone: "18209180239",
					address_is_default: "1",
					dlyp_id: 0,
					address_longitude: null,
					address_latitude: null,
					address_mob_phone_lang: "86"
				},
				deny_edit_payment: true,
				pay_goods_list: [],
				ifshow_offpay: false,
				vat_deny: true,
				vat_hash: "HQQzKKTHu494R0284R9zRhXTQ0JhjUU-wFs",
				inv_info: {
					"content": "不需要发票"
				},
				available_predeposit: "88388.50",
				available_rc_balance: "0.00",
				member_paypwd: true,
				store_list: {
					"1": {
						"store_id": 1,
						"member_id": 1,
						"store_name": "bbcmall"
					},
					"4": {
						"store_id": 4,
						"member_id": 17,
						"store_name": "炎妃熙娆"
					}
				}
    
				};
			},
		
		onLoad() {
			console.log(Object.keys(this.store_voucher_list[1]).length);
		},
		methods: {
			toPay(){
				uni.navigateTo({
					url: '../pay/payment/payment',
					
				});
			},
			//选择收货地址
			selectAddress(){
				uni.navigateTo({
					url:'../address/address?type=select'
				})
			},
			
			//优惠券弹窗
			showCoupon(index) {
				console.log('show');
				this.store_voucher_show[index].couponClass = 'show';
				//this.couponClass = 'show';
			},
			hideCoupon(index) {
				this.store_voucher_show[index].couponClass = 'hide';
				//this.couponClass = 'hide';
				setTimeout(() => {
					this.store_voucher_show[index].couponClass = 'none';
				}, 150);
			},
			//满就送弹窗
			showMansong(index) {
				console.log('show');
				this.store_mansong_rule_list[index].couponClass = 'show';
			},
			hideMansong(index) {
				this.store_mansong_rule_list[index].couponClass = 'hide';
				setTimeout(() => {
					this.store_mansong_rule_list[index].couponClass = 'none';
				}, 150);
			},
			radioChange: function(e) {

				let arr = e.detail.value.split('|');
				var checked = e.target.value
				var changed = {}
				for (var i = 0; i < this.radioItems.length; i++) {
					if (checked.indexOf(this.radioItems[i].voucher_id) !== -1) {
						changed['radioItems[' + i + '].checked'] = true
					} else {
						changed['radioItems[' + i + '].checked'] = false
					}
				}
				this.store_voucher_show[arr[1]].price = '-'+arr[0];
				this.youhuijuan = this.youhuijuan+arr[0];
			},
			//赠品弹窗
			showZengpin() {
				console.log('show');
				this.zengpinClass = 'show';
			},
			hideZengpin() {
				this.zengpinClass = 'hide';
				setTimeout(() => {
					this.zengpinClass = 'none';
				}, 200);
			},	
			discard() {
				//丢弃
			}
		}
	}
</script>

<style lang="scss">
	page{background: #f3f3f3}
	@keyframes showPopup {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
		@keyframes hidePopup {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
		@keyframes showLayer {
			0% {
				transform: translateY(0);
			}
			100% {
				transform: translateY(-100%);
			}
		}
		@keyframes hideLayer {
			0% {
				transform: translateY(-100%);
			}
			100% {
				transform: translateY(0);
			}
		}
	.dingdan{background: url(../../static/adbg.jpg) repeat-x bottom #fff;background-size:100upx;border-radius: 0 0 20upx 20upx;padding: 30upx 30upx 30upx 10upx;color: #333;min-height: 80upx;}
	.address{ padding-left: 20upx}
	.city{font-size: 32upx}
	.city text{background: #f52d19; border-radius: 5upx; height: 32upx; font-size: 26upx; color: #f3f3f3; margin-right: 15upx;line-height: 32upx; padding: 0upx 10upx;}
	.add{font-size: 36upx;font-weight: bold;}
	.name,.tel{font-size: 30upx; margin-right: 30upx;}
	.shouhuodizhi{font-size: 34upx; color: #f97653; padding-left: 20upx;}
	.icon-jiahaob{font-size: 30upx;}

	.tzbg{background: #f3f3f3; padding:10upx 20upx;border-radius: 10upx;}


	.cart-body{background: #fff;border-radius: 20upx; margin-top: 20upx; width: 100%;position: relative}
	.tcpadding{margin: 0 3%;}
	.cart{display: flex;}
	.cart-title{padding-top: 35upx;font-size: 32upx; margin-right: 20upx; font-weight: 600; }
	.cart-title text{margin-right: 10upx;color: #C9141D;}
	.cart-list-pic{ width: 160upx;margin-right: 20upx;}
	.cart-list-pic image{width: 160upx; height: 160upx; border-radius: 10upx; }
	.icon-ego-guanbi{position: absolute;top:30upx;right: 30upx;z-index: 10; width: 50upx;height: 50upx;align-items: center;justify-content: center; border: 1upx solid #f3f3f3; border-radius: 40upx;display: flex; font-size: 30upx; box-shadow: 0 0 10upx #f1f1f1;color: #aaa; font-size: 28upx ; background: #fff;}
	.iconzhibi { background:url(../../static/omc-logo.png) no-repeat center left;background-size: 32upx; padding-left: 35upx;}	
	.iconzhibi-line { background:url(../../static/line-omc-logo.png) no-repeat center left;background-size: 32upx; padding-left: 35upx;}
	.cart-mansong{font-size: 30upx; color: #333; padding:20upx 0 0upx 0upx;}
	.cart-mansong text{border:1upx #c9141d solid; font-size: 24upx; line-height: 1; padding: 3upx 8upx; margin-right: 10upx; color: #c9141d;border-radius: 10upx;}
	.cart-bottom-line{border-bottom: 1upx solid #f3f3f3;padding-bottom: 20upx;}
	.cart-list-pro{margin-top: 20upx;width: 100%}
	.cartitle{display: -webkit-box;-webkit-box-orient: vertical;overflow: hidden;-webkit-line-clamp: 1;font-size: 28upx; color: #333; line-height: 1.5}
	.cartnum-line{color: #797979;text-decoration: line-through;}
	.cartnum-line text{color: #797979;}
	.cartnum{color: #C9141D;}
	.cartnum text{ font-size: 30upx;}
	.tis{width: 100%;height: 60upx;display: flex;justify-content: center;align-items: center;font-size: 32upx;}
	.cartjiage{ padding-top: 10upx; padding-right: 10upx;}
	.huodong{margin-top: 35upx;display: -webkit-box;-webkit-box-orient: vertical;overflow: hidden;-webkit-line-clamp: 1;font-size: 28upx; color: #333; line-height: 1.5;}
	.huodong .icon-arrow-right-copy{font-size: 26upx;color: #999;margin-left: 10upx}
	.tcjiage{padding: 20upx 10upx 20upx 0;}
	.tancanjia{color: #C9141D}
	.sheng{background: #ef824a; border-radius:60upx; color: #fff;font-size: 22upx;padding: 4upx 8upx;line-height: 1; margin-left: 20upx;}
	.huang{color: #ef824a;}
	.jiesuan{ padding-bottom: 30upx;}
	.jslanmu{padding: 20px 3% 0 3%;color: #333;}
	radio-group label, checkbox-group label{
	padding-right:0rpx;
	}
	.textareatype{box-shadow: 0 0 10upx #f1f1f1;  width: 96%; height: 100upx;padding: 10upx 2%; line-height: 50upx; }
	.uni-title{font-size: 30upx; color: #333}
	.jslanmu .icon-arrow-right-copy,.pay .icon-arrow-right-copy{margin-left: 10upx; font-size: 26upx;color: #999}
	.heji{color: #C9141D;}
	.biaoti{font-size: 30upx;}
	.youhuiqan{color: #C9141D; font-size: 26upx; line-height: 1;}
	.pay{padding: 20upx 3%; margin-top: 20upx; background: #fff;border-radius: 20upx;}
	.payright{ margin-right: 30upx;}
	.zhifubtn{font-size: 26upx;margin: 0px;background: #C9141D; padding: 0upx 10px; border-radius:0 10upx 10upx 0; color: #fff;border: 1upx solid #C9141D;height: 60upx;line-height: 60upx;}

	.uni-input{border: 1upx solid #f1f1f1; margin: 0;padding: 0upx 10px;border-radius: 10upx 0 0 10upx;border-right: 0 ;line-height: 1;font-size: 26upx;height: 60upx;}

	.taozhuang{ padding-bottom: 20upx;}
	.floor-item{padding: 15upx 15upx 0 15upx; border-radius: 15upx;display: flex; margin-bottom: 20upx;}
	.floor-item	image{width:100upx;border-radius: 6upx;height: 100upx; margin-right: 20upx}
	.tzcont{ color: #797979 }
	.floor-item .titlex{ display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;font-size: 30upx; padding: 0; margin: 0; color: #797979}
	.floor-item .price{color: #C9141D;background:url(../../static/omc-logo.png) no-repeat 0upx 4upx; font-size: 30upx; background-size: 40upx; padding-left: 40upx;line-height: 1;}
	.yuanjia{ color: #797979;text-decoration:line-through; margin-left: 20upx;}
	.floor-item .price_line{color: #797979;background:url(../../static/line-omc-logo.png) no-repeat 0upx 4upx; font-size: 30upx; background-size: 40upx; padding-left: 40upx;line-height: 1;}
	.youhuixinxi{ background: #f9f9f9; border-radius:20upx; padding: 20upx; align-items: center;justify-content: center; color: #797979; display: flex  }

	.blck{
		width: 100%;
		height: 100upx;
	}
	.zhifu{padding: 30upx;}
	.share{
		display: none;
		&.show {
			display: block;
			.mask{
				animation: showPopup 0.15s linear both;
			}
			.layer {
				animation: showLayer 0.15s linear both;
			}
		}
		&.hide {
			display: block;
			.mask{
				animation: hidePopup 0.15s linear both;
			}
			
			.layer {
				animation: hideLayer 0.15s linear both;
			}
		}
		&.none {
			display: none;
		}
		.mask{
			background-color: rgba(0,0,0,.5);
			position: fixed;
			width: 100%;
			height: 100%;
			top:0;
			z-index: 11;
		}
		.layer{
			width: 92%;
			position: fixed;
			z-index: 12;
			padding: 20upx 4% 0 4%;
			top: 100%;
			background-color: rgba(255,255,255,1);border-radius: 20upx 20upx 0 0;; padding-bottom: 20upx;
			.list{
				width: 100%;
				display: flex;
				padding:10upx 0 30upx 0;
				.box{
					width: 25%;
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					image{
						width: 13.8vw;
						height: 13.8vw;
					}
					.title{
						margin-top: 10upx;
						
						width: 100%;
						font-size: 26upx;
						view{
							display: flex; align-items: center;justify-content: center;
						}
					}
				}
			}
			.btn{
				width: 100%;
				height: 100upx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 28upx;
				border-top: solid 1upx #f5f5f5;
			}
			.h1{
				width: 100%;
				height: 80upx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 34upx;
			}
			.h2{
				width: 100%;
				height: 80upx;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				font-size: 34upx;
			}
		}
	}
	.anniu{color: #fff; background: linear-gradient(to right, #ff4672 , #fe3612);border-radius:0upx; margin: 0; border-radius: 10upx;font-size: 28upx;}
	.coupon{margin: 0; width: 100%; padding: 20upx 0 150upx 0;}
	.couponlist{padding-bottom: 30upx; }
	.from-radio{transform: scale(0.8)}

	radio .wx-radio-input {
	}

	radio .wx-radio-input.wx-radio-input-checked {
	  background: linear-gradient(to right, #ff4672 , #fe3612) !important; 
	  border-color:#fe3612 !important;
	}

	radio .wx-radio-input.wx-radio-input-checked::before  {
	  background: linear-gradient(to right, #ff4672 , #fe3612) !important;
	} 
	

	
	

	.prozeng,.zekou {justify-content: flex-start;display: flex;align-items: center;margin-right: 10upx; margin-top: 10upx; }
	.prozeng text{background: #ef824a; color:#fff; font-size: 24upx; border-radius: 5upx;padding: 10upx 15upx;line-height: 1;}
	.zekou text{border: 1upx solid #f1f1f1; border-radius: 5upx; font-size: 24upx;padding: 10upx 15upx; color: #aaa;line-height: 1;}
	.prozeng image{width: 45upx; height: 45upx; border: 1upx solid #f1f1f1; border-radius: 5upx; margin-left: 10upx;}


	.footer{
			width: 94%;
			padding: 0 3%;
			background-color: #f9f9f9;
			height: 100upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 28upx;
			position: fixed;
			bottom: 0upx;
			z-index: 5;
			.sum{
				font-size: 32upx;
				margin-right: 10upx;
				display: flex;
				justify-content: center;
				align-items: center;
				.money{
					font-weight: 600;
					font-size: 30upx;color: #C9141D;
				}
			}
		}
		.btn{
			padding: 0 60upx;
			height: 80upx;
			background: linear-gradient(to right, #ff4672 , #C9141D);
			color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 30upx;
			border-radius: 40upx;
		}

</style>
