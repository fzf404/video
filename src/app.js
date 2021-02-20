function update(){
  let input = document.getElementById('name')
  let iframe = document.getElementById('play')
  iframe.setAttribute('src','https://z1.m1907.cn/?jx='+input.value)
}