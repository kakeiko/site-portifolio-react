import './App.css';
import minha_foto from './static/pag1/minha-foto.jpg'
import dragonslayer from './static/pag2/Dragon Slayer.png'
import educacao_img from './static/pag3/educacao.png'
import tec_img from './static/pag3/omni.png'
import skill_img from './static/pag3/skills.png'
import katana_img from './static/pag3/katana.png'
import linha from './static/pag2/Line 1.svg'
import git from './static/pag4/github.png'
import link from './static/pag4/linkedin.png'
import adaga from './static/pag4/adaga-thorfinn-1.png'
import zap from './static/pag4/zap.png'
import insta from './static/pag4/insta.png'
import skull from './static/pag4/skull-knight.svg'
import aspas from './static/pag4/“.svg'

function App() {
  return (
    <div className='conteiner'>
      <section className='pag-inicial'>
        <div className='objetos-inicial'>
          <img src={minha_foto} className='foto-eu'></img>
          <h1 className='titulo-nome'>Guilherme Dutra</h1>
          <h3 className='categoria-nome'>Desenvolvedor Full-Stack</h3>
        </div>
      </section>
      <section className='pag-sobre'>
        <div className='objetos-sobre'>
          <img src={dragonslayer} className='dragon-slayer'></img>
            <div className='conteudo-sobre'>
              <h2 className='titulo-sobre'>Sobre mim</h2>
              <p className='text-sobre'>Eu sou um desenvolvedor iniciante, ainda não tenho experiência profissional mas faço projetos pessoais. Ultilizo as linguagens de programação Python e JavaScript e estou estudando sobre a liguagem Golang, também faço uso de alguns frameworks como o Django, Flask e React, sei lidar com bancos de dados e API`S. Para os meus designs eu uso o Figma e o Photoshopp. Apesar de fazer o front-end e back-end, eu prefiro trabalhar na parte de back-end. No geral eu sou uma pessoa calma e sei trabalhar em equipe, além de ser bom com resoluções de problemas e ter uma aprendizagem rápida.</p>
            </div>
        </div>
        <img src={linha} className='linha-img'></img>
      </section>
      <section className='pag-skills'>
        <img src={katana_img} className='katana-1'></img>
        <img src={katana_img} className='katana-2'></img>

        <div className='educacao'>
          <h3 className='titulo-educacao'>Estudos</h3>
          <img src={educacao_img} className='img-educacao'></img>
          <ul className='conteudo-educacao'>
            <li className='text-educacao'>Faculdade de Engenharia de Software na Estácio - março de 2024.</li>
            <li className='text-educacao'>Curso da Alura - março de 2024.</li>
          </ul>
        </div>

        <div className='tec'>
          <h3 className='titulo-tec'>Tecnologias</h3>
          <img src={tec_img} className='img-tec'></img>
          <ul className='conteudo-tec'>
            <li className='text-tec'>Python</li>
            <li className='text-tec'>JavaScript</li>
            <li className='text-tec'>HTML</li>
            <li className='text-tec'>CSS</li>
            <li className='text-tec'>Django</li>
            <li className='text-tec'>Flask</li>
            <li className='text-tec'>React</li>
            <li className='text-tec'>Figma</li>
            <li className='text-tec'>Photoshop</li>
            <li className='text-tec'>PostegreSQL</li>
          </ul>
        </div>
        <div className='skills'>
          <h3 className='titulo-skills'>Habilidades</h3>
          <img src={skill_img} className='img-skills'></img>
          <ul className='conteudo-skills'>
            <li className='text-skills'>Aprendizagem rápida</li>
            <li className='text-skills'>Flexível</li>
            <li className='text-skills'>Fácil adaptação</li>
            <li className='text-skills'>Resolução de problemas</li>
            <li className='text-skills'>Inglês Intermediário</li>
            <li className='text-skills'>Organização</li>
          </ul>    
        </div>
        <img src={linha} className='linha-img2'></img>
      </section>
      <section className='pag-contatos'>
        <div className='pro-cert'>
            <div className='projeto'>
              <h2 className='titulo-projeto'>Meus projetos:</h2>
              <a href='https://github.com/kakeiko?tab=repositories' target="_blank"><img src={git} className='img-projeto'></img></a>
            </div>
            <img src={adaga} className='adaga-1'></img>
            <img src={adaga} className='adaga-2'></img>
            <div className='certificado'>
              <h2 className='titulo-certificado'>Meus certicados:</h2>
              <a href='https://www.linkedin.com/in/guilherme-dutra-55559625a/recent-activity/all/' target="_blank"><img src={link} className='img-certificado'></img></a>
            </div>
            <img src={linha} className='linha-img3'></img>
        </div>
        <div className='contatos'>
          <div className='parte-contatos'>
            <h2 className='titulo-contatos'>Entre em contato:</h2>
            <div className='imgs-conts'>
              <a href='https://wa.me/5522988341441' target="_blank"><img src={zap} className='img-contatos-1'></img></a>
              <a href='https://www.instagram.com/guilher.km/' target="_blank"><img src={insta} className='img-contatos-2'></img></a>
            </div>
          </div>
          <div className='frase'>
            <p className='text-frase'>Quando estiver a beira do desespero, apenas os que se levantarem com a espada em punho, mesmo que partida ao meio, se salvarão.</p>
            <img src={aspas} className='aspas-1'></img>
            <img src={aspas} className='aspas-2'></img>
            <img src={skull} className='skull'></img>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
