import Logo from "../assets/img/Zuri.Internship_Logo.png";
import I4G from "../assets/img/I4G.png";

function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto sm:px-8 py-8 sm:py-12">
        <div className="footerContent">
          <div className="h-6 sm:h-7 w-32 sm:w-40">
            <img
              src={Logo}
              alt="logo"
              width="auto"
              style={{ objectFit: "contain" }}
            />
          </div>

          <p className="text-sm text-gray-400">
            HNG Internship 9 Frontend Task
          </p>

          <div className="h-6 sm:h-7 w-24 sm:w-32">
            <img
              src={I4G}
              alt="I4G"
              width="auto"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
