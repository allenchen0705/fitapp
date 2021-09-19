function StrengthForm() {
  return (
    <form action="/action_page.php">
      <label for="title">Title:</label>
      <br />
      <input type="text" id="title" name="title" placeholder="title" />
      <br />
      <label for="name">Name:</label>
      <br />
      <input type="text" id="name" name="name" placeholder="name" />
      <br />
      <label for="time">TimeLogo:</label>
      <br />
      <input type="text" id="time" name="time" placeholder="time" />
      <br />
      <label for="type">TypeLogo:</label>
      <br />
      <input type="text" id="type" name="type" placeholder="type of workout" />
      <br />
      <br />
      <textarea
        type="text"
        id="content"
        name="content"
        rows="10"
        cols="30"
        placeholder="enter here..."
      />
      <br />
      <br />
      <form method="get" action="/thankyou">
        <button type="submit">Post</button>
      </form>
    </form>
  );
}

export default StrengthForm;
