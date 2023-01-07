import Link from 'next/link'
import { useRouter } from 'next/router'

function Home() {

  const router = useRouter()

  const handleClick = () => {
    console.log("Order was placed")
    router.push('/product')
  }

  // router.replace() can also be used when the desired url cannot be added to, but rather changed the already existing value. Acts similarly to replace attribute in Link. 

  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">
        Blog 
      </Link>
      <Link href="/product">
        Products 
      </Link>
      <button onClick={handleClick}>
        Place Order
      </button>
    </div>
 
  )
}

export default Home