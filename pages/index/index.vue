<template>  
  <view>
	<!-- <top-search ></top-search> -->

	<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabTabs1="tabTab"></swiper-tab-head>
	
	<view class="uni-tab-bar">
		<swiper class="swiper-box" :style="{height:swiperheight+'px'}" :current="tabIndex" @change="tabChange">
		 	<swiper-item v-for="(product,index1) in tablist" :key="index1" >
		 		<scroll-view scroll-y class="list" @scrolltolower="loadmore(index1)">
					<template v-if="tabIndex == 0">
						<!-- 轮播图 -->
							<view class="bgwhite">
							 <swiper class="card-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
							   :autoplay="true"  @change="cardSwiper" indicator-color="#fff"
							   indicator-active-color="#c9141d">
							  	<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
							  		<view class="swiper-item">
							  			<image :src="item.url" mode="aspectFill" v-if="item.type=='image'" lazy-load></image>
							  		</view>
							  	</swiper-item>
							  </swiper>
							  
							  <view class="uf uf-ac uf-ac-jc guanfang" @tap="toCheshi">
									<view class="uf-ac"><view class="icon iconfont icon-xuanzhong"></view>官方商城</view>
									<view class="uf-ac"><view class="icon iconfont icon-xuanzhong"></view>品质保证</view>
									<view class="uf-ac"><view class="icon iconfont icon-xuanzhong"></view>售后无忧</view>
							  </view>
							  
							  <!-- 分类列表 -->
							  <view class="category-list">
							  	<view
							  		class="category"
							  		v-for="(row, index) in categoryList"
							  		:key="index"
							  		@tap="toCategory(row)"
							  	>
							  		<view class="img"><image :src="row.img" lazy-load></image></view>
							  		<view class="text">{{ row.name }}</view>
							  	</view>
							</view>
							
							 <!-- 滚动公告 -->
							<view class="uni-swiper-msg uf">
								<view class="uni-swiper-msg-icon">
									<view class="icon iconfont icon-shengyin redcolor"></view>
								</view>
								<swiper vertical="true" autoplay="true" circular="true" interval="3000">
									<swiper-item v-for="(item, index) in msg" :key="index">
										<navigator>{{item}}</navigator>
									</swiper-item>
								</swiper>
								<text class="icon iconfont icon-arrow-right-copy" @tap="toNews"></text>
							</view>
							
						</view>
						<!-- 活动 -->
							 <view class="promotion">
								 <block v-for="(promotion, index) in Promotions" :key="index">
								 <view class="column">
									<view class="leftx">
										<view class="topx">{{promotion.title}}</view>
										<view class="adx">{{promotion.ad }}</view>
									</view>
									<view class="rightx"><image :src="promotion.img" lazy-load></image></view>
							 	</view>
								</block>
							 </view>
							 
							 <!-- 广告图 -->
							 <view class="banner" @tap="tuBuying"><image src="../../static/banner.jpg" mode="widthFix" lazy-load></image></view>
							 <!--猜你喜欢-->
							<view class="product_list">
								<!-- 图文列表 -->
								<block  v-for="(product,index2) in product.productListx" :key="index2">
									<product-list class="productx" :product="product" :index="index2"></product-list>
								</block>
							</view>
							<!-- 下拉加载 -->
							<loadMore :loadtext="product.loadtext"></loadMore>
						
					</template>
		 			
					<template v-else>
						  <view class="product_list">
						  	<!-- 图文列表 -->
						  	<block  v-for="(product,index2) in product.productListx" :key="index2">
						  		<product-list class="productx" :product="product" :index="index2"></product-list>
						  	</block>
						  </view>
						  <!-- 下拉加载 -->
						  <loadMore :loadtext="product.loadtext"></loadMore>
					</template>
					
					
		 		</scroll-view>
		 	</swiper-item>
		 </swiper>
	</view>
	
<!-- 
	<view class="product_list">
		<block  v-for="(product,index) in productListx" :key="index">
			<product-list class="productx" :product="product" :index="index"></product-list>
		</block>
	</view> -->
	
	
  </view>
 </template>  

