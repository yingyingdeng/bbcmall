<template>
	<view>
		 <swiper class="card-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true"  @change="cardSwiper" indicator-color="#fff"
		 indicator-active-color="#c9141d">
			<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
				<view class="swiper-item">
					<image :src="item.url" mode="widthFix" v-if="item.type=='image'"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			item:Object,
			cardCur:Number
		},
		methods: {
			cardSwiper(index){
				this.$emit('cardswiper1',cardCur);
			}
		},
	}
</script>

<style>
 
</style>
