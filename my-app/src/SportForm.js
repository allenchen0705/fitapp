import "./Form.css";

import { ReactComponent as Title } from "./assets/title_black_24dp.svg";
import { ReactComponent as Name } from "./assets/face_black_24dp.svg";
import { ReactComponent as Type } from "./assets/sports_basketball_black_24dp.svg";

function SportForm() {
  return (
    <div>
      <form action="/action_page.php" className="form grid-form">
        <div className="grid-form-left">
          <>
            <Title />
            <input
              type="text"
              className="input"
              id="title"
              name="title"
              placeholder="Title"
            />
            <br />
          </>
          <>
            <Name />
            <input
              type="text"
              className="input"
              id="name"
              name="name"
              placeholder="Your name"
            />
            <br />
          </>
          <>
            <Type />
            <input
              type="text"
              className="input"
              id="type"
              name="type"
              placeholder="Name of the sport"
            />
            <br />
          </>
        </div>
        <div className="grid-form-right">
          <label for="content">Write a short blurb!</label>
          <br />
          <textarea
            type="text"
            className="input"
            id="content"
            name="content"
            rows="10"
            cols="30"
            placeholder="Enter here..."
          />
          <br />
        </div>
      </form>
      <form method="get" action="/thankyou">
        <button className="post" type="submit">
          Post
        </button>
      </form>
    </div>
  );
}

export default SportForm;
