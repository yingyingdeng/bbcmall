<template>
	<view>
		<view class="status" :style="{ position: headerPosition,top:statusTop,opacity: afterHeaderOpacity}"></view>
		<!-- 顶部导航栏 -->
		<view class="header" :style="{ position: headerPosition,top:headerTop,opacity: afterHeaderOpacity }">
			<view class="addr">
				<view class="icon iconfont icon-fanhui" @tap="back()"></view>
			</view>
			<!-- 搜索框 -->
			<view class="input-box">
				<input
					placeholder="默认关键字"
					placeholder-style="color:#c0c0c0;"
					@tap="toSearch()" disabled
				/>
				<view class="icon iconfont icon-search"></view>
			</view>
			<!-- 右侧图标按钮 -->
			<view class="icon-btn">
				<view class="icon iconfont icon-gouwuche"></view>
				<view class="icon iconfont icon-gengduo1" @tap="toMsg"></view>
			</view>
		</view>
		
		<view class="navbar">
			
				<view class="nav-item active">
					<view class="uf-ac-ajc">
						<text>首页</text>
					</view>
					<view class="nav-item-line"></view>
				</view>
				<view class="nav-item">
					<view class="uf-ac-ajc">
						<text>商品</text>
					</view>
					<view class="nav-item-line"></view>
				</view>
				<view class="nav-item">
					<view class="uf-ac-ajc">
						<text>活动</text>
					</view>
					<view class="nav-item-line"></view>
				</view>
				<view class="nav-item">
					<view class="uf-ac-ajc">
						<text>上新</text>
					</view>
					<view class="nav-item-line"></view>
				</view>
				
				<view class="nav-item">
					<view class="uf-ac-ajc">
						<text>动态</text>
					</view>
					<view class="nav-item-line"></view>
				</view>
			
		</view>
		<view class="touxiangtop">
			<view class="touxiang"><image src="../../static/face.jpg" mode="widthFix" lazy-load></image></view>
			<view class="dpname">
				<view class="dpmingc">BBCMALL商城 <text>自营</text></view>
				<view class="dpchengjia">11 在售 | 22 成交 | 10 收藏</view>
			</view>
			<view class="jindian" @tap="toShop()"><text>+收藏</text></view>
		</view>
		
		
		<!-- 占位 -->
		<view class="place"></view>
		
		<!-- 轮播图 -->
		

		<view class="page-section-spacing">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item ,index) in info" :key="index">
					<view class="swiper-item"><image :src="item.content" mode="aspectFill"></image></view>
				</swiper-item>
			</swiper>
		</view>
            
		
		<view class="seckill-section">
			<view class="s-header">销量排行榜</view>
			<scroll-view class="floor-list" scroll-x>
				<view class="scoll-wrapper">
					<view v-for="(item, index) in topList" :key="index" class="floor-item">
						<image :src="item.image" mode="aspectFill" lazy-load></image>
						<text class="titlex">{{item.title}}</text>
						<text class="price">{{item.price}}</text>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 看了又看 -->
		<view class="description">
			<view class="title">—  推荐 —</view>
			<view class="product-list">
				<block v-for="(product,index) in goodsList" :key="index">
					<product-list class="productx" :product="product" :index="index" ></product-list>
				</block>
			</view>
			<view class="loading-text">{{loadingText}}</view>
		</view>
		
	</view>
</template>

<script>
	import productList from "../../components/index/product-list.vue";
	export default {
	
	components: {
		productList
		
	},
		data() {
			return {
				afterHeaderOpacity: 1,//不透明度
				headerPosition: 'fixed',
				headerTop:null,
				statusTop:null,
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				loadingText:"正在加载...",
				info: [
					 {content: '../../static/lb1.jpg'},
					 {content: '../../static/lb2.jpg'},
					 {content: '../../static/lb3.jpg'},
					],
				// 轮播
				carouselList: [
						{
							src: "../../static/lb1.jpg",
							background: "rgb(203, 87, 60)",
						},
						{
							ssrc: "../../static/lb1.jpg",
							background: "rgb(205, 215, 218)",
						},
						{
							src: "../../static/lb3.jpg",
							background: "rgb(183, 73, 69)",
						}
				],
				// 推荐
				goodsList:[
					{ goods_id: 0, img: '../../static/goods/p1.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168', slogan:'1235人付款' },
					{ goods_id: 1, img: '../../static/goods/p2.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168', slogan:'1235人付款' }
					
				],
				// 排行榜
				topList: [
					{
							image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg",
							
							title: "古黛妃 短袖t恤女夏装2019新款韩版宽松",
							price: 179,
							sales: 61,
						},
						{
							image: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg",
						
							title: "潘歌针织连衣裙",
							price: 78,
							sales: 16,
						},
						{
							image: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg",
					
							title: "巧谷2019春夏季新品新款女装",
							price: 108.8,
							sales: 5,
						}, {
							image: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=756705744,3505936868&fm=11&gp=0.jpg",
						
							title: "私萱连衣裙",
							price: 265,
							sales: 88,
						}, {
							image: "https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg",
							
							title: "娇诗茹 ulzzang原宿风学生潮韩版春夏短",
							price: 422,
							sales: 137,
						}, {
							image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg",
							
							title: "古黛妃 短袖t恤女夏装2019新款韩版宽松",
							price: 179,
							sales: 95,
						}
				]
				
			}
		},
		
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
		    setTimeout(()=>{
				this.reload();
		        uni.stopPullDownRefresh();
		    }, 1000);
		},
		//上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
		onReachBottom(){
			uni.showToast({title: '触发上拉加载'});
			let len = this.goodsList.length;
			if(len>=40){
				this.loadingText="到底了";
				return false;
			}else{
				this.loadingText="正在加载...";
			}
			let end_goods_id = this.goodsList[len-1].goods_id;
			for(let i=1;i<=10;i++){
				let goods_id = end_goods_id+i;
				let p = { goods_id: goods_id, img: '../../static/goods/p'+(goods_id%10==0?10:goods_id%10)+'.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '￥168', slogan:'1235人付款' };
				this.goodsList.push(p);
			}
		},
		methods: {
			
			toMsg(){
				uni.navigateTo({
					url:'../msg/msg'
				})
			},
			//搜索跳转
			toSearch() {
				uni.navigateTo({
					url: '../search/search',
					
				});
			},
			back() {
				uni.navigateBack();
			},
			
			//轮播图切换
			
			changeIndicatorDots(e) {
            this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			}
			
		}
	}
