import black from '/black-dress-winners.jpg'
import red from '/red-image.jpg'
import client from '/client-profile-pic.jpg'
import hero from '/hero-image.jpg';
import gold from '/client-gold-dress.jpg'
import green from '/green-dress-client.jpg'

const Index = () => {
  return (
    <div className='mt-5 px-5 py-5 bg-[#9EC1CC]'>
        <p className='text-center text-[40px] font-bold'>Gallery</p>
        <div className='flex flex-wrap gap-5 justify-center'>
            <img src={black} alt="" className='w-[200px] h-[200px] rounded-full object-cover'/>
            <img src={red} alt="" className='w-[200px] h-[200px] rounded-full object-cover'/>
            <img src={client} alt="" className='w-[200px] h-[200px] rounded-full object-cover'/>
            <img src={hero} alt="" className='w-[200px] h-[200px] rounded-full object-cover'/>
            <img src={gold} alt="" className='w-[200px] h-[200px] rounded-full object-cover'/>
            <img src={green} alt="" className='w-[200px] h-[200px] rounded-full object-cover'/>
        </div>
    </div>
  )
}

export default Index