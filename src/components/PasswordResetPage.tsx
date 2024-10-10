import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

const PasswordResetPage = () => {
  const { isDarkMode } = useTheme()

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-background-dark text-text-dark' : 'bg-background-light text-text-light'}`}>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Reset Your Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <Button type="submit" className="w-full">Send Reset Link</Button>
          </form>
          <div className="mt-4 text-center">
            <Link to="/login" className="text-sm text-primary hover:underline">Back to Login</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default PasswordResetPage