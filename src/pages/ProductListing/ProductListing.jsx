import { FilterSidebar, ProductCard, SortBar } from '../../components';

import './ProductListing.css';
import { useEffect } from 'react';
import { useProducts } from '../../contexts/ProductContext';
import { sortProducts } from '../../utils/sortProducts';
import { getProductsByBrand } from '../../utils/getProductsByBrand';
import { getProductBySize } from '../../utils/getProductBySize';
import { getProductsByGender } from '../../utils/getProductsByGender';

const ProductListing = () => {
    const {
        productsList: {
            productData,
            filters: { sortBy, gender, brand, size },
        },
        getAllProductsHandler,
    } = useProducts();
    useEffect(() => {
        getAllProductsHandler();
    }, []);

    const sortedData = sortProducts(productData, sortBy);
    const sortByGender = getProductsByGender(sortedData, gender);
    const filteredData = getProductsByBrand(sortByGender, brand);
    const filterBySize = getProductBySize(filteredData, size);
    
    return (
        <div className="product-page-container">
            <div className="filter-section">
                <FilterSidebar />
            </div>
            <div className="products-section">
                <SortBar />
                <div className="products">
                    {filterBySize?.map((product) => (
                        <ProductCard product={product} key={product?._id} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export { ProductListing };
