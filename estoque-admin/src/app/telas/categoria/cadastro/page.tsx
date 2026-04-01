"use client";
import styles from "../../cadastro.module.css";
import style from "../../button.module.css";

export default function CriarCategoria() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Cadastrar Categoria</h1>

      <input
        className={styles.input}
        type="text"
        placeholder="Nome..."
      />

      <textarea
        className={styles.input}
        placeholder="Descrição"
      />

<div className={style.botoes}>
  <button className={style.botaoAdicionar}>Salvar</button>
  <button className={style.botaoExcluir}>Excluir</button>
</div>

    </div>
  );
}