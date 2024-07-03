import { Header } from "./components/Header";
import Post from "./components/Post";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <Post author="Lucas" content="Oi" />
      <Post
        author="Diego Fernandes"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem sit tempore beatae accusamus officiis deserunt repudiandae, assumenda totam laudantium omnis modi quia ea quidem quo? Obcaecati ratione culpa ab?"
      />
      <Post />
    </>
  );
}

export default App;
