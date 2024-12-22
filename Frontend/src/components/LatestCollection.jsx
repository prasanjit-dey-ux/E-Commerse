import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        // Fetch the latest 10 products when the component mounts
        if (products.length > 0) {
            setLatestProducts(products.slice(0, 8));
        }
    }, [products]); // Dependency array updated to listen for changes in `products`

    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Title text1="LATEST" text2="COLLECTIONS" />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>

            {/* Rendering Products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mg:grid-cols-5 gap-4 gap-y-6">
                {latestProducts.length > 0 ? (
                    latestProducts.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                ) : (
                    <p>No latest collections available</p>
                )}
            </div>
        </div>
    );
};

export default LatestCollection;
