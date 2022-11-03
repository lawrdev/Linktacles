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
        <section className="py-6 mb-16">
          <div className="flex justify-center items-center gap-6">
            <a
              alt="slack"
              href="https://lawrdev.slack.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={SlackImg} alt="slack" width="24px" height="24px" />
            </a>
            <a
              alt="github"
              href="https://github.com/lawrdev/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GithubImg} alt="slack" width="24px" height="24px" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
