import axios from "axios";

const instance = axios.create({
	baseURL: `https://api.novaposhta.ua/v2.0/json/`
})

export const getCities = (city: string) => instance.post('Address/searchSettlements/', {
	apiKey: 'b4dc39c52223719d008b63284430fead',
	modelName: "Address",
	calledMethod: "searchSettlements",
	methodProperties: {
		'CityName': city,
		'Limit': 5
	}
}).then(res => res.data);

export const getWarehouses = (ref: string, warehouse: string) => instance.post('AddressGeneral/getWarehouses/', {
	apiKey: 'b4dc39c52223719d008b63284430fead',
	modelName: "AddressGeneral",
	calledMethod: "getWarehouses",
	methodProperties: {
		"CityRef": ref,
		"FindByString": warehouse,
		"Page": 1,
		"Limit": 5
	}
}).then(res => res.data);