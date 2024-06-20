import MainContainer from "../components/MainContainer";

const Index = () => {
  // щоб вирішити проблему SEO(яка присутня в SPA), додано <Head>, <meta>, а також можна <title>
  return (
    <MainContainer keywords={"main page"}>
      <h1>Головна сторінка</h1>
    </MainContainer>
  );
};

export default Index;
