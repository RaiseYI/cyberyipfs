import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Home, PieChart, CreditCard, FileText, Settings, LogOut, Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { Button } from "./ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

const Sidebar = () => {
  const { isDarkMode, setIsDarkMode } = useTheme()
  const { language, setLanguage } = useLanguage()
  const t = translations[language as keyof typeof translations]
  const location = useLocation()
  const navigate = useNavigate()

  const menuItems = [
    { icon: Home, label: t.dashboard, path: '/dashboard' },
    { icon: PieChart, label: t.accounts, path: '/accounts' },
    { icon: CreditCard, label: t.transactions, path: '/transactions' },
    { icon: FileText, label: t.reports, path: '/reports' },
    { icon: Settings, label: t.settings, path: '/settings' },
  ]

  const handleLogout = () => {
    // Here you would typically handle the logout process
    navigate('/')
  }

  return (
    <div className="w-64 bg-card text-card-foreground shadow-lg">
      <div className="flex items-center justify-center h-16 border-b border-border">
        <h1 className="text-2xl font-bold text-primary">AssetTrack</h1>
      </div>
      <nav className="mt-6">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center px-6 py-3 ${
              location.pathname === item.path
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-muted'
            } transition-colors duration-200`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-0 w-64 border-t border-border">
        <div className="flex justify-between items-center px-6 py-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Select value={language} onValueChange={(value) => setLanguage(value)}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="zh">中文</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button
          variant="ghost"
          className="flex items-center w-full px-6 py-3 text-muted-foreground hover:bg-muted hover:text-primary transition-colors duration-200"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5 mr-3" />
          {t.logout}
        </Button>
      </div>
    </div>
  )
}

export default Sidebar