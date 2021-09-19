import "./YogaForm.css";

import { ReactComponent as Title } from "./assets/title_black_24dp.svg";
import { ReactComponent as Time } from "./assets/schedule_black_24dp.svg";
import { ReactComponent as Name } from "./assets/face_black_24dp.svg";
import { ReactComponent as Style } from "./assets/self_improvement_black_24dp.svg";

function YogaForm() {
  return (
    <div>
      <form action="/action_page.php" className="form grid-form">
        <div className="grid-form-left">
          <>
            <Title className="input-icon" />
            <input
              type="text"
              className="input"
              id="title"
              name="title"
              placeholder="Enter the title"
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
              placeholder="Enter your name"
            />
            <br />
          </>
          <>
            <Time />
            <input
              type="text"
              className="input"
              id="time"
              name="time"
              placeholder="Length of exercise"
            />
            <br />
          </>
          <>
            <Style />
            <input
              type="text"
              className="input"
              id="style"
              name="style"
              placeholder="Style of exercise"
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
            placeholder="Type here..."
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

export default YogaForm;
