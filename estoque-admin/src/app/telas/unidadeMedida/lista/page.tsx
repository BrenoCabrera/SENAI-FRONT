'use client';

import styleCards from "../../card.module.css";
import styles from "../lista/page.module.css";
import styleTexts from "../../text.module.css";
import { useRouter } from "next/navigation";

export default function TelaListaUnidadeMedida() {
    const router = useRouter();
    return (
        <section className={styles.conteudo}>

            <h3 className={styleTexts.titulo}>Lista de Unidades de Medida</h3>

            <div className={styleCards.cardsContainer}>
                <div onClick={() => router.push("/telas/unidadeMedida/cadastro")} className={styleCards.cardCriar}>➕ Criar</div>
                <div onClick={() => router.push("/telas/unidadeMedida/cadastro")} className={styleCards.card}>Miligrama (mg)</div>
                <div onClick={() => router.push("/telas/unidadeMedida/cadastro")} className={styleCards.card}>Grama (g)</div>
                <div onClick={() => router.push("/telas/unidadeMedida/cadastro")} className={styleCards.card}>Quilograma (kg)</div>
                <div onClick={() => router.push("/telas/unidadeMedida/cadastro")} className={styleCards.card}>Mililitro (ml)</div>
                <div onClick={() => router.push("/telas/unidadeMedida/cadastro")} className={styleCards.card}>Litro (l)</div>
                <div onClick={() => router.push("/telas/unidadeMedida/cadastro")} className={styleCards.card}>Milímetro (mm)</div>
                <div onClick={() => router.push("/telas/unidadeMedida/cadastro")} className={styleCards.card}>Metro (m)</div>
                <div onClick={() => router.push("/telas/unidadeMedida/cadastro")} className={styleCards.card}>Unidade (un)</div>
                <div onClick={() => router.push("/telas/unidadeMedida/cadastro")} className={styleCards.card}>Dezena (dez)</div>
                <div onClick={() => router.push("/telas/unidadeMedida/cadastro")} className={styleCards.card}>Dúzia (duz)</div>
            </div>
            
        </section>
    )
}