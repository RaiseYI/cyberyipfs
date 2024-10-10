import React, { useState } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Accounts from './components/Accounts'
import Transactions from './components/Transactions'
import Reports from './components/Reports'
import Settings from './components/Settings'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import RegistrationPage from './components/RegistrationPage'
import PasswordResetPage from './components/PasswordResetPage'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [language, setLanguage] = useState('en')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    return isAuthenticated ? children : <Navigate to="/login" replace />
  }

  return (
    <ThemeProvider value={{ isDarkMode, setIsDarkMode }}>
      <LanguageProvider value={{ language, setLanguage }}>
        <Router>
          <div className="dark">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/register" element={<RegistrationPage setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/reset-password" element={<PasswordResetPage />} />
              <Route
                path="/*"
                element={
                  <PrivateRoute>
                    <div className="flex h-screen">
                      <Sidebar />
                      <div className="flex-1 overflow-y-auto">
                        <Routes>
                          <Route path="/dashboard" element={<Dashboard />} />
                          <Route path="/accounts" element={<Accounts />} />
                          <Route path="/transactions" element={<Transactions />} />
                          <Route path="/reports" element={<Reports />} />
                          <Route path="/settings" element={<Settings />} />
                        </Routes>
                      </div>
                    </div>
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App