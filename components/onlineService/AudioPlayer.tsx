
const AudioPlayer = () => {
    return (
            <div className="flex flex-col ml-4">
                <audio className=" dark:bg-boxdark rounded-lg bg-bodydark3 mb-16 w-[899px] h-32 mx-auto flex items-center justify-center" controls>
                    <source />
                </audio>
            </div>
    );
};



export default AudioPlayer;
