import { getSession, getTodos } from '../utils/supabase/server'

export default async function Home() {
  const session = await getSession()
  const todos = await getTodos()

  return (
    <div>
      <h1>Welcome to your Supabase Next.js app</h1>
      {session ? (
        <>
          <p>You are logged in!</p>
          <h2>Your Todos:</h2>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  )
}