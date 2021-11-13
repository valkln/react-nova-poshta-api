import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const Takeaway = ({ formik }: any) => {
	return <div>
		<FormControl sx={{ m: 1, minWidth: 180 }}>
			<InputLabel id="demo-simple-select-autowidth-label">Місто</InputLabel>
			<Select
				required
				labelId="demo-simple-select-autowidth-label"
				id="demo-simple-select-autowidth"
				label="Місто"
				onChange={formik.handleChange}
				name='takeaway.city'>
				<MenuItem disabled value='Місто'>Місто</MenuItem>
				<MenuItem value='Київ'>Київ</MenuItem>
				<MenuItem value='Дніпро'>Дніпро</MenuItem>
				<MenuItem value='Одеса'>Одеса</MenuItem>
				<MenuItem value='Запоріжжя'>Запоріжжя</MenuItem>
				<MenuItem value='Харків'>Харків</MenuItem>
				<MenuItem value='Маріуполь'>Маріуполь</MenuItem>
			</Select>
		</FormControl>
		{formik.values.takeaway.city === 'Київ' ?
			<FormControl sx={{ m: 1, minWidth: 180 }}>
				<InputLabel id="demo-simple-select-autowidth-label">Магазин Києва</InputLabel>
				<Select
					required
					labelId="demo-simple-select-autowidth-label"
					id="demo-simple-select-autowidth"
					label="Магазин Києва"
					onChange={formik.handleChange}
					name='takeaway.shop'>
					<MenuItem disabled value='Магазин Києва'>Магазин Києва</MenuItem>
					<MenuItem value='ст. м. Вокзальна'>ст. м. Вокзальна</MenuItem>
					<MenuItem value='ст. м. Видубичи'>ст. м. Видубичи</MenuItem>
					<MenuItem value='гуртовий склад'>гуртовий склад</MenuItem>
				</Select>
			</FormControl>
			: null}
	</div>
}
export default Takeaway