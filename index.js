const myId='noahs-test-3'

const handleStart = (eventname, payload)  => {
  console.log('start')
  console.dir(payload)
}

const handleSubmit = (eventname, payload) => {
  console.log('submit')
  console.dir(payload.code)
}

const handleFeedback = (eventname, payload) => {
  console.log('feedback')
  console.dir(payload)
}

const myLoad = () => {
  console.dir(DCL.instances)
  DCL.instances[myId].on('start', handleStart)
  DCL.instances[myId].on('submit', handleSubmit )
  DCL.instances[myId].on('feedback',  handleFeedback)
}

window.onload = myLoad;
