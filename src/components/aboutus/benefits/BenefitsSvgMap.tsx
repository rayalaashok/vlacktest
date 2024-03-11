// import Logo1 from "../../../assets/svg/Logo1";
import { BenefitsSvgData } from "./BenefitsSvgData";

function BenefitsSvgMap () {
    return (
        <div className="flex space-x-4 w-5/6">

            <div className="mr-4 text-bold">
                <h1 className="text-3xl font-bold ">100.00+</h1>
                <h5 className="text-l text-bold">Finsweet Users</h5>
            </div>
            
            <div className=" flex gap-20 " >
                {BenefitsSvgData.map(item => {
                    console.log(item);

                    return (
                        <div key={item.id} className="opacity-75">
                            <item.logo /> 
                         </div>
                    )
                })}
            </div>

        </div>
    )
}

export default BenefitsSvgMap;