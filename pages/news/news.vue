<template>
	<view>
		
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabTabs1="tabTab"></swiper-tab-head>
		
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :current="tabIndex" @change="tabChange" :style="{height:swiperheight+'px'}">
				<swiper-item>
					<scroll-view scroll-y  class="list">
					<view class="swiper-item">
						<view class="newsbody">
							<block v-for="(news,index) in newslist" :key="index">
								<view class="newslist" @tap="toNewsShow">
									<view class="newspic"><image :src="news.newspic" mode="widthFix" lazy-load></image></view>
									<view class="newstitle">{{news.newstitle}}</view>
									<view class="newscont">{{news.newscont}}</view>
									<view class="newstimes uf-ac-jc">
										<view class="uf-ac-ajc"><text class="icon iconfont icon-shijian"></text>{{news.newstimes}}</view>
										<view class="uf-ac-ajc"><text class="icon iconfont icon-yanjing"></text>{{news.newsyd}}</view>
									</view>
								</view>
							</block>
						</view>
					</view>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view scroll-y  class="list">
					<view class="swiper-item">
						<view class="newsbody">
							<block v-for="(xinwen,index2) in news" :key="index2">
							<view class="newsbt">
								<view>
									<view class="newsbttitle">{{xinwen.title}}</view>
									<view class="uf-ac-jc liulan">
										<view class="uf-ac ">
											<view>{{xinwen.fabu}}</view>
											<view><text class="icon iconfont icon-yanjing"></text> {{xinwen.liulan}} </view>
										</view>
									</view>
								</view>
								<view class="newsimg"><image :src="xinwen.src" lazy-load mode="aspectFill"></image></view>
							</view>
							</block>
						</view>
					</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	
		
	</view>
</template>

<script>
	import swiperTabHead from "../../components/swiper-tab-head/swiper-tab-head.vue";
	export default {
		components: {
			swiperTabHead
		},
		data() {
			return {
				news:[
					{
						src:"../../static/lb1.jpg",
						title:"通过 HBuilderX 可视化界面可视化界面可视化界面可视化界面",
						fabu:"可视化界面",
						liulan:"111"
					},
					{
						src:"../../static/lb2.jpg",
						title:"通过 HBuilderX 可视化界面可视化界面可视化界面可视化界面",
						fabu:"可视化界面",
						liulan:"111"
					},
					
				],
				newslist:[
					{
					newspic:"../../static/lb1.jpg",
					newstitle:"通过 HBuilderX 可视化界面",
					newscont:"下载App开发版，可开箱即用；如下载标准版，在运行或发行uni-app时，会提示安装uni-app插件，插件下载完成后方可使用。",
					newstimes:"2019-05-30",
					newsyd:"477"
					},
					{
					newspic:"../../static/lb2.jpg",
					newstitle:"通过 HBuilderX 可视化界面",
					newscont:"下载App开发版，可开箱即用；如下载标准版，在运行或发行uni-app时，会提示安装uni-app插件，插件下载完成后方可使用。",
					newstimes:"2019-05-30",
					newsyd:"477"
					},
					{
					newspic:"../../static/lb2.jpg",
					newstitle:"通过 HBuilderX 可视化界面",
					newscont:"下载App开发版，可开箱即用；如下载标准版，在运行或发行uni-app时，会提示安装uni-app插件，插件下载完成后方可使用。",
					newstimes:"2019-05-30",
					newsyd:"477"
					}
				],
				//产品列表
				tabIndex: 0,
				swiperheight:0,
				tabBars: [
					{name: '商城公告',id: 'news'},
					{name: '帮助中心',id: 'help'},
					{name: '店主之家',id: 'shophome'},
					{name: '支付方式',id: 'pay'}, 
					{name: '售后服务',id: 'shouhou'},
					{name: '客服中心',id: 'kefu'},
					{name: '关于我们',id: 'aboutus'}
					
					
				],
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res)=> {
					let height = res.windowHeight - uni.upx2px(100);
					this.swiperheight = height
				}
			});
			
			
		},
	
		methods: {
			
			tabTab(index){
				uni.showLoading();
				this.tabIndex=index;
				uni.hideLoading();
			},
			
			tabChange(e){
				uni.showLoading();
				this.tabIndex=e.detail.current;
				uni.hideLoading();
			},
			toNewsShow(){
				uni.navigateTo({
					url: 'news-show',
				});
			}
				
		}
	}
</script>

<style scoped>
page{background: #fff;}
.newsbody{padding: 0 3%;width: 94%;}
.newslist{margin-top: 20upx;}
.newspic{height: 300upx;}
.newspic image{width: 100%;height: 300upx;border-radius: 10upx;}
.newstitle,.newscont,.newsbttitle{display: -webkit-box;-webkit-box-orient: vertical;overflow: hidden;padding: 0 10upx;}
.newstitle{-webkit-line-clamp: 1;font-size: 32upx; color: #333;margin-top:40upx;font-weight: bold; padding-top: 30upx;}
.newscont{-webkit-line-clamp: 2;font-size: 28upx; color: #666; }
.newstimes{color: #aaa;margin-top: 10upx;padding: 0 10upx;}
.newstimes text{margin-right: 10upx;}

.newsbt{display: flex;align-items:flex-start; justify-content:space-between;border-bottom: 1upx solid #f9f9f9;padding-bottom: 10upx; margin-bottom: 20upx; }
.newsbttitle{ -webkit-line-clamp: 2;font-size: 30upx; color: #666;font-weight: 600;padding: 0;}
.newsimg{ width: 180upx; margin-left: 20upx;}
.newsimg image{width: 180upx; height: 180upx;border-radius: 10upx;}
.uf-ac-jc{color: #AAAAAA;}
.uf-ac>view{margin-right: 20upx;font-size: 24upx;}
.liulan{margin-top: 40upx;}
.icon-yanjing {margin-right: 10upx;}
</style>
