import FeatureCard from "./FeatureCard.tsx";
import { Data } from "./FeaturesData.tsx";

function FeaturePage () {
    return (
        <div className={'bg-[#F4F6FC] flex flex-col justify-center items-center '}>

            <div className="w-96 text-center align-center  ">
                <small className="font-medium">Features</small>
                <p className="font-bold text-3xl">Design that solves problems, one product at a time</p>
            </div>


                <FeatureCard />


        </div>
    )
}

export default FeaturePage;
