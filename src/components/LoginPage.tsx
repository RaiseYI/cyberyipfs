import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

const LoginPage = ({ setIsAuthenticated }: { setIsAuthenticated: (value: boolean) => void }) => {
  const { isDarkMode } = useTheme()
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically validate the login credentials
    setIsAuthenticated(true)
    navigate('/dashboard')
  }

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Login to AssetTrack</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" required />
            </div>
            <Button type="submit" className="w-full">Login</Button>
          </form>
          <div className="mt-4 text-center">
            <Link to="/reset-password" className="text-sm text-primary hover:underline">Forgot password?</Link>
          </div>
          <div className="mt-4 text-center">
            <span className="text-sm">Don't have an account? </span>
            <Link to="/register" className="text-sm text-primary hover:underline">Register</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginPage