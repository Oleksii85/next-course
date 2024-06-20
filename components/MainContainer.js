import Head from "next/head";
import A from "../components/A";


const MainContainer = ({ children, keywords }) => {
  // контейнер - для того щоб не додавати навбар та мета в кожну сторінку
  return (
    <>
      <Head>
        <meta keywords={"ulbi tv, next js " + keywords}></meta>
        <title>Головна сторінка</title>
      </Head>
      <div className="navbar">
        <A href={"/"} text={"Головна"} />
        <A href={"/users"} text={"Користувачі"} />
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;
