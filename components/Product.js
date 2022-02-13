import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useState } from "react"
import Currency from 'react-currency-formatter'
import {useDispatch} from 'react-redux'
import {addToBasket} from '../slices/basketSlice'

function Product({id, title, price,description, category, image}) {

    // create random rating 
    const [rating] = useState(Math.floor(Math.random()*5)+1)
    const [hasPrime] = useState(Math.random() < 0.5)

    const dispatch=useDispatch()

    const addItemToBasket = () =>{
        const product= {
            id, 
            title, 
            price,
            description, 
            category, 
            image,
            rating,
            hasPrime
        }
        // sending product info as action to redux store
        dispatch(addToBasket(product))
    }

    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

            <Image src={image} height={200} width={200} objectFit="contain" alt=""/>
            
            <h4 className="my-3">{title}</h4>

            <div className="flex">
                {Array(rating).fill().map((_, i)=>(
                    // eslint-disable-next-line react/jsx-key
                    <StarIcon key={i} className="h-5 text-yellow-500"/>
                ))}
            </div>

            <p className="text-xs my-2 line-clamp-2">{description}</p>

            <div className="">
                <Currency quantity={price} currency='GBP'/>
            </div>

            {hasPrime && (
                <div className="flex items-center space-x-2">
                    <Image width={50} height={50} src='https://links.papareact.com/fdw' alt=''/>
                    <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                </div>
            )}

            <button onClick={addItemToBasket} className="mt-auto button">Add to Basket</button>
        </div>
    )
}

export default Product
