let header = document.createElement("header")
let headerContainer = document.createElement("div")
let LogoImg = document.createElement("img")
let section = document.createElement("section")
let sectionContainer = document.createElement("div")
let businesLeft = document.createElement("div")
let businesRight = document.createElement("div")
let hSec = document.createElement("h1")
let pSec = document.createElement("p")
let xSec = document.createElement("section")
let xP =document.createElement("p")
let xH =document.createElement("h1")
let xCards = document.createElement("div")
let cardsTop = document.createElement("div")
let cardFirst = document.createElement("div")
let cardSec = document.createElement("div")
let cardThird = document.createElement("div")
let cardFourth = document.createElement("div")
let cardFifth = document.createElement("div")
let cardsBottom = document.createElement("div")
xCards.appendChild(cardsTop)
xCards.appendChild(cardsBottom)
cardsTop.appendChild(cardFirst)
cardsTop.appendChild(cardSec)
cardsTop.appendChild(cardThird)
let cardPar = document.createElement("p")

let cardFirstImg = document.createElement("img")
let cardFirstH = document.createElement("h1")

let cardSecImg = document.createElement("img")
let cardSecH = document.createElement("h1")

let cardThirdImg = document.createElement("img")
let cardThirdH = document.createElement("h1")

let cardFourthImg = document.createElement("img")
let cardFourthH = document.createElement("h1")

let cardFifthImg = document.createElement("img")
let cardFifthH = document.createElement("h1")

cardFirst.appendChild(cardFirstImg)
cardFirst.appendChild(cardFirstH)

cardSec.appendChild(cardSecImg)
cardSec.appendChild(cardSecH)

cardThird.appendChild(cardThirdImg)
cardThird.appendChild(cardThirdH)

cardFourth.appendChild(cardFourthImg)
cardFourth.appendChild(cardFourthH)

cardFifth.appendChild(cardFifthImg)
cardFifth.appendChild(cardFifthH)

let cardPar1=document.createElement("p")
let cardPar2=document.createElement("p")
let cardPar3=document.createElement("p")
let cardPar4=document.createElement("p")

cardPar1.textContent="lorem epsum"
cardPar1.className = "text-center pb-4"
cardPar2.textContent="lorem epsum"
cardPar2.className = "text-center pb-4"
cardPar3.textContent="lorem epsum"
cardPar3.className = "text-center pb-4"
cardPar4.textContent="lorem epsum"
cardPar4.className = "text-center pb-4"

cardSecH.className = "text-center font-bold text-[24 px] leading-10"
cardThirdH.className = "text-center font-bold text-[24 px] leading-10"
cardFourthH.className = "text-center font-bold text-[24 px] leading-10"
cardFifthH.className = "text-center font-bold text-[24 px] leading-10"



cardSec.appendChild(cardPar1)
cardThird.appendChild(cardPar2)
cardFourth.appendChild(cardPar3)
cardFifth.appendChild(cardPar4)

cardSecImg.src = "./images/xsec-2.svg"
cardSecH.textContent= "Telegram bot"

cardThirdImg.src = "./images/xsec-3.svg"
cardThirdH.textContent= "SMM"


cardFourthImg.src = "./images/xsec-4.svg"
cardFourthH.textContent= "Grafik dizayn"

cardFifthImg.src = "./images/xsec-5.svg"
cardFifthH.textContent= "CRM tizimlar"


cardsTop.className = "flex items-center justify-center py-6 gap-[70px]"
cardsBottom.className = "flex items-center justify-center py-6 gap-[70px]"

cardFirst.className = "items-center flex flex-col shadow-md w-[320px]"
cardSec.className = "items-center flex flex-col shadow-md w-[320px]"
cardThird.className = "items-center flex flex-col shadow-md w-[320px]"
cardFourth.className = "items-center flex flex-col shadow-md w-[320px]"
cardFifth.className = "items-center flex flex-col shadow-md w-[320px]"


cardFirstH.className = " text-center font-bold text-[24 px] leading-10"

cardFirst.appendChild(cardPar)
cardPar.className = " text-center pb-4"

cardFirstImg.src = "./images/xsec-1.svg"
cardFirstH.textContent = "Vebsayt tuzish"

cardPar.textContent = "lorem ipsum"


cardsBottom.appendChild(cardFourth)
cardsBottom.appendChild(cardFifth)

xSec.appendChild(xH)
xH.className = " text-center font-bold text-[24 px] leading-10"
xP.className = "w-[720px] mx-auto text-center"
xH.textContent = "Xizmatlar"
xSec.appendChild(xP)

xP.textContent = "Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar"

xSec.appendChild(xCards)


let navList =  document.createElement("nav")
navList.className = "flex items-center"
let navItem = ["Bosh sahifa", "Xizmatlar", "Portfolio", "Jamoa" , "Blog" , "Kontaktlar"]

let navContactButton = document.createElement("div")
navContactButton.className = "flex items-center gap-[8px]"

let button = document.createElement("a")
button.textContent = "+998 90 921 37 11"
button.href = "tel:+998909213711"
button.className = "w-[159px] py-2 bg-[#00BAFC] text-white font-semibold text-[15px] text-center leading-6 rounded-[5px]"

document.body.appendChild(header)
document.body.appendChild(section)
document.body.appendChild(xSec)
header.appendChild(headerContainer)
section.appendChild(sectionContainer)

sectionContainer.className = "flex items-center justify-center	gap-[172px] py-20"

headerContainer.appendChild(LogoImg)
headerContainer.appendChild(navContactButton)
businesLeft.className = "flex flex-col justify-center w-[500px]"
businesRight

let imgSec = document.createElement("img")
businesRight.appendChild(imgSec)
imgSec.src = "./images/youtube-embed.png"
imgSec.alt = "Logo img"
imgSec.width = "458"
imgSec.height = "256"
let bSec = document.createElement("a")
sectionContainer.appendChild(businesLeft)
businesLeft.appendChild(hSec)
hSec.textContent = "Biznesingizni keyingi bosqichga olib chiqing"
hSec.className = "font-bold text-[30px] leading-10"
businesLeft.appendChild(pSec)
businesLeft.appendChild(bSec)
pSec.className = "text-[16px] py-4"
pSec.textContent = "Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar"
bSec.textContent = "Xizmatlar bilan tanishish"
bSec.className = "w-[232px] py-2 bg-[#00BAFC] text-white font-semibold text-[15px] text-center leading-6 rounded-[5px]"


sectionContainer.appendChild(businesRight)

navContactButton.appendChild(navList)
navContactButton.appendChild(button)

header.className = "shadow-sm shadow-black py-2"
headerContainer.className = "w-[1200px] mx-auto px-5 flex items-center justify-between"
LogoImg.src = "./images/pixer-logo.svg"
LogoImg.alt = "Logo img"
LogoImg.width = "58"
LogoImg.height = "20"

navItem.forEach(item => {
    let link = document.createElement("a")

    link.textContent = item
    link.className = "p-4"

    navList.appendChild(link)
})