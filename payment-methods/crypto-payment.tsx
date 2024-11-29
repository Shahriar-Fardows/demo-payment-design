import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { QrCode } from 'lucide-react'

interface CryptoPaymentProps {
  onSuccess: () => void
}

export function CryptoPayment({ onSuccess }: CryptoPaymentProps) {
  const [selectedCrypto, setSelectedCrypto] = useState('')
  const demoWalletAddress = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'

  const cryptoOptions = ['USDT', 'BTC', 'USDC', 'BUSD']

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Select Cryptocurrency</Label>
        <Select onValueChange={setSelectedCrypto}>
          <SelectTrigger>
            <SelectValue placeholder="Select cryptocurrency" />
          </SelectTrigger>
          <SelectContent>
            {cryptoOptions.map((crypto) => (
              <SelectItem key={crypto} value={crypto}>
                {crypto}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedCrypto && (
        <>
          <div className="space-y-2">
            <Label>Wallet Address</Label>
            <div className="p-4 bg-gray-50 rounded-lg break-all overflow-auto">
              {demoWalletAddress}
            </div>
            <div className="flex justify-center p-4">
              <QrCode className="w-40 h-40" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="userWallet">Your Wallet Address</Label>
            <Input id="userWallet" placeholder="Enter your wallet address" />
          </div>

          <Button onClick={onSuccess} className="w-full">
            Complete Payment
          </Button>
        </>
      )}
    </div>
  )
}

