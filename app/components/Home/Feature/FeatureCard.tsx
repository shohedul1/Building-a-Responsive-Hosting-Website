import Image from "next/image"

type Props ={
    image:string,
    title:string
}

const FeatureCard = ({image,title}:Props) => {
  return (
    <div>
        <div className="w-20 h-20 mx-auto bg-white rounded-full mt-8 mb-6 flex items-center justify-center flex-col">
         <Image 
         src={image}
         alt={title}
         width={500}
         height={500}
         className="w-10 h-10"
         />
        </div>
        <h1 className="text-center text-white font-bold tracking-wider text-2xl">{title}</h1>
        <p className="mt-4 text-white text-opacity-75 text-sm text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione odit totam. Expedita, nam quis.
        </p>
        <button className="bg-white text-base block hover:bg-yellow-300 transition-all duration-150 mt-6 mx-auto uppercase text-black px-8 py-2 rounded-full font-semibold cursor-pointer">
           View Details
        </button>
    </div>
  )
}

export default FeatureCard