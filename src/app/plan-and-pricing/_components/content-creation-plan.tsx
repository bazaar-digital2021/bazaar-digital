import React from 'react';
import Link from 'next/link';

// Define the plan interface for type safety
interface Plan {
    id: string;
    name: string;
    color: string;
    price: string;
    videoCount: number;
    buttonColor: string;
    atLocation?: boolean;
    description?: string;
}

// Product Shoot Plan interface
interface ProductShootPlan {
    id: string;
    title: string;
    planName: string;
    price: string;
    description: string;
    buttonColor: string;
}

// Array of plan data that can be easily modified
const plans: Plan[] = [
    {
        id: 'bronze',
        name: 'BRONZE PLAN',
        color: 'text-amber-600',
        price: '₹ 9,999/-',
        videoCount: 5,
        buttonColor: 'bg-amber-600 hover:bg-amber-700'
    },
    {
        id: 'silver',
        name: 'SILVER PLAN',
        color: 'text-gray-500',
        price: '₹ 14,999/-',
        videoCount: 8,
        buttonColor: 'bg-gray-500 hover:bg-gray-600'
    },
    {
        id: 'gold',
        name: 'GOLD PLAN',
        color: 'text-yellow-600',
        price: '₹ 19,999/-',
        videoCount: 12,
        buttonColor: 'bg-yellow-600 hover:bg-yellow-700'
    },
    {
        id: 'platinum',
        name: 'PLATINUM PLAN',
        color: 'text-purple-700',
        price: '₹ 24,999/-',
        videoCount: 16,
        buttonColor: 'bg-purple-700 hover:bg-purple-800'
    },
    {
        id: 'diamond',
        name: 'DIAMOND PLAN',
        color: 'text-cyan-400',
        price: '₹ 29,999/-',
        videoCount: 20,
        buttonColor: 'bg-cyan-400 hover:bg-cyan-500'
    },
    {
        id: 'sapphire',
        name: 'SAPPHIRE PLAN',
        color: 'text-red-600',
        price: '₹ 49,999/-',
        videoCount: 40,
        buttonColor: 'bg-red-600 hover:bg-red-700'
    },
    {
        id: 'emerald',
        name: 'EMERALD PLAN',
        color: 'text-green-600',
        price: '₹ 99,999/-',
        videoCount: 90,
        buttonColor: 'bg-green-600 hover:bg-green-700'
    }
];

// UGC at your place plans
const locationPlans: Plan[] = [
    {
        id: 'bronze-location',
        name: 'BRONZE PLAN',
        color: 'text-amber-600',
        price: '₹ 20,999/-',
        videoCount: 4,
        buttonColor: 'bg-amber-600 hover:bg-amber-700',
        atLocation: true
    },
    {
        id: 'silver-location',
        name: 'SILVER PLAN',
        color: 'text-gray-500',
        price: '₹ 29,999/-',
        videoCount: 7,
        buttonColor: 'bg-gray-500 hover:bg-gray-600',
        atLocation: true
    },
    {
        id: 'gold-location',
        name: 'GOLD PLAN',
        color: 'text-yellow-600',
        price: '₹ 52,999/-',
        videoCount: 16,
        buttonColor: 'bg-yellow-600 hover:bg-yellow-700',
        atLocation: true
    },
    {
        id: 'diamond-location',
        name: 'DIAMOND PLAN',
        color: 'text-cyan-400',
        price: '₹ 79,999/-',
        videoCount: 30,
        buttonColor: 'bg-cyan-400 hover:bg-cyan-500',
        atLocation: true
    }
];

