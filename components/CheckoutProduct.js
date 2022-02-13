import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"
import Currency from 'react-currency-formatter'
import { useDispatch } from "react-redux"
import { addToBasket, removeFromBasket } from "../slices/basketSlice"

function CheckoutProduct({ id, title, price, rating, description, category, image, hasPrime}) {
    const dispatch = useDispatch()

    const addItemToBasket = () => {
        const product = {
            id, 
            title, 
            price, 
            rating, 
            description, 
            category, 
            image, 
            hasPrime
        }
       dispatch(addToBasket(product)) 
    }
    const removeItemFromBasket = () => {
       dispatch(removeFromBasket({id})) 
    }
    
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
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <Currency quantity={price} currency='GBP'/>

                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <Image width={50} height={50} src='https://links.papareact.com/fdw' alt=''/>
                        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                    </div>
                )}
            </div>
            
            {/* right */}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button onClick={addItemToBasket} className="button">Add to basket</button>
                <button onClick={removeItemFromBasket} className="button">Remove from basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
