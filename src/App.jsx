import './App.css';
import Container from './components/container/container.jsx';
import Header from './components/header/header.jsx';
import Wrapper from './components/wrapper/wrapper.jsx';
import Left_B from './components/left_B/left_B.jsx';

export default function App() {
  return (
    <>
      <Header></Header>
      <Wrapper>
        <Container>
          <Left_B 
          level={"1"} 
          headingContent={"Хочешь стать Web-разработчиком?"} 
          paragraphContent={"Попробуй наши курсы, где ты сможешь в игровой форме обучиться базовым концептам Web-программирования"}
          buttonContent={"Начни сейчас"}
          backgroundURL={"/src/assets/giphy.gif"}></Left_B>
        </Container>
        <Container>
        <Left_B 
          level={"2"} 
          headingContent={"Поддержите нас на Patreon"} 
          paragraphContent={"Если вам нравится наша разработка, вы можете поддержать нас на Patreon, либо по прямому переводу"}
          buttonContent={"Посмотреть виды переводов"}
          backgroundURL={"/src/assets/downloads_logomark_color_on_white@2x.png"}></Left_B>
        </Container>
      </Wrapper>
    </>
  )
};