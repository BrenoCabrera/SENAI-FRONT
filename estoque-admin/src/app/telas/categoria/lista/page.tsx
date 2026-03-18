import styleCards from "../../card.module.css"

export default function TelaListaCategoria(){
    return(
    <div className={styleCards.cardsContainer}>
        <div className={styleCards.card}>Canecas</div>
        <div className={styleCards.card}>Chaleiras</div>
        <div className={styleCards.card}>Colherzinhas</div>
        <div className={styleCards.card}>Colherões</div>
        <div className={styleCards.card}>Prato rasos</div>
        <div className={styleCards.card}>Pratos fundos</div>
        <div className={styleCards.card}>Garfos</div>
        <div className={styleCards.card}>Facões</div>
        <div className={styleCards.card}>Saleiros</div>
        <div className={styleCards.card}>Açucareiros</div>
        <div className={styleCards.card}>Panelas que fazem feijão</div>
    </div>
    );
}