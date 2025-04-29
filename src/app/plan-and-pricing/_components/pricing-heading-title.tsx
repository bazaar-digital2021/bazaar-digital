import React from 'react';

interface PricingHeadingTitleProps {
    title: string;
    subtitle?: string;
}

const PricingHeadingTitle: React.FC<PricingHeadingTitleProps> = ({
    title,
    subtitle,
}) => {
    return (
        <div className="text-center max-w-4xl mx-auto py-8 md:py-12 px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 leading-tight">
                {title}
            </h1>
            {subtitle && (
                <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>
    );
};

export default PricingHeadingTitle;
