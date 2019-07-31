<template>
	<view>
		<view class="status" :style="{ opacity: afterHeaderOpacity }"></view>
		<view class="header">
			<!-- 头部-默认显示 -->
			<view class="before" :style="{ opacity: 1 - afterHeaderOpacity, zIndex: beforeHeaderzIndex }">
				<view class="back"><view class="icon iconfont icon-fanhui" @tap="back" v-if="showBack"></view></view> 
				<view class="middle"></view>
				<view class="icon-btn">
					<view class="icon iconfont icon-xiaoxi1" @tap="toMsg"></view>
					<view class="icon iconfont icon-gouwuche" @tap="joinCart"></view>
				</view>
			</view>
			<!-- 头部-滚动渐变显示 -->
			<view class="after" :style="{ opacity: afterHeaderOpacity, zIndex: afterHeaderzIndex }">
				
				<view class="middle">
					<view v-for="(anchor,index) in anchorlist" :class="[selectAnchor==index ?'on':'']" :key="index" @tap="toAnchor(index)">{{anchor.name}}</view>
				</view>
				
			</view>
		</view>
		<!-- 底部菜单 -->
		<view class="footer">
			<view class="icons">
				<view class="box" @tap="toChat">
					<view class="icon iconfont icon-kefu"></view>
					<view class="text">客服</view>
				</view>
				<view class="box" @tap="toShop">
					<view class="icon iconfont icon-dianpu"></view>
					<view class="text">店铺</view>
				</view>
				<view class="box" @tap="toCart">
					<view class="icon iconfont icon-gouwuche" ></view>
					<view class="text">购物车</view>
				</view>
			</view>
			<view class="btn">
				<!-- <view class="joinCart" @tap="joinCart">加入购物车</view>
				<view class="buy" @tap="buy">立即购买</view> -->
				<!-- <view class="shouqing">已售罄</view> -->
				<view class="goumai" @tap="buy">立即购买</view>
			</view>
		</view>
		<!-- 会员弹窗 -->
		<view class="share" :class="shareClass" @touchmove.stop.prevent="discard" @tap="hideShare">
			<view class="mask"></view>
			<view class="layer" @tap.stop="discard">
				<view class="h1">会员折扣</view>
				<view class="list">
					<view class="box">
						<image src="../../static/vip/V1.png"></image>
						<view class="title">
							<view>VIP1</view>
							<view>10 折优惠</view>
						</view>
					</view>
					<view class="box">
						<image src="../../static/vip/V2.png"></image>
						<view class="title">
							<view>VIP1</view>
							<view>10 折优惠</view>
						</view>
					</view>
					<view class="box">
						<image src="../../static/vip/V3.png"></image>
						<view class="title">
							<view>VIP1</view>
							<view>10 折优惠</view>
						</view>
					</view>
					<view class="box">
						<image src="../../static/vip/V4.png"></image>
						<view class="title">
							<view>VIP1</view>
							<view>10 折优惠</view>
						</view>
					</view>
				</view>
				
				<view class="guanbi icon iconfont icon-ego-guanbi"  @tap="hideShare" ></view>
			</view>
			
		</view>
		
		<!-- 优惠套装弹出 -->
		
		<view class="share" :class="zuheClass" @touchmove.stop.prevent="discard" @tap="hideZuhe">
			
			<view class="mask"></view>
			<view class="layer" @tap.stop="discard">
				<scroll-view :scroll-top="scrollTop" scroll-y="true"  :style="{height:screenHeight + 'px'}" >
				
				
				<view class="taozhuang">
					<view class="h2">优惠套餐活动开始了11</view>
					<view class="floor-item">
						<view><image src="../../static/goods/p1.jpg" mode="aspectFill" lazy-load></image></view>
						<view class="tzcont">
							<text class="titlex">索拉卡打飞机感受到了非空格键</text>
							<view class="uf">
								<view>优惠价：<text class="price">12</text></view>
								<view class="yuanjia">原价：<text class="price_line">20</text></view>
							</view>
						</view>
					</view>
					<view class="youhuixinxi">
						原 价：2023.70 套装价：1997.70 节 省：26.00
					</view>
					<view class="jiarugouwuche">加入购物车</view>
				</view>
				<view class="taozhuang">
					<view class="h2">优惠套餐活动开始了11</view>
					<view class="floor-item">
						<view><image src="../../static/goods/p1.jpg" mode="aspectFill" lazy-load></image></view>
						<view class="tzcont">
							<text class="titlex">索拉卡打飞机感受到了非空格键</text>
							<view class="uf">
								<view>优惠价：<text class="price">12</text></view>
								<view class="yuanjia">原价：<text class="price_line">20</text></view>
							</view>
						</view>
					</view>
					<view class="youhuixinxi">
						原 价：2023.70 套装价：1997.70 节 省：26.00
					</view>
					<view class="jiarugouwuche">加入购物车</view>
				</view>
				<view class="taozhuang">
					<view class="h2">优惠套餐活动开始了11</view>
					<view class="floor-item">
						<view><image src="../../static/goods/p1.jpg" mode="aspectFill" lazy-load></image></view>
						<view class="tzcont">
							<text class="titlex">索拉卡打飞机感受到了非空格键</text>
							<view class="uf">
								<view>优惠价：<text class="price">12</text></view>
								<view class="yuanjia">原价：<text class="price_line">20</text></view>
							</view>
						</view>
					</view>
					<view class="youhuixinxi">
						原 价：2023.70 套装价：1997.70 节 省：26.00
					</view>
					<view class="jiarugouwuche">加入购物车</view>
				</view>
				<view class="taozhuang">
					<view class="h2">优惠套餐活动开始了11</view>
					<view class="floor-item">
						<view><image src="../../static/goods/p1.jpg" mode="aspectFill" lazy-load></image></view>
						<view class="tzcont">
							<text class="titlex">索拉卡打飞机感受到了非空格键</text>
							<view class="uf">
								<view>优惠价：<text class="price">12</text></view>
								<view class="yuanjia">原价：<text class="price_line">20</text></view>
							</view>
						</view>
					</view>
					<view class="youhuixinxi">
						原 价：2023.70 套装价：1997.70 节 省：26.00
					</view>
					<view class="jiarugouwuche">加入购物车</view>
				</view>
				<view class="taozhuang">
					<view class="h2">优惠套餐活动开始了11</view>
					<view class="floor-item">
						<view><image src="../../static/goods/p1.jpg" mode="aspectFill" lazy-load></image></view>
						<view class="tzcont">
							<text class="titlex">索拉卡打飞机感受到了非空格键</text>
							<view class="uf">
								<view>优惠价：<text class="price">12</text></view>
								<view class="yuanjia">原价：<text class="price_line">20</text></view>
							</view>
						</view>
					</view>
					<view class="youhuixinxi">
						原 价：2023.70 套装价：1997.70 节 省：26.00
					</view>
					<view class="jiarugouwuche">加入购物车</view>
				</view>
				<view class="taozhuang">
					<view class="h2">优惠套餐活动开始了11</view>
					<view class="floor-item">
						<view><image src="../../static/goods/p1.jpg" mode="aspectFill" lazy-load></image></view>
						<view class="tzcont">
							<text class="titlex">索拉卡打飞机感受到了非空格键</text>
							<view class="uf">
								<view>优惠价：<text class="price">12</text></view>
								<view class="yuanjia">原价：<text class="price_line">20</text></view>
							</view>
						</view>
					</view>
					<view class="youhuixinxi">
						原 价：2023.70 套装价：1997.70 节 省：26.00
					</view>
					<view class="jiarugouwuche">加入购物车</view>
				</view>
				</scroll-view>
				<view class="guanbi icon iconfont icon-ego-guanbi"  @tap="hideZuhe" ></view>
			</view>
			
		</view>
		
		
		
			<!-- 赠品套装弹出 -->
		
		<view class="share" :class="zengpinClass" @touchmove.stop.prevent="discard" @tap="hideZengpin">
			<view class="mask"></view>
			<view class="layer" @tap.stop="discard">
				<view class="h2">赠品</view>
				
				<view class="taozhuang">
					<view class="floor-item">
						<view><image src="../../static/goods/p2.jpg" mode="aspectFill" lazy-load></image></view>
						<view class="tzcont">
							<text class="titlex">索拉卡打飞机感受到了非空格键</text>
							<view class="uf">
								<view>数量：1</view>
							</view>
						</view>
					</view>
					<view class="youhuixinxi">
						（数量有限，赠完为止）
					</view>
				</view>
				
				<view class="guanbi icon iconfont icon-ego-guanbi"  @tap="hideZengpin" ></view>
				
			</view>
			
		</view>
		
		<!-- 服务弹窗 -->
		<view class="popup service" :class="serviceClass" @touchmove.stop.prevent="discard" @tap="hideService">
		
			<view class="mask"></view>
			<view class="layer" @tap.stop="discard">
				<view class="content">
					<view class="row" v-for="(item,index) in goodsData.service" :key="index">
						<view class="title">{{item.name}}</view>
						<view class="description">{{item.description}}</view>
					</view>
				</view>
				
				<view class="guanbi icon iconfont icon-ego-guanbi"  @tap="hideService" ></view>
			</view>
		</view>
		
		<!-- 促销满就送弹出 -->
		<view class="popup service" :class="mansongClass" @touchmove.stop.prevent="discard" @tap="hideMansong">
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer" @tap.stop="discard">
				<view class="content">
					<view class="row" v-for="(item,index) in goodsData.mansong" :key="index">
						<view class="title">{{item.title}}</view>
						<view class="masongje">
							<view>满<text>{{item.man}}</text>,送<text>{{item.song}}</text>,送礼品</view>
							<view class="lipin">
								<view><image :src="item.lipin" lazy-load mode="aspectFill"></image></view>
								<view class="lpbiaoti">
									<view class="lptitle">礼品名称：萨拉快递费好久了撒快递费哈三联款到发货sad发萨拉丁付款后萨拉款到发货</view>
									<view class="lpjiage">12</view>
								</view>
							</view>
						</view>
						<view class="mansongcont">{{item.songcont}}</view>
						<view class="times">活动时间:{{item.timesks}} - {{item.timesjs}}</view>
					</view>
				</view>
			
				<view class="guanbi icon iconfont icon-ego-guanbi"  @tap="hideMansong" ></view>
			</view>
		</view>
		
		<!-- 商品主图轮播 -->
		<view class="swiper-box">
			<swiper circular="true" autoplay="true" @change="swiperChange">
				<swiper-item v-for="swiper in swiperList" :key="swiper.id">
					<image :src="swiper.img" @tap="toSwiper(swiper)"></image>
				</swiper-item>
			</swiper>
			<view class="indicator">{{currentSwiper+1}}/{{swiperList.length}}</view>
		</view>
		<!-- 标题 价格 -->
		<view class="goods-info">
			<view class="price iconzhibi">{{goodsData.price}}</view>
			<view class="title">
				<view><text>{{goodsData.ziying}}</text>{{goodsData.name}}</view>
				<view class="jieshao"><text class="icon iconfont icon-zhekou jiang"></text>{{goodsData.maidian}}</view>
			</view>
		</view>
		<view class="fahuodi uf-ac-jc">
			<view class="kuaidi">
				<view><text class="icon iconfont icon-dizhi"></text>陕西西安</view>
				<view>快递：0.00</view>
			</view>
			<view>库存：123456</view>
		</view>
		<!-- 服务会员 -->
		<view class="fuwu">
			<view class="yangshilist"  @tap="showService">
				<view class="ystext">服务</view>
				<view class="uf-ac-jc">
					<view class="serviceitem" v-for="(item,index) in goodsData.service" :key="index">{{item.name}}</view>
					<view class="arrow"><view class="icon iconfont icon-gengduo"></view></view>
				</view>
			</view>
			
			<view class="yangshilist" @tap="share">
				<view class="ystext">会员</view>
				<view class="serviceitem">不同等级会员享有不同折扣</view>
				<view class="arrow"><view class="icon iconfont icon-gengduo"></view></view>
			</view>

		</view>
		<!-- 促销满就送 -->
		<view class="mansonglist" @tap="showMansong">
			<view class="ystext2">促销</view>
			<view class="manjiusong">
				<view v-for="(item,index) in goodsData.mansong" :key="index">{{item.title}}</view>
			</view>
			<view class="arrow"><view class="icon iconfont icon-gengduo"></view></view>
		</view>
		
		<view class="mansonglist" @tap="showZengpin">
			<view class="ystext2">赠品</view>
			<view class="manjiusong">数量有限，赠完为止</view>
			<view class="arrow"><view class="icon iconfont icon-gengduo"></view></view>
		</view>
		<!-- 样式颜色大小选择 -->
		<view class="chima">
			<view class="yangshilist">
				<view class="ystext">样式</view>
				<view class="yangshi">
					<view class="xuanxiang" v-for="(item,index) in goodsData.banben"  :class="[index==selectSpec?'on':'']" @tap="setSelectSpec(index)" :key="index">{{item}}</view>
				</view>
			</view>
			<view class="yangshilist">
				<view class="ystext">颜色</view>
				<view class="yangshi">
					<view class="xuanxiang" v-for="(item,index) in goodsData.yanse" :class="[index==selectColor?'on':'']" @tap="setSelectColor(index)" :key="index">{{item}}</view>
				</view>
			</view>
			<view class="yangshilist">
				<view class="ystext">大小</view>
				<view class="yangshi">
					<view class="xuanxiang" v-for="(item,index) in goodsData.leixing" :class="[index==selectSize?'on':'']" @tap="setSelectSize(index)" :key="index">{{item}}</view>
				</view>
			</view>
		</view>
		<!-- 数量选择 -->
		<view class="length" >
			<view class="text">数量</view>
			<view class="number">
				<view class="sub" @tap.stop="sub">
					<view class="icon iconfont icon-jian"></view>
				</view>
				<view class="input" @tap.stop="discard">
					<input type="number" disabled  v-model="goodsData.number" />
				</view>
				<view class="add"  @tap.stop="add">
					<view class="icon iconfont icon-jiahaob"></view>
				</view>
			</view>
		</view>
		<!-- 套装 -->
		<view class="yangshilist" @tap="zuhe" style="margin-top: 10upx;">
			<view class="ystext">套装</view>
			<view class="serviceitem">组合购买套装更优惠</view>
			<view class="arrow"><view class="icon iconfont icon-gengduo"></view></view>
		</view>
		
		<!-- 评价 -->
		<view class="comments" id="comments">
			<view class="row">
				<view class="text">商品评价(<text class="pj_red">{{goodsData.comment.number}}</text>)</view>
				<view class="arrow">
					<view class="show" @tap="showComments()">
						<text class="pj_red">98%</text>好评
						<view class="icon iconfont icon-arrow-right-copy"></view>
					</view>
				</view>
			</view>
			<view class="comment">
				<view class="user-info">
					<view class="face"><image :src="goodsData.comment.userface"></image></view>
					<view class="username">{{goodsData.comment.username}}</view>
				</view>
				<view class="content">
					{{goodsData.comment.content}}
				</view>
			</view>
		</view>
		<!-- 看了又看 -->
		<view class="description">
			<view class="title">— 看了又看 —</view>
			<view class="product-list">
				
				<block v-for="(product,index) in goodsList" :key="index">
					<product-list class="productx" :product="product" :index="index" ></product-list>
				</block>
			</view>
		</view>
		<!-- 详情 -->
		<view class="description">
			<view class="title">— 商品详情 —</view>
			<view class="content"><rich-text :nodes="descriptionStr"></rich-text></view>
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
			//控制渐变标题栏的参数
			beforeHeaderzIndex: 11,//层级
			afterHeaderzIndex: 10,//层级
			beforeHeaderOpacity: 1,//不透明度
			afterHeaderOpacity: 0,//不透明度
			screenHeight:0,
			//是否显示返回按钮
			// #ifndef MP
			showBack:true,
			// #endif
			
			goodsList:[
				{ goods_id: 0, img: '../../static/goods/p1.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168', slogan:'1235人付款' },
				{ goods_id: 1, img: '../../static/goods/p2.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168', slogan:'1235人付款' }
				
			],
			
			//轮播主图数据
			swiperList: [
				{ id: 1, img: '../../static/show/1.jpg' },
				{ id: 2, img: '../../static/show/2.jpg' },
				{ id: 3, img: '../../static/show/3.jpg' },
				{ id: 4, img: '../../static/show/4.jpg' }
			],
			//轮播图下标
			currentSwiper: 0,
			anchorlist:[],//导航条锚点
			selectAnchor:0,//选中锚点
			serviceClass: '',//服务弹窗css类，控制开关动画
			mansongClass: '',//服务弹窗css类，控制开关动画
			specClass: '',//规格弹窗css类，控制开关动画
			shareClass:'',//分享弹窗css类，控制开关动画
			zuheClass:'',//分享弹窗css类，控制开关动画
			zengpinClass:'',//分享弹窗css类，控制开关动画
			// 商品信息
			goodsData:{
				id:1,
				name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",
				maidian:"这里是产品买点",
				ziying:"自营",
				price:"127.00",
				number:1,
				service:[
					{name:"正品保证",description:"此商品官方保证为正品"},
					{name:"极速退款",description:"此商品享受退货极速退款服务"},
					{name:"7天退换",description:"此商品享受7天无理由退换服务"}
				],
				mansong:[
						
						{
							title:"全场满100送10 OMC活动开始",
							timesks:"2019-05-20",
							timesjs:"2019-05-31",
							man:100,
							song:10,
							lipin:"../../static/face.jpg",
							songcont:"全场满100送10 OMC活动开始介绍"
						}
						
					],
				yanse:["渐变红","黑色","红色","绿色","星空会","绿色","绿色","星空会","绿色"],
				banben:["全网通6+128G","全网通8+128G","全网通8+256G","全网通8+512G"],
				leixing:["官方标配","套餐一","套餐二"],
				comment:{
					number:102,
					userface:'../../static/face.jpg',
					username:'大黑哥',
					content:'很不错，之前买了很多次了，很好看，能放很久，和图片色差不大，值得购买！'
				}
				
			},
			selectSpec:true,//选中规格
			selectColor:null,//选中规格
			selectSize:null,//选中规格
			isKeep:false,//收藏
			//商品描述html
			descriptionStr:'<div style="text-align:center;"><img width="100%" src="https://s2.ax1x.com/2019/03/28/AdOogx.jpg"/><img width="100%" src="https://s2.ax1x.com/2019/03/28/AdOHKK.jpg"/><img width="100%" src="https://s2.ax1x.com/2019/03/28/AdOTv6.jpg"/></div>'
		};
	},
	
	onLoad(option) {
		// #ifdef MP
		//小程序隐藏返回按钮
		this.showBack = false;
		// #endif
		//option为object类型，会序列化上个页面传递的参数
		
		uni.getSystemInfo({
			success: (res)=> {
				let height=res.screenHeight*0.7
			
				this.screenHeight=height;
				
			}
		});
	},
	onReady(){
		this.calcAnchor();//计算锚点高度，页面数据是ajax加载时，请把此行放在数据渲染完成事件中执行以保证高度计算正确
	},
	onPageScroll(e) {
		//锚点切换
		this.selectAnchor = e.scrollTop>=this.anchorlist[2].top?2:e.scrollTop>=this.anchorlist[1].top?1:0;
		//导航栏渐变
		let tmpY = 375;
		e.scrollTop = e.scrollTop > tmpY ? 375 : e.scrollTop;
		this.afterHeaderOpacity = e.scrollTop * (1 / tmpY);
		this.beforeHeaderOpacity = 1 - this.afterHeaderOpacity;
		//切换层级
		this.beforeHeaderzIndex = e.scrollTop > 0 ? 10 : 11;
		this.afterHeaderzIndex = e.scrollTop > 0 ? 11 : 10;
	},
	//上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
	onReachBottom() {
		uni.showToast({ title: '触发上拉加载' });
	},
	
	methods: {
		//轮播图指示器
		swiperChange(event) {
			this.currentSwiper = event.detail.current;
		},
		//消息列表
		toMsg(){
			uni.navigateTo({
				url:'../ceshi/ceshi'
			})
		},
		toShop(){
			uni.navigateTo({
				url:'../shop/shop'
			})
		},
		// 客服
		toChat(){
			uni.navigateTo({
				url:"../msg/chat/chat?name=客服008"
			})
		},
		// 分享
		share(){
			this.shareClass = 'show';
		},
		hideShare(){
			this.shareClass = 'hide';
			setTimeout(() => {
				this.shareClass = 'none';
			}, 150);
		},
		
		zuhe(){
			this.zuheClass = 'show';
		},
		hideZuhe(){
			this.zuheClass = 'hide';
			setTimeout(() => {
				this.zuheClass = 'none';
			}, 150);
		},
		
		
		
		// 加入购物车
		joinCart(){
			if(this.selectSpec==null){
				return this.showSpec(()=>{
					uni.showToast({title: "已加入购物车"});
				});
			}
			uni.showToast({title: "已加入购物车"});
		},
		// 加入购物车
		toCart(){
			uni.navigateTo({
				url:"../cart/cart"
			})
		},
		//立即购买
		buy(){
			uni.navigateTo({
				url:"../order/confirmation"
			})
		},
		
		//跳转评论列表
		showComments(){
			uni.navigateTo({
				url:"../comments/comments"
			})
		},
		//选择规格
		setSelectSpec(index){
			this.selectSpec = index;
		},
		setSelectColor(index){
			this.selectColor = index;
		},
		setSelectSize(index){
			this.selectSize = index;
		},
		//减少数量
		sub(){
			if(this.goodsData.number<=1){
				return;
			}
			this.goodsData.number--;
		},
		//增加数量
		add(){
			this.goodsData.number++;
		},
		//跳转锚点
		toAnchor(index){
			this.selectAnchor = index;
			uni.pageScrollTo({scrollTop: this.anchorlist[index].top,duration: 200});
		},
		//计算锚点高度
		calcAnchor(){
			this.anchorlist=[
				{name:'主图',top:0},
				{name:'评价',top:0},
				{name:'详情',top:0},	
			]
			let commentsView = uni.createSelectorQuery().select("#comments");
			commentsView.boundingClientRect((data) => {
				let statusbarHeight = 0;
				//APP内还要计算状态栏高度
				// #ifdef APP-PLUS
					statusbarHeight = plus.navigator.getStatusbarHeight()
				// #endif
				let headerHeight = uni.upx2px(100);
				this.anchorlist[1].top = data.top - headerHeight - statusbarHeight;
				this.anchorlist[2].top = data.bottom - headerHeight - statusbarHeight;
				
			}).exec();
		},
		//返回上一页
		back() {
			uni.navigateBack();
		},
		//服务弹窗
		showService() {
			console.log('show');
			this.serviceClass = 'show';
		},
		//关闭服务弹窗
		hideService() {
			this.serviceClass = 'hide';
			setTimeout(() => {
				this.serviceClass = 'none';
			}, 200);
		},
		//规格弹窗
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
		//服务弹窗
		showMansong() {
			console.log('show');
			this.mansongClass = 'show';
		},
		//关闭服务弹窗
		hideMansong() {
			this.mansongClass = 'hide';
			setTimeout(() => {
				this.mansongClass = 'none';
			}, 200);
		},
		specCallback(){
			return;
		},
		
		discard() {
			//丢弃
		}
	}
};
</script>

