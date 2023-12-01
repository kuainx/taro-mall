import { MD5 } from 'crypto-js'
import { encrypt } from '../../utils/encrypt'

export function encryptPassword(pass) {
  const salt = 'encryptPasswordSalt'
  const hash = MD5(pass + salt)
  return encrypt(hash)
}
