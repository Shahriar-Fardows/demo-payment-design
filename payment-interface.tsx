'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CardPayment } from './payment-methods/card-payment'
import { MobileWallet } from './payment-methods/mobile-wallet'
import { CryptoPayment } from './payment-methods/crypto-payment'

interface PaymentInterfaceProps {
  amount: number
  onSuccess: () => void
}

export function PaymentInterface({ amount, onSuccess }: PaymentInterfaceProps) {
  const [selectedMethod, setSelectedMethod] = useState('card')

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Payment Details</h2>
        <p className="text-gray-600">You are paying: ৳{amount}</p>
      </div>
      
      <Tabs defaultValue="card" onValueChange={setSelectedMethod}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="card">Card Payment</TabsTrigger>
          <TabsTrigger value="wallet">Mobile Wallet</TabsTrigger>
          <TabsTrigger value="crypto">Crypto</TabsTrigger>
        </TabsList>
        <TabsContent value="card">
          <CardPayment onSuccess={onSuccess} />
        </TabsContent>
        <TabsContent value="wallet">
          <MobileWallet onSuccess={onSuccess} />
        </TabsContent>
        <TabsContent value="crypto">
          <CryptoPayment onSuccess={onSuccess} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

