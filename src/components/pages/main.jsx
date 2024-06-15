import Container from '../container/container.jsx';
import Wrapper from '../wrapper/wrapper.jsx';
import Left_B from '../left_B/left_B.jsx';
import Center_B from '../Center_B/center_B.jsx';

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
                        buttonLink={"/css-grid-garden"}
                        backgroundURL={"/src/assets/giphy.gif"}></Left_B>
                </Container>
                <Container>
                    <Center_B 
                        level={"2"} 
                        headingContent={"Какая-то обучалка по CSS"} 
                        paragraphContent={"текст текст текст текст текст текст текст"} 
                        buttonContent={"Начать игру"}
                        backgroundURL={"/src/assets/150199145759869221741317 1.png"}></Center_B>
                </Container>
                <Container>
                    <Left_B 
                        level={"2"} 
                        headingContent={"Grid Garden"} 
                        paragraphContent={"Добро пожаловать в Grid Garden — место, где вы можете вырастить свой собственный сад благодаря CSS коду"}
                        buttonContent={"Начать игру"}
                        buttonLink={"/css-grid-garden"}
                        backgroundURL={"/src/assets/garden_zen_japanese_garden_grid-1375991.jpg"}></Left_B>

                </Container>
                <Container>
                    <Center_B 
                        level={"2"} 
                        headingContent={"Broken Quiz"} 
                        paragraphContent={"По сути, это всего лишь обычный квиз с вопросами, но есть нюанс. Ответы уже выделены и везде показано конкретно какие правильные. Но в чем тогда смысл? А смысл, собственно, в изучении этих ответов. Не только правильных, но и неправильных. При выборе каждого ответа будет высвечиваться краткая сводка информации о нем. Этакая игра-энциклопедия по базе знаний CSS"} 
                        buttonContent={"Начать игру"}
                        backgroundURL={"/src/assets/222f9cd89d45df50-w820-h440.jpg"}>
                        </Center_B>
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