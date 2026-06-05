import BannerImg from '../../../../public/banner.png'
import { CiPlay1  } from "react-icons/ci";
import { CgEditBlackPoint } from "react-icons/cg";


const Banner = () => {
    return (
        <div className=' w-11/12 mx-auto mt-20  '>
            <div className='flex gap-45 items-center '>


                <div >
                    <div className='flex items-center bg-[#cb87ff] w-68 rounded-xl p-0.5 mb-4'>
                         <CgEditBlackPoint /> 
                        <p className='text-[#9514fa] font-semibold'>New: AI-Powered Tools Available</p>
                    </div>
                    <h1 className='text-7xl font-extrabold'>Supercharge Your <br />
                        Digital Workflow</h1>
                    <p className='mt-5'>Access premium AI tools, design assets, templates, and productivity

                       <br /> software—all in one place. Start creating faster today. <br />


                        Explore Products</p>
                        <div className='mt-8'>
                            <button className='btn btn-primary rounded-2xl'>Explore Products</button>
                            <button className='btn  rounded-2xl ml-2'> <CiPlay1 />Watch Demo</button>
                        </div>
                </div>
                <div>
                    <img src={BannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;