import React, { useState } from 'react';
import "./BuddhaPage.css"

interface BuddhaImage {
    id: number;
    filename: string;
    title: string;
    description: string;
    scripture?: string;
}

const BuddhaPage: React.FC = () => {
    // 定义图片数据
    const images: BuddhaImage[] = [
        { 
            id: 1, 
            filename: '1.png', 
            title: '佛祖一', 
            description: '慈悲为怀',
            scripture: '一切有为法，如梦幻泡影，如露亦如电，应作如是观。'
        },
        { 
            id: 2, 
            filename: '2.png', 
            title: '佛祖二', 
            description: '智慧如海',
            scripture: '色不异空，空不异色，色即是空，空即是色。'
        },
        { 
            id: 3, 
            filename: '3.png', 
            title: '佛祖三', 
            description: '普度众生',
            scripture: '诸恶莫作，众善奉行，自净其意，是诸佛教。'
        },
        { 
            id: 4, 
            filename: '4.png', 
            title: '佛祖四', 
            description: '大慈大悲',
            scripture: '心无挂碍，无挂碍故，无有恐怖，远离颠倒梦想。'
        },
        { 
            id: 5, 
            filename: '5.png', 
            title: '佛祖五', 
            description: '无量功德',
            scripture: '若以色见我，以音声求我，是人行邪道，不能见如来。'
        },
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
            <div className="title-container">
                <div className="title-decoration left">❖</div>
                <h1 className="buddha-title">佛光普照 · 智慧如海</h1>
                <div className="title-decoration right">❖</div>
            </div>
            <div className="subtitle">观自在菩萨，行深般若波罗蜜多时</div>
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
                            <p className="description">{image.description}</p>
                            <p className="scripture">{image.scripture}</p>
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
                            <p className="description">{selectedImage.description}</p>
                            <div className="scripture-container">
                                <h3>相关经文</h3>
                                <p className="scripture">{selectedImage.scripture}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BuddhaPage;
