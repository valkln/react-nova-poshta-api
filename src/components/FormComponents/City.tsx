import { Button, ButtonGroup, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCity } from "../../redux/reducer";
import { actions } from "../../redux/reducer";
import { getCityResponse, getMyCity } from "../../redux/selectors";

const City = ({ formik }: any) => {
	const city = useSelector(getMyCity)
	const dispatch = useDispatch()
	const result = useSelector(getCityResponse)
	let cities = []
	if (result) {
		cities = result.map((c: any) => <Button key={c.DeliveryCity} variant="outlined" onClick={() => chooseCity(c.Present, c.DeliveryCity)}>{c.Present}</Button>)
	}
	const submit = (body: string) => {
		dispatch(getCity(body))
	}
	const chooseCity = (name: string, ref: string) => {
		dispatch(actions.setCity(name, ref))
		dispatch(actions.setCityResponse(null))
	}
	return <div>
		<TextField
			sx={{ m: 1 }}
			required
			label="Місце доставки"
			name="body"
			type='text'
			placeholder='Введіть назву населеного пункту'
			onChange={(e) => submit(e.target.value)}
			autoComplete='off'
			value={city ? city : null}
		/>
		<div>
			<ButtonGroup
				sx={{ opacity: 1 }}
				orientation="vertical">
				{cities ? cities : null}
			</ButtonGroup>
		</div>
	</div>
}
export default City