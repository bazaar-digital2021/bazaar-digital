import React from 'react';
import clsx from 'clsx';
import ProfessionalBundleTable from './digital-marketing/professional-bundel';
import FacebookAdsPlansTable from './digital-marketing/facebook-ads-plans-table';
import GoogleAdsPlansTable from './digital-marketing/google-ads-plans-table';
import InfluencerMarketingPlansTable from './digital-marketing/influencer-marketing-plans-table';

// Plan data for the header
const plans = [
    {
        name: 'Startup',
        price: '₹ 14999/-',
        color: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700',
        btnText: 'Get Now',
    },
    {
        name: 'Business',
        price: '₹ 19999/-',
        color: 'text-green-600',
        button: 'bg-green-600 hover:bg-green-700',
        btnText: 'Get Now',
    },
    {
        name: 'Enterprise',
        price: '₹ 29999/-',
        color: 'text-sky-400',
        button: 'bg-sky-400 hover:bg-sky-500',
        btnText: 'Get Now',
    },
    {
        name: 'Platinum',
        price: '₹ 34999/-',
        color: 'text-teal-500',
        button: 'bg-teal-500 hover:bg-teal-600',
        btnText: 'Get Now',
    },
    {
        name: 'Master',
        price: '₹ 49999/-',
        color: 'text-orange-400',
        button: 'bg-orange-400 hover:bg-orange-500',
        btnText: 'Get Now',
    },
];

// Instagram features data
const instagramFeatures = [
    { label: 'Post', values: ['15/M', '15/M', '18/M', '20/M', '20/M'] },
    { label: 'Reels', values: ['5/M', '5/M', '5/M', '5/M', '5/M'] },
    { label: 'Stories uploading', values: ['20/M', '20/M', '23/M', '25/M', '25/M'] },
    { label: 'Hashtags Research', values: [true, true, true, true, true] },
    { label: 'Post Creative Designing', values: [true, true, true, true, true] },
    { label: 'Audience Research', values: [true, true, true, true, true] },
    { label: 'Post Boosting', values: [true, true, true, true, true] },
    { label: 'Instagram Ads (META)', values: [false, false, true, true, true] },
];

// Facebook features data
const facebookFeatures = [
    { label: 'Post(including reels)', values: ['15/M', '15/M', '18/M', '20/M', '20/M'] },
    { label: 'Reels', values: ['5/M', '5/M', '5/M', '5/M', '5/M'] },
    { label: 'Stories uploading', values: ['20/M', '20/M', '23/M', '25/M', '25/M'] },
    { label: 'Post Creative Designing', values: [true, true, true, true, true] },
    { label: 'Facebook Business Manager Set Up', values: [true, true, true, true, true] },
    { label: 'Group Joining and Posting', values: [true, true, true, true, true] },
    { label: 'Pixel Installation', values: [false, true, true, true, true] },
    { label: 'Remarketing (Ads)', values: [false, true, true, true, true] },
    { label: 'Custom Audience Creation (Ads)', values: [false, true, true, true, true] },
    { label: 'Facebook Analytics Report Creation', values: [false, true, true, true, true] },
    { label: 'Ad Campaign Monitoring', values: [false, true, true, true, true] },
    { label: 'E-commerce ads', values: [false, true, true, true, true] },
    { label: 'Facebook Catalogue Creation', values: [false, true, true, true, true] },
    { label: 'Dynamic Ads Creation', values: [false, true, true, true, true] },
    { label: 'Customization Of Ad Placements', values: [false, true, true, true, true] },
];

// Facebook Ads features data
const facebookAdsFeatures = [
    { label: 'Ads Management', values: [false, false, 'Up to 5 campaign', 'Up to 5 campaign', 'Up to 5 campaign'] },
    { label: 'Ads design and creation', values: [false, true, true, true, true] },
    { label: 'Facebook shopping ads', values: [false, true, true, true, true] },
    { label: 'Ad optimization', values: [false, true, true, true, true] },
    { label: 'Campaign strategy and Set Up', values: [false, true, true, true, true] },
    { label: 'Campaign monitoring', values: [false, true, true, true, true] },
    {
        label:
            "Ad's Monitoring and Management",
        values: [false, false, true, true, true]
    },
    { label: 'Ads setup', values: [false, false, true, true, true] },
    { label: 'Campaign Reporting', values: [false, false, true, true, true] },
    { label: "Ad's Running time", values: [false, 'As per the Client', 'As per the Client', 'As per the Client', 'As per the Client'] },
    { label: 'Ad Budget', values: ['As per the Client', 'As per the Client', 'As per the Client', 'As per the Client', 'As per the Client'] },
];

// UGC features data
const ugcFeatures = [
    { label: 'Videos', values: [false, false, '4-5 videos/1Faces', '4-5 videos/1Faces', '4-5 videos/1Faces'] },
];

// Influencer Marketing features data
const influencerFeatures = [
    { label: 'Collaborations', values: [false, false, false, '4-5', false] },
];

