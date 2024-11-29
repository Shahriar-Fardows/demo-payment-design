import { useState } from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

interface LoginFormProps {
  onSuccess: () => void
}

export function LoginForm({ onSuccess }: LoginFormProps) {
  const [email, setEmail] = useState('demo@crypzoo.com')
  const [password, setPassword] = useState('crypzoo')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === 'demo@crypzoo.com' && password === 'crypzoo') {
      onSuccess()
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Image
          src="https://i.ibb.co.com/Gc344vf/crypzoo-2.png"
          alt="Crypzoo Logo"
          width={150}
          height={50}
          className="mx-auto"
        />
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-full">
          Log In
        </Button>
      </form>
    </div>
  )
}