// Product Shoot Plans
const productShootPlans: ProductShootPlan[] = [
    {
        id: 'white-background',
        title: 'WHITE BACKGROUND PRODUCT SHOOT',
        planName: 'BASE PLAN',
        price: '₹ 500/- PER PRODUCT',
        description: '5 PICTURES PER PRODUCT • RAW DATA INCLUDED',
        buttonColor: 'bg-amber-600 hover:bg-amber-700'
    },
    {
        id: 'creative-background',
        title: 'CREATIVE BACKGROUND PRODUCT SHOOT',
        planName: 'BASE PLAN',
        price: '₹ 1,000/- PER PRODUCT',
        description: '5 PICTURES PER PRODUCT • RAW DATA INCLUDED',
        buttonColor: 'bg-amber-600 hover:bg-amber-700'
    },
    {
        id: 'model-background',
        title: 'white BACKGROUND model SHOOT',
        planName: 'BASE PLAN',
        price: '₹ 2,000/- PER PRODUCT',
        description: '5 PICTURES PER PRODUCT • RAW DATA INCLUDED',
        buttonColor: 'bg-amber-600 hover:bg-amber-700'
    },
    {
        id: 'model-background',
        title: 'CREATIVE BACKGROUND MODEL SHOOT',
        planName: 'BASE PLAN',
        price: '₹ 3,000/- PER PRODUCT',
        description: '5 PICTURES PER PRODUCT • RAW DATA INCLUDED',
        buttonColor: 'bg-amber-600 hover:bg-amber-700'
    },
];

// Outdoor Model Photoshoot Plans
const outdoorModelPlans: Plan[] = [
    {
        id: 'outdoor-bronze',
        name: 'BRONZE PLAN',
        color: 'text-amber-600',
        price: '₹ 19,999/-',
        videoCount: 5,
        buttonColor: 'bg-amber-600 hover:bg-amber-700',
        description: '5 PRODUCTS • 5 PICTURES PER PRODUCT • RAW DATA INCLUDED',
    },
    {
        id: 'outdoor-silver',
        name: 'SILVER PLAN',
        color: 'text-gray-500',
        price: '₹ 34,999/-',
        videoCount: 10,
        buttonColor: 'bg-gray-500 hover:bg-gray-600',
        description: '10 PRODUCTS • 5 PICTURES PER PRODUCT • RAW DATA INCLUDED',
    },
    {
        id: 'outdoor-gold',
        name: 'GOLD PLAN',
        color: 'text-yellow-600',
        price: '₹ 44,999/-',
        videoCount: 15,
        buttonColor: 'bg-yellow-600 hover:bg-yellow-700',
        description: '15 PRODUCTS • 5 PICTURES PER PRODUCT • RAW DATA INCLUDED',
    },
    {
        id: 'outdoor-platinum',
        name: 'PLATINUM PLAN',
        color: 'text-purple-700',
        price: '₹ 54,999/-',
        videoCount: 20,
        buttonColor: 'bg-purple-700 hover:bg-purple-800',
        description: '20 PRODUCTS • 5 PICTURES PER PRODUCT • RAW DATA INCLUDED',
    },
    {
        id: 'outdoor-diamond',
        name: 'DIAMOND PLAN',
        color: 'text-cyan-400',
        price: '₹ 74,999/-',
        videoCount: 30,
        buttonColor: 'bg-cyan-400 hover:bg-cyan-500',
        description: '30 PRODUCTS • 5 PICTURES PER PRODUCT • RAW DATA INCLUDED',
    },
    {
        id: 'outdoor-sapphire',
        name: 'SAPPHIRE PLAN',
        color: 'text-blue-600',
        price: '₹ 1,12,499/-',
        videoCount: 50,
        buttonColor: 'bg-blue-600 hover:bg-blue-700',
        description: '50 PRODUCTS • 5 PICTURES PER PRODUCT • RAW DATA INCLUDED',
    },
];

// Professional Videos Plans
const professionalVideoPlans: Plan[] = [
    {
        id: 'pro-bronze',
        name: 'BRONZE PLAN',
        color: 'text-amber-600',
        price: '₹ 14,999/-',
        videoCount: 3,
        buttonColor: 'bg-amber-600 hover:bg-amber-700',
        description: '3 PROFESSIONAL VIDEOS',
    },
    {
        id: 'pro-silver',
        name: 'SILVER PLAN',
        color: 'text-gray-500',
        price: '₹ 25,499/-',
        videoCount: 6,
        buttonColor: 'bg-gray-500 hover:bg-gray-600',
        description: '6 PROFESSIONAL VIDEOS',
    },
    {
        id: 'pro-gold',
        name: 'GOLD PLAN',
        color: 'text-yellow-600',
        price: '₹ 35,499/-',
        videoCount: 10,
        buttonColor: 'bg-yellow-600 hover:bg-yellow-700',
        description: '10 PROFESSIONAL VIDEOS',
    },
    {
        id: 'pro-platinum',
        name: 'PLATINUM PLAN',
        color: 'text-purple-700',
        price: '₹ 47,999/-',
        videoCount: 15,
        buttonColor: 'bg-purple-700 hover:bg-purple-800',
        description: '15 PROFESSIONAL VIDEOS',
    },
];

