import laptop from '@/assets/images/products/card-laptop.png'
import monitor from '@/assets/images/products/card-monitor.png'
import mouse from '@/assets/images/products/card-mouse.png'
import teclado from '@/assets/images/products/card-teclado.png'

export const products =[
    // Objeto el id no esta dentro de comillas
    {
        id: 1,
        title: "Laptop Gamer",
        price: 4300000,
        description: "Laptop de alto rendimiento para desarrollo y diseño web",
        image: laptop,
        category: "perifericos"
    },
    {
        id: 2,
        title: "Monitor de 27\"",
        price: 4300000,
        description: "Monitor ideal paara programación y diseño",
        image: monitor,
        category: "perifericos"
    },
    {
        id: 3,
        title: "Mouse",
        price: 45000,
        description: "Mouse ergonómico",
        image: mouse,
        category: "perifericos"
    },
    {
        id: 4,
        title: "Teclado Gamer",
        price: 43000,
        description: "Teclado mecánico con retroiluminación led",
        image: teclado,
        category: "perifericos"
    }
]