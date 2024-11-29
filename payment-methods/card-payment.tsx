import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

interface CardPaymentProps {
  onSuccess: () => void
}

export function CardPayment({ onSuccess }: CardPaymentProps) {
  const [savedCard, setSavedCard] = useState('new')

  return (
    <div className="space-y-6">
      <RadioGroup defaultValue="new" onValueChange={setSavedCard}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="new" id="new" />
          <Label htmlFor="new">New Card</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="saved" id="saved" />
          <Label htmlFor="saved">Visa ending in 1234</Label>
        </div>
      </RadioGroup>

      {savedCard === 'new' && (
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="cardName">Cardholder Name</Label>
            <Input id="cardName" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input id="expiry" placeholder="MM/YY" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input id="cvv" type="password" maxLength={3} />
            </div>
          </div>
        </form>
      )}

      <Button onClick={onSuccess} className="w-full">
        Pay Now
      </Button>
    </div>
  )
}

