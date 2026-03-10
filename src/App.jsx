import { useEffect, useState } from "react"

// BLACK & WHITE IMPORTS
import bw1 from "./photos/bw/bw1.jpg"
import bw2 from "./photos/bw/bw2.jpg"
import bw3 from "./photos/bw/bw3.jpg"
import bw4 from "./photos/bw/bw4.jpg"
import bw5 from "./photos/bw/bw5.jpg"
import bw6 from "./photos/bw/bw6.jpg"
import bw7 from "./photos/bw/bw7.jpg"
import bw8 from "./photos/bw/bw8.jpg"
import bw9 from "./photos/bw/bw9.jpg"
import bw10 from "./photos/bw/bw10.jpg"
import bw11 from "./photos/bw/bw11.jpg"
import bw12 from "./photos/bw/bw12.jpg"
import bw13 from "./photos/bw/bw13.jpg"
import bw14 from "./photos/bw/bw14.jpg"
import bw15 from "./photos/bw/bw15.jpg"
import bw16 from "./photos/bw/bw16.jpg"
import bw17 from "./photos/bw/bw17.jpg"
import bw18 from "./photos/bw/bw18.jpg"
import bw19 from "./photos/bw/bw19.jpg"
import bw20 from "./photos/bw/bw20.jpg"
import bw21 from "./photos/bw/bw21.jpg"
import bw22 from "./photos/bw/bw22.jpg"
import bw23 from "./photos/bw/bw23.jpg"
import bw24 from "./photos/bw/bw24.jpg"
import bw25 from "./photos/bw/bw25.jpg"
import bw26 from "./photos/bw/bw26.jpg"
import bw27 from "./photos/bw/bw27.jpg"
import bw28 from "./photos/bw/bw28.jpg"

// COLOR IMPORTS
import color1 from "./photos/color/color1.jpg"
import color2 from "./photos/color/color2.jpg"
import color3 from "./photos/color/color3.jpg"
import color4 from "./photos/color/color4.jpg"
import color5 from "./photos/color/color5.jpg"
import color6 from "./photos/color/color6.jpg"
import color7 from "./photos/color/color7.jpg"
import color8 from "./photos/color/color8.jpg"
import color9 from "./photos/color/color9.jpg"
import color10 from "./photos/color/color10.jpg"
import color11 from "./photos/color/color11.jpg"
import color12 from "./photos/color/color12.jpg"
import color13 from "./photos/color/color13.jpg"
import color14 from "./photos/color/color14.jpg"
import color15 from "./photos/color/color15.jpg"
import color16 from "./photos/color/color16.jpg"
import color17 from "./photos/color/color17.jpg"
import color18 from "./photos/color/color18.jpg"
import color19 from "./photos/color/color19.jpg"
import color20 from "./photos/color/color20.jpg"
import color21 from "./photos/color/color21.jpg"
import color22 from "./photos/color/color22.jpg"
import color23 from "./photos/color/color23.jpg"
import color24 from "./photos/color/color24.jpg"
import color25 from "./photos/color/color25.jpg"
import color26 from "./photos/color/color26.jpg"
import color27 from "./photos/color/color27.jpg"
import color28 from "./photos/color/color28.jpg"
import color29 from "./photos/color/color29.jpg"

// ABOUT PHOTO
import me from "./photos/personal/tony.JPEG"

const photos = [
  { id: 1, src: bw1, type: "bw" },
  { id: 2, src: bw2, type: "bw" },
  { id: 3, src: bw3, type: "bw" },
  { id: 4, src: bw4, type: "bw" },
  { id: 5, src: bw5, type: "bw" },
  { id: 6, src: bw6, type: "bw" },
  { id: 7, src: bw7, type: "bw" },
  { id: 8, src: bw8, type: "bw" },
  { id: 9, src: bw9, type: "bw" },
  { id: 10, src: bw10, type: "bw" },
  { id: 11, src: bw11, type: "bw" },
  { id: 12, src: bw12, type: "bw" },
  { id: 13, src: bw13, type: "bw" },
  { id: 14, src: bw14, type: "bw" },
  { id: 15, src: bw15, type: "bw" },
  { id: 16, src: bw16, type: "bw" },
  { id: 17, src: bw17, type: "bw" },
  { id: 18, src: bw18, type: "bw" },
  { id: 19, src: bw19, type: "bw" },
  { id: 20, src: bw20, type: "bw" },
  { id: 21, src: bw21, type: "bw" },
  { id: 22, src: bw22, type: "bw" },
  { id: 23, src: bw23, type: "bw" },
  { id: 24, src: bw24, type: "bw" },
  { id: 25, src: bw25, type: "bw" },
  { id: 26, src: bw26, type: "bw" },
  { id: 27, src: bw27, type: "bw" },
  { id: 28, src: bw28, type: "bw" },

  { id: 29, src: color1, type: "color" },
  { id: 30, src: color2, type: "color" },
  { id: 31, src: color3, type: "color" },
  { id: 32, src: color4, type: "color" },
  { id: 33, src: color5, type: "color" },
  { id: 34, src: color6, type: "color" },
  { id: 35, src: color7, type: "color" },
  { id: 36, src: color8, type: "color" },
  { id: 37, src: color9, type: "color" },
  { id: 38, src: color10, type: "color" },
  { id: 39, src: color11, type: "color" },
  { id: 40, src: color12, type: "color" },
  { id: 41, src: color13, type: "color" },
  { id: 42, src: color14, type: "color" },
  { id: 43, src: color15, type: "color" },
  { id: 44, src: color16, type: "color" },
  { id: 45, src: color17, type: "color" },
  { id: 46, src: color18, type: "color" },
  { id: 47, src: color19, type: "color" },
  { id: 48, src: color20, type: "color" },
  { id: 49, src: color21, type: "color" },
  { id: 50, src: color22, type: "color" },
  { id: 51, src: color23, type: "color" },
  { id: 52, src: color24, type: "color" },
  { id: 53, src: color25, type: "color" },
  { id: 54, src: color26, type: "color" },
  { id: 55, src: color27, type: "color" },
  { id: 56, src: color28, type: "color" },
  { id: 57, src: color29, type: "color" },
]

