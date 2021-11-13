import { TextField, Typography } from "@mui/material";
import React from "react";
const ClientData = ({ formik }: any) => {
	return <div>
		<Typography>Інформация про покупця</Typography>
		<TextField
			sx={{ m: 1 }}
			required
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