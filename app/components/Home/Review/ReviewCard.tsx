import Image from "next/image";
import { FaStar } from "react-icons/fa";

type Props={
    image:string;
    name:string
}

const ReviewCard = ({image,name}:Props) => {
  return (
    <div className="p-6 m-4 bg-[#0449be]">
        {/* rating */}
        <div className="flex items-center space-x-2 mt-4">
        <FaStar className="h-4 w-4 text-yellow-500"/>
        <FaStar className="h-4 w-4 text-yellow-500"/>
        <FaStar className="h-4 w-4 text-yellow-500"/>
        <FaStar className="h-4 w-4 text-yellow-500"/>
        <FaStar className="h-4 w-4 text-yellow-500"/>
        </div>
        <p className="mt-4 text-white text-opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repudiandae earum corrupti quisquam aliquam totam veritatis est quae voluptatum reiciendis.
        </p>
        {/* Client Profile */}
        <div className="flex mt-8 items-center space-x-4">
            <div>
                <Image src={image} alt="name" width={500} height={500} className="w-14 h-14 rounded-full"/>
            </div>
            <div>
                <h1 className="text-lg text-white uppercase">{name}</h1>
                <p className="mt-[0.3rem] text-[15px] text-white opacity-70">CEO,WON</p>
            </div>
            

        </div>
        
    </div>
  )
}

export default ReviewCard