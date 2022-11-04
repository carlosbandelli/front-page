import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Posts } from "./components/Posts/Post";

const apiRemote = "https://146.190.215.239:3334/movies";
const apiLocal = "http://localhost:3333/movies";

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

  useEffect(() => {
    if (location.protocol !== "https:") {
      axios(apiRemote).then((response) => {
        setItens(response.data);
      });
    }
    axios(apiRemote).then((response) => {
      setItens(response.data);
    });
  }, []);

  console.log(setItens);

  const pages = Math.ceil(itens.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = itens.slice(startIndex, endIndex);

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
              onClick={(e) =>
                setCurrentePage(
                  Number((e.currentTarget as HTMLInputElement).value)
                )
              }
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
