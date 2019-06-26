<template>
  <div id="wrap" ref="wrap1">
		<header id="head">
			<span>工作台</span>
			<span class="iconfont">&#xeba9;</span>
		</header>
    <div class="box">
			<div class="list-box">
				<span class="iconfont">&#xeba0;</span>
				<div>企业管理</div>
			</div>
			<div class="list-box">
				<span class="iconfont">&#xeba1;</span>
				<div>添加应用</div>
			</div>
			<div class="list-box">
				<span class="iconfont">&#xebb0;</span>
				<div>上门服务</div>
			</div>
		</div>
		<div class="box">
			<div class="list-box">
				<span class="iconfont">&#xeba0;</span>
				<div>企业管理</div>
			</div>
			<div class="list-box">
				<span class="iconfont">&#xeba1;</span>
				<div>添加应用</div>
			</div>
			<div class="list-box">
				<span class="iconfont">&#xebb0;</span>
				<div>上门服务</div>
			</div>
			<div class="list-box">
				<span class="iconfont">&#xeba0;</span>
				<div>企业管理</div>
			</div>
			<div class="list-box">
				<span class="iconfont">&#xeba1;</span>
				<div>添加应用</div>
			</div>
			<div class="list-box">
				<span class="iconfont">&#xebb0;</span>
				<div>上门服务</div>
			</div>
			<div class="list-box">
				<span class="iconfont">&#xeba0;</span>
				<div>企业管理</div>
			</div>
			<div class="list-box">
				<span class="iconfont">&#xeba1;</span>
				<div>添加应用</div>
			</div>
			<div class="list-box">
				<span class="iconfont">&#xebb0;</span>
				<div>上门服务</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'workbench',
  data () {
    return {
      
    }
  },
	computed: {
		domHeight () {
			return this.$store.state.footHeight
		}
	},
	mounted() {
		//动态的给元素wrap设置高度
		var box = document.getElementById("wrap")
		var dcmHeight = document.documentElement.clientHeight
		var wrapHeight = dcmHeight - this.domHeight
		box.style.height = wrapHeight + 'px'
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	#wrap{
		// height: 605px;
		background: #D8D8D8;
		#head{
			padding: 0 0.32rem;
			height: 1rem;
			line-height: 1rem;
			font-size: 0.4rem;
			background: #006699;
			color: white;
			.iconfont{
				float: right;
				font-size: 0.46rem;
			}
		}
		.box{
			margin: 0.18rem;
			border-radius: 0.08rem;
			background: white;
			column-count: 3;
			.list-box{
				font-size: 0.34rem;
				text-align: center;
				padding: 0.3rem;
				// border-right: 1px solid red;
				.iconfont{
					color: orange;
					font-size: 0.6rem;
				}
				div{
					margin-top: 0.2rem;
				}
			}
		}
	}
	
</style>
