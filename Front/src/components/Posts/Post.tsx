import "./styles-P.css";

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

// export const Posts = (posts: any[]) => (
//   <div className="posts">
//     {posts.map((post: any) => (
//       <PostCard
//         key={post.id}
//         description={post.description}
//         director={post.director}
//         id={""}
//         image={post.image}
//         producer={post.producer}
//         title={post.title}
//       />
//     ))}
//   </div>
// );
