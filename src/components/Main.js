import styled from "styled-components";

const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
`;

const Subtitle1 = styled.h2`
  font-size: 2rem;
  margin: 3vh 0 3vh 3vw;
`;

const Subtitle2 = styled.h3`
  font-size: 1.5rem;
  margin: 3vh 0 3vh 3vw;
`;

const P1 = styled.p`
  font-size: 1rem;
  margin: 3vh 0 3vh 3vw;
  width: 65%;
`;

const P2 = styled.p`
  font-size: 1rem;
  margin: 3vh 0 3vh 3vw;
  width: 40%;
`;

const Img = styled.img`
  width: 25vw;
  margin: 3vh 0 3vh 3vw;
`;

function Main() {
  return (
    <Container>
      <Subtitle1>O que é a cartografia?</Subtitle1>
      <P1>
        A cartografia é a área do conhecimento que se preocupa em estudar,
        analisar e produzir mapas, cartogramas, plantas e demais tipos de
        representações gráficas do espaço. Trata-se, portanto, de um conjunto de
        técnicas científicas e até artísticas que visa à elaboração de
        documentos que representem de forma reduzida uma determinada localidade.
        Nos dias de hoje, graças aos avanços realizados no âmbito dos meios
        informacionais, a produção de mapas conta com complexas técnicas de
        elaboração e representação, envolvendo computadores, satélites,
        softwares e muitos outros equipamentos.
      </P1>
      <Subtitle1>Tipos de Mapa mais usados:</Subtitle1>
      <Subtitle2>Mapas Gerais</Subtitle2>
      <Img src="http://minutoligado.com.br/wp-content/uploads/2013/11/mapa-do-mundo.png" />
      <P2>
        Mapas Gerais, são mapas elaborados para atender um público amplo e
        extenso, não possuem finalidade específica, e precisam ser
        cuidadosamente genéricos.
      </P2>
      <Subtitle2>Mapas ou Cartas Temáticas</Subtitle2>
      <Img src="https://journals.openedition.org/confins/docannexe/image/13273/img-5-small580.jpg" />
      <P2>
        Mapas Temáticos, possuem um público mais específico e é necessário se
        atentar às legendas, esse tipo de mapa representa fenômenos, processos
        ou objetos presentes na superfície da Terra, de forma qualitativa ou
        quantitativa. Exemplos desse tipo de mapa são: mapas geológicos,
        geomorfológicos, mapas de clima e entre outros.
      </P2>
    </Container>
  );
}

export default Main;
