import { FaPlus } from "react-icons/fa";
import "../styles/product-card.css"
import { Link } from "react-router-dom";

type ProductsProps = {
    productId: string;
    photos: {
        url: string,
        public_id: string;
    }[];
    name: string;
    price: number;
    stock: number;
    handler: () => void;
}

const ProductCard = ({ productId, photos, name, price, stock, handler }: ProductsProps) => {

    const formatMoney = (amount: number) => {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return (
        <div className="product-card">
            <div className="product-image">
                <Link to={`product/${productId}`}><img src={photos?.[0].url} alt={name} /></Link>
            </div>
            <div className="product-content">
                <h2 className="product-name">{name}</h2>
                <div className="product-price">
                    <h4 className="discounted-price">{formatMoney((price - price * stock))}₫</h4>
                    <h4 className="original-price">{formatMoney(price)}₫</h4>
                    <button onClick={() => handler()} className="add-to-cart"><FaPlus /></button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