<style lang="scss">
page {
	background-color: #f9f9f9;
}

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

.status {
	width: 100%;
	height: 0;
	position: fixed;
	z-index: 10;
	top: 0;
	/*  #ifdef  APP-PLUS  */
	height: var(--status-bar-height); //覆盖样式
	/*  #endif  */
	background-color: #f1f1f1;
}
.header {
	width: 100%;

	height: 80upx;
	display: flex;
	align-items: center;
	position: fixed;
	top: 0;
	z-index: 10;
	/*  #ifdef  APP-PLUS  */
	top: var(--status-bar-height);
	/*  #endif  */
	.before,
	.after {
		width: 92%;
		padding: 0 4%;
		height: 80upx;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		/*  #ifdef  APP-PLUS  */
			top: var(--status-bar-height);
		/*  #endif  */

		.back {
			width: 125upx;
			height: 60upx;
			flex-shrink: 0;
			.icon {
				margin-left: -10%;
				width: 60upx;
				height: 60upx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 36upx;
			}
		}
		.middle {
			width: 100%;
		}
		.icon-btn {
			width: 125upx;
			height: 60upx;
			flex-shrink: 0;
			display: flex;
			.icon {
				&:first-child{
					margin-right: 5upx;
				}
				width: 60upx;
				height: 60upx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 36upx;
			}
		}
	}
	.before {
		.back {
			.icon {
				color: #fff;
				background-color: rgba(0, 0, 0, 0.2);
				border-radius: 100%;
			}
		}
		.icon-btn {
			.icon {
				color: #fff;
				background-color: rgba(0, 0, 0, 0.2);
				border-radius: 100%;
				
			}
		}
	}
	.after {
		background-color: #ffffff; border-bottom: 1upx #ddd solid;
		.back {
			.icon {
				color: #666;
			}
		}
		.icon-btn {
			.icon {
				color: #666;
			}
		}
		.middle {
			
			height: 100upx;
			display: flex;
			justify-content: center;
			align-items: center;
			view {
				padding: 10upx 0%;
				margin: 0 3%;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 32upx;
				&.on {
					margin-bottom: -4upx;
					color: #c9141d;
					border-bottom: solid 4upx #c9141d;
				}
			}
		}
	}
}
.swiper-box {
	position: relative;
	width: 100%;
	height: 760upx;
	swiper {
		width: 100%;
		height: 760upx;
		swiper-item {
			image {
				width: 760upx;
				height: 760upx;
			}
		}
	}
	.indicator{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 25upx;
		height: 40upx;
		border-radius: 40upx;
		font-size: 22upx;
		position: absolute;
		bottom: 20upx;
		right: 20upx;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.2);
	}
}


