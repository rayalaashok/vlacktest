import {Data} from './FeaturesData';

export default function FeatureCard (){
    return (
    <div className='grid grid-cols-3 gap-4 mt-14 w-5/6  '>
    {Data.map(item =>{
    return (
    <div key = {item.id} className=' text-left p-6 bg-white shadow-xl '>
        <h1 className='mb-4'>{item.id}</h1>
        <h1 className='text-xl font-semibold mb-4'>{item.title}</h1>
        <p className='text-justify mb-4'>{item.content}</p>
        </div>
    ) }
)};
</div>)
}

