'use client'

import { useEffect, useState } from 'react'

interface ClientOnlyProps {
  children: React.ReactNode
}

/**
 * 
 * C'est un wrapper qui permet de vérifier si le composant est monté
 * pour eviter les erreurs de hydration
 * en mode developpement et en mode production
 * @param param0 
 * @returns 
 */
const ClientOnly: React.FC<ClientOnlyProps> = ({ children}) => {

  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return (
    <>
      {children} 
    </>
  )
}

export default ClientOnly