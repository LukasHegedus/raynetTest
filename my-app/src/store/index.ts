import * as CompanyStore from "store/CompanyStore";

export interface ApplicationState {
    companyStore: CompanyStore.CompanyState
};

export const reducers = {
    companyStore: CompanyStore.reducer
};