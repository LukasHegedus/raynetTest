import { LoadCompaniesActionType } from "store/CompanyStore";
import { Service } from "service/Service";
import { AnyAction } from "redux";

export function loadCompanies(filter?: string): AnyAction {
    return {
        type: LoadCompaniesActionType,
        payload: new Promise((resolve) => {
            Service.getCompanies(filter)
                .then(companies => resolve(companies))
                .catch(e => console.error(e));
        })
    }
}