<script>
	
	import productList from "../../components/index/product-list.vue";
	import loadMore from "../../components/load-more/load-more.vue";
	import swiperTabHead from "../../components/swiper-tab-head/swiper-tab-head.vue";
	import cardSwiper from "../../components/card-swiper/card-swiper.vue";
	export default {
		components: {
			productList,
			loadMore,
			swiperTabHead,
			cardSwiper
		},
		data() {
			return {
				// 滚动公告
				msg : [
					'BbcMall 云商V2.0版本持续开发中',
					'华为折叠屏手机BbcMall首发',
					'北大荒航母农庄入驻BbcMall 云商'
				],
				cardCur: 0,
				//轮播图 
				swiperList: [
					{
						id: 0,
						type: 'image',
						url: '../../static/lb1.jpg'
					}, 
					{
						id: 1,
						type: 'image',
						url: '../../static/lb2.jpg',
					},
					{
						id: 2,
						type: 'image',
						url: '../../static/lb3.jpg'
					},],
				dotStyle: false,
				towerStart: 0,
				direction: '',
					
				scrollLeft: 0,
				isClickChange: false,
				
				// 手机专区
				Promotions:[
					{
					title: '华为专区',
					ad: '品牌手机专区',
					img: '../../static/s1.jpg',
					},
					{
					title: '航母农场',
					ad: '从农场直达餐桌',
					img: '../../static/s2.jpg',
					}
					
				],
				
				// 分类菜单
				categoryList: [
					{ id: 1, name: '分类', img: '../../static/category/index_fenlei.jpg' },
					{ id: 2, name: '新品', img: '../../static/category/index_xinpin.jpg' },
					{ id: 3, name: '店铺', img: '../../static/category/order.jpg' },
					{ id: 4, name: '优惠券', img: '../../static/category/quan.jpg' },
					{ id: 5, name: '积分', img: '../../static/category/index_jifen.png' }
				],	
				//产品列表
				tabIndex: 0,
				swiperheight:0,
				tabBars: [
					{name: '推荐',id: 'tuijian'},
					{name: '数码',id: 'shuma'},
					{name: '粮油',id: 'liangyou'},
					{name: '旅游',id: 'lvyou'}, 
					{name: '酒店',id: 'jiudian'},
					{name: '餐饮',id: 'canyin'},
					{name: '医疗',id: 'yiliao'}, 
					{name: '理疗',id: 'liliao'}, 
					{name: '养老',id: 'yanglao'}
					
				],
				tablist:[
					{	
						loadtext:"上拉加载更多",
						productListx: [
							{
								goods_id: 0,
								img: '../../static/goods/p1.jpg',
								name: '商品名称商品名称商品名称商品名称商品名称',
								price: '168',
								slogan: '1235人付款'
							},
							{
								goods_id: 1,
								img: '../../static/goods/p2.jpg',
								name: '商品名称商品名称商品名称商品名称商品名称',
								price: '168',
								slogan: '1235人付款'
							},
							{
								goods_id: 2,
								img: '../../static/goods/p3.jpg',
								name: '商品名称商品名称商品名称商品名称商品名称',
								price: '168',
								slogan: '1235人付款'
							},
							{
								goods_id: 3,
								img: '../../static/goods/p4.jpg',
								name: '商品名称商品名称商品名称商品名称商品名称',
								price: '168',
								slogan: '1235人付款'
							},
							{
								goods_id: 4,
								img: '../../static/goods/p5.jpg',
								name: '商品名称商品名称商品名称商品名称商品名称',
								price: '168',
								slogan: '1235人付款'
							},
							{
								goods_id: 5,
								img: '../../static/goods/p6.jpg',
								name: '商品名称商品名称商品名称商品名称商品名称',
								price: '168',
								slogan: '1235人付款'
							},
							{
								goods_id: 6,
								img: '../../static/goods/p7.jpg',
								name: '商品名称商品名称商品名称商品名称商品名称',
								price: '168',
								slogan: '1235人付款'
							},
							{
								goods_id: 7,
								img: '../../static/goods/p8.jpg',
								name: '商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称',
								price: '168',
								slogan: '1235人付款'
							},
							{
								goods_id: 8,
								img: '../../static/goods/p9.jpg',
								name: '商品名称商品名称商品名称商品名称商品名称',
								price: '168',
								slogan: '1235人付款'
							},
							{
								goods_id: 9,
								img: '../../static/goods/p10.jpg',
								name: '商品名称商品名称商品名称商品名称商品名称',
								price: '168',
								slogan: '1235人付款'
							}
						],
						
					},
					{
						loadtext:"上拉加载更多",
						productListx:[
							{
								goods_id: 9,
								img: '../../static/goods/p10.jpg',
								name: '商品名称商品名称商品名称商品名称商品名称',
								price: '168',
								slogan: '1235人付款'
							},
							{
								goods_id: 1,
								img: '../../static/goods/p2.jpg',
								name: '商品名称商品名称商品名称商品名称商品名称',
								price: '168',
								slogan: '1235人付款'
							},
							{
								goods_id: 2,
								img: '../../static/goods/p3.jpg',
								name: '商品名称商品名称商品名称商品名称商品名称',
								price: '168',
								slogan: '1235人付款'
							},
							{
								goods_id: 3,
								img: '../../static/goods/p4.jpg',
								name: '商品名称商品名称商品名称商品名称商品名称',
								price: '168',
								slogan: '1235人付款'
							}
						]
						
					},
					{
						loadtext:"上拉加载更多",
						productListx:[
							{
								goods_id: 9,
								img: '../../static/goods/p2.jpg',
								name: '商品名称商品名称商品名称商品名称商品名称',
								price: '168',
								slogan: '1235人付款'
							}
						]
						
					},
					{
						loadtext:"上拉加载更多",
						productListx:[
							{
								goods_id: 9,
								img: '../../static/goods/p2.jpg',
								name: '商品名称商品名称商品名称商品名称商品名称',
								price: '168',
								slogan: '1235人付款'
							}
						]
						
					},
					{
						loadtext:"上拉加载更多",
						productListx:[
							{
								goods_id: 9,
								img: '../../static/goods/p3.jpg',
								name: '商品名称商品名称商品名称商品名称商品名称',
								price: '168',
								slogan: '1235人付款'
							}
						]
						
					},
					{
						loadtext:"上拉加载更多",
						productListx:[
							{
								goods_id: 9,
								img: '../../static/goods/p4.jpg',
								name: '商品名称商品名称商品名称商品名称商品名称',
								price: '168',
								slogan: '1235人付款'
							}
						]
						
					},
					{
						loadtext:"上拉加载更多",
						productListx:[
							{
								goods_id: 9,
								img: '../../static/goods/p5.jpg',
								name: '商品名称商品名称商品名称商品名称商品名称',
								price: '168',
								slogan: '1235人付款'
							}
						]
						
					},
					{
						loadtext:"上拉加载更多",
						productListx:[
							{
								goods_id: 9,
								img: '../../static/goods/p6.jpg',
								name: '商品名称商品名称商品名称商品名称商品名称',
								price: '168',
								slogan: '1235人付款'
							}
						]
						
					},
					{
						loadtext:"上拉加载更多",
						productListx:[
							{
								goods_id: 9,
								img: '../../static/goods/p7.jpg',
								name: '商品名称商品名称商品名称商品名称商品名称',
								price: '168',
								slogan: '1235人付款'
							}
						]
						
					}
				]
			}
			
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res)=> {
					let height = res.windowHeight - uni.upx2px(40);
					this.swiperheight = height
				}
			});
			this.TowerSwiper('swiperList');
			// 初始化towerSwiper 传已有的数组名即可
			
		},
		onBackPress() {
			if (this.type !== '') {
				this.type = ''
				return true
			}
		},
		// 搜索框跳转
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url:'../search/search'
			})
		},
		onNavigationBarButtonTap(e) {
			if (e.index==0) {
				uni.navigateTo({
					url:'../ceshi/ceshi'
				});
				return;
			}
			uni.navigateTo({
				url:'../translation/translation'
			});
		},
		methods: {
			loadmore(index1){
				if(this.tablist[index1].loadtext!="上拉加载更多"){
					return;
				}
				this.tablist[index1].loadtext="加载中";
				setTimeout(()=>{
					let obj={
						
							goods_id: 0,
							img: '../../static/goods/p1.jpg',
							name: '商品名称商品名称商品名称商品名称商品名称',
							price: '168',
							slogan: '1235人付款'
						
					};
					this.tablist[index1].productListx.push(obj);
					this.tablist[index1].loadtext="上拉加载更多";
				},1000);
			},
			tabTab(index){
				uni.showLoading();
				this.tabIndex=index;
				uni.hideLoading();
			},
			toCheshi(){
				uni.navigateTo({
					url: '../ceshi/ceshi',
				});
			},
			tabChange(e){
				uni.showLoading();
				this.tabIndex=e.detail.current;
				uni.hideLoading();
			},
			
			togglePopup(type) {
				this.type = type
			},
			
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// 初始化towerSwiper
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.swiperList = list
			},
			tuBuying(){
				uni.navigateTo({
					url: '../buying/buying',
					
				});
			},
			toNews(){
				uni.navigateTo({
					url: '../news/news',
				});
			}
			
			
		}
	}
