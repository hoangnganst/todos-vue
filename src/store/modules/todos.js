const state = {
	todos: []
};
const getters = {
	allTodos: state => state.todos
};
const actions = {
	async fetchTodos({ commit }) {
		const response = await (
			await fetch('https://jsonplaceholder.typicode.com/todos')
		).json();
		commit('setTodos', response);
	},
	async addTodo({ commit }, title) {
		const initReq = {
			method: 'post',
			body: JSON.stringify({
				title,
				completed: false
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		};
		const response = await (
			await fetch('https://jsonplaceholder.typicode.com/todos', initReq)
		).json();
		commit('newTodo', {
			...response,
			id: response.id + Math.round(Math.random() * 10)
		});
	},
	async deleteTodo({ commit }, id) {
		const initReq = {
			method: 'delete'
		};
		await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, initReq);
		commit('removeTodo', id);
	},
	async filterTodo({ commit }, limit) {
		const initReq = {
			method: 'get'
		};
		const response = await (
			await fetch(
				`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`,
				initReq
			)
		).json();
		commit('setTodos', response);
	},
	async updateTodo({ commit }, todo) {
		const initReq = {
			method: 'put'
		};
		const response = await (
			await fetch(
				`https://jsonplaceholder.typicode.com/todos/${todo.id}`,
				initReq
			)
		).json();
		commit('updTodo', todo);
	}
};
const mutations = {
	setTodos: (state, todos) => (state.todos = todos),
	newTodo: (state, todo) => state.todos.unshift(todo),
	removeTodo: (state, id) =>
		(state.todos = state.todos.filter(todo => todo.id !== id)),
	updTodo: (state, todo) => {
		let index = state.todos.findIndex(item => item.id === todo.id);
		if (index !== -1) {
			state.todos.splice(index, 1, todo);
		}
	}
};

export default { state, getters, actions, mutations };
