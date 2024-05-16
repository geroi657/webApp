import './App.css';
import Container from './components/container/container.jsx';
import Header from './components/header/header.jsx';
import Wrapper from './components/wrapper/wrapper.jsx';

export default function App() {
  return (
    <>
      <Header></Header>
      <Wrapper>
        <Container></Container>
      </Wrapper>
    </>
  )
};