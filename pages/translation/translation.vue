<template>
	<view>
		<view class="language">
			<block v-for="(language,index) in languageList" :key="index">
				<view class="uf-ac-jc language_list" @tap="languagex(index)" :class="{'active':languageIndex==index}">
					<view class="uf">
						<image :src="language.img" lazy-load mode="widthFix"></image>
						<view>{{language.title}}</view>
					</view>
					<view :class="{'icon iconfont icon-xuanzhong1':languageIndex==index}"></view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	
	export default {
		
		data() {
			return {
				languageIndex:0,
				languageList:[
					
					{img:"../../static/chn.jpg",title:"中文版",id:1},
					{img:"../../static/en.jpg",title:"English",id:2},
					{img:"../../static/els.jpg",title:"Русская версия",id:3}
				],
			}
		},
		methods: {
			languagex(index){
				this.languageIndex=index;
			},
		}
	}
</script>

<style>
.language{border-top: 1upx solid #efefef;}
.language_list{ border-bottom: 1upx solid #efefef; padding: 30upx 5%;}
.language_list>view{ justify-content: space-between; align-items: center; }
.language_list>view>view{ font-size: 30upx; margin-left: 20upx;color:#666;}
.language_list>view image{ width:60upx ; box-shadow: 0 0 5upx #ddd; border-radius: 10upx;}
.active{ background: #f9f9f9;}
</style>
