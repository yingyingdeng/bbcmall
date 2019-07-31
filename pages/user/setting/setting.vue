<template>
	<view>
		<view class="content">
			<view class="list">
				<view class="row" @tap="toUploadpic">
					<view class="title">头像</view>
					<view class="right"><view class="tis">
					
					<upload-pic selWidth="200px" selHeight="400upx"
					:avatarSrc="url" @upload="myUpload"
					avatarStyle="width: 100upx; height: 100upx; border-radius: 100%;"></upload-pic>
					</view><view class="icon iconfont icon-arrow-right-copy"></view></view>
				</view>
				
				<view class="row" @tap="toUsername">
					<view class="title">真是姓名</view>
					<view class="right"><view class="tis">这人太懒了，什么都不写</view><view class="icon iconfont icon-arrow-right-copy"></view></view>
				</view>
				<view class="row">
					<view class="title">性别</view>
					<view class="right">
						<picker  @change="PickerChange" :value="index" :range="picker">
							<view class="picker">
								{{index>-1?picker[index]:'女'}}
							</view>
						</picker>
						<view class="icon iconfont icon-arrow-right-copy"></view>
					</view>
				</view>
				<view class="row" >
					<view class="title">生日</view>
					<view class="right">
						<picker  @change="DateChange"  mode="date" :value="date"  start="2015-09-01" end="2099-09-01">
							<view class="picker">
								{{date}}
							</view>
						</picker>
						<view class="icon iconfont icon-arrow-right-copy"></view>
					</view>
				</view>
				<view class="row"  @tap="toAddress">
					<view class="title">收货地址</view>
					<view class="right"><view class="tis"></view><view class="icon iconfont icon-arrow-right-copy"></view></view>
				</view>
				
			</view>
			<view class="list">
				<view class="row" @tap="toPassword">
					<view class="title">修改密码</view>
					<view class="right">
						<view class="tis hongse uf-ac-ajc">
							<text class="icon iconfont icon-suozi"></text>修改密码
						</view>
						<view class="icon iconfont icon-arrow-right-copy"></view>
					</view>
				</view>
				<view class="row" @tap="toPaypassword">
					<view class="title">支付密码</view>
					<view class="right">
						<view class="tis hongse uf-ac-ajc">
							<text class="icon iconfont icon-gantanhao-yuankuang"></text>未设置
						</view>
						<view class="icon iconfont icon-arrow-right-copy"></view>
					</view>
				</view>
				<view class="row" @tap="toPhone">
					<view class="title">手机验证</view>
					<view class="right">
						<view class="tis hongse uf-ac-ajc">
							<text class="icon iconfont icon-gantanhao-yuankuang"></text>未设置
						</view>
						<view class="icon iconfont icon-arrow-right-copy"></view>
					</view>
				</view>
				<view class="row" @tap="toEmail()">
					<view class="title">邮箱验证</view>
					<view class="right">
						<view class="tis green uf-ac-ajc">
							<text class="icon iconfont icon-duoxuan"></text>已设置
						</view>
						<view class="icon iconfont icon-arrow-right-copy"></view>
					</view>
				</view>
			</view>
			<view class="list">
				<view class="row" @tap="toVersion">
					<view class="title">版本升级</view>
					<view class="right"><view class="tis">v1.0.0</view><view class="icon iconfont icon-arrow-right-copy"></view></view>
				</view>
				<view class="row" @tap="noTitlemodalTap">
					<view class="title">清除缓存</view>
					<view class="right"><view class="tis"></view><view class="icon iconfont icon-arrow-right-copy"></view></view>
				</view>
				<view class="row" @tap="toReceive">
					<view class="title">接收设置</view>
					<view class="right"><view class="tis"></view><view class="icon iconfont icon-arrow-right-copy"></view></view>
				</view>
				<view class="row"  @tap="toAbout">
					<view class="title">关于商城</view>
					<view class="right"><view class="tis"></view><view class="icon iconfont icon-arrow-right-copy"></view></view>
				</view>
				
			</view>
			<view class="list">
				
				<view class="row" @tap="toLogin">
					<view class="title">安全退出</view>
					<view class="right"><view class="tis"></view><view class="icon iconfont icon-arrow-right-copy"></view></view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	import uploadPic from "../../../components/upload-pic/upload-pic.vue";
	export default {
		components: {
		    uploadPic
		},
		data() {
			return {
				url: "../../../static/face.jpg",
				picker: ['男', '女', '保密'],
				date: '2019-5-25',
			};
		},
		methods: {
			showType(tbIndex){
				this.tabbarIndex = tbIndex;
				this.list = this.orderList[tbIndex];
			},
			toLogin(){
				uni.navigateTo({
					url: '../../login/login',
					
				});
			},
			toAddress(){
				uni.navigateTo({
					url: '../../address/address',
					
				});
			},
			toPassword(){
				uni.navigateTo({
					url: '../password/password',
					
				});
			},
			toReceive(){
				uni.navigateTo({
					url: '../receive/receive',
					
				});
			},
			noTitlemodalTap: function (e) {
				uni.showModal({
					content: " 是否清除本地缓存",
					confirmText: "是",
					cancelText: "否"
				})
			},
			 myUpload(path) {
			    this.url = path;
			},
			PickerChange(e) {
				this.index = e.detail.value
			},
			DateChange(e) {
				this.date = e.detail.value
			},
			toUsername(){
				uni.navigateTo({
					url: '../username/username',
					
				});
			},
			toPhone(){
				uni.navigateTo({
					url: '../phone/phone',
					
				});
			},
			toEmail(){
				uni.navigateTo({
					url: '../email/email',
					
				});
			},
			toPaypassword(){
				uni.navigateTo({
					url: '../verification/verification',
					
				});
			},
			toVersion(){
				uni.navigateTo({
					url: '../version/version',
					
				});
			},
			toAbout(){
				uni.navigateTo({
					url: '../aboutus/aboutus',
					
				});
			}
			
		}
	}
</script>

<style lang="scss">
page{
	background-color: #f3f3f3;	
}

.content{
	padding-bottom: 20upx;
	.list{
		width: 96%;
		padding-left: 4%;
		background-color: #fff;
		margin-bottom: 20upx;
		.row{
			widows: 100%;
			min-height: 90upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: solid 1upx #eee;
			&:last-child{
				border-bottom: none;
			}
			.title{
				font-size: 32upx;
				color: #333;
			}
			.right{
				display: flex;
				align-items: center;
				color: #999;
				.tis{
					font-size: 26upx;
					margin-right: 5upx;
					max-height: 120upx;
					image{
						width: 100upx;
						height: 100upx;
						border-radius: 100%;
						margin: 10upx 0;
					}
				}
				
			}
			
		}
	}
}
.hongse{color: #dd5a43;}
.green{color: #36c359}
.icon-suozi,.icon-duoxuan,.icon-gantanhao-yuankuang{ font-size: 24upx;}
.icon-arrow-right-copy{padding:0 20upx 0 10upx; color: #ccc; font-size: 24upx;}
</style>
