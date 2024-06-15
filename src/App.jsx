import './App.css';
import Container from './components/container/container.jsx';
import Header from './components/header/header.jsx';
import Wrapper from './components/wrapper/wrapper.jsx';
import Left_B from './components/left_B/left_B.jsx';
import Center_B from './components/Center_B/center_B.jsx';
import Footer from './components/Footer/footer.jsx';

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
          <Center_B 
          level={"2"} 
          headingContent={"Поддержите нас на Patreon"} 
          paragraphContent={"Если вам нравится наша разработка, вы можете поддержать нас на Patreon, либо по прямому переводу. Если вам нравится наша разработка, вы можете поддержать нас на Patreon, либо по прямому переводу"} 
          buttonContent={"Посмотреть виды переводов"}
          backgroundURL={"/src/assets/150199145759869221741317 1.png"}></Center_B>
        </Container>
        <Container>
        <Left_B 
          level={"2"} 
          headingContent={"Поддержите нас на Patreon"} 
          paragraphContent={"Если вам нравится наша разработка, вы можете поддержать нас на Patreon, либо по прямому переводу"}
          buttonContent={"Посмотреть виды переводов"}
          backgroundURL={"/src/assets/downloads_logomark_color_on_white@2x.png"}></Left_B>
        </Container>
        <Container>
          <Center_B 
          level={"2"} 
          headingContent={"Поддержите нас на Patreon"} 
          paragraphContent={"Если вам нравится наша разработка, вы можете поддержать нас на Patreon, либо по прямому переводу. Если вам нравится наша разработка, вы можете поддержать нас на Patreon, либо по прямому переводу"} 
          buttonContent={"Посмотреть виды переводов"}
          backgroundURL={"/src/assets/backgroundCode.png"}></Center_B>
        </Container>
        <Footer 
        buttonHref1="" text1="WA"
        buttonHref2="" text2="HTML"
        buttonHref3="" text3="CSS"
        buttonHref4="" text4="JavaScript"
        paragraphContent1="WebApp 2024"
        paragraphContent2="All rights reserved (try me)"
        paragraphContent3="Made without knowing much"
        paragraphContent4="I don't know what I'm doing"></Footer>
      </Wrapper>
    </>
  )
};