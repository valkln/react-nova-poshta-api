import { TextField, Typography } from "@mui/material";
import { getIn } from "formik";
import React from "react";
const RecipientData = ({ formik }: any) => {
	debugger
	return <div>
		<Typography>Інформация про отримувача</Typography>
		<TextField
			sx={{ m: 1 }}
			onChange={formik.handleChange}
			onBlur={formik.handleBlur}
			value={formik.values.recipientData.lastName}
			name='recipientData.lastName'
			id="outlined-basic"
			label="Прізвище"
			variant="outlined" />
		<TextField
			sx={{ m: 1 }}
			onChange={formik.handleChange}
			onBlur={formik.handleBlur}
			value={formik.values.recipientData.firstName}
			name='recipientData.firstName'
			id="outlined-basic"
			label="Ім'я"
			variant="outlined" />
		<TextField
			sx={{ m: 1 }}
			error={getIn(formik.touched, 'recipientData.phoneNumber') && getIn(formik.errors, 'recipientData.phoneNumber')}
			onChange={formik.handleChange}
			onBlur={formik.handleBlur}
			value={formik.values.recipientData.phoneNumber}
			name='recipientData.phoneNumber'
			id="outlined-basic"
			label="Номер телефону"
			variant="outlined" />
	</div>
}
export default RecipientData