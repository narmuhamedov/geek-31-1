import { Component, Component2 } from './components/Component/Component';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Example from './components/Example/Example';


function App() {
  const navList = [ 'Главная', 'О нас', 'Контакты']


  return (
    <div>
      <h1>
        <Header navbar={navList}/>
        Welcome
        <Example>
          <p style={{
            color: "green"
          }}>Example</p>
        </Example>
        <Component/>
        <Component2/>
        <Button>
          <p style={{
            color: "green",
            fontSize: "20px"
          }}>Button</p>
        </Button>
        {/*<Button button={'Нажми на меня'}/>*/}
        {/*<Button button={'OK'}/>*/}
        {/*<Button button={'Отмена'}/>*/}
      </h1>
      <Footer description={'link'}/>
    </div>
  );
}


export default App;
