import { Button, Tooltip, Col, Input } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const ToDoType = (props) => {
	const markup = props.data.map((data) => (
		<Input placeholder="Enter the text" value={data.title} key={data.id}
			onChange={(e) => props.changeTitle(e.target.value, data.id)}
		/>
	));

	return (
		<Col span={props.column_size}>
			<h2>{props.title}</h2>
			<div>{markup}</div>

			<Tooltip title={"Add " + props.title + " ToDo"}>
				<Button
					type="primary"
					shape="circle"
					icon={<PlusCircleOutlined />}
					onClick={() => props.addToDo(props.todo_type)}
				/>
			</Tooltip>
		</Col>
	);
};
export default ToDoType;
