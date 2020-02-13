<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>To-Do List</title>
    <style>
        html, body {
            background-color: aquamarine;
            overflow-x: hidden;
        }
        h1 {
            color: midnightblue;
            position: relative;
            left: 45%;
        }
        table {
            border-spacing: 25px;
            color:midnightblue;
            font-weight: bold;
        }
        p {
            color:midnightblue;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>To-Do List</h1>
    <form method = "POST">
    <table>
      {{#if toDoItems}}
      {{#each toDoItems as |value index|}}
      <tr>
        {{#if value.isChecked}}
          <td><input type="checkbox" name = "item{{index}}" value = "done" checked/></td>
        {{else}}
          <td><input type="checkbox" name = "item{{index}}" value = "done"/></td>
        {{/if}}
          <td>{{itemText}}</td>
      </tr>
      {{/each}}
      <tr>
        <td colspan="2">
          <input type="submit" value="Save" formaction="/save"/>
          <input type="submit" value="Remove Checked" formaction="/remove"/>
        </td>
      </tr>
      {{else}}
      <tr>
        <td>No to-do items</td>
      </tr>
      {{/if}}
    </table>
    </form>
    <form method = "POST">
    <p>
      Add new item:
      <input type="text" placeholder="Enter item description" name ="newItem" style="width: 60ex" autofocus required/>
      <input type="submit" value="Add" formaction="/add"/>
    </p>
    </form>
</body>
</html>