</script>

<style lang="scss">
page{ background: #f3f3f3}
.status {
	width: 100%;
	height: 0;
	position: fixed;
	z-index: 10;
	background-color: #fff;
	top: 0;
	/*  #ifdef  APP-PLUS  */
	height: var(--status-bar-height); //覆盖样式
	/*  #endif  */
}
.header {
	width: 92%;
	padding: 0 4%;
	height: 100upx;
	display: flex;
	align-items: center;
	position: fixed;
	top: 0;
	z-index: 10;
	background-color: #fff;

	/*  #ifdef  APP-PLUS  */
	top: var(--status-bar-height);
	/*  #endif  */

	.addr {
		width: 60upx;
		height: 60upx;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		font-size: 28upx;
		.icon {
			height: 60upx;
			margin-right: 5upx;
			display: flex;
			align-items: center;
			font-size: 42upx;
		
		}
	}
	.input-box {
		width: 100%;
		height: 60upx;
		background-color: #f5f5f5;
		border-radius: 30upx;
		position: relative;
		display: flex;
		align-items: center;
		.icon {
			display: flex;
			align-items: center;
			position: absolute;
			top: 0;
			right: 0;
			width: 60upx;
			height: 60upx;
			font-size: 34upx;
			color: #c0c0c0;
		}
		input {
			padding-left: 28upx;
			height: 28upx;
			font-size: 28upx;
		}
	}
	.icon-btn {
		width: 120upx;
		height: 60upx;
		flex-shrink: 0;
		display: flex;
		.icon {
			width: 60upx;
			height: 60upx;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			font-size: 42upx;
		}
	}
}
.place {
	background-color: #ffffff;
	height:290upx;
	/*  #ifdef  APP-PLUS  */
	margin-top: var(--status-bar-height);
	/*  #endif  */
}
.touxiangtop{ padding:0 3%; display: flex;justify-content: flex-start;position: fixed;left: 0;top:150upx;z-index: 10;width: 94%;background: #fff;}
.touxiang{ width: 80upx; padding-top: 8upx}
.touxiang image{ width: 80upx; height: 80upx; border-radius:10upx ;box-shadow: 0 0 6upx #aaa;}
.dpname{padding: 0 2% 0 3%; width: 95%; height: 80upx;}
.dpmingc { font-size: 30upx; font-weight: 300; line-height: 40upx}
.dpmingc text{ color: #fff; background: #C9141D;padding: 0upx 15upx; border-radius: 30upx; margin-left: 10upx; font-size: 24upx;line-height: 40upx }
.dpchengjia{ color: #999;}
.jindian{ width: 180upx;align-items: center; display: flex; justify-content: flex-end; height: 80upx;}
.jindian text{border: #C9141D 1upx solid ;color:#C9141D ;padding: 0 20upx; border-radius: 30upx; font-size: 28upx;}

.navbar{position: fixed;left: 0;top:245upx;display: flex;width: 100%;height: 80upx;background: #fff;z-index: 10;}
.navbar .nav-item{flex: 1;color: #787878; padding-top: 5upx}
.uf-ac-ajc text{font-size: 32upx;}
.active text {color: #c9141d; font-weight: 300;}
.active .nav-item-line{border-bottom: 3upx solid #cc0e10;border-top: 3upx solid #cc0e10;width: 60upx; margin:10upx auto 0 auto; border-radius:20upx;}

.seckill-section{margin: 20upx 2% 0upx;background: #fff; width: 92%; padding: 0 2%;  border-radius:10upx; }

.floor-item{width: 150upx;margin-right: 20upx;}
.floor-item .titlex{ display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 1;overflow: hidden;font-size: 24upx; padding: 0; margin: 0;}
.floor-item	image{width:150upx;border-radius: 6upx;height: 150upx;}
.floor-item .price{color: #C9141D;background:url(../../static/omc-logo.png) no-repeat 0upx 0upx; font-size: 24upx; background-size: 28upx; padding-left: 30upx;}

.s-header{display:flex;align-items:center; padding: 10upx 0; font-size: 28upx;color: #787878;}
.scoll-wrapper{display:flex;align-items: flex-start;}

.page-section-spacing{height: 320upx; }
.swiper{width: 96%; height: 320upx; margin: 20upx 2% 0; }
.swiper-item{border-radius:10upx;}
.swiper image{width: 100%; height: 320upx;border-radius:10upx }
.description {
	.title {
		width: 100%;
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 32upx;
		color: #797979; margin-top: 10upx;
	}
}
.product-list {padding: 0upx 1% 0upx 1%;display: flex;justify-content: space-between;flex-wrap: wrap;}
	.productx {width: 47%;margin: 15upx 1.5% 15upx 1.5%;}
	.loading-text{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60upx;
		color: #979797;
		font-size: 24upx;
	}
</style>
