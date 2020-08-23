import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as Contracts from "Contracts";
import React from 'react';
import { CompanyTableResource } from "./CompanyTableResources";
import * as Utils from "utils/Utils";
import "./CompanyTable.scss";

interface CompanyTableProps {
    companies: Contracts.Company[];
    categories: Contracts.Category[];
    onSelect: (company: Contracts.Company) => void;
    className?: string;
}

export const CompanyTable = (props: CompanyTableProps) => {
    const [selectedRowId, selectRowId] = React.useState<number>(null);

    let className: string = "rt-table-container";

    if (props.className) {
        className = `${className} ${props.className}`
    }

    function getStateColorStyle(catId: number): string {
        return props.categories?.find(x => x.id === catId)?.code02;
    }

    return (
        <TableContainer
            className={className}
        >
            <Table
                className="rt-table"
            >
                <TableHead
                    className="rt-table-header"
                >
                    <TableRow
                        className="rt-table-header-row"
                    >
                        <TableCell className="rt-name-column">{CompanyTableResource.NameColumnTitle}</TableCell>
                        <TableCell className="rt-state-column">{CompanyTableResource.StateColumnTitle}</TableCell>
                        <TableCell className="rt-role-column">{CompanyTableResource.RoleColumnTitle}</TableCell>
                        <TableCell className="rt-rating-column">{CompanyTableResource.RatingColumnTitle}</TableCell>
                        <TableCell className="rt-owner-column">{CompanyTableResource.OwnerColumnTitle}</TableCell>
                        <TableCell className="rt-regNumber-column">{CompanyTableResource.RegNumberColumnTitle}</TableCell>
                        <TableCell className="rt-city-column">{CompanyTableResource.CityColumnTitle}</TableCell>
                        <TableCell className="rt-category-column">{CompanyTableResource.CategoryColumnTitle}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody
                    className="rt-table-body"
                >
                    {props.companies?.map((company) => (
                        <TableRow
                            key={company.id}
                            onClick={() => {
                                selectRowId(company.id);
                                props.onSelect(company);
                            }}
                            className={`${selectedRowId === company.id ? "rt-table-row rt-table-row-selected" : "rt-table-row"}`}
                        >
                            <TableCell className="rt-name-column">{company.name}</TableCell>
                            <TableCell className={`rt-state-column ${company.state}`}>{Utils.getStateText(company.state)}</TableCell>
                            <TableCell className="rt-role-column">{Utils.getRoleText(company.role)}</TableCell>
                            <TableCell className="rt-rating-column">{company.rating}</TableCell>
                            <TableCell className="rt-owner-column">{company.owner?.fullName}</TableCell>
                            <TableCell className="rt-regNumber-column">{company.regNumber}</TableCell>
                            <TableCell className="rt-city-column">{company.primaryAddress?.address?.city}</TableCell>
                            <TableCell className="rt-category-column">
                                <span
                                    className="rt-category"
                                    style={{ backgroundColor: `#${getStateColorStyle(company.category?.id)}` }}
                                >
                                    {company.category?.value}
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}