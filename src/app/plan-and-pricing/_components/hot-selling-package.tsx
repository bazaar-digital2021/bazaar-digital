
import React from 'react'
import PricingHeadingTitle from './pricing-heading-title'
import { PlanCard } from './content-creation-plan'
import { CreativeBundleTable } from './digital-marketing-pricing'

const plans = [
    {
        id: 'pro-bronze',
        name: 'BRONZE PLAN',
        price: '₹ 9,999/-',
        videoCount: 5,
        color: 'text-amber-600',
        buttonColor: 'bg-primary'
    },
    {
        id: 'pro-silver',
        name: 'SILVER PLAN',
        price: '₹ 14,999/-',
        videoCount: 8,
        color: 'text-amber-600',
        buttonColor: 'bg-primary'
    },


]

const HotSellingPackage = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
                {plans.map((plan) => (
                    <PlanCard key={plan.id} plan={plan} />
                ))}
            </div>
            <CreativeBundleTable />
        </div>
    )
}

export default HotSellingPackage
