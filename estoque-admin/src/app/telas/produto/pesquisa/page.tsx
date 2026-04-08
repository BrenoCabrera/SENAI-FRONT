"use client";
import styles from "../../../pesquisa.module.css";

export default function TelaPesquisaProduto() {
    return (
        <section className={styles.container}>
            <h3 className={styles.titulo}>
                Pesquisa de Produtos
            </h3>

            <hr className={styles.hr}/>

            

            <div className={styles.cont1}>
                <label htmlFor="categoria" className={styles.label}>Categoria:</label>
                <select name="categoria" id="categoria" className={styles.select}>
                    <option value="canecas">Canecas</option>
                    <option value="chaleiras">Chaleiras</option>
                </select>

                <label htmlFor="desc" className={styles.label}>Nome ou Descrição:</label>
                <input
                    type="text"
                    name="desc"
                    className={styles.input}
                />

                <button className={styles.button}>
                    Pesquisar
                </button>
            </div>

            <div className={styles.tabela}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Categoria</th>
                            <th>Nome</th>
                            <th>Quantidade</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>oi</td>
                            <td>oi</td>
                            <td>oi</td>
                        </tr>

                        <tr>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}