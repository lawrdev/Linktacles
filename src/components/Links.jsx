import { Link } from "react-router-dom";

const linkList = [
  {
    title: "Zuri Team",
    id: "btn__zuri",
    url: "https://training.zuri.team/",
    disbaled: false,
  },
  {
    title: "Zuri Books",
    id: "books",
    url: "http://books.zuri.team/",
    disbaled: false,
  },
  {
    title: "Python Books",
    id: "book__python",
    url: "https://books.zuri.team/python-for-beginners?red_id=lawrdev",
    disbaled: false,
  },
  {
    title: "Background Check for Coders",
    id: "pitch",
    url: "https://background.zuri.team",
    disbaled: false,
  },
  {
    title: "Design Books",
    id: "book__design",
    url: "https://books.zuri.team/design-rules",
    disbaled: false,
  },
];
function Links() {
  return (
    <>
      <div>
        {linkList.map((item, index) => (
          <a
            key={index}
            href={item.url}
            id={item.id}
            target="_blank"
            rel="noreferrer"
            className={item.disbaled ? "btn_link disabled_link" : "btn_link"}
          >
            {item.title}
          </a>
        ))}
        <Link to="/contact" id="contact" className="btn_link">
          Contact Me
        </Link>
      </div>
    </>
  );
}

export default Links;
