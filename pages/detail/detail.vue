<template>
	<view class="index">
		<swiper @change="swpierChange" :style="{height:screenHeight + 'px'}">
			<swiper-item v-for="(value,index) in data" :key="index" @click="preImg(index)">
				<image :src="value.img_src" mode="widthFix"></image>
			</swiper-item>
		</swiper>
        
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgShow: false,
				index: 0,
				showBtn: false,
				screenHeight: 0,
				imgLength: 0,
				
				data: [
					{"id":"fengjing01","title":"\ue606\ue607","name":"fengjing01","img_num":10,"img_src":"../../static/show/1.jpg"},
					{"id":"fengjing02","title":"\ue606\ue607","name":"fengjing02","img_num":10,"img_src":"../../static/goods/p1.jpg"},
					{"id":"fengjing03","title":"\ue606\ue607","name":"fengjing03","img_num":10,"img_src":"../../static/lb1.jpg"}
				]
			}
		},
		onLoad(e) {
					// #ifdef APP-PLUS
					if (plus.os.name === 'Android') {
						this.showBtn = true;
					}
					// #endif
					this.screenHeight = uni.getSystemInfoSync().windowHeight;
					this.detailDec = e.data;
					let data = JSON.parse(decodeURIComponent(e.data));
					this.imgLength = data.img_num;
					this.data.push(data.img_src);
					this.getData(data.id);
					uni.setNavigationBarTitle({
						title: "1/" + this.imgLength
					});
					
				},
				
			onShareAppMessage() {
				return {
					title: "欢迎使用uni-app看图模板",
					path: '/pages/detail/detail?data=' + this.detailDec,
					imageUrl:this.data[this.index]
				}
			},
			onNavigationBarButtonTap(e) {
			    if(e.index === 1){
			        this.collect();
			        return;
			    }
				if (this.providerList.length === 0) {
					uni.showModal({
						title: "当前环境无分享渠道!",
						showCancel: false
					})
					return;
				}
				let itemList = this.providerList.map(function (value) {
					return value.name
				})
				uni.showActionSheet({
					itemList: itemList,
					success: (res) => {
						uni.share({
							provider: this.providerList[res.tapIndex].id,
							scene: this.providerList[res.tapIndex].type && this.providerList[res.tapIndex].type === 'WXSenceTimeline' ?
								'WXSenceTimeline' : "WXSceneSession",
							type: 0,
							title: "uni-app模版",
							summary: "欢迎使用uni-app模版",
							imageUrl: this.data[this.index],
							href: "https://uniapp.dcloud.io",
							success: (res) => {
								console.log("success:" + JSON.stringify(res));
							},
							fail: (e) => {
								uni.showModal({
									content: e.errMsg,
									showCancel: false
								})
							}
						});
					}
				})
			},
				methods: {
					
					swpierChange(e) {
						this.index = e.detail.current;
						uni.setNavigationBarTitle({
							title: e.detail.current + 1 + "/" + this.imgLength
						})
					},
					preImg(index) {
						if (this.imgShow) { //防止点击过快导致重复调用 
							return;
						}
						this.imgShow = true;
						setTimeout(() => {
							this.imgShow = false;
						}, 1000)
						setTimeout(() => {
							uni.previewImage({
								current: this.data[index],
								urls: this.data
							})
						}, 150)
					}
				}
			}
		</script>

<style>
	page {
		background-color: #000;
	}

	swiper {
		flex: 1;
		width: 750upx;
		background-color: #000;
		display: flex;
		flex-direction: column;
	}

	swiper-item {
		display: flex;
		align-items: center;
	}

	image {
		width: 750upx;
		height: 1125upx;
	}
	@font-face {
		font-family: texticons;
		font-weight: normal;
		font-style: normal;
		src: url('https://at.alicdn.com/t/font_702773_g9f89om4v3j.ttf') format('truetype');
	}
	


</style>
