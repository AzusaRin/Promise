class Promise{
  constructor(fn){
fn(this.resolve.bind(this),this.reject.bind(this))
  }
  state = 'pending'
  succeed = null
  faild = null
resolve(result){
this.state = 'fulfilled'
this.succeed(result)
}

reject(reason){
this.state = 'rejected'
this.failed(reason)
}
then(succeed,failed){
  this.succeed = succeed
  this.faild = failed
}
}


const getWeather = city => new Promise((resolve,reject) => {
let xhr = new XMLHttpRequest
let url = 'http://rap2api.taobao.org/app/mock/244238/getWeather?city='+city
xhr.open('GET',url,true)
xhr.onload = () =>{
  if(xhr.status === 200){
    return resolve(JSON.parse(xhr.responseText))
  }
  else{
    return reject(`本功能获取${city}天气信息失败`)
  }
}
xhr.send()
})

getWeather('上海').then(value =>{console.log(value)},error =>{console.log(error)})