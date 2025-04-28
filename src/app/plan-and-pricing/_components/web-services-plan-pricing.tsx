import React from 'react';
import ServicesPlansTable from './web-services/services-plans-table';
import PortfolioPlansTable from './web-services/portfolio-plans-table';
import EcommercePlansTable from './web-services/ecommerce-plans-table';

const WebServicesPlanPricing = () => (
    <div>
        <ServicesPlansTable />
        <PortfolioPlansTable />
        <EcommercePlansTable />
        {/* Add more web-services sections here as needed */}
    </div>
);

export default WebServicesPlanPricing;
