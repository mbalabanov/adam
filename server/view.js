module.exports = function render(items) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Art list</title>
  <link rel="stylesheet" href=" /style.css" />
</head>
<body>
<div class="container">
  <p><img src="/adam-logo.png" alt="Archive of Digital Art and Media"><br>
  <table>
    <thead><tr><th>Id</th><th>Title</th><th>Artist</th><th>Year</th><th colspan="2">Edit</th></tr></thead>
    <tbody>
      ${items
        .map(
          item => `
          <tr>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.artist}</td>
            <td>${item.year}</td>
            <td><a href="/delete/${item.id}" class="buttonstyle">Delete</a></td>
            <td><a href="/form/${item.id}" class="buttonstyle">Edit</a></td>
          </tr>`,
        )
        .join('')}
    </tbody>
  </table>
  <a href="/form" class="buttonstyle">Create</a>
</div>
</body>
</html>
  `;
};
