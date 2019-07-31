<template>
	<view class="animated fadeIn">
		
	
		<view class="page-body" :style="'height:'+height+'px'">
			<scroll-view class="nav-left" scroll-y :style="'height:'+height+'px'" :scroll-top="scrollLeftTop" scroll-with-animation>
				<view class="nav-left-item" @click="categoryClickMain(index)" :key="index" :class="index==categoryActive?'active':''"
					v-for="(item,index) in classifyData">
					<view class="juzhong">{{item.name}}</view>
					<view :class="index==categoryActive?'activex':''"></view>
				</view>
			</scroll-view>
			<scroll-view class="nav-right" scroll-y :scroll-top="scrollTop" @scroll="scroll" :style="'height:'+height+'px'" scroll-with-animation>
				<view :id="i==0?'first':''" v-for="(foods,index) in classifyData" :key="index" class="box" >
					<view class="biaotipic"><image :src="foods.categorypic" mode="widthFix" lazy-load></image></view>
					<view class="biaoti">{{foods.name}}</view>
					<view class="nav-right-item" v-for="(item,i) in foods.foods" :key="i" @tap="toProduct()">
						<image :src="item.icon" mode="widthFix" lazy-load /></image>
						<view>{{item.name}}</view>
					</view>
				</view>
			</scroll-view>
		</view>
		
	</view>
	
</template>

<script>
	import classifyData from '../../common/classify.data.js';
	export default {
		data() {
			return {
				name: "wkiwi",
				height: 0,
				categoryActive: 0,
				scrollTop: 0,
				scrollLeftTop: 0,
				// scrollHeight: 0,
				classifyData:classifyData,
				arr:[0,584,1168,1752,2336,2805,3274,3858,4442,4911,5380,5734,6203,6672,7017],//初始值，后边计算会根据手机适配覆盖
				leftItemHeight: 51,//49行会计算出新值进行覆盖
				navLeftHeight:0,//左边scroll-view 内层nav的总高度
				diff: 0,//左边scroll-view 内层nav的总高度与视口之差
				tabBarHeight:0,//如果此页面为Tab页面，自己改变高度值,,一般tab高度为51
			}
		},
		onShow() {
		},
		onLoad: function () {
			this.height = uni.getSystemInfoSync().windowHeight - this.tabBarHeight;
		},
		onReady() {
			let _this = this;
			let selectorQuery=uni.createSelectorQuery();
			selectorQuery.selectAll('.nav-left-item').boundingClientRect(function(rects) {
				_this.leftItemHeight  =  rects[0].height;
				_this.navLeftHeight = _this.leftItemHeight * classifyData.length;
				_this.diff =  _this.navLeftHeight - _this.height;
			});
			selectorQuery.selectAll('.box').boundingClientRect(function(rects) {
				let arr = [0];
				let top = 0;
				rects.forEach(function(rect){
// 					rect.id      // 节点的ID
// 					rect.dataset // 节点的dataset
// 					rect.left    // 节点的左边界坐标
// 					rect.right   // 节点的右边界坐标
// 					rect.top     // 节点的上边界坐标
// 					rect.bottom  // 节点的下边界坐标
// 					rect.width   // 节点的宽度
// 					rect.height  // 节点的高度
					top += rect.height;
					arr.push(top)
					})
					console.log(arr)
					_this.arr = arr
				}).exec()
		},
		
		methods: {
			scroll(e) {
				let _this = this
				if(this.timeoutId){
					clearTimeout(this.timeoutId);
				}
				this.timeoutId = setTimeout(function(){ //节流
					_this.scrollHeight = e.detail.scrollTop + _this.height/2;
					// console.log(e.detail.scrollTop);
					// console.log(_this.height);
					for (let i = 0; i < _this.arr.length;i++) {
						let height1 = _this.arr[i];
						let height2 = _this.arr[i+1];
						if (!height2 || (_this.scrollHeight >= height1 && _this.scrollHeight < height2)) {
							_this.categoryActive = i;
							(_this.diff>0) && (_this.scrollLeftTop = Math.round((_this.categoryActive * _this.diff)/(classifyData.length-1)));
							return false;
						}
					}
					_this.categoryActive = 0;
					_this.timeoutId = undefined;
				}, 10)
			},
			categoryClickMain(index) {
				this.categoryActive = index;
				this.scrollTop = this.arr[index]
			},
			cart: function (text) {
				uni.showToast({
					title: text,
					icon: "none",
				})
			},
			toProduct(){
				uni.navigateTo({
					url:'../product/product'
				})
			},
			// 搜索框跳转
			onNavigationBarSearchInputClicked() {
				uni.navigateTo({
					url:'../search/search'
				})
			}
			
			
		},
		components: {
			
		}
	}
</script>

<style lang="scss">  
  page{position: relative; background-color: #f5f5f9}

 

	.page-body {
		display: flex;
		background: #fff;
		overflow: hidden;position: fixed;
		top:0upx;
		z-index: 10;
	}

	.nav {
		display: flex;
		width: 100%;
	}

	.nav-left {
		width: 25%;
	}

	.nav-left-item {
		height: 100upx;
		font-size: 30upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.juzhong{ width: 90%; text-align: center; font-size: 30upx;}
	.nav-left-item:last-child{
		border-bottom: none;
	}
	.nav-right {
		width: 73%; padding-left: 2%
	}
	.box {
		display: block;
		overflow: hidden; 
	}
	.box:last-child {
	padding-bottom: 200upx
	}
	.nav-right-item {
		width: 28%;
		height: 220upx;
		float: left;
		text-align: center;
		padding: 11upx;
		font-size: 28upx;
		background: #fff;
	}

	.nav-right-item image {
		width: 120upx;
		height: 120upx;
	}

	.active {
		color: #c92019;
	}
	.activex {background: #c92019; height: 40upx; width: 5upx; border-radius:20upx }
	::-webkit-scrollbar {/*取消小程序的默认导航条样式*/
   width: 0;
   height: 0;
   color: transparent;
}

.biaoti{ text-align: center ; background: #f9f9f9;width: 96%;border-radius:10upx;height: 80upx; line-height: 80upx; margin: 20upx 2%;}
.biaotipic{width: 96%;height:200upx; overflow: hidden; margin: 0 2%;}
.biaotipic image{ border-radius:10upx; width: 100%;}
</style>
