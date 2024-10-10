import React from 'react'
import { ShoppingCart, Coffee, Home } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

const RecentTransactions = () => {
  const { isDarkMode } = useTheme()
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  const transactions = [
    { name: 'Grocery Store', amount: -85.32, date: '2023-03-15', icon: ShoppingCart },
    { name: 'Coffee Shop', amount: -4.50, date: '2023-03-14', icon: Coffee },
    { name: 'Rent Payment', amount: -1200.00, date: '2023-03-01', icon: Home },
  ]

  return (
    <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} overflow-hidden shadow rounded-lg`}>
      <div className="p-5">
        <h3 className="text-lg leading-6 font-medium">{t.recentTransactions}</h3>
        <div className="mt-5 space-y-4">
          {transactions.map((transaction, index) => (
            <div key={index} className="flex items-center">
              <div className="flex-shrink-0">
                <transaction.icon className={`h-6 w-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`} />
              </div>
              <div className="ml-3 w-0 flex-1">
                <p className="text-sm font-medium">{transaction.name}</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{transaction.date}</p>
              </div>
              <div className="ml-3 flex-shrink-0">
                <p className={`text-sm font-medium ${transaction.amount < 0 ? 'text-negative' : 'text-green-600'}`}>
                  ${Math.abs(transaction.amount).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} px-5 py-3`}>
        <div className="text-sm">
          <a href="#" className="font-medium text-primary hover:text-blue-600">
            {t.viewAllTransactions}
          </a>
        </div>
      </div>
    </div>
  )
}

export default RecentTransactions