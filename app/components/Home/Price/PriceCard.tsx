import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import Button from "../../Helper/Button";

type Props = {
    image: string;
    plan: string;
    price: string
}

const PriceCard = ({ image, plan, price }: Props) => {
    return (
        <div className="bg-[#e3f0ff]  hover:scale-110 transition-all duration-500 rounded-lg p-4 md:p-10">
            <Image
                src={image}
                alt="image"
                width={500}
                height={500}
                className="w-12 h-12 mt-5 mb-8"
            />
            <h1 className="text-2xl font-bold tracking-wider text-blue-950">
                {plan}
            </h1>
            <p className="mt-2 text-black text-opacity-60 text-sm font-medium">
                Added Privacy and security features
            </p>
            {/* bar */}
            <div className="mt-8 mb-8 h-[1.5px] opacity-20 rounded-lg bg-gray-500 mx-auto" />
            {/* list content */}
            <div>
                <div className="flex items-center mb-8 space-x-2">
                    <FaCheck className="text-green-600" />
                    <p className="text-base font-bold text-blue-950">
                        Free Domain (${price} value)
                    </p>
                </div>
                <div className="flex items-center mb-8 space-x-2">
                    <FaCheck className="text-green-600" />
                    <p className="text-base font-bold text-blue-950">
                        Regular Security Patching 
                    </p>
                </div>
                <div className="flex items-center mb-8 space-x-2">
                    <FaCheck className="text-green-600" />
                    <p className="text-base font-bold text-blue-950">
                        HTTP/2eNABLED Servers
                    </p>
                </div>
                <div className="flex items-center mb-8 space-x-2">
                    <FaCheck className="text-green-600" />
                    <p className="text-base font-bold text-blue-950">
                        Free Object Chche Pro
                    </p>
                </div>

            </div>
            <Button bg="bg-rose-600">Get Started</Button>
        </div>
    )
}

export default PriceCard