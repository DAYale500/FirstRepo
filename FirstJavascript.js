<!DOCTYPE html>
<html>
  <head>
    <title>My First JavaScript Program</title>
  </head>
  <body>
  <button onclick="myFunction()">Click me</button>
  <p id="demo"></p>
    <script>
    function myFunction() {
      document.getElementById("demo").innerHTML = "Hello, World!";
    }
    </script>
  </body>
</html>