import React, {useState} from 'react';

interface DropdownProps {
    title: string;
}

const Dropdown: React.FC<DropdownProps> = ({ title }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div className="relative">
            <button
                className="flex items-center w-full h-12 rounded-md border border-stroke bg-white p-2 shadow-sm dark:border-strokedark dark:bg-boxdark"
                onClick={handleDropdownToggle}
            >
                <span className="mr-1">{title}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                    <path d="M9 1L5 5L1 1" stroke="#579696" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>

            {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-stroke rounded-md shadow-md dark:border-strokedark dark:bg-boxdark">
                    <ul className="py-2 px-4">
                        <li className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">Option 1</li>
                        <li className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">Option 2</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown