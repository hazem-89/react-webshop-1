import React from "react";
import DetailedNavbar from "./DetailedNavbar";
import ProductBackground from "./ProductBackground";
import ProductInformationCard from "./ProductInformationCard";

function DetailedInfoPage() {
    return(
        <div>
            <DetailedNavbar />
            <ProductBackground />
            <ProductInformationCard />
        </div>
    );
}

export default DetailedInfoPage;