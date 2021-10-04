import { Container } from "./styles/style";
import { useState } from "react";
import { SettingsContainer } from "./styles/MenuStyle";
import html2canvas from "html2canvas";

import "./styles/global.css";
import logo from "./assets/images/logo.png";
import logoMenu from "./assets/images/logo-menu.png";

function App() {
  const [text, setText] = useState("O Pinguim Criativo");
  const [fontFamily, setFontFamily] = useState("monospace");
  const [textColor, setTextColor] = useState("#ffffff");
  const [fontSize, setFontSize] = useState("");
  const [wallpaperBackgroundColor, setWallpaperBackgroundColor] = useState("");
  const [wallpaperWidth, setWallpaperWidth] = useState(
    `${window.screen.availWidth}`
  );
  const [wallpaperHeight, setWallpaperHeight] = useState(
    `${window.screen.availHeight}`
  );
  const [logoSize, setLogoSize] = useState("");

  const changeTextStyle = {
    color: textColor,
    fontFamily: fontFamily,
    fontSize: fontSize,
  };

  const changeWallpaperBackground = {
    background: wallpaperBackgroundColor,
    width: wallpaperWidth,
    height: wallpaperHeight,
  };

  const changeLogoStyle = {
    width: logoSize,
  };

  function generateWallpaper() {
    html2canvas(document.querySelector(".wallpaper-background")).then(
      (canvas) => {
        let dataURL = canvas.toDataURL("image/png");
        let a = document.createElement("a");
        a.href = dataURL;
        a.download = "pinguimcriativo.png";
        a.click();
      }
    );
  }

  return (
    <Container>
      <SettingsContainer>
        <div className="settings">
          <figure className="logo-menu-container">
            <a
              href="https://www.pinguimcriativo.com"
              target="_blank"
              rel="noreferrer"
            >
              <img className="logo-menu" src={logoMenu} alt="Logo do menu" />
            </a>
          </figure>
          <div>
            <span>Largura</span>
            <input
              type="text"
              placeholder={`${window.screen.availWidth}px`}
              onChange={(event) => setWallpaperWidth(event.target.value)}
            />
          </div>
          <div>
            <span>Altura</span>
            <input
              type="text"
              placeholder={`${window.screen.availHeight}px`}
              onChange={(event) => setWallpaperHeight(event.target.value)}
            />
          </div>
          <div>
            <span>Cor do fundo</span>
            <input
              type="text"
              placeholder="#28303d"
              onChange={(event) =>
                setWallpaperBackgroundColor(event.target.value)
              }
            />
          </div>
          <div>
            <span>Tamanho da logo</span>
            <input
              type="text"
              placeholder="320px"
              onChange={(event) => setLogoSize(event.target.value)}
            />
          </div>
          {/* <div>
            <span>Cor da logo</span>
            <input type="text" placeholder="#ffffff" />
          </div> */}
          <div>
            <span>Tamanho da fonte</span>
            <input
              type="text"
              placeholder="48px"
              onChange={(event) => setFontSize(event.target.value)}
            />
          </div>
          <div>
            <span>Família da fonte</span>
            <input
              type="text"
              placeholder="Monospace"
              onChange={(event) => setFontFamily(event.target.value)}
            />
          </div>
          <div>
            <span>Cor do texto</span>
            <input
              type="text"
              placeholder="#ffffff"
              onChange={(event) => setTextColor(event.target.value)}
            />
          </div>
          <div>
            <span>Texto</span>
            <textarea
              onChange={(event) => setText(event.target.value)}
              placeholder=" O Pinguim Criativo"
            ></textarea>
          </div>
          <div className="botton-download" onClick={generateWallpaper}>
            <a href="##">GERAR PAPEL DE PAREDE</a>
          </div>
        </div>
      </SettingsContainer>

      <div className="wallpaper-background" style={changeWallpaperBackground}>
        <figure>
          <img className="logo" style={changeLogoStyle} src={logo} alt="Logo" />
        </figure>
        <div className="text">
          <h1 style={changeTextStyle}>{text}</h1>
        </div>
      </div>
    </Container>
  );
}

export default App;
