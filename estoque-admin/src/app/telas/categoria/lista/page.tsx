"use client";

import { useRouter } from "next/navigation";
import styleCards from "../../card.module.css";
import styleTexts from "../../text.module.css";
import styles from "../lista/page.module.css";

export default function TelaListaCategoria() {
    const router = useRouter();

    return (
        <section className={styles.conteudo}>

            <h3 className={styleTexts.titulo}>Lista de Categorias</h3>
            
            <div className={styleCards.cardsContainer}>
                <div onClick={() => router.push("/telas/categoria/cadastro")} className={styleCards.cardCriar}>➕ Criar</div>
                <div onClick={() => router.push("/telas/categoria/cadastro")} className={styleCards.card}>Canecas</div>
                <div onClick={() => router.push("/telas/categoria/cadastro")} className={styleCards.card}>Chaleiras</div>
                <div onClick={() => router.push("/telas/categoria/cadastro")} className={styleCards.card}>Colherzinhas</div>
                <div onClick={() => router.push("/telas/categoria/cadastro")} className={styleCards.card}>Cholherões</div>
                <div onClick={() => router.push("/telas/categoria/cadastro")} className={styleCards.card}>Pratos rasos</div>
                <div onClick={() => router.push("/telas/categoria/cadastro")} className={styleCards.card}>Pratos fundos</div>
                <div onClick={() => router.push("/telas/categoria/cadastro")} className={styleCards.card}>Garfos</div>
                <div onClick={() => router.push("/telas/categoria/cadastro")} className={styleCards.card}>Facões</div>
                <div onClick={() => router.push("/telas/categoria/cadastro")} className={styleCards.card}>Saleiros</div>
                <div onClick={() => router.push("/telas/categoria/cadastro")} className={styleCards.card}>Açucareiros</div>
                <div onClick={() => router.push("/telas/categoria/cadastro")} className={styleCards.card}>Panelas que fazem feijão</div>
            </div>
            
        </section>
    )
}