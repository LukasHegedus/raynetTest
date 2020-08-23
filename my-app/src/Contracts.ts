//export enum CompanyState {
//    actual = "B_ACTUAL",
//    potential = "A_POTENTIAL",
//    delayed = "C_DEFERRED",
//    unattractive = "D_UNATTRACTIVE"
//}

//export enum CompanyRole {
//    subsciber = "A_SUBSCRIBER",
//    partner = "B_PARTNER",
//    supplier = "C_SUPPLIER",
//    competitor = "D_RIVAL",
//    own = "E_OWN"
//}

//export enum CompanyRating {
//    A = "A",
//    B = "B",
//    C = "C"
//}

//export enum CompanyCategory {
//    blue,
//    yellow,
//    green
//}

//export class Company {
//    public name: string;
//    public companyState: CompanyState;
//    public companyRole: CompanyRole;
//    public companyRating: CompanyRating;
//    public companyIdentificationNumber: number;
//    public city: string;
//    public category?: CompanyCategory;

//    constructor(
//        name: string,
//        companyState: CompanyState,
//        companyRole: CompanyRole,
//        companyRating: CompanyRating,
//        companyIdentificationNumber: number,
//        city: string,
//        category: CompanyCategory
//    ) {
//        this.name = name;
//        this.companyState = companyState;
//        this.companyRole = companyRole;
//        this.companyRating = companyRating;
//        this.companyIdentificationNumber = companyIdentificationNumber;
//        this.city = city;
//        this.category = category;
//    }

//}

//export class CompanyOwner {
//    constructor(
//        id: number,
//        fullName: string
//    ) {
//        this.id = id;
//        this.fullName = fullName;
//    }

//    public id: number;
//    public fullName: string;
//}

export interface Owner {
    id: number;
    fullName: string;
}

export interface Address {
    id: number;
    city: string;
    country: string;
    countryCode: string;
    name: string;
    province?: any;
    street: string;
    zipCode: string;
    lat: number;
    lng: number;
}

export interface ContactInfo {
    primary: boolean;
    email: string;
    email2?: any;
    tel1: string;
    tel1Type?: any;
    tel2?: any;
    tel2Type?: any;
    fax?: any;
    www: string;
    otherContact?: any;
}

export interface PrimaryAddress {
    id: number;
    primary: boolean;
    contactAddress: boolean;
    address: Address;
    contactInfo: ContactInfo;
    territory?: any;
}

export interface Address2 {
    id: number;
    city: string;
    country: string;
    countryCode: string;
    name: string;
    province?: any;
    street: string;
    zipCode: string;
    lat: number;
    lng: number;
}

export interface ContactInfo2 {
    primary: boolean;
    email: string;
    email2?: any;
    tel1: string;
    tel1Type?: any;
    tel2?: any;
    tel2Type?: any;
    fax?: any;
    www: string;
    otherContact?: any;
}

export interface ContactAddress {
    id: number;
    primary: boolean;
    contactAddress: boolean;
    address: Address2;
    contactInfo: ContactInfo2;
    territory?: any;
}

export interface PaymentTerm {
    id: number;
    value: string;
}

export interface SecurityLevel {
    id: number;
    name: string;
}

export interface ICompany {
    id: number;
    name: string;
    titleBefore?: any;
    firstName?: any;
    lastName?: any;
    titleAfter?: any;
    role: string;
    state: string;
    rating: string;
    owner: Owner;
    regNumber: string;
    taxNumber: string;
    taxNumber2?: any;
    taxPayer?: any;
    primaryAddress: PrimaryAddress;
    contactAddress: ContactAddress;
    category?: any;
    turnover?: any;
    economyActivity?: any;
    companyClassification1?: any;
    companyClassification2?: any;
    companyClassification3?: any;
    paymentTerm: PaymentTerm;
    contactSource?: any;
    birthday: string;
    notice: string;
    tags: any[];
    customFields?: any;
    attachments?: any;
    //    rowInfo.createdAt: string;
    //rowInfo.createdBy: string;
    //rowInfo.updatedAt ?: any;
    //rowInfo.updatedBy ?: any;
    //rowInfo.rowAccess ?: any;
    //rowInfo.rowState ?: any;
    securityLevel: SecurityLevel;
    inlineGdpr: any[];
    _version: number;
}

export class Company implements ICompany {
    id: number;
    name: string;
    titleBefore?: any;
    firstName?: any;
    lastName?: any;
    titleAfter?: any;
    role: string;
    state: string;
    rating: string;
    owner: Owner;
    regNumber: string;
    taxNumber: string;
    taxNumber2?: any;
    taxPayer?: any;
    primaryAddress: PrimaryAddress;
    contactAddress: ContactAddress;
    category?: any;
    turnover?: any;
    economyActivity?: any;
    companyClassification1?: any;
    companyClassification2?: any;
    companyClassification3?: any;
    paymentTerm: PaymentTerm;
    contactSource?: any;
    birthday: string;
    notice: string;
    tags: any[];
    customFields?: any;
    attachments?: any;
    //rowInfo.createdAt: string;
    //rowInfo.createdBy: string;
    //rowInfo.updatedAt ?: any;
    //rowInfo.updatedBy ?: any;
    //rowInfo.rowAccess ?: any;
    //rowInfo.rowState ?: any;
    securityLevel: SecurityLevel;
    inlineGdpr: any[];
    _version: number;

    constructor(data: ICompany) {
        this.id = data.id;
        this.name = data.name;
        this.titleBefore = data.titleBefore;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.titleAfter = data.titleAfter;
        this.role = data.role;
        this.state = data.state;
        this.rating = data.rating;
        this.owner = data.owner;
        this.regNumber = data.regNumber;
        this.taxNumber = data.taxNumber;
        this.taxNumber2 = data.taxNumber2;
        this.taxPayer = data.taxPayer;
        this.primaryAddress = data.primaryAddress;
        this.contactAddress = data.contactAddress;
        this.category = data.category;
        this.turnover = data.turnover;
        this.economyActivity = data.economyActivity;
        this.companyClassification1 = data.companyClassification1;
        this.companyClassification2 = data.companyClassification2;
        this.companyClassification3 = data.companyClassification3;
        this.paymentTerm = data.paymentTerm;
        this.contactSource = data.contactSource;
        this.birthday = data.birthday;
        this.notice = data.notice;
        this.tags = data.tags;
        this.customFields = data.customFields;
        this.attachments = data.attachments;
        this.securityLevel = data.securityLevel;
        this.inlineGdpr = data.inlineGdpr;
        this._version = data._version;
    }
}

export interface ICategory {
    id: number;
    code01: string;
    code02: string;
}

export class Category implements ICategory {
    id: number;
    code01: string;
    code02: string;

    constructor(data: ICategory) {
        this.id = data.id;
        this.code01 = data.code01;
        this.code02 = data.code02;
    }
}

