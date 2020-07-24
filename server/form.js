module.exports = function render(item) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Art Form</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="container">
      <img src="/adam-logo.png" alt="Archive of Digital Art and Media"><br>
      <form action="/save" method="post">
        <input type="hidden" id="id" class="formstyle" name="id" value="${item.id}" />
        <div>
          <label for="id" class="formstyle">Name:</label><br>
          <input type="text" id="title" class="formstyle" name="title" value="${item.title}" />
        </div>
        <div>
          <label for="id" class="formstyle">Artist:</label><br>
          <input type="text" id="artist" class="formstyle" name="artist" value="${item.artist}" />
        </div>
        <div>
          <label for="id" class="formstyle">Year:</label><br>
          <input type="text" id="year" name="year" class="formstyle" value="${item.year}" />
        </div>
        <div>
          <button type="submit" class="buttonstyle">Save</button>
        </div>
      </form>
    </div>
  </body>
  </html>  
  `;
};
