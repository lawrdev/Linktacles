import Links from "../components/Links";
import Profile from "../components/Profile";
import SlackImg from "../assets/img/slack.png";
import GithubImg from "../assets/img/github.png";

function Home() {
  return (
    <>
      <div className="mt-12 max-w-6xl mx-auto">
        <Profile />
        <Links />

        {/* Social section */}
        <section className="py-6">
          <div className="flex justify-center items-center gap-6">
            <img src={SlackImg} alt="slack" width="24px" height="24px" />
            <img src={GithubImg} alt="slack" width="24px" height="24px" />
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
