<template>
	<view>
		
		<view class="navbar" :style="{position:headerPosition,top:headerTop}">
				<view class="nav-item active">
					<view class="uf-ac-ajc">
						<text>默认</text>
						<view class="tubiao icon iconfont icon-shangxiajiantou-" ></view>
					</view>
					<view class="nav-item-line"></view>
				</view>
				<view class="nav-item">
					<view class="uf-ac-ajc">
						<text>销量</text>
						<view class="tubiao icon iconfont icon-shangxiajiantou-" ></view>
					</view>
					<view class="nav-item-line"></view>
				</view>
				<view class="nav-item">
					<view class="uf-ac-ajc">
						<text>人气</text>
						<view class="tubiao icon iconfont icon-xiajiantou" ></view>
					</view>
					<view class="nav-item-line"></view>
				</view>
				<view class="nav-item">
					<view class="uf-ac-ajc">
						<text>价格</text>
						<view class="tubiao icon iconfont icon-shangjiantou" ></view>
					</view>
					<view class="nav-item-line"></view>
				</view>

				<view class="nav-item" @click="toggleCateMask('show')">
					<view class="uf-ac-ajc">
						<text>筛选</text>
						<view class="tubiao icon iconfont icon-shaixuan" ></view>
					</view>
					<view class="nav-item-line"></view>
				</view>
				
		</view>
		
		<view class="place"></view>
		

		
		<view class="product-list">
			<block v-for="(product,index) in goodsList" :key="index">
				<product-list class="productx" :product="product" :index="index" ></product-list>
			</block>
			
		</view>
		<view class="loading-text">{{loadingText}}</view>
		
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
				
				cateMaskState: 0, 
				loadingText:"正在加载...",
				headerPosition:"fixed",
				headerTop:"0px",
				filterIndex: 0, 
				priceOrder: 0, //1 价格从低到高 2价格从高到低	
				sxIndex:0,
				sxList: [
					{
						name: '默认',
						id: 'moren',
						sxjiantou:[
							{
								shangxiajiantou:'icon-shangxiajiantou-',
								jiantouxia:'icon-jiantouxia',
								jiantoushang:'icon-jiantoushang',
								shaixuan:'icon-shaixuan'
							}
						]
					},
					{
						name: '销量',
						id: 'moren',
						sxjiantou:[
							{
								shangxiajiantou:'icon-shangxiajiantou-',
								jiantouxia:'icon-jiantouxia',
								jiantoushang:'icon-jiantoushang',
								shaixuan:'icon-shaixuan'
							}
						]
					},
					{
						name: '人气',
						id: 'moren',
						sxjiantou:[
							{
								shangxiajiantou:'icon-shangxiajiantou-',
								jiantouxia:'icon-jiantouxia',
								jiantoushang:'icon-jiantoushang',
								shaixuan:'icon-shaixuan'
							}
						]
					},
					{
						name: '价格',
						id: 'moren',
						sxjiantou:[
							{
								shangxiajiantou:'icon-shangxiajiantou-',
								jiantouxia:'icon-jiantouxia',
								jiantoushang:'icon-jiantoushang',
								shaixuan:'icon-shaixuan'
							}
						]
					},
					{
						name: '筛选',
						id: 'moren',
						sxjiantou:[
							{
								shangxiajiantou:'icon-shangxiajiantou-',
								jiantouxia:'icon-jiantouxia',
								jiantoushang:'icon-jiantoushang',
								shaixuan:'icon-shaixuan'
							}
						]
					},
				],
					
				goodsList:[
					{ goods_id: 0, img: '../../static/goods/p1.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168', slogan:'1235人付款' },
					{ goods_id: 1, img: '../../static/goods/p2.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168', slogan:'1235人付款' },
					{ goods_id: 2, img: '../../static/goods/p3.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168', slogan:'1235人付款' },
					{ goods_id: 3, img: '../../static/goods/p4.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168', slogan:'1235人付款' },
					{ goods_id: 4, img: '../../static/goods/p5.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168', slogan:'1235人付款' },
					{ goods_id: 5, img: '../../static/goods/p6.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168', slogan:'1235人付款' },
					{ goods_id: 6, img: '../../static/goods/p7.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168', slogan:'1235人付款' },
					{ goods_id: 7, img: '../../static/goods/p8.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168', slogan:'1235人付款' },
					{ goods_id: 8, img: '../../static/goods/p9.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168', slogan:'1235人付款' },
					{ goods_id: 9, img: '../../static/goods/p10.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168', slogan:'1235人付款' }
				]
				
			};
		},
		shaiXuan(index){
			uni.showLoading();
			this.sxIndex=index;
			uni.hideLoading();
		},
		
		onPageScroll(e){
			//兼容iOS端下拉时顶部漂移
			if(e.scrollTop>=0){
				this.headerPosition = "fixed";
			}else{
				this.headerPosition = "absolute";
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
		methods:{
			reload(){
				console.log("reload");
				let tmpArr = []
				this.goodsList = [];
				let end_goods_id = 0;
				for(let i=1;i<=10;i++){
					let goods_id = end_goods_id+i;
					let p = { goods_id: goods_id, img: '../../static/img/goods/p'+(goods_id%10==0?10:goods_id%10)+'.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '￥168', slogan:'1235人付款' };
					this.goodsList.push(p);
				}
			},
			// 搜索框跳转
			onNavigationBarSearchInputClicked() {
				uni.navigateTo({
					url:'../search/search'
				})
			},
		
		}
		
	}
</script>

<style lang="scss">
.navbar{
		position: fixed;
		left: 0;
		top: var(--window-top);
		display: flex;
		width: 100%;
		height: 80upx;
		background: #fff;
		z-index: 10;border-bottom: 1upx solid #f5f5f5;
	}
.navbar .nav-item{flex: 1;color: #787878; padding-top: 5upx}
.uf-ac-ajc text{font-size: 32upx;}
.active text {color: #c9141d; font-weight: 300;}
.active .tubiao {color: #c9141d; font-weight: 300;}
.tubiao{ font-size: 20upx; color: #ddd; margin-left: 5upx}
.active .nav-item-line{border-bottom: 3upx solid #cc0e10;border-top: 3upx solid #cc0e10;width: 60upx; margin:10upx auto 0 auto; border-radius:20upx;  }

.place{
		
		background-color: #ffffff;
		height: 100upx;

	}
	.tubiaodax{ font-size: 16upx; margin-left: 10upx}

	.loading-text{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60upx;
		color: #979797;
		font-size: 24upx;
	}
	.product-list {padding: 0upx 1% 0upx 1%;display: flex;justify-content: space-between;flex-wrap: wrap;}
	.productx {width: 47%;margin: 15upx 1.5% 15upx 1.5%;}
</style>
