import React from 'react';

const planNames = ['Startup', 'Business', 'Enterprise', 'Corporate'];

const featuresData = [
    { label: 'Basic Logo Creation', values: [false, false, false, true] },
    { label: 'Fully Functional Backend/Frontend', values: [true, true, true, true] },
    { label: 'Mobile/Desktop Responsive Design', values: [true, true, true, true] },
    { label: 'Professional Website Design', values: [true, true, true, true] },
    { label: 'Premium Theme', values: [true, true, true, true] },
    { label: 'Fast Speed', values: [true, true, true, true] },
    { label: 'Smooth Integration', values: [true, true, true, true] },
    { label: 'Server Setup', values: [true, true, true, true] },
    { label: 'DNS Management', values: [true, true, true, true] },
    { label: 'Email Setup', values: [true, true, true, true] },
    { label: 'Graphic Design Upload', values: [true, true, true, true] },
    { label: 'Graphic Design Creation', values: [false, false, true, true] },
    { label: 'Google Analytics', values: [false, false, true, true] },
    { label: 'Google Submission', values: [false, false, true, true] },
    { label: 'Basic Meta Creation', values: [false, false, true, true] },
    { label: 'Contact Form', values: [true, true, true, true] },
    { label: 'Social Media Link Integration', values: [true, true, true, true] },
    { label: '1 Hour Training Post Delivery', values: [true, true, true, true] },
    { label: 'Professional Email and Integration', values: ['2', '3', '4-5', '5-7'] },
    { label: 'Content Upload', values: [false, true, true, true] },
    { label: 'Content Creation', values: [false, false, true, true] },
    { label: 'SEO Tool Implementation', values: [false, false, true, true] },
    { label: 'Pages', values: ['4-5', '6-7', '8-10', '10-15'] },
    { label: 'Pop-up Notification', values: [true, true, true, true] },
    { label: 'Multi channel Chatbot integration', values: [false, false, false, true] },
];

const renderValue = (value: any) => {
    if (value === true) return <span className="text-green-600 text-2xl">&#10003;</span>;
    if (value === false) return <span className="text-red-500 text-2xl">&#10007;</span>;
    return <span className="text-black font-medium">{value}</span>;
};

const ServicesPlansTable = () => (
    <div className="w-full max-w-6xl mx-auto my-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Services Plans and Pricing</h2>
        <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 min-w-[800px]">
                <thead>
                    <tr>
                        <th className="bg-white text-lg font-bold text-left px-4 py-3 border-b border-gray-300">Features</th>
                        {planNames.map((plan) => (
                            <th key={plan} className="bg-white text-lg font-bold text-center px-4 py-3 border-b border-gray-300">{plan}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {featuresData.map((feature, idx) => (
                        <tr key={feature.label} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="px-4 py-2 font-medium text-black border-b border-gray-200">{feature.label}</td>
                            {feature.values.map((value, i) => (
                                <td key={i} className="px-4 py-2 text-center border-b border-gray-200">{renderValue(value)}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

export default ServicesPlansTable; 