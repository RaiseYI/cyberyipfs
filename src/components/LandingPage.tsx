import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

const LandingPage = () => {
  const { isDarkMode } = useTheme()

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h2 className="text-3xl font-bold">Cyber Yi PFS</h2>
          <nav>
            <Button asChild variant="ghost">
              <Link to="/login">Login</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-grow flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h1 className="text-5xl font-extrabold mb-6">Welcome to Cyber Yi PFS</h1>
            <p className="text-xl mb-8">Your advanced personal financial management system. Take control of your finances with our cutting-edge tools and insights.</p>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link to="/register">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/login">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80" 
              alt="Financial Management" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </main>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Smart Budgeting", description: "AI-powered budgeting tools to optimize your spending." },
              { title: "Investment Tracking", description: "Real-time monitoring of your investment portfolio." },
              { title: "Secure Encryption", description: "Bank-level security to protect your financial data." }
            ].map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2023 Cyber Yi PFS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage