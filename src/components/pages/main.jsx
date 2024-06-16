import Container from '../container/container.jsx';
import Wrapper from '../wrapper/wrapper.jsx';
import Left_B from '../left_B/left_B.jsx';
import Center_B from '../Center_B/center_B.jsx';
import Footer from '../Footer/footer.jsx'

export const Main = () => {
    return (
        <>
            <Wrapper>
                <Container>
                    <Left_B 
                        level={"1"} 
                        headingContent={"Хочешь стать Web-разработчиком?"} 
                        paragraphContent={"Попробуй наши курсы, где ты сможешь в игровой форме обучиться базовым концептам Web-программирования"}
                        buttonContent={"Перейти к курсам"}
                        buttonHref={"/html-game"}
                        backgroundURL={"/src/assets/giphy.gif"}>
                    </Left_B>
                </Container>
                <Container>
                    <Center_B 
                        level={"2"} 
                        headingContent={"HTML Game"} 
                        paragraphContent={"Это обучающая игра, которая поможет вам освоить основы HTML. Вы будете создавать веб-страницу, шаг за шагом, изучая HTML-теги и атрибуты. Игра предназначена для начинающих веб-разработчиков и всех, кто хочет узнать, как создавать собственные веб-страницы."} 
                        buttonContent={"Начать игру"}
                        buttonHref={"/html-game"}
                        backgroundURL={"/src/assets/1636593444_42-papik-pro-p-html-risunok-fona-43.jpg"}></Center_B>
                </Container>
                <Container>
                    <Left_B 
                        level={"2"} 
                        headingContent={"Grid Garden"} 
                        paragraphContent={"Добро пожаловать в Grid Garden — место, где вы можете вырастить свой собственный сад благодаря CSS коду"}
                        buttonContent={"Начать игру"}
                        buttonHref={"/css-grid-garden"}
                        backgroundURL={"/src/assets/garden_zen_japanese_garden_grid-1375991.jpg"}>
                    </Left_B>
                </Container>
                <Container>
                    <Center_B 
                        level={"2"} 
                        headingContent={"Broken Quiz"} 
                        paragraphContent={"По сути, это всего лишь обычный квиз с вопросами, но есть нюанс. Ответы уже выделены и везде показано конкретно какие правильные. Но в чем тогда смысл? А смысл, собственно, в изучении этих ответов. Не только правильных, но и неправильных. При выборе каждого ответа будет высвечиваться краткая сводка информации о нем. Этакая игра-энциклопедия по базе знаний CSS"} 
                        buttonContent={"Начать игру"}
                        buttonHref={"/css-quiz"}
                        backgroundURL={"/src/assets/222f9cd89d45df50-w820-h440.jpg"}>
                    </Center_B>
                </Container>
                <Container>
                    <Left_B 
                        level={"1"} 
                        headingContent={"И это только начало"} 
                        paragraphContent={"У нас в планах огроменное количество подобного рода игр! Если вам нравится наша разработка, вы можете следить за нашими будущими играми/проектами на нашем GitHub"}
                        buttonContent={"Следить"}
                        buttonHref={"https://github.com/geroi657/webApp"}
                        backgroundURL={"/src/assets/logo.jpg"}>
                    </Left_B>
                </Container>
                <Footer 
                    buttonHref1="" text1="WA"
                    buttonHref2="" text2="HTML"
                    buttonHref3="" text3="CSS"
                    buttonHref4="" text4="JavaScript"
                    paragraphContent1="WebApp 2024"
                    paragraphContent2="All rights reserved (try me)"
                    paragraphContent3="Made without knowing much">
                </Footer>
            </Wrapper>
            </>

    )
};