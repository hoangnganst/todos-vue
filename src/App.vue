<template>
	<div id="app-wrapper">
		<add-todo> </add-todo>
		<filter-todo> </filter-todo>

		<todo-list></todo-list>
	</div>
</template>

<script>
import TodoList from './components/todos/TodoList.vue';
import AddTodo from './components/todos/AddTodo.vue';
import FilterTodo from './components/todos/FilterTodo.vue';
export default {
	name: 'App',
	components: {
		TodoList,
		AddTodo,
		FilterTodo
	}
};
</script>

<style>
#app-wrapper {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin: 1rem 5rem;
}
</style>
