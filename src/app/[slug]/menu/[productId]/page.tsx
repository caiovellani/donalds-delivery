import { Button } from '@/components/ui/button'
import { db } from '@/lib/prisma'
import { ChevronLeftIcon, ScrollTextIcon } from 'lucide-react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import ProductHeader from './components/product-header'

interface Props {
  params: Promise<{ slug: string; productId: string }>
}

export default async function ProductPage({ params }: Props) {
  const { slug, productId } = await params
  const product = await db.product.findUnique({ where: { id: productId } })

  if (!product) {
    return notFound()
  }

  return (
    <>
      <div className="relative h-75 w-full">
        <ProductHeader product={product} />
      </div>
    </>
  )
}
