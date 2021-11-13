import { Button, Checkbox, Divider, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import { actions } from "../redux/reducer";
import { getMyCity, getMyWarehouse } from "../redux/selectors";
import City from "./FormComponents/City";
import ClientData from "./FormComponents/ClentData";
import RecipientData from "./FormComponents/RecipientData";
import Takeaway from "./FormComponents/Takeaway";
import Warehouse from "./FormComponents/Warehouse";
const OrderForm = () => {
	const city = useSelector(getMyCity)
	const warehouse = useSelector(getMyWarehouse)
	const dispatch = useDispatch()
	const formik = useFormik({
		initialValues: {
			deliveryMethod: '',
			clientData: {
				lastName: '',
				firstName: '',
				phoneNumber: '',
			},
			customRecipient: false,
			recipientData: {
				lastName: '',
				firstName: '',
				phoneNumber: '',
			},
			courierAddress: '',
			takeaway: {
				shop: '',
				city: ''
			},
			paymentMethod: ''
		},
		validationSchema: Yup.object().shape({
			clientData: Yup.object().shape({
				lastName: Yup.string().required(),
				firstName: Yup.string().required(),
				phoneNumber: Yup.string().required().min(10)
			}),
			deliveryMethod: Yup.string().required(),
			recipientData: Yup.object().shape({
				phoneNumber: Yup.string().min(10)
			}),
		}),
		onSubmit: values => {
			if (city && warehouse) {
				let orderdata = { city, warehouse, ...values }
				console.log(orderdata)
				dispatch(actions.setOrderData(orderdata))
			} else {
				let orderdata = { city: null, warehouse: null, ...values }
				console.log(orderdata)
				dispatch(actions.setOrderData(orderdata))
			}
		},
	});
	return (
		<Box component='form' onSubmit={formik.handleSubmit} >
			<Typography variant='h4'>Оформлення замовлення</Typography>
			<FormControl sx={{ m: 1, minWidth: 180 }}>
				<InputLabel id="demo-simple-select-autowidth-label">Спосіб доставки</InputLabel>
				<Select
					error={Boolean(formik.touched.deliveryMethod && formik.errors.deliveryMethod)}
					required
					defaultValue='Спосіб доставки'
					labelId="demo-simple-select-autowidth-label"
					id="demo-simple-select-autowidth"
					label="Спосіб доставки"
					onChange={formik.handleChange}
					name='deliveryMethod'>
					<MenuItem disabled value="Спосіб доставки">
						Спосіб доставки
					</MenuItem>
					<MenuItem value='Нова Пошта'>Нова Пошта</MenuItem>
					<MenuItem value='Самовивіз'>Самовивіз</MenuItem>
					<MenuItem value="Доставка кур'єром" >Доставка кур'єром</MenuItem>
				</Select>
			</FormControl>
			<Divider />
			<ClientData formik={formik} />
			<Box />
			<FormControlLabel control={<Checkbox
				onChange={formik.handleChange}
				checked={formik.values.customRecipient}
				name='customRecipient' />} label="Отримувач - інша людина" />
			<Box />
			{formik.values.customRecipient ? <RecipientData formik={formik} /> : null
			}
			<Divider />
			< Box />
			{
				formik.values.deliveryMethod === "Доставка кур'єром" ?
					<div>
						<TextField
							onChange={formik.handleChange}
							value={formik.values.courierAddress}
							id="outlined-basic"
							name='courierAddress'
							label="Адреса Доставки"
							variant="outlined" />
					</div> : null
			}
			{formik.values.deliveryMethod === "Нова Пошта" ? <div>
				<FormControl sx={{ m: 1, minWidth: 180 }}>
					<InputLabel id="demo-simple-select-autowidth-label">Спосіб оплати</InputLabel>
					<Select
						required
						defaultValue='Спосіб оплати'
						labelId="demo-simple-select-autowidth-label"
						id="demo-simple-select-autowidth"
						label="Спосіб оплати"
						onChange={formik.handleChange}
						name='paymentMethod'>
						<MenuItem disabled value="Спосіб оплати">
							Спосіб оплати
						</MenuItem>
						<MenuItem value='Картою по Liqpay'>Картою по Liqpay</MenuItem>
						<MenuItem value='На банківський рахунок'>На банківський рахунок</MenuItem>
						<MenuItem disabled value="Накладений платіж" >Накладений платіж</MenuItem>
					</Select>
				</FormControl>
				<Divider />
				<City />
				<Warehouse />
			</div> : null
			}
			{formik.values.deliveryMethod === "Самовивіз" ? <Takeaway formik={formik} /> : null}
			<Divider />
			< Button variant="contained" type='submit' > Створити замовлення</Button >
		</Box >
	);
}

export default OrderForm