const PlanCard = ({ plan }: { plan: Plan }) => (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
        <h3 className={`text-2xl font-bold mb-3 text-primary`}>{plan.name}</h3>

        <p className="text-3xl font-bold mb-6">{plan.price}</p>

        <Link
            href={`/checkout/${plan.id}`}
            className={`bg-secondary text-white py-3 px-8 rounded-md text-lg font-semibold mb-6 transition-colors duration-300`}
        >
            Buy Now
        </Link>

        <div className="border border-gray-200 w-full py-3 text-center rounded">
            {plan.atLocation ? (
                <p className="text-lg font-medium">{plan.videoCount} UGC VIDEOS • SHOT AT YOUR LOCATION</p>
            ) : (
                <p className="text-lg font-medium">{plan.videoCount} UGC VIDEOS</p>
            )}
        </div>
    </div>
);

const ProductShootCard = ({ plan }: { plan: ProductShootPlan }) => (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md mb-16">
        <h2 className="text-3xl font-bold text-center mb-5 uppercase">{plan.title}</h2>

        <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-amber-600 mb-3">{plan.planName}</h3>
            <p className="text-3xl font-bold mb-6">{plan.price}</p>

            <Link
                href={`/checkout/${plan.id}`}
                className={`bg-secondary text-white py-3 px-12 rounded-md text-lg font-semibold transition-colors duration-300 inline-block`}
            >
                Buy Now
            </Link>
        </div>

        <div className="border border-gray-200 w-full py-4 text-center rounded">
            <p className="text-lg font-medium">{plan.description}</p>
        </div>
    </div>
);

// Extended PlanCard for outdoor model plans to show description
const OutdoorPlanCard = ({ plan }: { plan: Plan }) => (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
        <h3 className={`text-2xl font-bold mb-3 text-primary`}>{plan.name}</h3>
        <p className="text-3xl font-bold mb-6">{plan.price}</p>
        <Link
            href={`/checkout/${plan.id}`}
            className={`bg-secondary text-white py-3 px-8 rounded-md text-lg font-semibold mb-6 transition-colors duration-300`}
        >
            Buy Now
        </Link>
        <div className="border border-gray-200 w-full py-3 text-center rounded">
            <p className="text-lg font-medium">{plan.description}</p>
        </div>
    </div>
);

//Main Component

const ContentCreationPlan = () => {
    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
            <div className="mb-20">
                <h2 className="text-4xl font-bold text-center mb-12">USER GENERATED CONTENT (UGC)</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
                    {plans.map((plan) => (
                        <PlanCard key={plan.id} plan={plan} />
                    ))}
                </div>
            </div>

            <div className="mb-20">
                <h2 className="text-4xl font-bold text-center mb-12">UGC AT YOUR PLACE</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {locationPlans.map((plan) => (
                        <PlanCard key={plan.id} plan={plan} />
                    ))}
                </div>
            </div>

            <div className="mb-20">
                {productShootPlans.map((plan) => (
                    <ProductShootCard key={plan.id} plan={plan} />
                ))}
            </div>

            <div className="mb-20 container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">OUTDOOR MODEL PHOTOSHOOT</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {outdoorModelPlans.map((plan) => (
                        <OutdoorPlanCard key={plan.id} plan={plan} />
                    ))}
                </div>
            </div>

            <div className="mb-20">
                <h2 className="text-4xl font-bold text-center mb-12">PROFESSIONAL VIDEOS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {professionalVideoPlans.map((plan) => (
                        <OutdoorPlanCard key={plan.id} plan={plan} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContentCreationPlan;
