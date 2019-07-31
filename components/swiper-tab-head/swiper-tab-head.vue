<template>
	<view>
		 <view class="uni-tab-bar">
			<scroll-view  class="uni-swiper-tab" scroll-x>
				<block v-for="(tab,index) in tabBars" :key="tab.id">
					<view class="swiper-tab-list" :class="{'active':tabIndex==index}" @tap="tabTabs(index)">
					{{tab.name}}
					<view class="swiper-tab-line"></view>
					</view>
				</block>
			</scroll-view> 			  
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			tabBars:Array,
			tabIndex:Number
		},
		methods: {
			tabTabs(index){
				this.$emit('tabTabs1',index);
			}
		},
	}
</script>

<style>
.uni-tab-bar{ background: #fff;}
.uni-swiper-tab{ border-bottom: 0upx; padding: 0 10upx;}
.swiper-tab-list {font-size: 32upx;width: auto;padding: 0 23upx;}
.uni-tab-bar .active {color: #cc0e10; font-weight: 300;}
.active .swiper-tab-line{border-bottom: 3upx solid #cc0e10;border-top: 3upx solid #cc0e10;width: 50upx; margin: auto; border-radius:20upx;  }
</style>
