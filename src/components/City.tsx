import { Autocomplete, Button, ButtonGroup, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCity } from "../redux/reducer";
import { actions } from "../redux/reducer";
import { getCityResponse, getMyCity } from "../redux/selectors";

const City = () => {
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
	return <>
		<Box sx={{
			width: 600,
			height: 10,
			padding: 8,
			backgroundColor: 'white',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		}} >
			<TextField
				label="Місце доставки"
				name="body"
				type='text'
				placeholder='Введіть назву населеного пункту'
				onChange={(e) => submit(e.target.value)}
				autoComplete='off'
				value={city ? city : null}
			/>
			<ButtonGroup
				orientation="vertical">
				{cities ? cities : null}
			</ButtonGroup>
		</Box >
	</>
}
export default City