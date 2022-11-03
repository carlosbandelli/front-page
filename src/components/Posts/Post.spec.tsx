import { Posts } from "./Post";

const mock = {
  description: "1",
  director: "1",
  id: "1",
  image: "1",
  producer: "1",
  title: "1",
};

it("should render Posts correctly", () => {
  expect(
    <Posts
      description={mock.description}
      director={mock.director}
      id={mock.id}
      image={mock.image}
      producer={mock.producer}
      title={mock.title}
    />
  );
});
