import { Product } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  products: Product[]
}

export default function Products({ products }: Props) {
  return (
    <div className="space-y-3 px-5">
      {products.map((product) => (
        <Link
          href="/"
          className="flex items-center justify-between gap-10 py-3 border-b"
          key={product.id}
        >
          <div>
            <h3 className="text-sm font-semibold">{product.name}</h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {product.description}
            </p>
            <p className="pt-3 text-sm font-semibold">
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(product.price)}
            </p>
          </div>

          <div className="relative min-h-20.5 min-w-30">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </Link>
      ))}
    </div>
  )
}
