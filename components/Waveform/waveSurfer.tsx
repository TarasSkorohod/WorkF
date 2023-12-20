import React, { useEffect, useRef, useState } from "react";
import Play from "@/components/Waveform/Play";
import Pause from "@/components/Waveform/pause";

interface WaveSurferCompProps {}

const WaveSurferComp: React.FC<WaveSurferCompProps> = () => {
    const waveformRef = useRef<HTMLDivElement>(null);
    const wavesurfer = useRef<any>(null); // Adjust the type if possible
    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);

    const url =
        "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3";

    useEffect(() => {
        create();

        return () => {
            if (wavesurfer.current) {
                wavesurfer.current.destroy();
            }
        };
    }, []);

    const create = async () => {
        const WaveSurfer = (await import("wavesurfer.js")).default;

        const options = formWaveSurferOptions(waveformRef.current);
        wavesurfer.current = WaveSurfer.create(options);

        wavesurfer.current.load(url);

        wavesurfer.current.on("audioprocess", () => {
            setCurrentTime(wavesurfer.current.getCurrentTime());
        });
        wavesurfer.current.on("ready", () => {
            setDuration(wavesurfer.current.getDuration());
        });
    };

    const handlePlayPause = () => {
        setPlaying(!playing);
        if (wavesurfer.current) {
            wavesurfer.current.playPause();
        }
    };

    const handleSpeedChange = (speed: number) => {
        setPlaybackSpeed(speed);
        if (wavesurfer.current) {
            wavesurfer.current.setPlaybackRate(speed);
        }
    };

    const formWaveSurferOptions = (ref: HTMLDivElement | null) => ({
        container: ref ? ref : '', // Ensure ref is not null
        waveColor: "#939494",
        progressColor: "#333334",
        cursorColor: "#565454",
        barWidth: 4,
        barRadius: 3,
        responsive: true,
        height: 80,
        normalize: true,
        partialRender: true,
    });

    // Format time in MM:SS
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    return (
        <div className={`flex-col dark:bg-boxdark rounded-md bg-gray-3 p-4 `}>
            <div className="w-full h-[30%] flex items-center ">
                <div className="flex items-center p-[23px]">
                    <button onClick={handlePlayPause} aria-label="play/pause_song_button"
                            className={`transition-all hover:scale-110 focus:scale-90 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary-color-53 `}>
                        {(!playing) ? <Play/> : <Pause/>}
                    </button>
                    <span >{formatTime(currentTime)}</span>/<span>{formatTime(duration)}</span>
                </div>
                <div id="waveform" ref={waveformRef} style={{width: '100%', margin: '0' }} />
            </div>

            <div className="border-t border-stroke  pt-[7px] flex items-center space-x-4 justify-end">
                <span>пришвидшення:</span>
                <button
                    onClick={() => handleSpeedChange(1)}
                    className="border border-gray-500 rounded-md px-4 py-2 transition duration-300 ease-in-out hover:bg-white active:bg-white"
                >{`1x`}</button>
                <button
                    onClick={() => handleSpeedChange(1.25)}
                    className="border border-gray-500 rounded-md px-4 py-2 transition duration-300 ease-in-out hover:bg-white active:bg-white"
                >{`1.25x`}</button>
                <button
                    onClick={() => handleSpeedChange(1.5)}
                    className="border border-gray-500 rounded-md px-4 py-2 transition duration-300 ease-in-out hover:bg-white active:bg-white"
                >{`1.5x`}</button>
            </div>
        </div>
    );
};

export default WaveSurferComp;
