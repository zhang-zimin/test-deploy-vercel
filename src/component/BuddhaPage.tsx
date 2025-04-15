import "./BuddhaPage.css"

const BuddhaPage = () => {
    // 定义图片文件名数组
    const imageFiles = ['1.png', '2.png', '3.png','4.png','5.png'];
    console.log(import.meta.env.PUBLIC_URL)
    return (
        <div className={"BuddhaPage"}>
            <h1 >佛祖展示</h1>
            <div className={"full-screen-grid"}>
                {imageFiles.map((imageFile, index) => (
                    <img
                        key={index}
                        src={`/images/${imageFile}`}
                        alt={`佛祖图片 ${index + 1}`}
                        className="w-3/4 md:w-1/2 lg:w-1/3 rounded-md shadow-lg my-4"
                    />
                ))}
            </div>
        </div>
    );
};

export default BuddhaPage;
