import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Posts } from "./components/Posts/Post";

const api = "http://146.190.215.239:3333/movies";

interface propsitens {
  description: string;
  director: string;
  id: string;
  image: string;
  producer: string;
  title: string;
}
export default function App() {
  const [itens, setItens] = useState<propsitens[]>([]);
  const [itensPerPage, setItensPerPage] = useState(10);
  const [currentPage, setCurrentePage] = useState(0);

  const pages = Math.ceil(itens.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = itens.slice(startIndex, endIndex);
  console.log(itens);

  useEffect(() => {
    axios(api).then((response) => {
      setItens(response.data);
    });
  }, []);

  const shuffleList = (list: any[]) => list.sort(() => Math.random() - 0.5);
  const handleShuffle = () => {
    const shuffledPosts = shuffleList(itens);
    setItens([...shuffledPosts]);
  };

  return (
    <div className="App">
      <button onClick={handleShuffle}>Atualizar</button>
      {currentItens.map((film) => {
        return (
          <Posts
            description={film.description}
            director={film.director}
            key={film.id}
            image={film.image}
            producer={film.producer}
            title={film.title}
            id={""}
          />
        );
      })}
      <div>
        {Array.from(Array(pages), (item, index) => {
          return (
            <button
              value={index}
              onClick={(e) => setCurrentePage(Number(e.target.value))}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
