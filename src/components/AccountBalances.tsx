import React from 'react'
import { CreditCard, Wallet, Briefcase } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

const AccountBalances = () => {
  const { isDarkMode } = useTheme()
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  const accounts = [
    { name: 'Checking', balance: 5280.32, icon: CreditCard },
    { name: 'Savings', balance: 12750.89, icon: Wallet },
    { name: 'Investment', balance: 74798.01, icon: Briefcase },
  ]

  return (
    <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} overflow-hidden shadow rounded-lg`}>
      <div className="p-5">
        <h3 className="text-lg leading-6 font-medium">{t.accountBalances}</h3>
        <div className="mt-5 space-y-4">
          {accounts.map((account, index) => (
            <div key={index} className="flex items-center">
              <div className="flex-shrink-0">
                <account.icon className={`h-6 w-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`} />
              </div>
              <div className="ml-3 w-0 flex-1">
                <p className="text-sm font-medium">{account.name}</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>${account.balance.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} px-5 py-3`}>
        <div className="text-sm">
          <a href="#" className="font-medium text-primary hover:text-blue-600">
            {t.viewAllAccounts}
          </a>
        </div>
      </div>
    </div>
  )
}

export default AccountBalances