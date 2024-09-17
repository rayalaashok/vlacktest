import { Data } from "./processData"
import SVGcomponent from './processsvg'


function ProcessPage() {
    return (
        <div className=" flex flex-col gap-10 justify-center items-center p-20">

            <div className=" ">
                <h1 className="text-4xl font-bold"> The process we follow </h1>
            </div>

            <div className=" flex space-x-12 p-12">
               {Data.map(item => {
                return (
                    <div key={item.id} className="">
                        <SVGcomponent  />
                        <h1 className="font-semibold font-3xl mt-4 mb-4">{item.title}</h1>
                        <p className="text-base ">{item.content}</p>
                    </div>
                )
               })}
            </div>

        </div>

    )
}

export default ProcessPage;