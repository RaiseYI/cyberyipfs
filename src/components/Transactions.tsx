import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

const Transactions = () => {
  const { isDarkMode } = useTheme()
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  const transactions = [
    { date: '2023-03-15', description: 'Grocery Store', amount: -85.32, category: 'Food' },
    { date: '2023-03-14', description: 'Salary Deposit', amount: 3000.00, category: 'Income' },
    { date: '2023-03-13', description: 'Electric Bill', amount: -120.50, category: 'Utilities' },
    { date: '2023-03-12', description: 'Restaurant', amount: -45.00, category: 'Dining' },
    { date: '2023-03-11', description: 'Gas Station', amount: -40.00, category: 'Transportation' },
  ]

  return (
    <div className={`p-6 ${isDarkMode ? 'bg-background-dark text-text-dark' : 'bg-background-light text-text-light'}`}>
      <h1 className="text-3xl font-bold mb-6">{t.transactions}</h1>
      <Card>
        <CardHeader>
          <CardTitle>{t.recentTransactions}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction, index) => (
                <TableRow key={index}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>{transaction.category}</TableCell>
                  <TableCell className={transaction.amount < 0 ? 'text-negative' : 'text-green-600'}>
                    ${Math.abs(transaction.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default Transactions