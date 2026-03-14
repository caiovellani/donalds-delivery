import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ConsumptionMethod } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  imageUrl: string
  imageAlt: string
  buttonText: string
  option: ConsumptionMethod
}

export default function ConsumptionMethodOption({
  imageAlt,
  imageUrl,
  buttonText,
  option,
}: Props) {
  return (
    <>
      <Card>
        <CardContent className="flex flex-col items-center gap-8 py-8">
          <div className="relative h-20 w-20">
            <Image
              src={imageUrl}
              fill
              className="object-contain"
              alt={imageAlt}
            />
          </div>

          <Button variant="secondary" className="rounded-full">
            <Link href={`/menu?consumptionMethod=${option}`}>{buttonText}</Link>
          </Button>
        </CardContent>
      </Card>
    </>
  )
}
