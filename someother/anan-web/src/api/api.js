let AV = require('leancloud-storage')

const APP_ID = 'r5CU3u4MfuM3OM8VMknDToP5-gzGzoHsz'
const APP_KEY = 'jG0abicNXpOFfoo43XGJHRQp'
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

localStorage.setItem('debug', 'leancloud*')

export let UserList = AV.Object.extend('UserList')

export let AddUserItem = (item) => {
  let acl = new AV.ACL()
  acl.setPublicReadAccess(false)
  acl.setPublicWriteAccess(false)
  let user = new UserList(item)
  user.setACL(acl)
  return user.save()
}

export let RequestSmsCode = (tel) => {
  return AV.Cloud.requestSmsCode(tel)
}

export let VSmsCode = (code, phone) => {
  return AV.Cloud.verifySmsCode(code, phone)
}
