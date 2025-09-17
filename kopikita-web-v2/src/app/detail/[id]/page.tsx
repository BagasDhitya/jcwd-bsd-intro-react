'use client'
import { useRouter } from "next/navigation"
import Button from "@/components/Button"
import coffeeData from "@/dummy/coffe.json"
import { notFound } from "next/navigation"
import Link from "next/link"

interface DetailPageProps {
    params: { id: string }
}

export default function DetailPage({ params }: DetailPageProps) {
    const router = useRouter()
    const coffeeId = parseInt(params.id)
    const coffee = coffeeData.find((c) => c.id === coffeeId)

    if (!coffee) return notFound()

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Coffee Image */}
                    <div className="md:w-1/2">
                        <img
                            src={coffee.image}
                            alt={coffee.title}
                            className="w-full h-auto rounded-xl shadow-md object-cover"
                        />
                    </div>

                    {/* Coffee Info */}
                    <div className="md:w-1/2 flex flex-col justify-between">
                        <div className="space-y-4">
                            <h1 className="text-3xl md:text-4xl font-bold">{coffee.title}</h1>
                            <p className="text-brown-700 font-semibold text-xl">
                                Rp {coffee.price.toLocaleString()}
                            </p>
                            <p className="text-gray-700">{coffee.description}</p>
                        </div>

                        <div className="mt-6 flex gap-4">
                            <Link href="/menu">
                                <Button label="Back to Menu" variant="secondary" onClick={() => router.push('/menu')} />
                            </Link>
                            <Button label="Order Now" variant="primary" onClick={() => console.log('Click ...')} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
