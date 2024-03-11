import { Data } from "./OurMissionData";
import pic3 from "../../../assets/images/pic3.png";
import pic4 from "../../../assets/images/pic4.png";


function OurMissionPage () {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-[#eef4fa]">

      <div className="diva flex h-3/6 justify-center gap-24">
        <div className="text-left flex flex-col gap-6 justify-center p-4 w-2/6">
          <h5 className="font-normal ">{Data[0].label}</h5>
          <h1 className="text-5xl font-semibold">{Data[0].title}</h1>
          <p className="text-base">{Data[0].content}</p>
        </div>
        <div className="cover no-repeat w-2/6 py-10 ">
          <img src={pic3} className="h-full w-[500px] mx-auto object-cover object-center" alt="pic3" />
        </div>
      </div>

      <div className="divb flex h-3/6 justify-center gap-24">
        <div className="cover no-repeat w-2/6 py-10">
          <img src={pic4} className="h-full w-[500px] m-auto object-cover object-center" alt="pic4" />
        </div>
        <div className="text-left flex flex-col gap-6 justify-center p-4 w-2/6">
          <h5 className="font-normal ">{Data[1].label}</h5>
          <h1 className="text-5xl font-semibold">{Data[1].title}</h1>
          <p className="text-base">{Data[1].content}</p>
        </div>
      </div>
    </div>
    
    )
}
export default OurMissionPage;