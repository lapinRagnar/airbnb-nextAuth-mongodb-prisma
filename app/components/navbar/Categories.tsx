'use client'

import Container from "../Container"
import { TbBeach, TbMountain, TbPool,  } from 'react-icons/tb'
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from 'react-icons/gi'
import { FaSkiing } from 'react-icons/fa'
import { BsSnow } from 'react-icons/bs'
import { IoDiamondOutline } from 'react-icons/io5'
import { MdOutlineVilla } from 'react-icons/md'
import CategoryBox from "../CategoryBox"
import { usePathname, useSearchParams } from "next/navigation"

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'this proprety is close to the beach!'
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'this proprety has windmills!'
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'this proprety is modern!'
  },
  {
    label: 'CountrySide',
    icon: TbMountain,
    description: 'this proprety is in the countryside!'
  },
  {
    label: 'Castle',
    icon: GiCastle,
    description: 'this proprety is in the castle!'
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'this proprety has a pool!'
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'this proprety is on an island!'
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'this proprety has skiing activities!'
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'this proprety has camping activities!'
  },
  {
    label: 'Artic',
    icon: BsSnow,
    description: 'this proprety is in artic!'
  },
  {
    label: 'Cave',
    icon: GiCaveEntrance,
    description: 'this proprety is in a cave!'
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'this proprety is in the desert!'
  },
  {
    label: 'Boat',
    icon: GiBoatFishing,
    description: 'this proprety is in the boat!'
  },
  {
    label: 'Barns',
    icon: GiBarn,
    description: 'this proprety is in the Barns!'
  },
  {
    label: 'Lux',
    icon: IoDiamondOutline,
    description: 'this proprety is luxurious!'
  },
]

const Categories = () => {

  const params = useSearchParams()
  const category = params?.get('category')
  const pathname = usePathname()

  const isMainPage = pathname === '/'

  if (!isMainPage) {
    return null
  }
  
  return (
    <Container>
      <div
        className='
          pt-4
          flex
          flex-row
          items-center
          justify-between
          overflow-x-auto
        '
      >
        { categories.map(item => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            description={item.description}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  )
}

export default Categories