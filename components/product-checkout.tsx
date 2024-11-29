import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface ProductCheckoutProps {
  onProceedToPayment: () => void
}

export function ProductCheckout({ onProceedToPayment }: ProductCheckoutProps) {
  const product = {
    name: 'Premium Wireless Headphones',
    image: '/placeholder.svg?height=300&width=300',
    description: 'High-quality wireless headphones with noise cancellation and long battery life.',
    quantity: 1,
    price: 500,
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-center">Product Checkout</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image
            src="https://img.drz.lazcdn.com/static/bd/p/dc4380cb1d7a4b81343302a511cf3f67.jpg_2200x2200q80.jpg_.webp"
            alt={product.name}
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <div className="flex justify-between">
            <span>Quantity:</span>
            <span>{product.quantity}</span>
          </div>
          <div className="flex justify-between">
            <span>Price:</span>
            <span>{product.price} BDT</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total Price:</span>
            <span>{product.price * product.quantity} BDT</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button onClick={onProceedToPayment} size="lg">
          Proceed to Payment
        </Button>
      </div>
    </div>
  )
}

