import React from 'react';

interface CardProps {
    name: string;
    service: string;
    rating: number;
}

const Card: React.FC<CardProps> = ({ name, service, rating }) => {
    return (
        <div className=" dark:border-strokedark dark:bg-boxdark3 max-w-[800px] bg-white p-[10px] w-[258px] h-[160px] rounded-lg shadow-md mb-6">
            <h2 className=" dark:text-white text-lg font-bold mb-2">{name}</h2>
            <p className=" dark:text-white text-gray-500 mb-4">{service}</p>
            <div className="flex items-center dark:text-white mb-4">
                {Array.from({ length: rating }, (_, index) => (
                    <span key={index} className="text-warning">&#9733;</span>
                ))}
            </div>
            <p className="text-black-2 dark:text-white">{`Ваша оцінка: ${rating}`}</p>
        </div>
    );
};

export default Card;
