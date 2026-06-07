import { useState } from "react";
import { FaCaretRight } from "react-icons/fa";
const Card = ({ Product , carts, setCart }) => {
    const [isBuy, setBuy] = useState(false);
    const handleBtn = () => {
        setBuy(true)
        setCart([...carts, Product])
    }


    return (
        <div className=" p-6 w-96 h-105 shadow-2xl mt-5">
            <div className="w-16 h-16 mt-5"><img src={Product.icon} alt="" /></div>
            <p className="text-2xl font-bold mb-4 mt-4">{Product.name}</p>
            <p>{Product.description}</p>
            <p className="text-2xl font-bold mt-4 mb-4">${Product.price}<span className="text-[16px] font-normal">/Mo</span></p>
            <p className="flex items-center"><FaCaretRight />{Product.features1}</p>
            <p className="flex items-center"><FaCaretRight />{Product.features2}</p>
            <p className="flex items-center"><FaCaretRight />{Product.features3}</p>
            <button onClick={handleBtn} className="mt-5 flex items-center btn w-full btn-primary rounded-2xl">{isBuy ?  "Already Buy Now" : "Buy Now"}</button>
        </div>
    );
};

export default Card;