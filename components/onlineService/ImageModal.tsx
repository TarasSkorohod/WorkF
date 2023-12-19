// ImageModal.tsx
import React from 'react';
import Modal from 'react-modal';

interface ImageModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    src: string;
    alt: string;
}

// Commented out the line below since it's not necessary if you don't have a specific app element
// Modal.setAppElement('#__next');

const ImageModal: React.FC<ImageModalProps> = ({
                                                   isOpen,
                                                   onRequestClose,
                                                   src,
                                                   alt,
                                               }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Enlarged Image"
        >
            <img src={src} alt={alt} />
        </Modal>
    );
};

export default ImageModal;
