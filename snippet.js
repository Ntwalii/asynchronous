let x=new Promise((resolve) => {
    console.log(1)
    resolve()
  }).then(async () => {
    console.log(2)
  }).then(async () => {
    console.log(3)
  })
  
  let y=new Promise((resolve) => {
    console.log('a')
    resolve()
  }).then(() => {
    console.log('b')
  }).then(() => {
    console.log('c')
  }).then(() => {
    console.log('d')
  }).then(() => {
    console.log('e')
  })
  Promise.race([x,y])