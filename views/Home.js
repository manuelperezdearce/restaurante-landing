
export default function Home() {
    return `
        
        <section-main-nav></section-main-nav>
            <section-cards id="menu" title="Menu de Platos" dataURL="./mock/ListaEspecialidades.json"></section-cards>
                <plato-semana id="platodelasemana" title="Plato de la Semana" dataURL="../mock/ListaPlatosSemana.json"></plato-semana>
                <section-tabla id="bebidas" title="Menu de Bebidas" dataURL="./mock/ListaBebidas.json"></section-tabla>
                <section-promociones id="promociones" title="Promociones" dataURL="./mock/ListaPromociones.json"></section-promociones>
                <section-videos id="videos" title="Videos Relacionados" dataURL="./mock/ListaPromociones.json"></section-promociones>
    
    `;
}