// SEO features data
const seoFeatures = [
    { label: 'Local SEO', values: [false, false, false, false, true] },
    { label: 'National SEO', values: [false, false, false, false, true] },
    { label: 'International SEO', values: [false, false, false, false, true] },
    { label: 'Initial Audit Report', values: [false, false, false, false, true] },
    { label: 'SEO Technical Audit', values: [false, false, false, false, true] },
    { label: 'Keywords', values: [false, false, false, false, 5] },
    { label: 'Backlinks Per Month', values: [false, false, false, false, 40] },
    { label: 'Competitor Analysis', values: [false, false, false, false, true] },
    { label: 'Duplicate Content Check', values: [false, false, false, false, true] },
    { label: 'Google Penalty Check', values: [false, false, false, false, true] },
    { label: 'Website Canonical Check', values: [false, false, false, false, true] },
    { label: 'Title Tag Optimization', values: [false, false, false, false, true] },
    { label: 'Meta Tag Optimization', values: [false, false, false, false, true] },
];

// Google Ads features data
const googleAdsFeatures = [
    { label: 'Google Ads Management', values: [false, false, false, false, 'Up to 2 campaign'] },
    { label: 'Ads design and creation', values: [false, false, false, false, true] },
    { label: 'Google shopping ads', values: [false, false, false, false, true] },
    { label: 'Ad optimization', values: [false, false, false, false, true] },
    { label: 'Campaign strategy and Set Up', values: [false, false, false, false, true] },
    { label: 'Campaign monitoring', values: [false, false, false, false, true] },
    {
        label:
            "Ad's Monitoring and Management",
        values: [false, false, false, false, true]
    },
    { label: 'Ads setup', values: [false, false, false, false, true] },
    { label: 'Campaign Reporting', values: [false, false, false, false, true] },
    { label: "Ad's Running time", values: [false, false, false, false, 'As per the Client'] },
    { label: 'Ad Budget', values: [false, false, false, false, false] },
];

// Helper for rendering checkmark, dash, or value
const renderValue = (value: any) => {
    if (value === true) return <span className="text-green-600 text-xl">&#10003;</span>;
    if (value === false) return <span className="text-gray-400 text-xl">&#8212;</span>;
    return <span className="text-black font-medium">{value}</span>;
};

