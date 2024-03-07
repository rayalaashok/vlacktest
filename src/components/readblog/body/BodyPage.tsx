import { Data } from './BodyData';
import readblog2 from '../../../assets/images/readblog2.png';

function BodyPage () {
       return (
        <div className='flex items-center justify-center '>
        <div className=" max-w-2xl ">
      <div className="  text-3xl font-semibold mb-4 mt-4">{Data[0].title}</div>
      <div className="text-base text-left mb-4 text-justify ">{Data[0].content}</div>
      <div className="text-3xl font-semibold mb-4 ">{Data[0].title1}</div>
      <div className="text-base text-left mb-4 text-justify">{Data[0].content}</div>
      <ul className="  flex flex-col mb-4 ml-5">
        {Data[0].list.map((item, index) => (
          <li key={index} className=' list-disc'>{item} </li>
        ))}
      </ul>
      <div className="text-base text-left mb-4 text-justify">{Data[0].content}</div>
      <img src={readblog2} alt="Read Blog" className="w-full h-auto mb-4 h-[311px] object-cover" />
      <div className="text-3xl font-semibold mb-4 ">{Data[0].title1}</div>
      <div className="text-base text-left mb-4 text-justify">{Data[0].content}</div>
    </div>
    </div>
       )
}
export default BodyPage;