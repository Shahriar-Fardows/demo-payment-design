import { useState } from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

interface MobileWalletProps {
  onSuccess: () => void
}

export function MobileWallet({ onSuccess }: MobileWalletProps) {
  const [step, setStep] = useState<'provider' | 'otp' | 'pin'>('provider')
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null)

  const providers = [
    { id: 'crypzoo', name: 'Crypzoo', logo: 'https://i.ibb.co.com/Gc344vf/crypzoo-2.png' },
    { id: 'bkash', name: 'bKash', logo: 'https://i.ibb.co.com/25phBBK/bkash.png' },
    { id: 'paypal', name: 'PayPal', logo: 'https://i.ibb.co.com/m5YCJKg/paypal.png' },
  ]

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('pin')
  }

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSuccess()
  }

  return (
    <div className="space-y-6">
      {step === 'provider' && (
        <div className="grid grid-cols-3 gap-4">
          {providers.map((provider) => (
            <button
              key={provider.id}
              onClick={() => {
                setSelectedProvider(provider.id)
                setStep('otp')
              }}
              className="p-4 border rounded-lg hover:border-primary transition-colors"
            >
              <Image
                src={provider.logo}
                alt={provider.name}
                width={100}
                height={40}
                className="mx-auto"
              />
              <p className="text-sm text-center mt-2">{provider.name}</p>
            </button>
          ))}
        </div>
      )}

      {step === 'otp' && (
        <form onSubmit={handleOtpSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="otp">Enter OTP</Label>
            <Input id="otp" maxLength={4} placeholder="2026" />
          </div>
          <Button type="submit" className="w-full">
            Verify OTP
          </Button>
        </form>
      )}

      {step === 'pin' && (
        <form onSubmit={handlePinSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="pin">Enter PIN</Label>
            <Input id="pin" type="password" maxLength={5} placeholder="12345" />
          </div>
          <Button type="submit" className="w-full">
            Complete Payment
          </Button>
        </form>
      )}
    </div>
  )
}

