"use client";

import { useRouter } from "next/navigation";
import styleCards from "../../card.module.css"

export default function TelaListaCategoria(){
    const router = useRouter();
    return(
    <div className={styleCards.cardsContainer}>
        <div className={styleCards.cardCriar} onClick={() => router.push("/telas/categoria/cadastro")}>➕Criar</div>
        <div className={styleCards.card} onClick={() => router.push("/telas/categoria/cadastro")}>Canecas</div>
        <div className={styleCards.card} onClick={() => router.push("/telas/categoria/cadastro")}>Chaleiras</div>
        <div className={styleCards.card} onClick={() => router.push("/telas/categoria/cadastro")}>Colherzinhas</div>
        <div className={styleCards.card} onClick={() => router.push("/telas/categoria/cadastro")}>Colherões</div>
        <div className={styleCards.card} onClick={() => router.push("/telas/categoria/cadastro")}>Prato rasos</div>
        <div className={styleCards.card} onClick={() => router.push("/telas/categoria/cadastro")}>Pratos fundos</div>
        <div className={styleCards.card} onClick={() => router.push("/telas/categoria/cadastro")}>Garfos</div>
        <div className={styleCards.card} onClick={() => router.push("/telas/categoria/cadastro")}>Facões</div>
        <div className={styleCards.card} onClick={() => router.push("/telas/categoria/cadastro")}>Saleiros</div>
        <div className={styleCards.card} onClick={() => router.push("/telas/categoria/cadastro")}>Açucareiros</div>
        <div className={styleCards.card} onClick={() => router.push("/telas/categoria/cadastro")}>Panelas que fazem feijão</div>
    </div>
    );
}