import { useState } from "react";
import { Carousel } from "react-bootstrap";
import Slider2 from "../components/slider2";
import '../styles/iphone.css';
import ProductCard from "../components/product-card";
import TopicCard from "../components/topic-card";

const slider2 = [
    {
        url: "https://shopdunk.com/images/uploaded/banner/banner%202024/Thang_8/banner%20iPhone%2015%20T8_Danh%20m%E1%BB%A5c.png"
    },
    {
        url: "https://shopdunk.com/images/uploaded/banner/banner%202024/Thang_8/banner%20iPhone%2013%20T8_Danh%20m%E1%BB%A5c.png"
    },
    {
        url: "https://shopdunk.com/images/uploaded/banner/banner%202024/Thang_8/banner%20iPhone%2011%20T8_Danh%20m%E1%BB%A5c.png"
    },
];

const categoryIphone = [
    {
        id: "1",
        categoryName: "Tất cả",
    },
    {
        id: "2",
        categoryName: "iPhone 15 series",
    },
    {
        id: "3",
        categoryName: "iPhone 14 series",
    },
    {
        id: "4",
        categoryName: "iPhone 13 series",
    },
    {
        id: "5",
        categoryName: "iPhone 12 series",
    },
    {
        id: "6",
        categoryName: "iPhone 11 series",
    },
    {
        id: "7",
        categoryName: "iPhone SE",
    },
];

const data = [
    {
        productId: "1",
        photos: [
            {
                url: "https://shopdunk.com/images/thumbs/0024430_iphone-13-128gb_240.png",
                public_id: "1"
            },
            {
                url: "https://shopdunk.com/images/thumbs/0024430_iphone-13-128gb_240.png",
                public_id: "2"
            },
        ],
        name: "iPhone 13 128GB",
        price: 24990000,
        stock: 45 / 100,
    },
    {
        productId: "2",
        photos: [
            {
                url: "https://shopdunk.com/images/thumbs/0024431_iphone-15-128gb_240.png",
                public_id: "1"
            },
            {
                url: "https://shopdunk.com/images/thumbs/0024431_iphone-15-128gb_240.png",
                public_id: "2"
            },
        ],
        name: "iPhone 15 128GB",
        price: 24990000,
        stock: 20 / 100,
    },
    {
        productId: "3",
        photos: [
            {
                url: "https://shopdunk.com/images/thumbs/0020317_iphone-15-plus-128gb_240.webp",
                public_id: "1"
            },
            {
                url: "https://shopdunk.com/images/thumbs/0020317_iphone-15-plus-128gb_240.webp",
                public_id: "2"
            },
        ],
        name: "iPhone 15 Plus 128GB",
        price: 27990000,
        stock: 18 / 100,
    },
    {
        productId: "4",
        photos: [
            {
                url: "https://shopdunk.com/images/thumbs/0028064_iphone-15-pro-max-256gb_240.png",
                public_id: "1"
            },
            {
                url: "https://shopdunk.com/images/thumbs/0028064_iphone-15-pro-max-256gb_240.png",
                public_id: "2"
            },
        ],
        name: "iPhone 15 Pro Max 256GB",
        price: 37990000,
        stock: 22 / 100,
    },
    {
        productId: "5",
        photos: [
            {
                url: "https://shopdunk.com/images/thumbs/0020317_iphone-15-plus-128gb_240.webp",
                public_id: "1"
            },
            {
                url: "https://shopdunk.com/images/thumbs/0020317_iphone-15-plus-128gb_240.webp",
                public_id: "2"
            },
        ],
        name: "iPhone 15 Plus 128GB",
        price: 27990000,
        stock: 18 / 100,
    },
    {
        productId: "6",
        photos: [
            {
                url: "https://shopdunk.com/images/thumbs/0012164_iphone-11-64gb_240.webp",
                public_id: "1"
            },
            {
                url: "https://shopdunk.com/images/thumbs/0012164_iphone-11-64gb_240.webp",
                public_id: "2"
            },
        ],
        name: "iPhone 11 64GB",
        price: 14990000,
        stock: 42 / 100,
    },
    {
        productId: "7",
        photos: [
            {
                url: "https://shopdunk.com/images/thumbs/0009181_iphone-14-128gb_240.png",
                public_id: "1"
            },
            {
                url: "https://shopdunk.com/images/thumbs/0009181_iphone-14-128gb_240.png",
                public_id: "2"
            },
        ],
        name: "iPhone 14 128GB",
        price: 24990000,
        stock: 30 / 100,
    },
    {
        productId: "8",
        photos: [
            {
                url: "https://shopdunk.com/images/thumbs/0006794_iphone-12-64gb_240.png",
                public_id: "1"
            },
            {
                url: "https://shopdunk.com/images/thumbs/0006794_iphone-12-64gb_240.png",
                public_id: "2"
            },
        ],
        name: "iPhone 12 64GB",
        price: 22990000,
        stock: 46 / 100,
    },
]

