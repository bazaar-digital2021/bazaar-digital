import React from 'react';

const influencerPlans = [
    {
        name: 'BASE PLAN',
        price: '₹ 9999/-',
        color: 'text-green-600',
        button: 'bg-green-600 hover:bg-green-700',
        btnText: 'Get Now',
        collaborations: '6 - 8 Collaborations',
    },
    {
        name: 'MIDDLE PLAN',
        price: '₹ 14999/-',
        color: 'text-sky-500',
        button: 'bg-sky-400 hover:bg-sky-500',
        btnText: 'Get Now',
        collaborations: '10 - 12 Collaborations',
    },
    {
        name: 'ULTIMATE PLAN',
        price: '₹ 19999/-',
        color: 'text-rose-400',
        button: 'bg-rose-400 hover:bg-rose-500',
        btnText: 'Get Now',
        collaborations: '15 - 17 Collaborations',
    },
];

const InfluencerMarketingPlansTable = () => (
    <div className="w-full max-w-6xl mx-auto my-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">INFLUENCER MARKETING</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {influencerPlans.map((plan) => (
                <div key={plan.name} className="bg-white rounded-lg shadow border border-gray-200 flex flex-col items-center pb-6">
                    <div className="w-full text-center pt-6">
                        <span className={`block text-2xl font-bold mb-2 ${plan.color}`}>{plan.name}</span>
                        <span className="block text-3xl font-bold mb-2">{plan.price}</span>
                        <button className={`${plan.button} text-white font-semibold py-2 px-8 rounded mb-4`}>{plan.btnText}</button>
                    </div>
                    <div className="w-full px-6">
                        <div className="border border-gray-300 rounded-lg py-6 text-center text-xl font-semibold mt-4">
                            {plan.collaborations}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default InfluencerMarketingPlansTable; 