import { db } from '@/lib/prisma'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ consumptionMethod: string }>
}

const isConsumptionMethodValid = (consumptionMethod: string) => {
  return ['DINE_IN', 'TAKEAWAY'].includes(consumptionMethod.toUpperCase())
}

export default async function RestaurantMenuPage({
  params,
  searchParams,
}: Props) {
  const { slug } = await params
  const { consumptionMethod } = await searchParams

  if (!isConsumptionMethodValid(consumptionMethod)) {
    return notFound()
  }

  const restaurant = await db.restaurant.findUnique({ where: { slug: slug } })

  return (
    <h1>
      {slug} {consumptionMethod}
    </h1>
  )
}
