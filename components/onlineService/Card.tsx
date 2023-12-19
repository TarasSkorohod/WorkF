import React from 'react';

interface CardProps {
    service: string;
    rating: number;
}

const Card: React.FC<CardProps> = ({ service, rating }) => {
    const maxRating = 8; // Максимальна кількість зірочок

    return (
        <div className="border-l-[1px] border-stroke pl-6">
            <div className="dark:border-strokedark dark:bg-boxdark3 text-[13px] max-w-[800px] bg-white p-[10px] w-[300px] h-[160px] mb-6 flex flex-col justify-between">
                <p className="dark:text-white text-gray-500 mb-4">{service}</p>
                <div className="flex items-center justify-center dark:text-white">
                    {Array.from({ length: maxRating }, (_, index) => (
                        <span
                            key={index}
                            className={`text-4xl ${index + 1 <= rating ? 'text-warning' : 'text-gray-400'}`}
                        >
                    &#9733;
                </span>
                    ))}
                </div>
                <p className="m-[1px] text-[13px] text-black-2 dark:text-white">
                    Ваша оцінка:
                    <span className="text-5xl font-bold text-black-2 dark:text-white"> {rating}</span>
                </p>
            </div>
        </div>

    );
};

export default Card;





