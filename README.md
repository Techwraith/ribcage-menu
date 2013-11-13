ribcage-menu
============

A menu system for ribcage-ui

## install

```
npm install ribcage-menu
```

## usage

```javascript

  var Menu = require('ribcage-menu')
  
  var menu = new Menu({
    buttons: [
      {label: 'Option 1', icon: 'icon-list', action: function (){} }
    , {label: 'Option 2', action: function (){} }
    , myAlreadyCreatedButton
    ]
  })
  
  menu.clearButtons()
  menu.addButton({label: 'test', action: function () { alert('test') } })
  menu.addButton(myButton)

```
