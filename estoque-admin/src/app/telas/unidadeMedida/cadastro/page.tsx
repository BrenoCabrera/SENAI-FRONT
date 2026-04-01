"use client";
import styles from "../../cadastro.module.css";
import style from "../../button.module.css";

export default function CriarUnidadeMedida() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Cadastrar Unidade de Medida</h1>

      <textarea
        className={styles.input}
        placeholder="Descrição"
      />

      <div className={styles.fracionavel}>
        <label className={styles.label} htmlFor="fra">
          Fracionável:
        </label>

        <select className={styles.select} name="fra" id="fra" defaultValue="nao">
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
      </div>

        <div className={style.botoes}>
            <button className={style.botaoAdicionar}>Salvar</button>
            <button className={style.botaoExcluir}>Excluir</button>
        </div>
    </div>
  );
}