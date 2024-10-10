import { createClientSupabaseClient } from './supabase/client'

export async function signIn(email: string, password: string) {
  const supabase = createClientSupabaseClient()
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error
}

export async function signOut() {
  const supabase = createClientSupabaseClient()
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}