//

import axios from "axios";

const instance = axios.create({
	baseURL: `https://api.novaposhta.ua/v2.0/json/`
})

export const getCities = (city) => instance.post('Address/searchSettlements/', {
	apiKey: 'b4dc39c52223719d008b63284430fead',
	modelName: "Address",
	calledMethod: "searchSettlements",
	methodProperties: {
		'CityName': city,
		'Limit': 5
	}
}).then(res => res.data);

export const getWarehouses = (ref, warehouse) => instance.post('AddressGeneral/getWarehouses/', {
	apiKey: 'b4dc39c52223719d008b63284430fead',
	modelName: "AddressGeneral",
	calledMethod: "getWarehouses",
	methodProperties: {
		"CityRef": ref,
		"FindByString": warehouse
	}
}).then(res => res.data);