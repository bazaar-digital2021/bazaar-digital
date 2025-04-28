import React from 'react';

const googleAdsPlans = [
    {
        name: 'FOUR CLASS PLAN',
        price: '₹ 12999/-',
        color: 'text-teal-500',
        button: 'bg-teal-500 hover:bg-teal-600',
        btnText: 'Get Now',
        features: [
            { label: 'Ads Management', value: 'Up to 2 campaign' },
            { label: 'Ads design and creation', value: 'Yes' },
            { label: 'Google shopping ads', value: 'Yes' },
            { label: 'Ad optimization', value: 'Yes' },
            { label: 'Campaign strategy and Set Up', value: 'Yes' },
            { label: 'Campaign monitoring', value: 'Yes' },
            { label: "Ad's Monitoring and Management", value: 'Yes' },
            { label: 'Ads setup', value: 'Yes' },
            { label: 'Audience Reach', value: 'Yes' },
            { label: "Ad's Running time", value: 'As per the Client' },
            { label: 'Ad Budget Extra', value: 'Provided by Client' },
        ],
    },
    {
        name: 'SIX CLASS PLAN',
        price: '₹ 14999/-',
        color: 'text-orange-400',
        button: 'bg-orange-400 hover:bg-orange-500',
        btnText: 'Get Now',
        features: [
            { label: 'Ads Management', value: 'Up to 6 campaign' },
            { label: 'Ads design and creation', value: 'Yes' },
            { label: 'Google shopping ads', value: 'Yes' },
            { label: 'Ad optimization', value: 'Yes' },
            { label: 'Campaign strategy and Set Up', value: 'Yes' },
            { label: 'Campaign monitoring', value: 'Yes' },
            { label: "Ad's Monitoring and Management", value: 'Yes' },
            { label: 'Ads setup', value: 'Yes' },
            { label: 'Audience Reach', value: 'Yes' },
            { label: "Ad's Running time", value: 'As per the Client' },
            { label: 'Ad Budget Extra', value: 'Provided by Client' },
        ],
    },
    {
        name: 'TEN CLASS PLAN',
        price: '₹ 19999/-',
        color: 'text-yellow-600',
        button: 'bg-yellow-600 hover:bg-yellow-700',
        btnText: 'Get Now',
        features: [
            { label: 'Ads Management', value: 'Up to 15 campaign' },
            { label: 'Ads design and creation', value: 'Yes' },
            { label: 'Google shopping ads', value: 'Yes' },
            { label: 'Ad optimization', value: 'Yes' },
            { label: 'Campaign strategy and Set Up', value: 'Yes' },
            { label: 'Campaign monitoring', value: 'Yes' },
            { label: "Ad's Monitoring and Management", value: 'Yes' },
            { label: 'Ads setup', value: 'Yes' },
            { label: 'Audience Reach', value: 'Yes' },
            { label: "Ad's Running time", value: 'As per the Client' },
            { label: 'Ad Budget Extra', value: 'Provided by Client' },
        ],
    },
];

const GoogleAdsPlansTable = () => (
    <div className="w-full max-w-6xl mx-auto my-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">GOOGLE ADS MANAGEMENT PLANS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {googleAdsPlans.map((plan, idx) => (
                <div key={plan.name} className="bg-white rounded-lg shadow border border-gray-200 flex flex-col items-center pb-6">
                    <div className="w-full text-center pt-6">
                        <span className={`block text-2xl font-bold mb-2 ${plan.color}`}>{plan.name}</span>
                        <span className="block text-3xl font-bold mb-2">{plan.price}</span>
                        <button className={`${plan.button} text-white font-semibold py-2 px-8 rounded mb-4`}>{plan.btnText}</button>
                    </div>
                    <table className="w-full mt-2">
                        <tbody>
                            {plan.features.map((feature, i) => (
                                <tr key={feature.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-4 py-2 font-medium text-black border-b border-gray-200 w-1/2">{feature.label}</td>
                                    <td className="px-4 py-2 text-center border-b border-gray-200 w-1/2 font-medium text-black">{feature.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    </div>
);

export default GoogleAdsPlansTable; 