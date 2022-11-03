// import "./styles-P.css";

interface FilmsProps {
  description: string;
  director: string;
  id: string;
  image: string;
  producer: string;
  title: string;
}

export function Posts(props: FilmsProps) {
  return (
    <div className="post">
      <img src={props.image} alt="" />
      <div className="post-content">
        <strong className="">{props.title}</strong>
        <div className="">Descrição{props.description}</div>
        <div className="autor-content">
          <span>Diretor: {props.director}</span>
          <span>Produtor: {props.producer}</span>
        </div>
      </div>
    </div>
  );
}
