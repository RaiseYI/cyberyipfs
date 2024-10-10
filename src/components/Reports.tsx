import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const Reports = () => {
  const { isDarkMode } = useTheme()
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  const monthlyData = [
    { name: 'Jan', income: 5000, expenses: 4200 },
    { name: 'Feb', income: 5200, expenses: 4000 },
    { name: 'Mar', income: 5100, expenses: 4300 },
    { name: 'Apr', income: 5300, expenses: 4100 },
    { name: 'May', income: 5400, expenses: 4400 },
    { name: 'Jun', income: 5600, expenses: 4200 },
  ]

  return (
    <div className={`p-6 ${isDarkMode ? 'bg-background-dark text-text-dark' : 'bg-background-light text-text-light'}`}>
      <h1 className="text-3xl font-bold mb-6">{t.reports}</h1>
      <Card>
        <CardHeader>
          <CardTitle>{t.incomeVsExpenses}</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="income" fill="#3B82F6" name={t.income} />
              <Bar dataKey="expenses" fill="#EF4444" name={t.expenses} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

export default Reports