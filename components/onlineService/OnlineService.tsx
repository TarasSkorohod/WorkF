import Image from "next/image";

import {useState} from "react";

import imagesP from "@/public/imagePrivatB.png"
import Modal from "react-modal";
import AudioPlayer from "@/components/onlineService/AudioPlayer";
import Card from "@/components/onlineService/Card";

export type PHOTO = {
    image: string;
};

const brandData: PHOTO[] = [
    {
        image: "/imagePrivatB.png",
    },
    {
        image: "/imagePrivatB.png",
    },
    {
        image: "/imagePrivatB.png",
    },
    {
        image: "/imagePrivatB.png",
    },
    {
        image: "/imagePrivatB.png",
    },
    {
        image: "/imagePrivatB.png",
    },

];
const OnlineService = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const cardsData = [
        { name: 'Ім\'я 1', service: 'Послуга 1', rating: 5 },
        { name: 'Ім\'я 2', service: 'Послуга 2', rating: 4 },
        { name: 'Ім\'я 3', service: 'Послуга 3', rating: 3 },
    ];
    const handleImageClick = (imageSrc: string) => {
        setSelectedImage(imageSrc);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalIsOpen(false);
    };
    return (
        <div className="rounded-sm border  border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="py-6 px-4 md:px-6 xl:px-7.5">
                <p className="font-normal text-base leading-6 text-[13px] md:text-sm lg:text-base border-b pb-10 border-stroke pb-2">
                    <span className="dark:text-white text-black">(Легенда. Зроблено непомітною, щоб не привертати увагу, тому що вона буде однаковою для всіх кейсів) </span>
                    Одного разу я вирішив відвідати новий ресторан у місті, який був відомий своєю сучасною кухнею та затишною атмосферою. З почуттям цікавості і голоду, я разом з друзями прийшов у цей заклад. Вже від початку ми помітили, що обслуговування залишає бажати кращого. Офіціанти не були дуже уважними і виявилося складно привернути їхню увагу. Замовлення ми отримали досить швидко, але наше замовлення було неправильним. Одна страва виявилася холодною, інша — не тієї, яку ми замовляли.
                </p>
            </div>

            <div className="px-4 items-center justify-center min-h-screen">
                <div className="p-[88px] flex items-center justify-center h-full">
                    <div >
                        <div className=" border-b border-stroke pb-10  flex flex-col items-center">
                            <h1 className="text-[29px] font-bold text-bb mb-2">ПриватБанк. Обслуговування клієнтів</h1>
                            <span className="self-end">14 грудня 2023</span>
                        </div>
                        <p className="mt-2.5 mb-[22px]">(Саммары) Одного разу я вирішив відвідати новий ресторан у місті, який був відомий своєю сучасною кухнею та затишною атмосферою. З почуттям цікавості і голоду, я разом з друзями прийшов у цей заклад.</p>

                        <p>Вже від початку ми помітили, що обслуговування залишає бажати кращого. Офіціанти не були дуже уважними і виявилося складно привернути їхню увагу. Замовлення ми отримали досить швидко, але наше замовлення було неправильним. Одна страва виявилася холодною, інша — не тієї, яку ми замовляли.</p>
                    </div>

                </div>
                <div className="pt-[70px]">
                    <AudioPlayer  />
                </div>

                <div className=" flex items-center justify-center h-full">
                    <Image
                        src={imagesP}
                        alt={"tfgf"}
                        width={899}
                        height={506}
                    />
                </div>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {brandData.map((photo, index) => (
                            <div
                                key={index}
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
                                onClick={() => handleImageClick(photo.image)}
                            >
                                <Image
                                    src={photo.image}
                                    alt={`Image ${index + 1}`}
                                    width={285}
                                    height={160}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />

                            </div>

                        ))}

                    </div>
                    <p className=" border-b border-stroke  p-4 text-right bottom-2 right-2 text-base ">16 грудня 2023, 15:31:44</p>
                    <div>
                        <div className="p-10 flex flex-col">
                            <h1 className="text-[16px] font-bold text-bb mb-2 text-left">
                                Оцініть, будь ласка, кейс, за тьрома параметрами:
                            </h1>
                        </div>

                            <div className="flex justify-around">
                                {cardsData.map((data, index) => (
                                    <Card key={index} {...data} />
                                ))}

                            </div>
                        <div className="p-[40px]">
                            <button className=" w-[285px] h-[56px] bg-success2 text-white px-4 py-2 rounded-md mr-4">
                                Зберегти
                            </button>
                            <button className="bg-white h-[56px] border border-bodydark3 border-solid text-green-500 px-4 py-2 rounded-md">
                                Перейти до наступного
                            </button>

                        </div>




                    </div>


                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Enlarged Image"
                    style={{
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        },
                        content: {
                            width: '80%',
                            height: '80%',
                            maxWidth: '900px',
                            maxHeight: '506px',
                            position: 'relative',
                            padding: 0,
                            border: 'none',
                            borderRadius: '8px',
                        },
                    }}
                >
                    <React.Fragment>
                        {selectedImage && (
                            <Image
                                layout="responsive"
                                width={899}
                                height={506}
                                src={selectedImage}
                                alt="Enlarged Image"
                            />
                        )}
                    </React.Fragment>
                </Modal>

            </div>


        </div>
    );
};

export default OnlineService;
