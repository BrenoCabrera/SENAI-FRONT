import styles from "./page.module.css";
import inputStyles from "../../input.module.css";
import buttonStyles from "../../button.module.css";
import textStyles from "../../text.module.css"

export default function TelaCategoriaCadastro() {
    return (
        <section className={styles.conteudo}>

            <h3 className={textStyles.titulo}>Cadastro de Categorias</h3>

            <label htmlFor="nome">Nome:</label>
            <input className={inputStyles.input} type="text" name="nome" />

            <label htmlFor="descricao">Descrição: </label>
            <textarea className={inputStyles.textArea} name="descricao"></textarea>

            <div className={buttonStyles.divBotoes}>
                <button className={buttonStyles.botaoSalvar}>Salvar</button>
                <button className={buttonStyles.botaoExcluir}>Excluir</button>
            </div>

        </section>
    )
}