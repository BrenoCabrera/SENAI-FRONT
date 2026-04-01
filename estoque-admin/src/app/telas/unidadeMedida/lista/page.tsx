"use client";

import { useRouter } from "next/navigation";
import styleCards from "../../card.module.css"

export default function TelaListaUnidadeMedida(){
    const router = useRouter();
    return(
    <div className={styleCards.cardsContainer}>
        <div className={styleCards.cardCriar} onClick={() => router.push("/telas/unidadeMedida/cadastro")}>➕Criar</div>
        <div className={styleCards.card} onClick={() => router.push("/telas/unidadeMedida/cadastro")}>Miligrama (mg)</div>
        <div className={styleCards.card} onClick={() => router.push("/telas/unidadeMedida/cadastro")}>Grama (g)</div>
        <div className={styleCards.card} onClick={() => router.push("/telas/unidadeMedida/cadastro")}>Quilograma (kg)</div>
        <div className={styleCards.card} onClick={() => router.push("/telas/unidadeMedida/cadastro")}>Mililitro (ml)</div>
        <div className={styleCards.card} onClick={() => router.push("/telas/unidadeMedida/cadastro")}>Litro (l)</div>
        <div className={styleCards.card} onClick={() => router.push("/telas/unidadeMedida/cadastro")}>Milímetro (mm)</div>
        <div className={styleCards.card} onClick={() => router.push("/telas/unidadeMedida/cadastro")}>Metro (m)</div>
        <div className={styleCards.card} onClick={() => router.push("/telas/unidadeMedida/cadastro")}>Unidade (u)</div>
        <div className={styleCards.card} onClick={() => router.push("/telas/unidadeMedida/cadastro")}>Dezenia (dez)</div>
        <div className={styleCards.card} onClick={() => router.push("/telas/unidadeMedida/cadastro")}>Duzia (duz)</div>
    </div>
    )
}