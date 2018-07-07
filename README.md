# Cute Alert

> Status: in development

Just another alert.

## Usage

```js
const cuteAlert = new CuteAlert

cuteAlert.title = 'Warning'
cuteAlert.text = 'Are you sure want to restart the system?'

cuteAlert.okButton('Yes', () => {
  alert('Ok button has been clicked')
})

cuteAlert.cancelButton('No', () => {
  alert('Cancel button has been clicked')
})

cuteAlert.addButton('Remind me', () => {
  alert('New button has been clicked')
})

cuteAlert.show()

cuteAlert.hide()
```
