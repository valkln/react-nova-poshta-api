import { AppStateType } from "./store"

export const getCityResponse = (state: AppStateType) => {
	return state.novaposhta.cityResponse
}
export const getMyCity = (state: AppStateType) => {
	return state.novaposhta.city
}
export const getMyWarehouse = (state: AppStateType) => {
	return state.novaposhta.warehouse
}
export const getCityRef = (state: AppStateType) => {
	return state.novaposhta.cityRef
}
export const getWarehouseResponse = (state: AppStateType) => {
	return state.novaposhta.warehouseResponse
}