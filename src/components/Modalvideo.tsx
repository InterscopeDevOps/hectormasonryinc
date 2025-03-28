import React, { useState, useEffect } from 'react';
import type { ApiData } from '@/interfaces/dbData';

interface GalleryVideoProps {
    data: ApiData;
}

const Modalvideo: React.FC<GalleryVideoProps> = ({ data }) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    // Verifica que la URL del video esté definida correctamente
    const videoUrl = data.videoAnimado && data.videoAnimado[0] && data.videoAnimado[0].urlVideo
        ? data.videoAnimado[0].urlVideo
        : ''; // Asegúrate de tener una URL válida para el iframe

    const getYoutubeVideoId = (url: string) => {
        const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|youtu\.be\/)([^"&?\/ ]{11}))/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    const getVimeoVideoId = (url: string) => {
        const regex = /https:\/\/vimeo\.com\/(\d+)/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };
    const getVideoSrc = (url: string) => {
        if (!url) {
            return null;
        }

        if (url.includes('youtube.com') || url.includes('youtu.be')) {
            const videoId = getYoutubeVideoId(url);
            return `https://www.youtube.com/embed/${videoId}`;
        } else if (url.includes('vimeo.com')) {
            const videoId = getVimeoVideoId(url);
            return `https://player.vimeo.com/video/${videoId}`;
        } else {
            return null;
        }
    };

    const videoSrc = getVideoSrc(videoUrl);


    return (
        <div>
            {showModal && (
                <>
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                        <div className="flex items-center min-h-full justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className='fixed inset-0 bg-black bg-opacity-70 z-20'></div>
                            <div className="relative z-30 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-[500px] md:w-[700px] h-[500px] md:h-[400px]">
                                <div className="bg-white w-full h-full">
                                    <div className="sm:flex sm:items-start">
                                        <button
                                            className="absolute top-1 z-40 right-2 py-2 px-3 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                            id="modal-title"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <i className="fa fa-times"></i>
                                        </button>
                                    </div>
                                    <div className='h-full'>
                                        {videoSrc && (
                                            <iframe
                                                className="w-full h-full object-contain"
                                                src={videoSrc}
                                                title="Video"
                                                allow="autoplay"
                                                allowFullScreen
                                            />
                                        )}
                                        {!videoSrc && <p className="text-center text-red-500">El video no está disponible.</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Modalvideo;
