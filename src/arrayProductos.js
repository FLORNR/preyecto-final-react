import RemeraCuello from "./img/cuelloLogo.jpg"
import RemeraSublimar from "./img/remeraSubl.jpg"
import RemeraEleccion from "./img/remeraSublElec.jpg"
import Musculosa from "./img/musculosa.png" 
import RemeraML from "./img/mangaLarga.png"

 const productos = [
        {
            id: '1',
            title: 'Remera Blanca Para Sublimar MC',
            description: 'Remera de Spun, blanca para sublimar. Talles disponibles: S, M, L, XL, XXL. Colores Disponibles: Blanco, Gris Negro.',
            price: '$480',
            pictureUrl: {RemeraSublimar},
        },
        {
            id: '2',
            title: 'Remera Blanca Para Sublimar ML',
            description: 'Remera de Spun, blanca para sublimar. Talles disponibles: S, M, L, XL, XXL. Colores Disponibles: Blanco, Gris Negro',
            price: '$570',
            pictureUrl: {RemeraML},
        },
        {
            id: '3',
            title: 'Remera Diseño',
            description: 'Remera de Spun, en distintos talles y colores, diseño sublimado a elección. Talles disponibles: S, M, L, XL, XXL. Colores Disponibles: Blanco, Gris Negro',
            price: '$700',
            pictureUrl: {RemeraEleccion}
        },
        {
            id: '4',
            title: 'Musculosa Blanca Para Sublimar',
            description: 'Musculosa de Spun, blanca para sublimar. Talles disponibles: S, M, L, XL, XXL. Colores Disponibles: Blanco, Gris Negro',
            price: '$450',
            pictureUrl: {Musculosa},
        },
        {
            id: '5',
            title: 'Remera con cuello Empresarial',
            description: 'Remera para personalizar con logo de tu empresa. Talles disponibles: S, M, L, XL, XXL. Colores Disponibles: Blanco, Gris Negro',
            price: '$900',
            pictureUrl: {RemeraCuello},
        }
    ];   


export default productos