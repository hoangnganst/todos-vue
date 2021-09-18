<template>
	<div class="add-todo">
		<h3>Add todo</h3>
		<div class="add">
			<form @submit="onSubmit">
				<input type="text" v-model="title" placeholder="Add todo..." />
				<input type="submit" value="submit" />
			</form>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	name: 'AddTodo',
	data() {
		return {
			title: ''
		};
	},
	methods: {
		...mapActions(['addTodo']),
		onSubmit(e) {
			e.preventDefault();
			this.addTodo(this.title);
		}
	}
};
</script>

<style>
form {
	display: flex;
}
input[type='text'] {
	flex: 10;
	padding: 10px;
	border: 1px solid #41b883;
}
input[type='text']:focus {
	outline: none !important;
	border: 1px solid #38a373;
	box-shadow: 0 0 10px #89e9be;
}
input[type='submit'] {
	flex: 2;
	border: 1px solid #41b883;
	background-color: #41b883;
	cursor: pointer;
	border: 1px solid #41b883;
	color: #fff;
}
.add-todo {
	margin-bottom: 1rem;
}
.add {
	margin: 0 5rem;
}
</style>
