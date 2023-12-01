import { defineStore } from 'pinia'

export const useUSerStore = defineStore('user', {
  state: () => ({
    token: ''
  }),
  actions: {
    setToken(token) {
      this.token = token
    }
  }
})
