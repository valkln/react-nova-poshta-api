import { TextField, Typography } from "@mui/material";
import { getIn } from "formik";
import React from "react";
const ClientData = ({ formik }: any) => {
	return <div>
		<Typography>Інформация про покупця</Typography>
		<TextField
			sx={{ m: 1 }}
			required
			error={getIn(formik.touched, 'clientData.lastName') && getIn(formik.errors, 'clientData.lastName')}
			onChange={formik.handleChange}
			onBlur={formik.handleBlur}
			value={formik.values.clientData.lastName}
			name='clientData.lastName'
			id="outlined-basic"
			label="Прізвище"
			variant="outlined" />
		<TextField
			sx={{ m: 1 }}
			required
			error={getIn(formik.touched, 'clientData.firstName') && getIn(formik.errors, 'clientData.firstName')}
			onChange={formik.handleChange}
			onBlur={formik.handleBlur}
			value={formik.values.clientData.firstName}
			name='clientData.firstName'
			id="outlined-basic"
			label="Ім'я"
			variant="outlined" />
		<TextField
			sx={{ m: 1 }}
			required
			error={getIn(formik.touched, 'clientData.phoneNumber') && getIn(formik.errors, 'clientData.phoneNumber')}
			onChange={formik.handleChange}
			onBlur={formik.handleBlur}
			value={formik.values.clientData.phoneNumber}
			name='clientData.phoneNumber'
			id="outlined-basic"
			label="Номер телефону"
			variant="outlined" />
	</div>
}
export default ClientData