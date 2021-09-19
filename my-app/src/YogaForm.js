function YogaForm() {
  return (
    <form action="/action_page.php">
      <label for="title">Title:</label>
      <br />
      <input type="text" id="title" name="title" value="title" />
      <br />
      <label for="name">Name:</label>
      <br />
      <input type="text" id="name" name="name" value="name" />
      <br />
      <label for="time">TimeLogo:</label>
      <br />
      <input type="text" id="time" name="time" value="time" />
      <br />
      <label for="style">StyleLogo:</label>
      <br />
      <input type="text" id="style" name="style" value="style" />
      <br />
      <br />
      <textarea
        type="text"
        id="content"
        name="content"
        rows="10"
        cols="30"
        value="enter here..."
      />
      <br />
      <br />
      <form method="get" action="/thankyou">
        <button type="submit">Post</button>
      </form>
    </form>
  );
}

export default YogaForm;
