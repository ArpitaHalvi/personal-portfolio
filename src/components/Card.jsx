/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";

export default function Card(props) {
  const { title, link, desc } = props;
  return (
    <div className="card">
      <div>
        <h5 className="title">{title}</h5>
        <a href={link} className="link">
          Visit Project <FaArrowRight />
        </a>
      </div>
      <p className="desc">{desc}</p>
    </div>
  );
}
