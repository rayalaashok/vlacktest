import { Data } from "./OurDesignData";
import ourdesign1 from "../../../assets/images/ourdesign1.png";

function OurDesignPage () {
    
    return (
    <div className="flex  space-x-36 justify-center p-14 space-y-4 ">
        <div className=" w-2/6 text-left flex flex-col gap-6 justify-center">
            <h5 className="font-semibold ">{Data[0].id}</h5>
            <h1 className="text- text-5xl font-semibold">{Data[0].title}</h1>
            <p className="text-base ">{Data[0].content}</p>
        </div>
        <div className="w-2/6 h-2/6">
            <img src={ourdesign1} className="h-full "/>
        </div>
    </div>
    )
}

export default OurDesignPage;