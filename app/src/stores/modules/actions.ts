export function actions() {
  return {
    SET_PAYLOAD(this: any, payload: Payload){
      this.payload = payload
    }
  }
}