.goods-info {width: 94%;
	padding: 20upx 3% 0 3%;
	background-color: #fff;
	}
.goods-info .price {
	font-size: 46upx;
	font-weight: 600;
	color: #c9141d; padding-left: 30px;
}
.goods-info .title {
	font-size: 32upx; 
	word-break: break-all;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden; line-height: 50upx;
}
.goods-info .title text{ border: 1upx solid #c9141d; padding: 3upx 10upx; border-radius: 10upx; font-size: 24upx;color: #c9141d; margin-right: 10upx; }
.goods-info .title .jieshao{ 
	color: #999;  
	font-size: 26upx;
	word-break: break-all;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
	}
.goods-info .title .jieshao .jiang{ border: 0; font-size: 32upx;padding: 0 10upx 0 0; margin: 0}
.iconzhibi { background:url(../../static/omc-logo.png) no-repeat 0 20upx;background-size:46upx;}
.fuwu{ margin-top: 10upx;}
.chima{ margin-top: 10upx;}
.yangshilist{display: flex; background: #fff;}
.yangshilist .ystext{  width: 120upx; font-size: 28upx;color: #999; padding-top: 20upx;  padding-left: 30upx}
.serviceitem{padding: 20upx 10upx; color:#333;}

.mansonglist{display: flex; background: #fff; margin-top: 10upx; padding: 10upx 0px;}
.mansonglist .ystext2{  width: 120upx; font-size: 28upx;color: #999; padding-left: 30upx;padding-top: 10upx; }
.manjiusong{ display: flex;flex-wrap: wrap; padding-top: 10upx; padding-left: 20upx; }
.manjiusong>view{justify-content: center;align-items: center; border: #c9141d solid 1upx; font-size: 22upx; margin-right: 15upx; padding:5upx 15upx 0 15upx;border-radius:10upx;  color: #c9141d; margin-bottom: 10upx}
.times{color: #999; font-size: 26upx;}
.masongje{color: #797979; font-size: 32upx;}
.masongje text{background:url(../../static/omc-logo.png) no-repeat 0upx 5upx; background-size: 32upx; padding-left: 30upx;color: #C9141D}

.lipin{display: flex; border: 1upx dotted #ddd; background: #f9f9f9; padding: 20upx 20upx 5upx 20upx; margin:20upx 0;border-radius: 10upx;}
.lipin image{ width: 100upx; height: 100upx; margin-right: 20upx; border-radius:10upx; }
.lpbiaoti .lptitle{display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden; color: #797979;}
.lpbiaoti .lpjiage{background:url(../../static/omc-logo.png) no-repeat 0upx 12upx; background-size: 30upx; padding-left: 30upx;color: #C9141D; margin-top: 10upx; font-size: 28upx;}
.mansongcont{ display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden; color: #797979;}
.arrow{position: absolute; right: 4%;color: #999; padding-top: 10upx;}

.taozhuang{ padding-bottom: 20upx;}
.floor-item{padding: 15upx 15upx 0 15upx; border-radius: 15upx;display: flex; margin-bottom: 20upx;}
.floor-item	image{width:100upx;border-radius: 6upx;height: 100upx; margin-right: 20upx}
.tzcont{ color: #797979 }
.floor-item .titlex{ display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 1;overflow: hidden;font-size: 30upx; padding: 0; margin: 0; color: #797979}
.floor-item .price{color: #C9141D;background:url(../../static/omc-logo.png) no-repeat 0upx 4upx; font-size: 30upx; background-size: 40upx; padding-left: 40upx;line-height: 1;}
.yuanjia{ color: #797979;text-decoration:line-through; margin-left: 20upx;}
.floor-item .price_line{color: #797979;background:url(../../static/line-omc-logo.png) no-repeat 0upx 4upx; font-size: 30upx; background-size: 40upx; padding-left: 40upx;line-height: 1;}
.youhuixinxi{ background: #f9f9f9; border-radius:20upx; padding: 20upx; align-items: center;justify-content: center; color: #797979; display: flex  }
.jiarugouwuche{	width: 94%;
				height: 80upx;
				border-radius: 40upx;
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: #f47952;
				font-size: 28upx;margin: 20upx 3%;}
.guanbi{position: absolute;z-index: 10;right: 30upx;top: 30upx; width: 50upx;height: 50upx;align-items: center;justify-content: center; border: 1upx solid #f3f3f3; border-radius: 40upx;display: flex; font-size: 30upx; box-shadow: 0 0 10upx #f1f1f1;color: #aaa; font-size: 28upx ; background: #fff;}

.yangshi{ display: flex; flex-wrap: wrap; padding: 10upx 0;width: 100%;}
.fahuodi{width: 94%;
	padding: 0upx 3%;
	background-color: #fff;}
.kuaidi{padding-right:20upx;color:#333; display: flex;}
.kuaidi>view{color: #666;font-size: 26upx; margin: 10upx 10upx 10upx 0;}
.kuaidi>view>text{ margin-right: 8upx; font-size: 26upx;}
.yangshi .xuanxiang{border:1upx solid #ddd;color: #333;margin-right: 10upx;font-size: 26upx;border-radius: 50upx; padding: 3upx 25upx; margin: 10upx 10upx 10upx 0;}
.yangshi .on{border: solid 1upx #c9141d; color: #c9141d;}
.comments {
	width: 92%;
		padding: 20upx 4%;
		background-color: #fff;
		margin-top: 10upx;
	.row {
		width: 100%;
		height: 40upx;
		display: flex;
		align-items: center;
		margin: 0 0 30upx 0;
		.text {
			font-size: 30upx;
		}
		.pj_red{ color: #c9141d}
		.arrow {
			font-size: 28upx;
			position: absolute;
			right: 4%;
			color: #999;
			.show {
				display: flex;
				align-items: center;
				.icon {
					color: #ccc;
				}
			}
		}
	}
	.comment {
		width: 100%;
		.user-info {
			width: 100%;
			height: 40upx;
			display: flex;
			align-items: center;
			.face {
				width: 40upx;
				height: 40upx;
				margin-right: 8upx;
				image {
					width: 40upx;
					height: 40upx;
					border-radius: 100%;
				}
			}
			.username {
				font-size: 24upx;
				color: #999;
			}
		}
		.content {
			margin-top: 10upx;
			font-size: 26upx;
		}
	}
}
.description {
	.title {
		width: 100%;
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 32upx;
		color: #333; background: #fff; margin-top: 10upx;
	}
}
.footer {
	position: fixed;
	bottom: 0upx;
	width: 100%;
	height: 100upx;
	border-top: solid 1upx #eee; 
	background-color: #fff;
	z-index: 10;
	display: flex;
	justify-content: space-between;
	align-items: center;
	}
.icons{ flex: 1;  display: flex;align-items: center;justify-content: space-between; }
.icons .box{ display: flex;justify-content: center;flex-wrap: wrap;}
.icons .box .icon{ font-size: 45upx; width: 45upx; height: 45upx; padding: 5upx 0 0 0;line-height: 50upx}
.icons .box .text{ font-size: 20upx; line-height: 24upx;}
.btn{ flex: 2; display: flex;justify-content:space-between;align-items: center; margin: 5upx 10upx; }
.joinCart,.buy,.shouqing,.goumai{ line-height: 80upx; height: 80upx;  display: flex; justify-content: center; align-items: center; flex: 1;color: #fff;}
.joinCart{ background: #f47952;border-radius:40upx 0 0  40upx;}
.buy{ background:#c9141d;border-radius:0 40upx 40upx  0upx; }
.shouqing{ background:#999;border-radius:40upx; }
.goumai{background:#c9141d;border-radius:40upx;}
.popup {
	position: fixed;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 20;
	display: none;
	.mask{
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 21;
		background-color: rgba(0, 0, 0, 0.6);
	}
	.layer {
		position: fixed;
		z-index: 22;
		bottom: -70%;
		width: 92%;
		padding: 0 4%;
		height: 70%;
		border-radius: 20upx 20upx 0 0;
		background-color: #fff;
		display: flex;
		flex-wrap: wrap;
		align-content: space-between;
		.content {
			width: 100%;
			padding: 20upx 0;
		}
		.btn {
			width: 100%;
			height: 100upx;
			.button {
				width: 100%;
				height: 80upx;
				border-radius: 40upx;
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: #f47952;
				font-size: 28upx;
			}
		}
	}
	
	&.show {
		display: block;
		.mask{
			animation: showPopup 0.2s linear both;
		}
		.layer {
			animation: showLayer 0.2s linear both;
		}
	}
	&.hide {
		display: block;
		.mask{
			animation: hidePopup 0.2s linear both;
		}
		
		.layer {
			animation: hideLayer 0.2s linear both;
		}
	}
	&.none {
		display: none;
	}
	&.service {
		.row {
			margin: 30upx 0;
			.title {
				font-size: 30upx;
				margin: 10upx 0;
			}
			.description {
				font-size: 28upx;
				color: #999;
				image{width: 50upx; height: 50upx;}
			}
		}
	}
	
}

.length{	background: #FFFFFF;
			margin-top: 10upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20upx 25upx;
			.text{
				font-size: 30upx;
			}
			.number{
				display: flex;
				justify-content: center;
				align-items: center;
				.input{
					width: 80upx;
					height: 60upx;
					margin: 0 5upx;
				
					display: flex;
					justify-content: center;
					align-items: center;
					text-align: center;
					input{
						width: 80upx;
						height: 60upx;
						display: flex;
						justify-content: center;
						align-items: center;
						text-align: center;
						font-size: 36upx;
					}
				}
				
				.sub ,.add{
					width: 40upx;
					height: 40upx;
					border:1upx solid #f3f3f3;
					border-radius: 40upx;
					.icon{
						font-size: 30upx;
						width: 40upx;
						height: 40upx;
						display: flex;
						justify-content: center;
						align-items: center;
						
					}
				}
			}
		}
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
			height: 120upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 34upx;
		}
		.h2{
			width: 100%;
			height: 120upx;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			font-size: 34upx;
		}
	}
}
.product-list {padding: 0upx 1% 0upx 1%;display: flex;justify-content: space-between;flex-wrap: wrap;}
	.productx {width: 47%;margin: 15upx 1.5% 15upx 1.5%;}
</style>
