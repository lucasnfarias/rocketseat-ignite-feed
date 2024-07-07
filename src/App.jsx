import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/lucasnfarias.png",
      name: "Lucas Farias",
      role: "Full-stack developer",
    },
    publishedAt: new Date("2024-05-11 12:13:00"),
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },

      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um ,projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "Web developer",
    },
    publishedAt: new Date("2024-06-12 10:13:00"),
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        type: "paragraph",
        content:
          "Reprehenderit reiciendis numquam excepturi tempora amet similique, itaque odit dolorum! Numquam aspernatur delectus sed tenetur sapiente natus, dolores nam nulla voluptate assumenda?",
      },
    ],
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(({ id, author, publishedAt, content }) => (
            <Post
              key={id}
              author={author}
              publishedAt={publishedAt}
              content={content}
            />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
