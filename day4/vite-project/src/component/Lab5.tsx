import { useState, useEffect, useMemo, useCallback } from "react";

interface User {
  id: number
  name: string
}


export default function Lab5() {
  const [user, setUser] = useState<User | null>(null)
  const [count, setCount] = useState<number>(1)

  const fetchUser = async (): Promise<User> => {
    return new Promise((res) => setTimeout(() => {
      res({ id: 1, name: "Alice" })
    }, 1000)
    )
  }

  useEffect(() => {
    let isMounted = true;

    const loadUser = async () => {
      const data = await fetchUser()
      if (isMounted) {
        setUser(data)
      }
    }

    loadUser().catch(console.error)

    return () => {
      isMounted = false
    }
  }, [])

  const welcomeMessage = useMemo<string>(() => {
    return user ? `Welcome, ${user.name}` : "Loading..."
  }, [user])

  const hdlClick = useCallback((): void => {
    if (user) {
      console.log(`Click by ${user.name}`)
    } else {
      console.log("Click but no user yet")
    }
  }, [user])

  const doubleCount = useMemo<number>(() => {
    return count * 2
  }, [count])

  const formatUser = useCallback(
    (user: User): string => {
      return `ID ${user.id}, Name: ${user.name}`
    }, []
  )

  return (
    <div>
      <h3>{welcomeMessage}</h3>
      <button onClick={hdlClick}>Click Me!</button>

      <h3>Counter</h3>
      <p>Count: {count}</p>
      <p>Double: {doubleCount}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <h3>User Info</h3>
      {user ? <p>{formatUser(user)}</p> : <p>No user loaded yet</p>}
    </div>
  )
}