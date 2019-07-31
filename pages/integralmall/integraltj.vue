<template>
	<view class="animated fadeIn">
		
		<!-- <view class="dingdan uf-ac-jc">
			<view class="shouhuodizhi"><text class="icon iconfont icon-jiahaob"></text>新增收货地址</view>
			<view class="icon iconfont icon-arrow-right-copy"></view>
		</view> -->
		<view class="dingdan uf-ac-jc"  @tap="selectAddress">
			<view class="address">
				<view class="city"><text>默认</text>{{recinfo.address.region.label}}</view>
				<view class="add">{{recinfo.address.detailed}}</view>
				<view class="uf">
					<view class="name">
						{{recinfo.name}}
					</view>
					<view class="tel">
						{{recinfo.tel}}
					</view>
				</view>
			</view>
			<view class="icon iconfont icon-arrow-right-copy"></view>
		</view>
		<view class="buylist">
			<block v-for="(buy,index) in buylist" :key="index">
				<view class="cart-list-pro uf">
					<view class="cart-list-pic"><image :src="buy.img" mode="widthFix" lazy-load></image></view>
					<view class="cart-list-title">
						<view class="cartitle">{{buy.name}}</view>
						<view class="cartjiage">
							<view class="cartnum"><text>{{buy.price}}</text>积分</view>
						</view>
						<view class="shuliang">数量：1</view>
					</view>
				</view>
			</block>
			
		</view>
		<!-- 买家留言 -->
		<view class="buylistx">
			<view class="uni-title">备注留言</view>
			<view>
				<textarea class="textareatype" placeholder-style="color:#aaaaaa" placeholder="选填，可以写下您对礼品的需求"/>
			</view>
		</view>
		<view class="footer uf-ac-jc">
			<view>合计：<text>1000</text>积分</view>
			<view @tap="toShow">确认兑换</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				buylist:[
					
					{ goods_id: 0, img: '../../static/goods/p1.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168', slogan:'1235人付款' },
					{ goods_id: 1, img: '../../static/goods/p2.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168', slogan:'1235人付款' }
				],	
				recinfo:{
					id:1,
					name:"大黑哥",
					head:"大",
					tel:"18816881688",
					address:{
						region:{
							"label":"广东省-深圳市-福田区",
							"value":[18,2,1],
							"cityCode":"440304",
							},
						detailed:'深南大道1111号无名摩登大厦6楼A2',
						},
					isDefault:true,
					}
			}
		},
		onShow() {
			uni.getStorage({
				key:'selectAddress',
				success: (e) => {
					this.recinfo = e.data;
					uni.removeStorage({
						key:'selectAddress'
					})
				}
			})
		},
		methods: {
			//选择收货地址
			selectAddress(){
				uni.navigateTo({
					url:'../address/address?type=select'
				})
			},
			toShow(){
				uni.navigateTo({
					url: 'integraljilu',
					
				});
			}
		}
	}
</script>

<style lang="scss">
	
page{background: #f3f3f3}
.dingdan{background: url(../../static/adbg.jpg) repeat-x bottom #fff;background-size:100upx;border-radius: 0 0 20upx 20upx;padding: 30upx 10upx;color: #333;min-height: 80upx;}
.address{ padding-left: 20upx}
.city{font-size: 32upx}
.city text{background: #f52d19; border-radius: 5upx; height: 32upx; font-size: 26upx; color: #f3f3f3; margin-right: 15upx;line-height: 32upx; padding: 0upx 10upx;}
.add{font-size: 36upx;font-weight: bold;}
.name,.tel{font-size: 30upx; margin-right: 30upx;}
.icon-arrow-right-copy{display: flex;align-items: center; justify-content: center; width: 80upx; font-size: 32upx;}
.shouhuodizhi{font-size: 34upx; color: #f97653; padding-left: 20upx;}
.icon-jiahaob{font-size: 30upx;}

.buylist{background: #fff; border-radius:20upx; padding:0 30upx; margin-top: 20upx}
.buylistx{background: #fff; border-radius:20upx; padding:0 30upx 30upx 30upx; margin-top: 20upx}
.cart-list-pro{width: 100%; border-bottom: 1upx solid #f3f3f3;padding: 30upx 0 20upx 0;}
.cart-list-pro:last-child{border:none}
.cart-list-pic{ width: 150upx;margin-right: 20upx;}
.cart-list-pic image{width: 150upx; height: 150upx; border-radius: 10upx; }
.cartitle{display: -webkit-box;-webkit-box-orient: vertical;overflow: hidden;-webkit-line-clamp: 1;font-size: 30upx; color: #333; line-height: 1.5}
.cartjiage{ padding-top: 10upx;}
.cartnum{color: #999;}
.cartnum text{ font-size: 28upx;}
.shuliang{display: flex;justify-content: flex-end;padding-right: 10upx; font-size: 30upx;align-items: flex-end}
.footer{position: fixed;z-index: 10;bottom: 0;width: 100%}
.footer>view{flex: 1; height: 100upx;display: flex;align-items: center;justify-content: center;}
.footer>view:first-child{justify-content: flex-start;background: #fff;padding:0 20upx}
.footer>view:last-child{background:linear-gradient(to right, #ff4672 , #C9141D); color: #fff;}
.textareatype{box-shadow: 0 0 10upx #f1f1f1;  width: 96%; height: 100upx;padding: 10upx 2%; line-height: 50upx; }
</style>
