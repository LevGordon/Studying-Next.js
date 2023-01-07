import Link from "next/link"

function index( {productId = 100} ) {
  return (
    <div>
      <Link href="/">
        Home
      </Link>
          <h2>
            <Link href="/product/1">
              product 1
            </Link>
          </h2>
          <h2>
            <Link href="/product/2">
              product 2
            </Link>
          </h2>
          <h2>
            <Link href="/product/3" replace>   {/* "replace" changes the default behavior of the "back" arrow in the browser */} 
              product 3
            </Link>
          </h2>
          <h2>
            <Link href={`/product/${productId}`}>
              product {productId}
            </Link>
          </h2>
    </div>
  
  )
}

export default index