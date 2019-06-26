<template>
  <div class="wrap">
    <component :is="currentView"></component>
		<footer id="footer">
			<div 
				v-for="(item, index) in tabData" 
				class="list-box" 
				@click="tabClick(index, item.type)" 
				:class="{active:active == index}">
				<span class="iconfont" :class="item.icon"></span>
				<div>{{ item.view }}</div>
			</div>
		</footer>
  </div>
</template>

<script>
	import information from './information/information'
	import mailList from './mailList/mailList'
	import workbench from './workbench/workbench'
	import my from './my/my'
export default {
  name: 'home',
	components: {
		information,
		mailList,
		workbench,
		my
	},
  data () {
    return {
			tabData: [
				{
					type: 'information',
					view: '消息',
					icon: 'iconicon_message'
				},
				{
					type: 'mailList',
					view: '通讯录',
					icon: 'iconicon_subordinate'
				},
				{
					type: 'workbench',
					view: '工作台',
					icon: 'iconicon_work'
				},
				{
					type: 'my',
					view: '我的',
					icon: 'iconicon_principal'
				}
			],
      currentView: 'information',
			active: 0,
    }
  },
	computed: {
    
  },
	watch: {
		
	},
	mounted() {
		var domHeight = document.getElementById("footer").offsetHeight
		this.$store.commit('editFootHeight', domHeight)
	},
	methods: {
		tabClick: function (value, item) {
			this.currentView = item
			this.active = value
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	#footer{
		position: fixed;
		bottom: 0;
		width: 100%;
		display: flex;
		background: #ccc;
		.list-box{
			width: 25%;
			box-sizing: border-box;
			text-align: center;
			margin: 0.16rem auto;
			font-size: 0.2rem;
			span{
				display: inline-block;
				font-size: 0.56rem;
				margin-bottom: 0.12rem;
			}
		}
	}
	.active{
		color: blue;
	}
</style>
