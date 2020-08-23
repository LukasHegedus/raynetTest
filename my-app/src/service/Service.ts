import * as Contracts from "Contracts"

enum HttpMethod {
    Get = "GET",
    Post = "POST",
    Put = "PUT",
    Delete = "DELETE"
}

interface IConstructor<T> {
    new(...args: any[]): T;
}

function activator<T>(constructor: IConstructor<T>, ...args: any[]): T {
    return new constructor(args);
}

export class Service {
    private static createRequestInit(method?: string, body?: any): RequestInit {
        return {
            method: HttpMethod.Get,
            headers: {
                "Authorization": "Basic bGtoZWdlZHVzQGdtYWlsLmNvbTpjcm0tMTBmNjAyYzE4ZTNkNGQyNzllNjk1NDI0NTNhMzNjNDY=",
                "X-Instance-Name": "lhraynettest"
            }
        } as RequestInit;
    }

    public static createCompanyObject(data: any): Contracts.Company {
        return new Contracts.Company({ ...data });
    }

    public static createCompanyArray(data: any[]): Contracts.Company[] {
        return data.map(companyJson => Service.createCompanyObject(companyJson));
    }

    public static createCategoryObject(data: any): Contracts.Category {
        return new Contracts.Category({ ...data });
    }

    public static createCategoryArray(data: any[]): Contracts.Category[] {
        return data.map(companyJson => Service.createCategoryObject(companyJson));
    }

    public static getCompanies(filter?: string) {
        const requestInit: RequestInit = Service.createRequestInit();

        let url: string = "/api/v2/company/";

        if (filter) {
            url = `${url}?name[LIKE_NOCASE]=%${filter}%`;
        }

        return fetch(url, requestInit)
            .then(response => Promise
                .resolve(
                    response.json()
                        .then(data => {
                            return Promise.resolve(Service.createCompanyArray(data.data))
                        }))
                )
            .catch(e => {
                throw new Error(e);
            });
    }

    public static getCategories() {
        const requestInit: RequestInit = Service.createRequestInit();

        return fetch("/api/v2/companyCategory/", requestInit)
            .then(response => Promise
                .resolve(
                    response.json()
                        .then(data => {
                            return Promise.resolve(Service.createCategoryArray(data.data))
                        }))
            )
            .catch(e => {
                throw new Error(e);
            });
    }
}