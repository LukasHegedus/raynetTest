import { CompanyTable } from "components/companyTable/CompanyTable";
import * as Contracts from "Contracts";
import React from 'react';
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { loadCompanies } from "store/actions/CompanyActions";
import { ApplicationState } from "store/index";
import "./CompanyView.scss";
import { CompanyDetail } from "components/companyDetail/CompanyDetail";
import { Service } from "service/Service";
import { CompanyViewResource } from "views/companyView/CompanyViewResources";


interface CompanyTableProps {
    companies: Contracts.Company[];
    loadCompanies: (filter?: string) => void;
}

interface CompanyTableState {
    selectedCompany: Contracts.Company;
    categories: Contracts.Category[];
    filterValue: string;
}

class CompanyView extends React.Component<CompanyTableProps, CompanyTableState>  {
    constructor(props: CompanyTableProps) {
        super(props);

        this.state = {
            selectedCompany: null,
            categories: [],
            filterValue: ""
        };
    }

    public componentDidMount() {
        this.props.loadCompanies();
        this.loadCategories();
    }

    private async loadCategories() {
        try {
            this.setState({
                categories: await Service.getCategories()
            });
        } catch (e) {
            console.error(e);
        }
    }

    public render(): JSX.Element {
        return (
            <div className="rt-company-view">
                <h1>
                    {CompanyViewResource.viewTitle}
                </h1>

                <div className="rt-company-view-filter">
                    <input
                        className="rt-company-view-filter-input"
                        value={this.state.filterValue}
                        onChange={(e) => {
                            this.setState({
                                filterValue: e.target.value
                            }, () => {
                                this.props.loadCompanies(this.state.filterValue);
                            });
                        }}
                    />
                </div>

                <div className="rt-company-view-presentation">
                    <CompanyTable
                        companies={this.props.companies}
                        categories={this.state.categories}
                        className="rt-company-table"
                        onSelect={(company) => this.setState({ selectedCompany: company })}
                    />

                    <CompanyDetail
                        company={this.state.selectedCompany}
                        categories={this.state.categories}
                        className="rt-company-detail"
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        companies: state.companyStore.companies
    };
}

const mapDispathToProps = (dispatch: Dispatch) => {
    return {
        loadCompanies: (filter?: string) => {
            dispatch(loadCompanies(filter))
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(CompanyView);