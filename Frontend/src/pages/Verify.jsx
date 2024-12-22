import { useContext, useEffect } from "react"
import { ShopContext } from "../contexts/ShopContext"
import { useSearchParams } from "react-router-dom"
import axios from "axios"
import { toast }from 'react-toastify'



const Verify = () => {
  
  const {navigate, token, setCartItems, backendUrl} = useContext(ShopContext)
  const [searchParams, setSearchParams] = useSearchParams()

  const success = searchParams.get('success')
  const orderId = searchParams.get('orderId')

  const verifyPayment = async () => {
        try {
            
            if(!token) {
              return null
            }

            const response = await axios.post(backendUrl+'/api/order/verifyStripe',{ success, orderId }, { headers: { token }})

            if (response.data.success) {
                setCartItems({})
                setSearchParams({}) // Clear the query parameters after success
                navigate('/orders')
            } else {
                setSearchParams({}) // Optionally clear params after failure
                navigate('/cart')
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
            setSearchParams({}); // Clear params on error
            
        }
  } 

  useEffect(() => {
    verifyPayment()
  },[token])

    return (
    <div>

    </div>
  )
}

export default Verify