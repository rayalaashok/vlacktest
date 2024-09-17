import { TeamData } from "./TeamData";

function TeamPage() {
    return (
        <div className=" text-center p-24 w-screen h-screen justify-center items-center bg-[#f4f6fc] ">
        <div className="mb-14 ">
          <h1 className="font-bold text-3xl mb-4">Meet Our Team</h1>
        </div>
  
        <div className="flex justify-center space-x-8">
          {TeamData.map(item => (
            <div key={item.id} className="text-center w-1/6 h-2/6 flex flex-col items-center bg-white p-6 ">
              <img
                src={item.img}
                alt={item.personName}
                className=" rounded-full h-24 w-24 mb-2"
              />
              <h1 className="text-xl font-semibold mb-1">{item.personName}</h1>
              <h4 className="text-sm">{item.position}</h4>
            </div>
          ))}
        </div>
      </div>
    )
}
export default TeamPage;