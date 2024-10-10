import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from './database.types'

export const createServerSupabaseClient = () =>
  createServerComponentClient<Database>({ cookies })

export async function getSession() {
  const supabase = createServerSupabaseClient()
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession()
    return session
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export async function getTodos() {
  const supabase = createServerSupabaseClient()
  try {
    const { data, error } = await supabase.from('todos').select('*')
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}