import React from 'react'
import { BarChart } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

const IncomeExpenses = () => {
  const { isDarkMode } = useTheme()
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  const data = [
    { month: 'Jan', income: 5000, expenses: 4200 },
    { month: 'Feb', income: 5200, expenses: 4000 },
    { month: 'Mar', income: 5100, expenses: 4300 },
    { month: 'Apr', income: 5300, expenses: 4100 },
    { month: 'May', income: 5400, expenses: 4400 },
    { month: 'Jun', income: 5600, expenses: 4200 },
  ]

  const maxValue = Math.max(...data.flatMap(d => [d.income, d.expenses]))

  return (
    <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} overflow-hidden shadow rounded-lg col-span-2`}>
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg leading-6 font-medium">{t.incomeVsExpenses}</h3>
          <BarChart className={`h-6 w-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`} />
        </div>
        <div className="relative h-64">
          {data.map((item, index) => (
            <div key={index} className="flex items-end absolute h-full" style={{ left: `${index * (100 / (data.length - 1))}%`, bottom: 0 }}>
              <div className="flex flex-col items-center">
                <div className="w-8 bg-primary rounded-t" style={{ height: `${(item.income / maxValue) * 100}%` }}></div>
                <div className="w-8 bg-negative rounded-t ml-2" style={{ height: `${(item.expenses / maxValue) * 100}%` }}></div>
                <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mt-2`}>{item.month}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <div className="flex items-center mr-4">
            <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
            <span className={`text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{t.income}</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-negative rounded-full mr-2"></div>
            <span className={`text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{t.expenses}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IncomeExpenses