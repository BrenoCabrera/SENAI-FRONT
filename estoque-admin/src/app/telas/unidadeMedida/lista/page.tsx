import styleCards from "../../card.module.css"

export default function TelaListaUnidadeMedida(){
    return(
    <div className={styleCards.cardsContainer}>
        <div className={styleCards.card}>Miligrama (mg)</div>
        <div className={styleCards.card}>Grama (g)</div>
        <div className={styleCards.card}>Quilograma (kg)</div>
        <div className={styleCards.card}>Mililitro (ml)</div>
        <div className={styleCards.card}>Litro (l)</div>
        <div className={styleCards.card}>Milímetro (mm)</div>
        <div className={styleCards.card}>Metro (m)</div>
        <div className={styleCards.card}>Unidade (u)</div>
        <div className={styleCards.card}>Dezenia (dez)</div>
        <div className={styleCards.card}>Duzia (duz)</div>
    </div>
    )
}