'use client'

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { SafeUser } from "../types"

interface HeartButtonProps {
  listingId: string
  currentUser?: SafeUser | null
  // onClick: () => void
}

const HeartButton: React.FC<HeartButtonProps> = ({listingId, currentUser, }) => {
  
  const hasFavorited = true
  const toggleFavorite = () => {}

  return (
    <div 
      onClick={toggleFavorite}
      className='
        relative
        hover:opacity-80
        transition
        cursor-pointer
      
      '
    > 
      <AiOutlineHeart 
        size={28}
        className='
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
        
        '
      />

      <AiFillHeart 
        size={28}
        className={`
          absolute
          -top-[2px]
          -right-[2px]
          ${hasFavorited ? 'fill-rose-500' : 'fill-neutral-500'}
        
        `}
      />


    </div>
  )
}

export default HeartButton