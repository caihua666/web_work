<template>
	<div class="wrap">
		<span class="left">{{ comData.name }}</span>
		<span class="star" :class="{active: comData.isRequired}">*</span>
		<van-field v-model="comData.value" :placeholder="comData.placeholder" @change="childClick()" />
	</div>
</template>

<script>
export default {
	name: 'com-text',
	props: ['comData'],
	data() {
		return {
			
		};
	},
	methods: {
		childClick() {
			this.$emit('showbox', this.comData);
		}
	}
};
</script>

<style scoped lang="scss">
	.wrap{
		display: flex;
		.left{
			font-size: 0.32rem;
			background-color: white;
			width: 3rem;
			padding: 0.3rem 0.3rem;
		}
		.star{
			display: none;
		}
		.active{
			color: red;
			background: white;
			display: block;
		}
	}
	
</style>
