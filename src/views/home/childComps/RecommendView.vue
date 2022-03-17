<template>
	<div class="recommend">
	<div v-for="item in recommends" class="recommend-item">
		<a :href="item.link">
			<img :src="item.image" alt="item.image" />
			<div>{{item.title}}</div>
		</a>
	</div>
	</div>
</template>

<script>
	export default{
		name:'RecommendView',
		props:{
			recommends:{
				type:Array,
				default(){
					return []
				}
			}
		}
		
	}
</script>

<style>
	.recommend{
		display: flex;
		width: 100%;
		text-align: center;
		font-size: 12px;
	}
	.recommend-item{
		flex: 1;
	}
	.recommend-item img{
		
		width: 60px;
		height: 65px;
		margin-bottom: 10px;
	}
	
</style>
