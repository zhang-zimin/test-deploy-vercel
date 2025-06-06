import React, { useState } from 'react';
import "./BuddhaPage.css"

interface BuddhaImage {
    id: number;
    filename: string;
    title: string;
    description: string;
}

const BuddhaPage: React.FC = () => {
    // 定义图片数据
    const images: BuddhaImage[] = [
        { id: 1, filename: '1.png', title: '佛祖一', description: '慈悲为怀' },
        { id: 2, filename: '2.png', title: '佛祖二', description: '智慧如海' },
        { id: 3, filename: '3.png', title: '佛祖三', description: '普度众生' },
        { id: 4, filename: '4.png', title: '佛祖四', description: '大慈大悲' },
        { id: 5, filename: '5.png', title: '佛祖五', description: '无量功德' },
    ];

    const [selectedImage, setSelectedImage] = useState<BuddhaImage | null>(null);

    const handleImageClick = (image: BuddhaImage) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="buddha-page">
            <h1 className="buddha-title">佛祖展示</h1>
            <div className="buddha-grid">
                {images.map((image) => (
                    <div 
                        key={image.id} 
                        className="buddha-card"
                        onClick={() => handleImageClick(image)}
                    >
                        <img
                            src={`/images/${image.filename}`}
                            alt={image.title}
                            className="buddha-image"
                        />
                        <div className="buddha-info">
                            <h3>{image.title}</h3>
                            <p>{image.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-button" onClick={handleCloseModal}>×</button>
                        <img
                            src={`/images/${selectedImage.filename}`}
                            alt={selectedImage.title}
                            className="modal-image"
                        />
                        <div className="modal-info">
                            <h2>{selectedImage.title}</h2>
                            <p>{selectedImage.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BuddhaPage;