function App() {
  const [filter, setFilter] = useState("bw")
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [isFading, setIsFading] = useState(false)
  const [showTop, setShowTop] = useState(false)

  const filteredPhotos = photos.filter((photo) => photo.type === filter)

  const openPhoto = (index) => {
    setSelectedIndex(index)
  }

  const closePhoto = () => {
    setSelectedIndex(null)
  }

  const showNext = () => {
    if (selectedIndex === null) return
    setSelectedIndex((prev) => (prev + 1) % filteredPhotos.length)
  }

  const showPrev = () => {
    if (selectedIndex === null) return
    setSelectedIndex(
      (prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length
    )
  }

  const changeFilter = (newFilter) => {
    if (newFilter === filter) return
    setIsFading(true)
    setTimeout(() => {
      setFilter(newFilter)
      setIsFading(false)
      setSelectedIndex(null)
    }, 180)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex !== null) {
        if (e.key === "Escape") closePhoto()
        if (e.key === "ArrowRight") showNext()
        if (e.key === "ArrowLeft") showPrev()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedIndex, filteredPhotos.length])

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div>
      <nav className="navbar">
        <div className="logo">MONYTERA</div>

        <div className="nav-links">
          <button
            className={filter === "bw" ? "active" : ""}
            onClick={() => changeFilter("bw")}
          >
            BLACK & WHITE
          </button>

          <button
            className={filter === "color" ? "active" : ""}
            onClick={() => changeFilter("color")}
          >
            COLOR
          </button>

          <a href="#about" className="about-link">
            ABOUT ME
          </a>
        </div>
      </nav>

      <section className={`gallery ${isFading ? "fade-out" : "fade-in"}`}>
        {filteredPhotos.map((photo, index) => (
          <div className="gallery-item" key={photo.id}>
            <img
              src={photo.src}
              loading="lazy"
              className="gallery-image loading"
              onClick={() => openPhoto(index)}
              onLoad={(e) => e.currentTarget.classList.remove("loading")}
              alt={`${photo.type} photograph ${photo.id}`}
            />
          </div>
        ))}
      </section>

      <section id="about" className="about-section">
        <div className="about-image-wrap">
          <img src={me} alt="Portrait of Tony" className="about-image" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>
          <p>
            If you're here that means you've taken an interest in my photos and
            what I like to shoot. There really isn't a specific style i'm going
            for when I take photos, nor is there any ulterior motive or thought
            process. I shoot to document the abundance of love that seems to
            surround me in life, along with anything I find interesting.
          </p>
          <p>
            I still consider myself to be a novice at photography, but I am
            open to shoots with different subjects and also open to becoming a
            mentee. My objective is to learn and create as much as I can while I
            can still breathe.
          </p>
          <h3>&lt;3 Tony</h3>

          <div className="about-links">
            <a href="mailto:mony.tera.j@gmail.com">mony.tera.j@gmail.com</a>
            <a
              href="https://www.instagram.com/mony.tera/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@toastyjm"
              target="_blank"
              rel="noreferrer"
            >
              TikTok
            </a>
          </div>
        </div>
      </section>

      {selectedIndex !== null && (
        <div className="modal" onClick={closePhoto}>
          <button
            className="nav-arrow left-arrow"
            onClick={(e) => {
              e.stopPropagation()
              showPrev()
            }}
          >
            ←
          </button>

          <img
            src={filteredPhotos[selectedIndex].src}
            className="modal-image"
            alt="Selected photograph"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="nav-arrow right-arrow"
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
          >
            →
          </button>

          <button
            className="close-modal"
            onClick={(e) => {
              e.stopPropagation()
              closePhoto()
            }}
          >
            ×
          </button>
        </div>
      )}

      {showTop && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  )
}

export default App