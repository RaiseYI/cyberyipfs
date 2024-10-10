import React from 'react'
import { Bell, Plus } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import TotalAssets from './TotalAssets'
import AccountBalances from './AccountBalances'
import RecentTransactions from './RecentTransactions'
import AssetAllocation from './AssetAllocation'
import IncomeExpenses from './IncomeExpenses'
import { Button } from "./ui/button"

const Dashboard = () => {
  const { isDarkMode } = useTheme()
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  return (
    <div className={`flex-1 ${isDarkMode ? 'bg-background-dark text-text-dark' : 'bg-background-light text-text-light'}`}>
      <header className={`${isDarkMode ? 'bg-card-dark' : 'bg-card-light'} shadow-sm`}>
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">{t.welcome}, Alex!</h1>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-4">
              <Bell className="h-6 w-6" />
            </Button>
            <Button className="bg-primary text-white">
              <Plus className="h-5 w-5 mr-2" />
              {t.newAccount}
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <TotalAssets />
            <AccountBalances />
            <RecentTransactions />
            <AssetAllocation />
            <IncomeExpenses />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard