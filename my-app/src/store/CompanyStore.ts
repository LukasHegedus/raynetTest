import { AnyAction } from "redux";
import * as Contracts from "Contracts";

export interface CompanyState {
    companies: Contracts.Company[];
};

const initialState: CompanyState = {
    companies: []
};

export const LoadCompaniesActionType: string = "LOAD_COMPANIES";
export const GetCompanyActionType: string = "GET_COMPANY";

export const reducer = (state: CompanyState = initialState, action: AnyAction) => {
    switch (action.type) {
        case `${LoadCompaniesActionType}_FULFILLED`:
            state = {
                ...state,
                companies: action.payload
            }
            break;
        case GetCompanyActionType:
            break;
        default:
            break;
    }

    return state;
}