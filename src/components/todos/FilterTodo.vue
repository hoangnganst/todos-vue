<template>
	<div>
		<h3>Filter</h3>
		<div class="form-wrapper">
			<div class="form-control">
				<label for="showItems">Show items</label>
				<select
					name="showItems"
					v-model="limit"
					id="showItems"
					class="form-select"
				>
					<option value="">None</option>
					<option value="200">200</option>
					<option value="100">100</option>
					<option value="50">50</option>
					<option value="10">10</option>
				</select>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'FilterTodo',
	data() {
		return {
			limit: ''
		};
	},
	methods: {
		...mapActions(['filterTodo'])
	},
	updated: function () {
		this.filterTodo(this.limit);
	}
};
</script>

<style>
.form-wrapper {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1rem;
}
.form-control {
	display: flex;
	flex-direction: column;
}
.form-select {
	padding: 10px;
	border: 1px solid #41b883;
}
</style>
