import Link from "next/link";

const RecentProjects = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="RecentProject-Section">
        <img src={"/client/SynicalBot-projectimg.png"} alt="bot" />
        <div className="Synical-botText">
          <h1>Synical Bot</h1>
          <p>
            Synical Development Bot has a variety of commands that you can use,
            do /help in the discord server to find out what the synical bot can
            do. Synical bot has funny jokes that you can read all day if you
            wanted to, hope you enjoy my model and thank the creators.
          </p>
          <Link href="/portfolio" onClick={() => scrollToTop()}>
            <input type="button" value="Explore Our Portfolio" />
          </Link>
        </div>
      </div>
    </>
  );
};
export default RecentProjects;
