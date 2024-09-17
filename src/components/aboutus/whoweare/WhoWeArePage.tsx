import {Data} from './WhoWeAreData';
// import pic2 from "../../assets/images/pic2.jpeg"
import pic2 from "../../../assets/images/pic2.jpeg";


function WhoWeArePage () {
    return (
        <div className='flex flex-wrap p-32 justify-center w-screen h-screen'>
            <div className=' flex  bg-[#F4F5F5] p-4'>

                <div className=' w-full w-1/2 p-4 mr-16 p-8'>
                    <h5 className='font-medium mb-2'>{Data[0].label}</h5>
                    <h1 className='text-2xl font-bold mb-2'>{Data[0].title}</h1>
                    <p className='text-base mb-2'>{Data[0].content}</p>
                </div>

                <div className=' w-full w-1/2 p-8 '>
                    <h1 className='text-2xl font-bold mb-2 mt-6'>{Data[1].title}</h1>
                    <p className='text-base mb-2'>{Data[1].content}</p>
                </div>

            </div>

            <div className=' h-1/2 w-full'>
                <img src={pic2} className='h-full w-full object-cover object-center'/>
            </div>
        </div>
    )
}
export default WhoWeArePage;