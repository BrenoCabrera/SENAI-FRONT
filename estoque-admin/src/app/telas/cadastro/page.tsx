"use client";

import styleTexts from "../text.module.css";
import styleCad from "../cadastro/cadastro.module.css";
import buttonStyles from "../button.module.css";

export default function TelaCadastroProduto() {
    return (
        <section>
            <header>
                <h3 className={styleTexts.titulo}>Cadastro de Produtos</h3>
            </header>

            <div className={styleCad.container}>


                <div className={styleCad.img}>
                    <p>Imagem:</p><br />
                    <img src="https://loja.mimostyle.com.br/upload/produto/imagem/b_panela-pressao-presscook-marmol-42l-mimo-style-952-2.webp" alt="" className={styleCad.imagem} />
                    <input type="file" />
                </div>

                <div className={styleCad.inp}>
                    <label htmlFor="">Nome:</label>
                    <input type="text" className={styleCad.input}/>

                    <label htmlFor="um">Unidade de Medida</label>
                    <select name="um" id="um" className={styleCad.input}>
                        <option value="Kg">#</option>
                        <option value="L">#</option>
                        <option value="ml">#</option>
                        <option value="M">#</option>
                    </select>

                    <label htmlFor="c">Categoria:</label>
                    <select name="c" id="c" className={styleCad.input}>
                        <option value="#">#</option>
                        <option value="#">#</option>
                        <option value="#">#</option>
                        <option value="#">#</option>
                    </select>

                    <label htmlFor="fra">Habilitado</label>
                    <select name="fra" id="fra" className={styleCad.input}>
                        <option value="#">Sim</option>
                        <option value="#">Não</option>
                    </select>
                </div>

                <div className={styleCad.des}>
                    <label htmlFor="">Descricao:</label>
                    <textarea name="" id="" className={styleCad.area}/>
                </div>
            </div>

            <div className={`${buttonStyles.divBotoes} ${styleCad.botao}`}>
                <button className={buttonStyles.botaoSalvar}>Salvar</button>
            </div>
        </section>
    )
}