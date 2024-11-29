'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { LoginForm } from './login-form'
import { PaymentInterface } from './payment-interface'
import { ProductCheckout } from './components/product-checkout'
import { PaymentMethod } from './components/payment-method'

export type PaymentStep = 'product' | 'payment-method' | 'login' | 'payment' | 'success'

export default function PaymentFlow() {
  const [step, setStep] = useState<PaymentStep>('product')
  const [paymentAmount] = useState(500)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-4xl p-6">
        {step === 'product' && (
          <ProductCheckout onProceedToPayment={() => setStep('payment-method')} />
        )}
        {step === 'payment-method' && (
          <PaymentMethod onSelectPaymentMethod={() => setStep('login')} />
        )}
        {step === 'login' && (
          <LoginForm onSuccess={() => setStep('payment')} />
        )}
        {step === 'payment' && (
          <PaymentInterface 
            amount={paymentAmount}
            onSuccess={() => setStep('success')}
          />
        )}
        {step === 'success' && (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-green-600">Payment Successful!</h2>
            <p className="text-gray-600">Your payment of ৳{paymentAmount} has been processed.</p>
            <button
              onClick={() => setStep('product')}
              className="text-primary hover:underline"
            >
              Return to merchant website
            </button>
          </div>
        )}
      </Card>
    </div>
  )
}

