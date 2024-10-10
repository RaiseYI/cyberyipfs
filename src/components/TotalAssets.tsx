import React from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

const TotalAssets = () => {
  const { isDarkMode } = useTheme()
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  return (
    <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} overflow-hidden shadow rounded-lg`}>
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-primary rounded-md p-3">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} truncate`}>{t.totalAssets}</dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold">$92,829</div>
                <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  <TrendingUp className="self-center flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                  <span className="sr-only">Increased by</span>
                  3.2%
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} px-5 py-3`}>
        <div className="text-sm">
          <a href="#" className="font-medium text-primary hover:text-blue-600">
            {t.viewAllAssets}
          </a>
        </div>
      </div>
    </div>
  )
}

export default TotalAssets