const topic = [
    {
        url1: "https://shopdunk.com/images/uploaded/trang%20danh%20muc/iphone/Image-Standard.png",
        url2: "https://shopdunk.com/images/uploaded/trang%20danh%20muc/iphone/Image-Standard-1.png",
        title1: "Tìm iPhone",
        title2: "phù hợp với bạn",
        title3: "Phụ kiện iPhone",
        title4: "thường mua kèm",
        link1: "So sánh các iPhone",
        link2: "Tìm phụ kiện"
    }
]

const Iphone = () => {
    const [selectedCategory, setSelectedCategory] = useState(categoryIphone[0].categoryName);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4; //số sp 1 trang

    const handleCategoryClick = (categoryName: string) => {
        const formattedCategory = categoryName.split(" ").slice(0, 2).join(" ");
        setSelectedCategory(formattedCategory);
        setCurrentPage(1);
    };

    const filteredIphones = selectedCategory === "Tất cả"
        ? data
        : data.filter((i) => i.name.split(" ").slice(0, 2).join(" ") === selectedCategory);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredIphones.slice(indexOfFirstItem, indexOfLastItem);

    const addToCart = () => { }

    return (
        <div className="iphone-container">
            {/* Slider Section */}
            <div className="iphone-slider">
                <h2 className="slider-title">iPhone</h2>
                <div className="slider-content">
                    <Carousel>
                        {slider2.map((i) => (
                            <Carousel.Item key={i.url}>
                                <Slider2 url={i.url} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>

            {/* Body Section */}
            <div className="iphone-body">
                <div className="iphone-body-content">
                    <div className="iphone-category">
                        <div className="category-item">
                            {categoryIphone.map((i) => (
                                <h5
                                    key={i.id}
                                    className={`category-title ${selectedCategory === i.categoryName.split(" ").slice(0, 2).join(" ") ? 'active' : ''}`}
                                    onClick={() => handleCategoryClick(i.categoryName)}
                                >
                                    {i.categoryName}
                                </h5>
                            ))}
                        </div>

                        <div className="compare-iphone">
                            <img src="https://shopdunk.com/images//uploaded-source/icon//comparison.png" alt="" />
                            So sánh iPhone
                        </div>
                    </div>

                    {/* Product Section */}
                    <div className="iphone-product">
                        {currentItems && currentItems.length > 0 ? (
                            currentItems.map((i) => (
                                <ProductCard
                                    key={i.productId}
                                    productId={i.productId}
                                    photos={i.photos}
                                    name={i.name}
                                    price={i.price}
                                    stock={i.stock}
                                    handler={addToCart}
                                />
                            ))
                        ) : (
                            <p>Không có sản phẩm nào phù hợp.</p>
                        )}
                    </div>

                    {/* Pagination Section */}
                    <div className="pagination">
                        {Array.from({ length: Math.ceil(filteredIphones.length / itemsPerPage) }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`page-number ${currentPage === i + 1 ? 'active' : ''}`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>

                    <div>
                        {
                            topic.map((i) => (
                                <TopicCard key={i.url1} url1={i.url1} url2={i.url2} title1={i.title1} title2={i.title2} title3={i.title3} title4={i.title4} link1={i.link1} link2={i.link2} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Iphone;
