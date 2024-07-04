import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import Post from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Lucas" content="Oi" />
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem sit tempore beatae accusamus officiis deserunt repudiandae, assumenda totam laudantium omnis modi quia ea quidem quo? Obcaecati ratione culpa ab?"
          />
          <Post />
        </main>
      </div>
    </>
  );
}

export default App;
