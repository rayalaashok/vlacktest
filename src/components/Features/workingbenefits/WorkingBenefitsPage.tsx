import WorkingBenefitsMap from "./WokingBenefitsMap";
import { WorkingBenefitsData } from "./WorkingBenefitsData";

function WorkingBenefitsPage () {
    return (
        <div className="flex flex-col justify-center items-center p-10">
                
        <div className=" w-5/6 p-4">
           <WorkingBenefitsMap />
        </div>

        <div className="w-96 text-center align-center mt-4">
        <h1 className="font-bold text-3xl">The benefits of working with us</h1>
      </div>

      <div className='grid grid-cols-3 gap-4 mt-8 w-5/6 mb-4 '>
        {WorkingBenefitsData.map(item => (
          <div className='text-left p-6 bg-[#f4f6fc]'>
            <item.svg  />
            <h1 className='text-xl font-semibold mt-8 mb-4'>{item.title}</h1>
            <p className='text-justify mb-4'>{item.content}</p>
          </div>
        ))}
      </div>
         
    </div>
    )
}

export default WorkingBenefitsPage;