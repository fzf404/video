/*
 * @Author: fzf404
 * @Date: 2022-08-22 12:42:27
 * @LastEditors: fzf404 nmdfzf404@163.com
 * @LastEditTime: 2022-08-22 13:29:58
 * @Description: 解析控制
 */

/**
 * @description: 初始化
 * @return {*}
 */
window.onload = function () {
  // 监听 DOM 事件
  const input = document.getElementById('name')
  const parse = document.getElementById('parse')
  parse.addEventListener('click', parseURL)
  input.addEventListener('keyup', onEnter)
  // 读取参数自动解析
  const params = new URLSearchParams(window.location.search)
  const name = params.get('jx')
  if (name) {
    input.value = name
    parseVideo(name)
  }
}

/**
 * @description: 打开链接
 * @return {*}
 */
function parseURL() {
  const value = document.getElementById('name').value
  value ? (window.location = `//${window.location.host}/?jx=${value}`) : null
}

/**
 * @description: 回车事件处理
 * @param {*} event
 * @return {*}
 */
function onEnter(event) {
  if (event.keyCode == 13) {
    parseURL()
  }
}

/**
 * @description: 解析视频
 * @param {*} value
 * @return {*}
 */
function parseVideo(value) {
  const iframe = document.getElementById('play')
  iframe.setAttribute('src', 'https://z1.m1907.cn/?jx=' + value)
}
