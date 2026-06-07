


const Cart = ({ carts, setCart }) => {
    const totalPrice = carts.reduce((sum, cart)=> sum  + cart.price, 0);
    const handlePayment = () => {
        setCart([])
    };
    const handleDelete = (cart) => {
        const filterArray = carts.filter(c => c.id !== cart.id)
        setCart(filterArray)
    }
    return (
        <div className='w-11/12 mx-auto'>
            <p className='text-2xl font-bold'>Your Cart</p>
            {
                carts.length === 0 ? <div className=" border p-10 text-center text-3xl font-bold">Cart is Empty</div> : <>
                 {
                carts.map(cart => (
                    <div>
                        <div className=' flex justify-between  mt-4 mt-4'>
                            <div className='flex gap-2.5 ml-4'>
                                <img className='w-14 h-14' src={cart.icon} alt="" />
                                <div>
                                    <p>{cart.name}</p>
                                    <p>{cart.price}</p>
                                </div>
                            </div>
                            <button onClick={()=> handleDelete(cart)} className="mr-4  text-red-500">remove
                            </button>
                        </div>
                        
                    </div>
                ))
            }
            <div className="mt-4 mb-4">
               <div className="flex justify-between" >
                 <p>Total Cart</p>
                 <p>{totalPrice}</p>
               </div>
                <button onClick={handlePayment} className="btn mt-4 w-full rounded-4xl text-white bg-[#8d1ee1]">Proceed to Checkout</button>
            </div></>
            }
           
        </div>
    );
};

export default Cart;