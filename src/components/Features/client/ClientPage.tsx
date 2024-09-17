import { ClientData } from "./ClientData";

function ClientPage () {
    return (
        <div className="flex flex-col items-center justify-center p-10 gap-y-14 ">
            {ClientData.map(item => {
                return (
                    <div key={item.id} className={`flex items-center justify-center gap-24 w-screen ${
                        item.id % 2 === 0 ? "flex-row-reverse bg-[#F4F6FC]" : "flex-row"
                      }`}>
                        <div className="flex flex-col gap-4 w-2/6 justify-center ">
                            <h5 className="font-semibold">{item.label}</h5>
                            <h1 className="text- text-3xl font-semibold ">{item.title}</h1>
                            <p className="text-base ">{item.content}</p>
                        </div>

                        <div className="w-2/6 h-2/6">
                            <img src={item.img} className=" h-4/6 object-cover p-8" />
                        </div>
                    </div>
                ) 
            })}

        </div>

    )
}

export default ClientPage;



