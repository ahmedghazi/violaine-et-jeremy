export function helloWord(props) {
  // console.log(props)
  return {
    label: 'Hello world',
    onHandle: () => {
      // Here you can perform your actions
      window.alert('👋 Hello from custom action')
    },
  }
}
