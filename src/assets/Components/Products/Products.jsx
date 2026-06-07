import { use } from "react";

import Card from "./Card";


const Products = ({ ProductsPromise, carts, setCart }) => {
    const Products = use(ProductsPromise);
    
    return (
        <div className=" w-10/12 mx-auto  grid lg:grid-cols-3 mt-4">
            {
                Products.map((Product) => (<Card key={Product.id}  Product={Product} carts={carts} setCart={setCart} />))
            }
        </div>
    );
};

export default Products;