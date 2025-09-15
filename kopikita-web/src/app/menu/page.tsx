import CoffeCard, { ICoffeCard } from "@/components/CoffeCard"
export default function Menu() {

    const coffeMenu: ICoffeCard[] = [
        {
            name: 'Espresso',
            image: 'https://i.pinimg.com/736x/4c/28/e2/4c28e2420bf38c50120dba0cbaf42e8d.jpg',
            price: '$3.50',
            description: 'Strong and bold shot of coffe'
        },
        {
            name: 'Cappucino',
            image: 'https://i.pinimg.com/736x/f8/56/1e/f8561ea80e14bd1989b4fe87736e1468.jpg',
            price: '$4.20',
            description: 'Espresso with steamed milk and foam.'
        },
        {
            name: 'Latte',
            image: 'https://i.pinimg.com/736x/e3/83/f9/e383f9aba12fcabbffd116323690fb57.jpg',
            price: '$4.00',
            description: 'Smooth coffe with creamy milk'
        }
    ]

    return (
        <div className="home">
            <h1>Our Coffe Menu</h1>
            <div className="class-grid">
                {
                    coffeMenu.map((coffe: ICoffeCard, key: any) => (
                        <CoffeCard
                            key={key}
                            name={coffe.name}
                            image={coffe.image}
                            price={coffe.price}
                            description={coffe.description}
                        />
                    ))
                }
            </div>
        </div>
    )
}
