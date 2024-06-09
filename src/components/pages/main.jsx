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
            </Wrapper>
            </>

    )
};