File Open
=========

Here we create a file input field.

Whenever the contents change we fire an event so JS can get access to the data.

    input = document.createElement('input')
    input.type = "file"

    contents = document.createElement("textarea")

    document.body.appendChild input
    document.body.appendChild contents

    input.onchange = ->
      reader = new FileReader()

      reader.onload = (evt) ->
        contents.innerText = evt.target.result

      reader.onerror = (evt) ->
        contents.innerText = "error reading file"

      file = input.files[0]
      reader.readAsText(file, "UTF-8")
