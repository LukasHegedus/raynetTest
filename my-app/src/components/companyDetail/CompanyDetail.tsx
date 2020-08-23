import * as Contracts from "Contracts";
import React from 'react';
import * as Utils from "utils/Utils";
import "./CompanyDetail.scss";
import { CompanyDetailResource } from "./CompanyDetailResources";

interface CompanyDetailProps {
    company: Contracts.Company;
    categories: Contracts.Category[];
    className?: string;
}

export const CompanyDetail = (props: CompanyDetailProps) => {
    function getStateColorStyle(catId: number): string {
        return props.categories?.find(x => x.id === catId)?.code02;
    }

    function openMapInNewWindow(lat: number, lng: number) {
        window.open(`https://www.google.com/maps/place/${lat},${lng}`);
    }

    return (
        <div
            className={props.className || ""}
        >
            {props.company && <div className="rt-company-detail-wrapper">
                <div
                    className="rt-company-detail-header"
                >
                    {props.company?.category?.value &&
                        <span
                            className="rt-company-detail-category"
                            style={{ backgroundColor: `#${getStateColorStyle(props.company?.category?.id)}` }}
                        >
                            {props.company?.category?.value}
                        </span>}

                    &nbsp;

                    <span className={`rt-company-detail-header-text ${props.company?.state}`}>
                        {Utils.getStateText(props.company?.state)}
                        &nbsp;
                        {Utils.getRoleText(props.company?.role)}
                    </span>

                </div>

                <h2
                    className="rt-company-detail-name"
                >
                    {props.company?.name}
                </h2>

                <div
                    className="rt-company-detail-info"
                >
                    <span>{props.company?.regNumber}</span>

                    <span>{props.company?.contactAddress?.address?.street}</span>

                    <span>{props.company?.contactAddress?.address?.zipCode} {props.company?.contactAddress?.address?.city}</span>

                    <span>{props.company?.contactAddress?.address?.country}</span>

                    {props.company.contactAddress?.address?.lat && props.company.contactAddress?.address?.lng &&
                        <span
                            onClick={() => openMapInNewWindow(props.company.contactAddress?.address?.lat, props.company.contactAddress?.address?.lng)}
                            className="rt-map-link"
                        >
                            {CompanyDetailResource.showOnMap}
                        </span>
                    }
                </div>

                <div
                    className="rt-company-detail-owner"
                >
                    <span>Vlastník: <strong>{props.company?.owner?.fullName}</strong></span>
                </div>
            </div>}
        </div>
    );

}