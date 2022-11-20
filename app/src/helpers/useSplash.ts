export const createSplash = (): void => {
  const gif: any = new URL("/loading.gif", import.meta.url)
  const logo: HTMLImageElement = document.createElement("img") as HTMLImageElement
  const div: HTMLElement = document.createElement("div") as HTMLElement
  logo.setAttribute("src", gif)
  logo.style.height = "70px"
  div.id = "splash"
  div.className = "flex align-center justify-center"
  div.append(logo)
  document.body.append(div)
}

export const removeSplash = (): void => {
  const splash: HTMLElement = document.getElementById("splash") as HTMLElement
  if (splash) {
    splash.style.opacity = "0"
    splash.style.pointerEvents = "none"
  }
}