</script>

<style lang="scss"> 
 page{position: relative; background-color: #f5f5f9}
 .redcolor{color: #cc0e10}
 .uni-swiper-msg{ margin: 10upx 5%; border-top:1upx solid #efefef; padding: 15upx 3upx; width: 90% } 
 
 /*分位*/
 .place {
 	background-color: #ffffff;
 	height: 200upx;
 	/*  #ifdef  APP-PLUS  */
 	margin-top: var(--status-bar-height);
 	/*  #endif  */ 
 }
 .tabbardingwei{
	position: fixed;
	z-index: 10;
	background-color: #fff;
	top: 150upx;
	width: 100%}
.whitebg{ background: #fff;}	




.iconzhibi_line {background:url(../../static/omc-logo-line.jpg) no-repeat 0 6upx;}	
.bgwhite{ background: #FFFFFF;}
  /*头部*/

  /*分类*/
.category-list {
	width: 96%;
	margin: 0upx 2% 0upx 2%;
	padding: 0;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	.category {
		width: 20%;
		margin: 20upx 0;
		display: flex;
		flex-wrap: wrap;
		.img {
			width: 100%;
			display: flex;
			justify-content: center;
			image {
				width: 90upx;
				height: 90upx;box-shadow: 0 0 15upx #ccc; border-radius: 100%;
			}
		}
		.text {
			margin-top: 5upx;
			width: 100%;
			display: flex;
			justify-content: center;
			font-size: 28upx;
			color: #3c3c3c;
		}
	}
}
/*分类列表*/
.promotion{width: 100%;padding: 0upx 0 0 0;display: flex;justify-content: space-between;flex-wrap: wrap;background-color: #fff;margin: 15upx 0 0 0;}
.column{width: 49%;display: flex;justify-content: space-between; padding: 20upx 0; border-left: 1px solid #f5f5f9;border-bottom: 1px solid #f5f5f9;}
.column::after{border-left: 0px solid #ddd;}
.leftx{ padding-left: 30upx;}
.rightx{ padding-right: 30upx; padding-top: 10upx}
.rightx image{width: 110upx; height: 110upx;}
.topx{height: 40upx;margin-bottom: 0upx; font-size: 30upx; font-weight: bold; line-height: 40upx; overflow: hidden;color: #333;margin: 15upx 0 5upx 0;}
.adx{color: #999; font-size: 28upx;overflow: hidden; display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 1;text-align: justify;}

/*产品*/
.product_list {padding: 0upx 1% 0upx 1%;display: flex;justify-content: space-between;flex-wrap: wrap;}
.productx {width: 47%;margin: 15upx 1.5% 15upx 1.5%;}
 /*轮播*/
	.card-swiper {
		height: 310upx !important;
	}
	.card-swiper swiper-item {
		width: 610upx !important;
		left: 70upx;
		box-sizing: border-box;
		padding: 0upx 0upx 0upx;
		overflow: initial;
	}
	.card-swiper swiper-item .swiper-item {
		width: 100%;
		display: block;
		height: 98%; margin: 0 0 2% 0;
		border-radius: 10upx;
		transform: scale(0.9);
		transition: all 0.2s ease-in 0s;
		overflow: hidden; box-shadow: 0 2upx 5upx #ccc;
	}
	
	.card-swiper swiper-item.cur .swiper-item {
		transform: none;
		transition: all 0.2s ease-in 0s;
	}

	.card-swiper image {
		width: 100%;
		display: block;
		height: 100%;
		margin: 0;
		pointer-events: none;
	}

/*轮播下方*/
.guanfang{ margin: 15upx 10%;}
.guanfang>view>.icon{font-size: 28upx; margin-right: 10upx;color: #dcdcdc;}
.guanfang>view{color: #989898; font-size: 24upx;}
/*banner*/
.banner {
	width: 96%;
	margin: 15upx 2% 0 2%;	
}
.banner image{ width: 100%; border-radius:20upx ;}
</style>  