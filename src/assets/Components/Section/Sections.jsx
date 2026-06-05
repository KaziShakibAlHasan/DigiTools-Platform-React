
const Sections = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto text-center mt-28">
                <h2 className="font-extrabold text-5xl mb-4">Premium Digital Tools</h2>
                <p>Choose from our curated collection of premium digital products designedto <br /> boost your productivity and creativity.</p>
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-box flex justify-center mt-5">
                    <input type="radio" name="my_tabs_1" className="tab btn-primary rounded-3xl ml-2" aria-label="Products"  />
                    <input type="radio" name="my_tabs_1" className="tab rounded-3xl" aria-label="Cart(0)"  />
                    
                </div>
            </div>
        </div>
    );
};

export default Sections;