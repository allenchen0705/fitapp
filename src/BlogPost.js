import "./BlogPost.css";

import { ReactComponent as Diet } from "./assets/restaurant_black_24dp.svg";
import { ReactComponent as Calories } from "./assets/monitor_weight_black_24dp.svg";
import { ReactComponent as Like } from "./assets/thumb_up_black_24dp.svg";
import { ReactComponent as Sport } from "./assets/sports_basketball_black_24dp.svg";
import { ReactComponent as Time } from "./assets/schedule_black_24dp.svg";
import { ReactComponent as Strength } from "./assets/fitness_center_black_24dp (1).svg";

function BlogPost({
  title,
  author,
  category,
  calories,
  caloriesName,
  diet,
  dietName,
  sport,
  sportName,
  strength,
  strengthName,
  time,
  timeName,
  blurb,
}) {
  // const setBgColour = () => {
  //   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  //   document.getElementById("square").style.backgroundColor = "#" + randomColor;
  //   // color.innerHTML = "#" + randomColor;
  // };
  // setBgColour();

  return (
    <div>
      <div className="grid-blog">
        <div className="square">
          {time && (
            <>
              <Time />
              <span className="display-icon">{`Time of exercise: ${timeName}`}</span>
              <br />
            </>
          )}
          {strength && (
            <>
              <Strength />
              <span className="display-icon">{`Type of exercise: ${strengthName}`}</span>
              <br />
            </>
          )}
          {sport && (
            <>
              <Sport />
              <span className="display-icon">{`Sport: ${sportName}`}</span>
              <br />
            </>
          )}
          {calories && (
            <>
              <Calories />
              <span className="display-icon">{`Calories gained/lost: ${caloriesName}`}</span>
              <br />
            </>
          )}
          {diet && (
            <>
              <Diet />
              <span className="display-icon">{`Diet type: ${dietName}`}</span>
              <br />
            </>
          )}
          <p className="blurb">{blurb}</p>
        </div>
        <div className="reviews">
          {diet === true && <Diet />}
          {strength === true && <Strength />}
          {sport === true && <Sport />}
          <span className="display-icon">{category}</span>
          <p className="post-name">{title}</p>
          <span className="post-author">{`Created by ${author}`}</span>
          <br />
          <br />
          <Like />
          <span className="display-icon">34</span>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
