<template>
	<div class="table-box">
		<van-list v-model="loads" :finished="finished" :finished-text="noMore">
			<div class='clinic' v-for="(i, index) of list" :key="index">
				<van-cell >
					{{i.username}}
				</van-cell>
			</div>
		</van-list>
	</div>
</template>

<script>
	export default {
		name: "Table", // 表格组件
		data() {
			return {
				loads: '',
				finished:false,
				noMore:''
			}
		},
		props: [ "list", "loading"],
		watch: {
			loading(val) {
				this.loads = val;
				if(!this.loads){
					this.finished=true;
				}

			}
		},
		created() {},
		computed: {
			noMore() {
				return this.list.length === 0 ? "暂无数据" : "没有更多了";
			}
		},
		mounted() {},
		methods: {
			onLoad() {
				this.$emit("loadMore");
			}
		}

	};
</script>

<style lang="scss" scoped>
	._line {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 1px;
		background-color: #ccc;
		transform: scaleY(0.5);
		z-index: 1;
	}

	.table-box {
		text-align: left;
		line-height: 2.56rem;
		.clinic{border-bottom: 1px solid #eee;}
		.van-cell:not(:last-child)::after{border-bottom: 0;}
		.material{padding-top:0 !important;}
		.van-cell {
			border-bottom: 0;
			padding: .3rem .8rem;
			border-bottom:0;
			.van-cell__value--alone{color:#666;}
			.user{color:#666;}
			.num {
					line-height: 1.28rem;
					color: #666;
					font-size: .7rem;
					.numList {
						margin-right: 6px;
						float: left;
					}
			}
			.left {
				line-height: 2.56rem;
				font-size: .8rem;
				color: #666;
				.name {
					line-height: 1.28rem;
					font-size: .8rem;
					color: #666;
					.xname {
						text-align: left;
						font-size: .7rem;
					}
					.date {
						text-align: left;
						font-size: .7rem;
						color:#999;
					}
				}
				.leftname {
					line-height: 2.56rem;
				}
			}
			.right {
				text-align: right;
				font-size: .8rem;
				.dis{
					font-size:.6rem;
					color:#999;
				}
			}
		}
	}
</style>
