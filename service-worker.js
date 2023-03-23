const workerCache = "kfir-escape-room-v1"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/game.html",
  "/game.css",
  "/manifest.json",
  "/graphics/bedroom2.svg",
  "/graphics/bedroom3.svg",
  "/graphics/exit.svg",
  "/graphics/kitchen.svg",
  "/graphics/office.svg",
  "/graphics/office2.svg",
  "/graphics/room_template5.svg",
  "/graphics/room_template5_mirrored.svg",
  "/graphics/rooms/bedroom/bed-teddy-zoom.png",
  "/graphics/rooms/bedroom/bed-teddy.png",
  "/graphics/rooms/bedroom/bed.png",
  "/graphics/rooms/bedroom/cabinet-open.svg",
  "/graphics/rooms/bedroom/cabinet-open2.png",
  "/graphics/rooms/bedroom/cabinet2.svg",
  "/graphics/rooms/bedroom/candle2-off.svg",
  "/graphics/rooms/bedroom/candle2.png",
  "/graphics/rooms/bedroom/candle2.svg",
  "/graphics/rooms/bedroom/chair.png",
  "/graphics/rooms/bedroom/fire-extinguisher.svg",
  "/graphics/rooms/bedroom/key.svg",
  "/graphics/rooms/bedroom/lamp.png",
  "/graphics/rooms/bedroom/tshirt.png",
  "/graphics/rooms/bedroom/wateringcan.svg",
  "/graphics/rooms/bedroom/window1.png",
  "/graphics/rooms/congrats/ballons.svg",
  "/graphics/rooms/exit/door2-lock.png",
  "/graphics/rooms/exit/door2.png",
  "/graphics/rooms/exit/jacket.png",
  "/graphics/rooms/exit/shoe1.svg",
  "/graphics/rooms/exit/shoe2.svg",
  "/graphics/rooms/kitchen/Juneau-QRCode2.png",
  "/graphics/rooms/kitchen/calendar-correct.png",
  "/graphics/rooms/kitchen/calendar.png",
  "/graphics/rooms/kitchen/calendar2.png",
  "/graphics/rooms/kitchen/chair-qrcode.png",
  "/graphics/rooms/kitchen/chair.png",
  "/graphics/rooms/kitchen/fire.svg",
  "/graphics/rooms/kitchen/fruitbowl.png",
  "/graphics/rooms/kitchen/fruitbowl1.png",
  "/graphics/rooms/kitchen/fruitbowl2.png",
  "/graphics/rooms/kitchen/fruitbowl3.png",
  "/graphics/rooms/kitchen/fruitbowl4.png",
  "/graphics/rooms/kitchen/oven3.png",
  "/graphics/rooms/kitchen/pan.png",
  "/graphics/rooms/kitchen/radio.png",
  "/graphics/rooms/kitchen/table.svg",
  "/graphics/rooms/kitchen/teddy1.png",
  "/graphics/rooms/kitchen/teddy3.png",
  "/graphics/rooms/kitchen/window.svg",
  "/graphics/rooms/office/apple.svg",
  "/graphics/rooms/office/desk.svg",
  "/graphics/rooms/office/europe-map2.png",
  "/graphics/rooms/office/flower2.png",
  "/graphics/rooms/office/flower3.png",
  "/graphics/rooms/office/fruitbowl-picture.png",
  "/graphics/rooms/office/letter-paper.png",
  "/graphics/rooms/office/letter.png",
  "/graphics/rooms/office/lightbulb2.png",
  "/graphics/rooms/office/map2.svg",
  "/graphics/rooms/office/officechair-teddy.png",
  "/graphics/rooms/office/officechair.png",
  "/graphics/rooms/office/pocketlighter.svg",
  "/sounds/background-music1.mp3",
  "/sounds/background-music2.mp3",
  "/sounds/background-music3.mp3",
  "/sounds/candle-sound1.mp3",
  "/sounds/click-sound2.mp3",
  "/sounds/door-sound2.mp3",
  "/sounds/radio-quiz.mp3",
  "/sounds/radio-audioraetsel.mp3",
  "/sounds/water-sound.mp3"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(workerCache).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
