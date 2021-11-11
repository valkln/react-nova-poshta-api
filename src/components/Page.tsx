import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getMyCity, getMyWarehouse } from "../redux/selectors";

const Page = () => {
	const city = useSelector(getMyCity)
	const warehouse = useSelector(getMyWarehouse)
	return <div>
		<Typography>Ваше місто: {city}</Typography>
		<Typography>Відділення: {warehouse} </Typography>
	</div>
}
export default Page