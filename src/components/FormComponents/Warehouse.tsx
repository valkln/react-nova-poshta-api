import React from "react";
import { Button, ButtonGroup, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getCityRef, getMyCity, getMyWarehouse, getWarehouseResponse } from "../../redux/selectors";
import { actions, getWarehouse } from "../../redux/reducer";

const Warehouse = () => {
	const myCity = useSelector(getMyCity)
	const myWarehouse = useSelector(getMyWarehouse)
	const dispatch = useDispatch()
	const result = useSelector(getWarehouseResponse)
	let warehouses = []
	let ref = useSelector(getCityRef)
	if (result) {
		warehouses = result.map((c: any) => <Button
			key={c.Ref}
			variant="outlined"
			onClick={() => chooseWarehouse(c.Description)}>
			{c.Description}
		</Button>)
	}
	const submit = (warehouse: string) => {
		dispatch(getWarehouse(ref, warehouse))
	}
	const chooseWarehouse = (name: string) => {
		dispatch(actions.setWarehouse(name))
		dispatch(actions.setWarehouseResponse(null))
	}
	return <div>
		<TextField
			sx={{ m: 1 }}
			required
			label="Відділення"
			name="body"
			type='text'
			placeholder='Введіть номер відділення'
			onChange={(e) => submit(e.target.value)}
			autoComplete='off'
			value={myWarehouse ? myWarehouse : null}
			disabled={!myCity}
		/>
		<div>
			<ButtonGroup
				orientation="vertical">
				{warehouses ? warehouses : null}
			</ButtonGroup>
		</div>
	</div>
}
export default Warehouse