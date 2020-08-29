<template>
	<div style="display: inline-block;width: 16%;margin-right: -3px;">
		<table cellspacing="0px" border="1px" bordercolor="#F6F6F6" width="100%" bgcolor="white" height="480px" >
			
			<tr height="70px" >
				<td style="text-align: center;"><slot name="week"></slot></td>
			</tr>
			<tr>
				<td style="text-align: center;height: 50px;"><slot name="1"></slot></td>
			</tr>
			<tr>
				<td style="text-align: center;height: 50px;"><slot name="2"></slot></td>
			</tr>
			<tr>
				<td style="text-align: center;height: 50px;"><slot name="3"></slot></td>
			</tr>
			<tr>
				<td style="text-align: center;height: 50px;"><slot name="4"></slot></td>
			</tr>
			<tr>
				<td style="text-align: center;height: 50px;"><slot name="5"></slot></td>
			</tr>
			<tr>
				<td style="text-align: center;height: 50px;"><slot name="6"></slot></td>
			</tr>
			<tr>
				<td style="text-align: center;height: 50px;"><slot name="7"></slot></td>
			</tr>
			<tr>
				<td style="text-align: center;height: 50px;"><slot name="8"></slot></td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default{
	
	}
</script>

<style>
</style>
