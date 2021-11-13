import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { getOrderData } from "../redux/selectors";

const DataPage = () => {
	const orderdata = useSelector(getOrderData)
	if (!orderdata) return null
	else return <Box
		sx={{
			backgroundColor: 'white',
			px: 3,
			py: 1,
		}}>
		<Typography variant='h4'>Результат:</Typography>
		<Typography>Покупець: {orderdata.clientData.firstName} {orderdata.clientData.lastName}</Typography>
		<Typography>Телефон: {orderdata.clientData.phoneNumber} </Typography>
		{orderdata.recipientData.firstName ? <>
			<Typography>Отримувач: {orderdata.recipientData.firstName} {orderdata.recipientData.lastName}</Typography>
		</> : null}
		{orderdata.recipientData.phoneNumber ? <>
			<Typography>Телефон отримувача: {orderdata.recipientData.phoneNumber} </Typography>
		</> : null}
		<Typography>Спосіб доставки: {orderdata.deliveryMethod} </Typography>
		{orderdata.deliveryMethod === 'Нова Пошта' ? <>
			<Typography>Спосіб оплати: {orderdata.paymentMethod} </Typography>
			<Typography>Ваше місто: {orderdata.city}</Typography>
			<Typography>Відділення: {orderdata.warehouse} </Typography>
		</> : null}
		{orderdata.deliveryMethod === 'Самовивіз' ? <>
			<Typography>Місто: {orderdata.takeaway.city} </Typography>
			{orderdata.takeaway.shop ? <Typography>Магазин: {orderdata.takeaway.shop} </Typography> : null}
		</> : null}
		{orderdata.deliveryMethod === "Доставка кур'єром" ? <>
			<Typography>Адреса доставки: {orderdata.courierAddress} </Typography>
		</> : null}
	</Box>
}
export default DataPage