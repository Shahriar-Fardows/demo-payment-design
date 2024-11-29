import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface PaymentMethodProps {
  onSelectPaymentMethod: () => void
}

export function PaymentMethod({ onSelectPaymentMethod }: PaymentMethodProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-center">Select Payment Method</h2>
      <div className="flex justify-center">
        <Button
          onClick={onSelectPaymentMethod}
          className="flex items-center space-x-2 px-6 py-3"
        >
          <span>Pay with Crypzoo</span>
        </Button>
      </div>
    </div>
  )
}

