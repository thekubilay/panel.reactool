const root = document.querySelector("html")
const header = document.querySelector("#rt-header") //needed for scrolling shadow
const headerRow = document.querySelector(".header-row")
const overlays = document.querySelectorAll(".navigation-list-drop")
const dropdown = document.querySelector("#navigation-dropdown-wrapper")
const navigation = document.querySelector(".navigation")
const hamMenu = document.querySelector(".header-mobil-nav")
const calcScrollShadow = () => {
  if(window.scrollY>3){
    header.classList.add("is-scrolling")
  }else{
    header.classList.remove("is-scrolling")
  }
}
// Check if page is scrolled
window.addEventListener("scroll",calcScrollShadow)


const toggleDropdown = (n) => {
  let c = 0
  headerRow.classList.add("white")
    overlays.forEach((over,idx) => {
      if(n === idx){
        over.classList.toggle("active")
      }else{
        over.classList.remove("active")
      }
      if(over.classList.contains("active"))
        c+= 1
    })
    if(!hamMenu.classList.contains("active")){
      if (c>0){
        dropdown.classList.add("active")
      }else{
        dropdown.classList.remove("active")
        setTimeout(()=>{
          headerRow.classList.remove("white")
        },500)
      }
    }else{
      headerRow.classList.add("white")
    }

}

const toggleMobile = () => {
  if(hamMenu.classList.contains("active")){
    root.classList.add("scroll")
    hamMenu.classList.remove("active")
    navigation.classList.remove("active")
    dropdown.classList.remove("active")
    setTimeout(()=>{
      headerRow.classList.remove("white")

    },500)
  }else{
    headerRow.classList.add("white")
    root.classList.remove("scroll")
    hamMenu.classList.add("active")
    navigation.classList.add("active")
    dropdown.classList.add("active")
  }
}

const resetNav = () => {
  overlays.forEach((over) => {
    over.classList.remove("active")
  })
  dropdown.classList.remove("active")
  hamMenu.classList.remove("active")
  navigation.classList.remove("active")
  root.classList.add("scroll")
}
window.onresize = resetNav;
