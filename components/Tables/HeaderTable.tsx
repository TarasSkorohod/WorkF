import DarkModeSwitcher from "@/components/Header/DarkModeSwitcher";
import DropdownUser from "@/components/Header/DropdownUser";
import DropdownButton from "@/components/Tables/DropdownButton";

const HeaderTable = (props: {
    sidebarOpen: string | boolean | undefined;
    setSidebarOpen: (arg0: boolean) => void;
}) => {
    return (
        <header className="sticky top-0 h-17 flex w-full  drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
            <div className="flex flex-grow items-center justify-end px-4 py-6  md:px-6 2xl:px-11">
                <button
                    aria-controls="sidebar"
                    onClick={(e) => {
                        e.stopPropagation();
                        props.setSidebarOpen(!props.sidebarOpen);
                    }}
                    className="z-99999 block rounded-md border border-stroke bg-white p-2.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
                >
                </button>
                <div className="hidden sm:block">
                    <form>
                        <div className="relative flex items-center">

                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="Пошук"
                                    className="flex items-center mr-2 w-234 h-12 rounded-md border border-stroke bg-white p-2 shadow-sm dark:border-strokedark dark:bg-boxdark"
                                />
                                <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M16.3636 16.3636L20 20"
                                            stroke="#028891"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M4 10.9091C4 14.7249 7.0933 17.8182 10.9091 17.8182C12.8203 17.8182 14.5503 17.0422 15.8011 15.7881C17.0476 14.5383 17.8182 12.8137 17.8182 10.9091C17.8182 7.0933 14.7249 4 10.9091 4C7.0933 4 4 7.0933 4 10.9091Z"
                                            stroke="#028891"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <DropdownButton />
                            <button className="flex items-center mr-2 w-full h-12 rounded-md border border-stroke bg-white p-2 shadow-sm dark:border-strokedark dark:bg-boxdark">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none">
                                    <path d="M1 3L9 3M16 3L13 3" stroke="#028891" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11 5C12.1046 5 13 4.10457 13 3C13 1.89543 12.1046 1 11 1C9.89543 1 9 1.89543 9 3C9 4.10457 9.89543 5 11 5Z" stroke="#028891" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 11L9 11M1 11L4 11" stroke="#028891" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6 12.9545C4.89543 12.9545 4 12.0591 4 10.9545C4 9.84996 4.89543 8.95453 6 8.95453C7.10457 8.95453 8 9.84996 8 10.9545C8 12.0591 7.10457 12.9545 6 12.9545Z" stroke="#028891" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </header>



);
};

export default HeaderTable;


