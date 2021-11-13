import { getCities, getWarehouses } from '../API/api';
import { BaseThunkType, InferActionTypes } from './store';
type Torderdata = {
	deliveryMethod: string,
	clientData: {
		lastName: string,
		firstName: string,
		phoneNumber: string,
	},
	customRecipient: boolean,
	recipientData: {
		lastName: string | null,
		firstName: string | null,
		phoneNumber: string | null,
	},
	courierAddress: string | null,
	takeaway: {
		shop: string | null,
		city: string | null
	},
	paymentMethod: string | null,
	city: string | null,
	warehouse: string | null
}
const initialState = {
	city: '' as string,
	cityRef: '' as string,
	cityResponse: null as any,
	warehouse: null as string | null,
	warehouseResponse: null as any,
	orderdata: null as Torderdata | null
}

const poshtaReducer = (state = initialState, action: ActionTypes) => {
	switch (action.type) {
		case 'SET_CITY':
			return {
				...state, city: action.name, cityRef: action.ref
			}
		case 'SET_WAREHOUSE':
			return {
				...state, warehouse: action.warehouse
			}
		case 'SET_CITY_RESPONSE':
			return {
				...state, cityResponse: action.response
			}
		case 'SET_WAREHOUSE_RESPONSE':
			return {
				...state, warehouseResponse: action.response
			}
		case 'SET_ORDER_DATA':
			debugger
			return {
				...state, orderdata: action.data
			}
		default: return state
	}
}
export const actions = {
	setCity: (name: string, ref: string) => ({ type: 'SET_CITY', name, ref } as const),
	setWarehouse: (warehouse: string) => ({ type: 'SET_WAREHOUSE', warehouse } as const),
	setCityResponse: (response: any) => ({ type: 'SET_CITY_RESPONSE', response } as const),
	setWarehouseResponse: (response: any) => ({ type: 'SET_WAREHOUSE_RESPONSE', response } as const),
	setOrderData: (data: Torderdata) => ({ type: 'SET_ORDER_DATA', data } as const)
}
type ActionTypes = InferActionTypes<typeof actions>
type ThunkType = BaseThunkType<ActionTypes>
export const getCity = (city: string): ThunkType => async (dispatch) => {
	const res = await getCities(city)
	if (res.success) {
		dispatch(actions.setCityResponse(res.data[0].Addresses))
	}
}
export const getWarehouse = (cityRef: string, warehouse: string): ThunkType => async (dispatch) => {
	const res = await getWarehouses(cityRef, warehouse)
	if (res.success) {
		dispatch(actions.setWarehouseResponse(res.data))
	}
}

export default poshtaReducer