const FeatureTable = ({ title, features }: { title: string; features: { label: string; values: any[] }[] }) => (
    <div className="mb-8">
        <div className="bg-gray-50 font-bold text-lg px-4 py-2 border-b border-gray-200">{title}</div>
        <table className="w-full border-collapse">
            <tbody>
                {features.map((feature, idx) => (
                    <tr key={feature.label} className={clsx(idx % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
                        <td className="px-4 py-2 font-medium text-black border-b border-gray-100 w-1/4">{feature.label}</td>
                        {feature.values.map((value, i) => (
                            <td key={i} className="px-4 py-2 text-center border-b border-gray-100">{renderValue(value)}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

// Professional Bundle Table Data
const professionalBundleHeaders = [
    { label: 'Instagram Marketing', color: 'bg-yellow-300 text-black text-xl font-bold text-center' },
    { label: 'Facebook Marketing', color: 'bg-yellow-300 text-black text-xl font-bold text-center' },
];

const professionalBundleRows = [
    {
        label: 'Post',
        values: ['15/M', { type: 'header' }, 'Post(including reels)', { type: 'header' }, '15/M'],
    },
    {
        label: 'Reels',
        values: ['5/M', { type: 'header' }, 'Reels', { type: 'header' }, '5/M'],
    },
    {
        label: 'Stories uploading',
        values: ['20/M', { type: 'header' }, 'Stories uploading', { type: 'header' }, '20/M'],
    },
    {
        label: 'Hashtags Research',
        values: [true, { type: 'header' }, '', { type: 'header' }, ''],
    },
    {
        label: 'Post Creative Designing',
        values: [true, { type: 'header' }, 'Post Creative Designing', { type: 'header' }, true],
    },
    {
        label: 'Audience Research',
        values: [true, { type: 'header' }, '', { type: 'header' }, true],
    },
    {
        label: 'Post Boosting',
        values: [true, { type: 'header' }, '', { type: 'header' }, ''],
    },
    {
        label: 'Instagram Ads (META)',
        values: ['', { type: 'header' }, '', { type: 'header' }, ''],
    },
    // Facebook Marketing
    {
        label: '',
        values: ['', { type: 'header' }, 'Post Creative Designing', { type: 'header' }, true],
    },
    {
        label: '',
        values: ['', { type: 'header' }, 'Facebook Business Manager Set Up', { type: 'header' }, true],
    },
    {
        label: '',
        values: ['', { type: 'header' }, 'Group Joining and Posting', { type: 'header' }, false],
    },
    {
        label: '',
        values: ['', { type: 'header' }, 'Pixel Installation', { type: 'header' }, true],
    },
    {
        label: '',
        values: ['', { type: 'header' }, 'Remarketing (Ads)', { type: 'header' }, true],
    },
    {
        label: '',
        values: ['', { type: 'header' }, 'Custom Audience Creation (Ads)', { type: 'header' }, true],
    },
    {
        label: '',
        values: ['', { type: 'header' }, 'Facebook Analytics Report Creation', { type: 'header' }, true],
    },
    {
        label: '',
        values: ['', { type: 'header' }, 'Ad Campaign Monitoring', { type: 'header' }, true],
    },
];

const renderProBundleValue = (value: any) => {
    if (value && value.type === 'header') return null;
    if (value === true) return <span className="text-green-600 text-xl">&#10003;</span>;
    if (value === false) return <span className="text-gray-400 text-xl">&#8212;</span>;
    if (typeof value === 'string' && value.trim() === '') return null;
    return <span className="text-black font-medium">{value}</span>;
};

// Creative Bundle Table Data
const creativeBundleHeaders = [
    { label: 'Instagram Marketing', color: 'bg-yellow-300 text-black text-xl font-bold text-center' },
    { label: 'Facebook Marketing', color: 'bg-yellow-300 text-black text-xl font-bold text-center' },
    { label: 'Content Creation', color: 'bg-yellow-300 text-black text-xl font-bold text-center' },
];

const creativeBundleRows = [
    {
        label: 'Post',
        values: ['15', 'Post', '15', 'UGC', '3'],
    },
    {
        label: 'Reels',
        values: ['5', 'Reels', '5', '', ''],
    },
    {
        label: 'Stories uploading',
        values: ['20', 'Stories uploading', '20', '', ''],
    },
    {
        label: 'Hashtags Research',
        values: ['Yes', 'Post Creative Designing', 'Yes', '', ''],
    },
    {
        label: 'Post Creative Designing',
        values: ['Yes', 'Facebook Business Manager Set Up', 'Yes', '', ''],
    },
    {
        label: 'Audience Research',
        values: ['Yes', 'Boosting Post (Excluding Ad Budget)', 'Yes', '', ''],
    },
    {
        label: 'Boosting Post (Excluding Ad Budget)',
        values: ['Yes', '', '', '', ''],
    },
];

const CreativeBundleTable = () => (
    <div className="w-full max-w-6xl mx-auto my-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">CREATIVE BUNDLE - RS. 19,999/-</h2>
        <table className="w-full border border-gray-300">
            <thead>
                <tr>
                    <th className="bg-yellow-300 text-black text-xl font-bold text-center px-4 py-3 border-r border-gray-300">Instagram Marketing</th>
                    <th className="bg-yellow-300 text-black text-xl font-bold text-center px-4 py-3 border-r border-gray-300">Facebook Marketing</th>
                    <th className="bg-yellow-300 text-black text-xl font-bold text-center px-4 py-3 border-r border-gray-300">Content Creation</th>
                    <th className="bg-yellow-300 text-black text-xl font-bold text-center px-4 py-3">&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                {/* Render rows */}
                {creativeBundleRows.map((row, idx) => (
                    <tr key={row.label} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-2 font-medium text-black border-b border-gray-200">{row.label}</td>
                        {row.values.map((value, i) => (
                            <td key={i} className="px-4 py-2 text-center border-b border-gray-200 font-medium text-black">{value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const DigitalMarketingPricing = () => (
    <div className="w-full max-w-7xl mx-auto px-2 md:px-6 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-center mb-8 md:gap-28">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">Features Comparison</h2>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-8 w-full md:w-auto">
                {plans.map((plan, idx) => (
                    <div key={plan.name} className="flex flex-col items-center mb-6 md:mb-0 w-full md:w-auto">
                        <span className={clsx('text-xl font-bold mb-1', plan.color)}>{plan.name}</span>
                        <span className="text-lg font-bold mb-2">{plan.price}</span>
                        <button className={clsx('text-white font-semibold py-2 px-6 rounded mb-2', plan.button)}>{plan.btnText}</button>
                    </div>
                ))}
            </div>
        </div>

        {/* Instagram Table */}
        <FeatureTable title="Instagram" features={instagramFeatures} />
        {/* Facebook Table */}
        <FeatureTable title="Facebook" features={facebookFeatures} />
        {/* Facebook Ads Table */}
        <FeatureTable title="Facebook Ads" features={facebookAdsFeatures} />
        {/* UGC Table */}
        <FeatureTable title="UGC" features={ugcFeatures} />
        {/* Influencer Marketing Table */}
        <FeatureTable title="Influencer Marketing" features={influencerFeatures} />
        {/* SEO Table */}
        <FeatureTable title="Search engine optimization (SEO)" features={seoFeatures} />
        {/* Google Ads Table */}
        <FeatureTable title="Google Ads" features={googleAdsFeatures} />

        {/* Professional Bundle Table */}
        <ProfessionalBundleTable />
        <CreativeBundleTable />
        <FacebookAdsPlansTable />
        <GoogleAdsPlansTable />
        <InfluencerMarketingPlansTable />
    </div>
);

export default DigitalMarketingPricing;
