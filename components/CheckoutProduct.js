import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"

function CheckoutProduct({ id, title, price, rating, description, category, image, hasPrime}) {
    return (
        <div className="grid grid-cols-5">
            <Image 
               src={image}
               height={200}
               width={200}
               objectFit="contain"
               alt=''
            />
            
            {/* middle */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                {Array(rating).fill().map((_,i)=>(
                    // eslint-disable-next-line react/jsx-key
                    <StarIcon key={i} className="h-5 text-yellow-500"/>
                ))}
                </div>
            </div>

        </div>
    )
}

export default CheckoutProduct
