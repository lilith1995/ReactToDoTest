import React, { useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Layout, Row, Select } from "antd";
import ToDoType from "./components/ToDoType";

const { Header, Content } = Layout;
const { Option } = Select;

const initialState = [
	{
		id: 1,
		title: "somTitle",
		create_date: 123,
		description: "arcd",
		todo_type: "todo",
	},
	{
		id: 2,
		title: "somTitle 12",
		create_date: 123,
		description: "arcd",
		todo_type: "in_progress",
	},
	{
		id: 3,
		title: "somTitle 123",
		create_date: 123,
		description: "arcd",
		todo_type: "in_review",
	},
];


const App = () => {

	const todoTypes = {
		todo: "To Do",
		in_progress: "In Progress",
		in_review: "In Review",
		done: "Done",
	};

	const [todoList, setTodoList] = useState(initialState);
	const [sort, setSort] = useState("None");

	const changeTitle = (value, id) => {
		setTodoList(
			todoList.map((e) => e.id === id ? { ...e, title: value } : e)
		)
	}

	const addToDo = (type) => {
		setTodoList([
			...todoList,
			{
				id: (Math.random() * 1000) / 1000,
				title: "",
				create_date: 123,
				description: "arcd",
				todo_type: type,
			},
		]);
	};

	const todo_sorted = [...todoList]
	sort !== 'None' &&
		todo_sorted.sort(function (a, b) {
			if (a.title.length === 0) {
				return 1;
			}
			if (a.title < b.title) { return sort === "Accending" ? 1 : -1; }
			if (a.title > b.title) { return sort === "Decending" ? -1 : 1; }
			return 0;
		})

	const content_markup = Object.keys(todoTypes).map((type) => (
		<ToDoType
			key={type}
			column_size={24 / Object.keys(todoTypes).length}
			todo_type={type}
			title={todoTypes[type]}
			data={todo_sorted.filter((todo) => todo.todo_type === type)}
			addToDo={addToDo}
			changeTitle={changeTitle}

		/>
	));



	return (
		<Layout>
			<Header>My todo app</Header>
			<Content>
				<Row>Sort</Row>

				<Select defaultValue="None" style={{ width: 120 }} onChange={(e) => setSort(e)}>
					<Option value="None">None</Option>
					<Option value="Accending">Accending</Option>
					<Option value="Decending">Decending</Option>
				</Select>

				<Row>{content_markup}</Row>
			</Content>
		</Layout>
	);
};

export default App;
