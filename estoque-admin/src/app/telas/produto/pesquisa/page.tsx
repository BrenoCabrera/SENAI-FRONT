"use client";

import { useRouter } from "next/navigation";
import inputStyles from "../../input.module.css";
import styleTexts from "../../text.module.css";
import tableStyles from "../../table.module.css";
import buttonStyles from "../../button.module.css";
import styles from "../pesquisa/page.module.css";


export default function TelaPesquisaProduto() {
    const router = useRouter();

    return (
        <section className={styles.conteudo}>

            <h3 className={styleTexts.titulo}>Pesquisa de Produtos</h3>

            <div className={styles.parametros}>
                <div>
                    <label htmlFor="categoria">Categoria: </label> <br></br>
                    <select className={inputStyles.select} name="categoria">
                        <option></option>
                        <option>Ferramentas</option>
                        <option>Utensílios</option>
                        <option>Líquidos Inflamáveis</option>
                        <option>Alimentos</option>
                        <option>Cama, Mesa e Banho</option>
                    </select>

                </div>
                <div style={{flex: 1}}>
                    <label htmlFor="nomeDescricao">Nome ou Descrição: </label> <br></br>
                    <input className={inputStyles.input} style={{width: '100%'}} type="text" name="nomeDescricao" />
                </div>
                <button className={buttonStyles.botaoPadrao} style={{width: '100px'}}>🔍</button>
            </div>

            <table className={tableStyles.table}>
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Nome</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Utensílios</td>
                        <td>Panela que faz feijão Fu Fu</td>
                        <td>30 Un</td>
                    </tr>
                    <tr>
                        <td>Alimentos</td>
                        <td>Sal</td>
                        <td>30 Gr</td>
                    </tr>
                    <tr>
                        <td>Líquidos Inflamáveis</td>
                        <td>Thinner</td>
                        <td>25 Lt</td>
                    </tr>
                </tbody>
            </table>

            <button onClick={() => router.push("/telas/cadastro")}>Cadastrar</button>

        </section>
    )
}