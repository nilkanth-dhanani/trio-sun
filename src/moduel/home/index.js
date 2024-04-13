import React from 'react'
import './home.css'
import batch from '../assets/img/text-d3beaf5c.svg';
import logo from '../assets/img/logo-409273d1.svg';
import check from '../assets/img/check-61e9299e.svg';
import fairpng from '../assets/img/download.png';
import sunmd from '../assets/img/sun-md-8ecdf1e5.svg';
import checklg from '../assets/img/check-lg-9fd77ea3.svg';
import women from '../assets/img/img011-43df1a55.png';
import scrollimg1 from '../assets/img/01-def24987.svg';
import scrollimg2 from '../assets/img/02-2c5392f0.svg';
import scrollimg3 from '../assets/img/03-430668ec.svg';
import scrollimg4 from '../assets/img/04-c4af14b8.svg';
import scrollimg5 from '../assets/img/05-25b266cc.svg';
import scrollimg6 from '../assets/img/06-d85227f2.svg';
import scrollimg7 from '../assets/img/08-f4b761aa.svg';
import scrollimg8 from '../assets/img/09-54ee8916.svg';
import scrollimg9 from '../assets/img/011-9f6bbbfb.svg';
import blackImg from '../assets/img/black-img-f0d5c335.png';
import trueGray from '../assets/img/true-gray-57f6ec95.svg';
import plus from '../assets/img/plus-dd8cd9a1.svg';
import house from '../assets/img/img-d3b9928e.png';
import house2 from '../assets/img/img20-c284c8df.png';
import family from '../assets/img/img3-65265bb4.png';
import star from '../assets/img/star-b71f9f06.svg';
import curveArrow from '../assets/img/arrow-curve-562bdd41.svg';
import google from '../assets/img/google-1d3a5f59.svg';
import onclick from '../assets/img/1-dd05e723.svg';
import arrowTop from '../assets/img/arrow-top-20780756.svg';
import insta from '../assets/img/insta-e6dcdb08.svg';

export default function Home() {
  return (
    <div className="">
      <div className='background'>
        <div className="background-batch">
          <a href="batch">
            <img src={batch} alt="batch" />
          </a>
        </div>
        <header>
          <div className="header-container">
            <div className="header-div">
              <div className="header-div1">
                <a href="logo">
                  <img src={logo} alt="logo" />
                </a>
              </div>
              <div className="header-div2">
                <a href="Produkte">Produkte</a>
                <a href="Karriere">Karriere</a>
                <a href="Referenzen">Referenzen</a>
                <a href="Über uns">Über uns</a>
                <a href="Kostenlose Beratung">
                  <button>Kostenlose Beratung </button>
                </a>
              </div>
            </div>
          </div>
        </header>
        <div className="Vertragsabschluss">
          <div className="header-container">
            <div className="Vertragsabschluss-div">
              <a href="Vertragsabschluss">
                <div className="Vertragsabschluss-div-main">
                  <p><span>500,-€</span> Empfehlungsprämie sichern! Bei <span>Vertragsabschluss</span>   zwischen uns und Ihrem empfohlenen Kontakt, erhalten Sie eine Empfehlungsprämie.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="background-last-div">
          <div className="container">
            <div className="background-last-div-grid">
              <div className="background-last-div-grid1">
                <h1>Ihr Photovoltaik - Partner</h1>
                <div className="background-last-div-grid1-list">
                  <div className="background-last-div-grid1-list-flex">
                    <img src={check} alt="check" />
                    <p>Ihr ganzheitliches Energiekonzept</p>
                  </div>
                  <div className="background-last-div-grid1-list-flex2">
                    <img src={check} alt="check" />
                    <p>Fachkompetenz - Team mit Fachwissen in erneuerbaren Energien und Elektrik</p>
                  </div>
                  <div className="background-last-div-grid1-list-flex3">
                    <img src={check} alt="check" />
                    <p>Leistungsstarke Produkte, intelligent vernetzt</p>
                  </div>
                </div>
              </div>
              <div className="background-last-div-grid2">
                <div className="background-last-div-grid2-main">
                  <div className="background-last-div-grid2-pera">
                    <p>Dein Experte</p>
                    <p>für Photovoltaik,</p>
                    <p>aus der Hansestadt.</p>
                  </div>
                  <div className="background-last-div-grid2-button">
                    <button>Photovoltaikanlage anfragen</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="energiekonzept">
        <div className="energiekonzept-flex">
          <div className="energiekonzept-flex1">
            <h2>Ihr Energiekonzept</h2>
            <p>Sagen Sie stark schwankenden Energiepreisen den Kampf an und befreien Sie sich mithilfe von Photovoltaik von Abhängigkeiten.</p>
            <p>Produzieren Sie einfach Ihren eigenen Strom und sparen Sie jedes Jahr bares Geld, während Sie die Umwelt schützen.</p>
            <p>Lassen Sie sich gerne unverbindlich und komplett individuell von uns beraten.</p>
            <button>kostenlose Beratung</button>
          </div>
          <div className="energiekonzept-flex2">
            <div className="energiekonzept-flex2-div">
              <div className="energiekonzept-flex2-div-main">
                <div className="energiekonzept-flex2-div-main-grid">
                  <div className="energiekonzept-flex2-div-main-grid1">
                    <h5>01</h5>
                  </div>
                  <div className="energiekonzept-flex2-div-main-grid2"></div>
                </div>
                <div className="energiekonzept-flex2-div-main-text">
                  <h6>BERATUNG</h6>
                  <p>Unsere erfahrenen Experten führen eine detaillierte Bedarfsanalyse durch, um Ihre spezifischen Anforderungen zu verstehen. Wir informieren Sie auch über mögliche Förderungen und stehen Ihnen für alle Fragen rund um die Photovoltaikberatung zur Verfügung.</p>
                </div>
              </div>
              <div className="energiekonzept-flex2-div-main2">
                <div className="energiekonzept-flex2-div-main2-grid">
                  <div className="energiekonzept-flex2-div-main2-grid1">
                    <h5>02</h5>
                  </div>
                  <div className="energiekonzept-flex2-div-main2-grid2"></div>
                </div>
                <div className="energiekonzept-flex2-div-main2-text">
                  <h6>PLANUNG & KONZIPIERUNG</h6>
                  <p>Unsere Ingenieure erstellen ein maßgeschneidertes Konzept, das die optimalen Komponenten, Ausrichtung der Module und Integration in das Stromnetz berücksichtigt.</p>
                </div>
              </div>
              <div className="energiekonzept-flex2-div-main2">
                <div className="energiekonzept-flex2-div-main2-grid">
                  <div className="energiekonzept-flex2-div-main2-grid1">
                    <h5>03</h5>
                  </div>
                  <div className="energiekonzept-flex2-div-main2-grid2"></div>
                </div>
                <div className="energiekonzept-flex2-div-main2-text">
                  <h6>MONTAGE</h6>
                  <p>Photovoltaikmodule sind Fachbetrieben zur Montage zu überlassen. Wir übernehmen die Montage und Installation unserer gemeinsam geplanten Photovoltaik-Anlage und übergeben Ihnen das Projekt auf Anhieb einsatzbereit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="photovoltaik">
        <div className="photovoltaik-div">
          <div className="photovoltaik-div-main">
            <h4>Photovoltaik für Ihr Gebäude</h4>
            <p>Mit unserer Photovoltaiklösung wird Ihr Gebäude zum Kraftwerk der Zukunft – nachhaltig, effizient und bereit für eine strahlende Zukunft!</p>
            <div className="photovoltaik-div-main-button">
              <a href="Planung">
                <button>Planung anfragen</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="wirsind">
        <div className="container3">
          <div className="wirsind-div">
            <div className="wirsind-div1">
              <div className="wirsind-div1-sticker">
                <img src={fairpng} alt="fairpng" />
              </div>
              <div className="wirsind-div1-logo">
                <img src={sunmd} alt="sunmd" />
                <div className="wirsind-div1-logo-head">
                  <h5>Wir sind TRIO SUN</h5>
                  <span>unser Verprechen an sie</span>
                </div>
              </div>
            </div>
            <div className="wirsind-div2">
              <div className="wirsind-div2-container">
                <div className="wirsind-div2-container-flex1">
                  <div className="wirsind-div2-container-flex1-list">
                    <img src={checklg} alt="checklg" />
                    <div className="wirsind-div2-container-flex1-list-text">
                      <p>Ausschließlich <b> Premium Hersteller </b> mit bis zu 30 Jahren Garantie</p>
                    </div>
                  </div>
                  <div className="wirsind-div2-container-flex1-list">
                    <img src={checklg} alt="checklg" />
                    <div className="wirsind-div2-container-flex1-list-text">
                      <p>Schnelle <b> Installation in 6-8 Wochen </b></p>
                    </div>
                  </div>
                  <div className="wirsind-div2-container-flex1-list">
                    <img src={checklg} alt="checklg" />
                    <div className="wirsind-div2-container-flex1-list-text">
                      <p><b> Garantieerweiterung </b> um 10 Jahre für Wechselrichter und Speicher </p>
                    </div>
                  </div>
                  <div className="wirsind-div2-container-flex1-list2">
                    <img src={checklg} alt="checklg" />
                    <div className="wirsind-div2-container-flex1-list-text">
                      <p>Schlüsselfertig  <b> aus einer Hand </b></p>
                    </div>
                  </div>
                </div>
                <div className="wirsind-div2-container-flex2">
                  <div className="wirsind-div2-container-flex1-list">
                    <img src={checklg} alt="checklg" />
                    <div className="wirsind-div2-container-flex1-list-text">
                      <p><b> Keine Vorauszahlung </b></p>
                    </div>
                  </div>
                  <div className="wirsind-div2-container-flex1-list">
                    <img src={checklg} alt="checklg" />
                    <div className="wirsind-div2-container-flex1-list-text">
                      <p><b> Rundumsorglos Paket </b></p>
                    </div>
                  </div>
                  <div className="wirsind-div2-container-flex1-list">
                    <img src={checklg} alt="checklg" />
                    <div className="wirsind-div2-container-flex1-list-text">
                      <p><b> Eigenes Montageteam </b></p>
                    </div>
                  </div>
                  <div className="wirsind-div2-container-flex1-list2">
                    <img src={checklg} alt="checklg" />
                    <div className="wirsind-div2-container-flex1-list-text">
                      <p>Regionaler <b> Ansprechpartner </b> vor Ort </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wirsind-div2-container2">
                <div className="wirsind-div2-container2-flex3">
                  <h3>Montagekostenschutzgarantie: Kosten für zukünftige Montagen</h3>
                  <p>Reparaturen, Anfahrt und Austausch sind ebenfalls in diesem Kostenpunkt abgedeckt. Vier Wartungen im 20 Jahre Rundumsorglos Paket inklusive</p>
                  <div className="wirsind-div2-container2-flex3-button">
                    <a href="anfragen">
                      <button>Photovoltaikanlage anfragen</button>
                    </a>
                  </div>
                </div>
                <div className="wirsind-div2-container2-flex4">
                  <img src={women} alt="women" />
                  <div className="wirsind-div2-container2-flex4-box">
                    <span>Unsere Fachberater <br />
                      melden sich bei Ihnen.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Unsere">
        <div className="container4">
          <div className="Unsere-head">
            <h2>Unsere Produktpartner</h2>
          </div>
        </div>
        <div className="Unsere-marquee">
          <div className="Unsere-marquee-img">
            <div className="Unsere-marquee-img-div">
              <img src={scrollimg1} alt="scrollimg1" />
              <img src={scrollimg2} alt="scrollimg2" />
              <img src={scrollimg3} alt="scrollimg3" />
              <img src={scrollimg4} alt="scrollimg4" />
              <img src={scrollimg5} alt="scrollimg5" />
              <img src={scrollimg6} alt="scrollimg6" />
              <img src={scrollimg7} alt="scrollimg7" />
              <img src={scrollimg8} alt="scrollimg8" />
              <img src={scrollimg9} alt="scrollimg9" />
              <img src={scrollimg1} alt="scrollimg1" />
              <img src={scrollimg2} alt="scrollimg2" />
              <img src={scrollimg3} alt="scrollimg3" />
              <img src={scrollimg4} alt="scrollimg4" />
              <img src={scrollimg5} alt="scrollimg5" />
              <img src={scrollimg6} alt="scrollimg6" />
              <img src={scrollimg7} alt="scrollimg7" />
              <img src={scrollimg8} alt="scrollimg8" />
              <img src={scrollimg9} alt="scrollimg9" />
            </div>
            <div className="Unsere-marquee-img-div">
              <img src={scrollimg1} alt="scrollimg1" />
              <img src={scrollimg2} alt="scrollimg2" />
              <img src={scrollimg3} alt="scrollimg3" />
              <img src={scrollimg4} alt="scrollimg4" />
              <img src={scrollimg5} alt="scrollimg5" />
              <img src={scrollimg6} alt="scrollimg6" />
              <img src={scrollimg7} alt="scrollimg7" />
              <img src={scrollimg8} alt="scrollimg8" />
              <img src={scrollimg9} alt="scrollimg9" />
              <img src={scrollimg1} alt="scrollimg1" />
              <img src={scrollimg2} alt="scrollimg2" />
              <img src={scrollimg3} alt="scrollimg3" />
              <img src={scrollimg4} alt="scrollimg4" />
              <img src={scrollimg5} alt="scrollimg5" />
              <img src={scrollimg6} alt="scrollimg6" />
              <img src={scrollimg7} alt="scrollimg7" />
              <img src={scrollimg8} alt="scrollimg8" />
              <img src={scrollimg9} alt="scrollimg9" />
            </div>
          </div>
        </div>
      </div>
      <div className="bifaziales">
        <div className="container5">
          <div className="bifaziales-grid">
            <div className="bifaziales-grid1">
              <h3>Bifaziales FULL BLACK Doppelglas Modul</h3>
              <p>Multi-Busbar-Technologie für mehr Absorption, geringeren Serienwiderstand, verbesserte Stromableitung und erhöhte Zuverlässigkeit.</p>
              <button>kostenlose Beratung</button>
            </div>
            <div className="bifaziales-grid2">
              <h3>Unabhängig mit fortschrittlicher Solartechnologie.</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="hochste">
        <div className="container2">
          <div className="hochste-grid">
            <div className="hochste-grid-div1">
              <div className="hochste-grid-div1-flex1">
                <div className="hochste-grid-div1-flex1-head">
                  <h2>01. Höchste Leistung</h2>
                </div>
                <div className="hochste-grid-div1-flex1-list">
                  <div className="hochste-grid-div1-flex1-list-check">
                    <img src={trueGray} alt="trueGray" />
                    <p>Maximale Leistung: 440 Watt</p>
                  </div>
                  <div className="hochste-grid-div1-flex1-list-check">
                    <img src={trueGray} alt="trueGray" />
                    <p>Maximaler Wirkungsgrad: 22%</p>
                  </div>
                  <div className="hochste-grid-div1-flex1-list-check">
                    <img src={trueGray} alt="trueGray" />
                    <p>Halbzellen Technologie</p>
                  </div>
                  <div className="hochste-grid-div1-flex1-list-check">
                    <img src={trueGray} alt="trueGray" />
                    <p>Hoher Ertrag auch bei Tageslicht</p>
                  </div>
                  <div className="hochste-grid-div1-flex1-list-check">
                    <img src={trueGray} alt="trueGray" />
                    <p>Bifazial und monokristallin</p>
                  </div>
                </div>
              </div>
              <div className="hochste-grid-div1-flex2">
                <div className="hochste-grid-div1-flex1-head">
                  <h2>02. Premium Design</h2>
                </div>
                <div className="hochste-grid-div1-flex1-list">
                  <div className="hochste-grid-div1-flex1-list-check">
                    <img src={trueGray} alt="trueGray" />
                    <p>Entwickelt mit Fokus auf Ästhetik</p>
                  </div>
                  <div className="hochste-grid-div1-flex1-list-check">
                    <img src={trueGray} alt="trueGray" />
                    <p>Gewicht: 22 kg</p>
                  </div>
                  <div className="hochste-grid-div1-flex1-list-check">
                    <img src={trueGray} alt="trueGray" />
                    <p>High-transparency anti-reflective coated</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hochste-grid-div2">
              <img src={blackImg} alt="blackImg" />
            </div>
            <div className="hochste-grid-div3">
              <div className="hochste-grid-div3-flex1">
                <div className="hochste-grid-div3-flex1-head">
                  <h2>03. Neueste Technologie</h2>
                </div>
                <div className="hochste-grid-div3-flex1-list">
                  <div className="hochste-grid-div3-flex1-list-check">
                    <img src={trueGray} alt="trueGray" />
                    <p>High-Density-Zellverbindungstechnologie</p>
                  </div>
                  <div className="hochste-grid-div3-flex1-list-check">
                    <img src={trueGray} alt="trueGray" />
                    <p>Exzellentes Temperaturverhalten und 4.000 Pa Windlast</p>
                  </div>
                  <div className="hochste-grid-div3-flex1-list-check">
                    <img src={trueGray} alt="trueGray" />
                    <p>LID frei : Optimierung von lichtinduzierter Degradation</p>
                  </div>
                </div>
              </div>
              <div className="hochste-grid-div3-flex2">
                <div className="hochste-grid-div3-flex1-head">
                  <h2>04. Maximaler Ertrag</h2>
                </div>
                <div className="hochste-grid-div3-flex1-list">
                  <div className="hochste-grid-div3-flex1-list-check">
                    <img src={trueGray} alt="trueGray" />
                    <p>30 Jahre Produktgarantie auf die Verarbeitung</p>
                  </div>
                  <div className="hochste-grid-div3-flex1-list-check">
                    <img src={trueGray} alt="trueGray" />
                    <p>30 Jahre Leistungsgarantie</p>
                  </div>
                  <div className="hochste-grid-div3-flex1-list-check">
                    <img src={trueGray} alt="trueGray" />
                    <p>Entwickelt mit Fokus auf maximalen Ertrag</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Weitere">
        <div className="container6">
          <div className="Weitere-grid">
            <div className="Weitere-grid-div1">
              <h3>Weitere Produkte</h3>
              <p>Wir setzen klare Schwerpunkte auf Werte wie Effizienz, Innovation und Kundenzufriedenheit. Unser Unternehmen strebt danach, Energielösungen zu entwickeln, die nicht nur effektiv, sondern auch wirtschaftlich und benutzerfreundlich sind.</p>
            </div>
            <div className="Weitere-grid-div2">
              <div className="Weitere-grid-div2-input">
                <span>Speicher</span>
                <img src={plus} alt="plus" />
              </div>
              <div className="Weitere-grid-div2-input">
                <span>Wallbox</span>
                <img src={plus} alt="plus" />
              </div>
              <div className="Weitere-grid-div2-input">
                <span>Wechselrichter</span>
                <img src={plus} alt="plus" />
              </div>
              <div className="Weitere-grid-div2-input">
                <span>Produkt Partner</span>
                <img src={plus} alt="plus" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="alles-aus">
        <div className="container6">
          <div className="alles-aus-grid">
            <div className="alles-aus-grid1">
              <div className="alles-aus-grid1-head">
                <h5>Alles aus einer Hand</h5>
                <p>Wir bei TRIO SUN kümmern uns um alles. Der nahtlose Übergang von der Konzeption bis zur Integration gewährleistet nicht nur Effizienz, sondern auch Kundenzufriedenheit. Durch unseren exzellenten Kundenservice und regelmäßige Wartung wird sichergestellt, dass unsere Energielösungen langfristig zuverlässig und effektiv bleiben.</p>
                <div className="alles-aus-grid1-image">
                  <img src={house} alt="house" />
                </div>
              </div>
            </div>
            <div className="alles-aus-grid2">
              <div className="alles-aus-grid2-image">
                <img src={house2} alt="house2" />
              </div>
              <div className="alles-aus-grid2-head">
                <h5>Qualität und Garantie</h5>
                <p>Von Wechselrichtern über Photovoltaikmodule bis hin zu Speicherlösungen und Wallboxen bietet TRIO SUN eine breite Palette hochwertiger Produkte. Die Kunden profitieren von der Qualität und Zuverlässigkeit dieser Produkte, die speziell darauf ausgelegt sind, maximale Effizienz und Leistung zu gewährleisten.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="zufriedenheit">
        <div className="container7">
          <div className="zufriedenheit-grid">
            <div className="zufriedenheit-grid1">
              <h1>Ihre - Zufriedenheit<br />
                steht bei uns im<br />
                Mittelpunkt</h1>
              <button type='button'>kostenlose Beratung</button>
            </div>
            <div className="zufriedenheit-grid2">
              <img src={family} alt="family" />
              <p>TRIO SUN hat das klare Ziel, durch innovative Lösungen eine effiziente Energiezukunft zu gestalten und dabei gleichzeitig die Bedürfnisse und Anforderungen von Ihnen zu erfüllen.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="zukunft">
        <div className="container3">
          <div className="zukunft-head">
            <h3>Für eine bessere Zukunft!</h3>
          </div>
          <div className="zukunft-card">
            <div className="zukunft-card-div">
              <div className="zukunft-card-div-left-onclick">
                <img src={onclick} alt="onclick" />
              </div>
              <div className="zukunft-card-div-right-onclick">
                <img src={onclick} alt="onclick" />
              </div>
              <div className="zukunft-card-div-grid">
                <div className="zukunft-card-div-grid1">
                  <div className="zukunft-card-div-grid1-box">
                    <div className="google-img">
                      <img src={google} alt="google" />
                    </div>
                    <div className="zukunft-card-div-grid1-box-star">
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                    </div>
                    <p>Genau sieben Wochen nach der Auftragserteilung wurde unsere 20 kWp Anlage inkl. 16kW Speicher installiert und Inbetrieb genommen. Wir sind sehr zufrieden und haben die Firma Triosun auch im engeren Kreis weiterempfohlen. Gut ist auch das Energiemanagement System, so kann ich jeder Zeit die aktuelle Lade und Speicher Situation einsehen und so die Anlage optimal nutzen.</p>
                  </div>
                  <div className="curveArrow">
                    <img src={curveArrow} alt="curveArrow" />
                  </div>
                  <div className="zukunft-card-div-grid1-head">
                    <h6>Sönke Nissen</h6>
                  </div>
                </div>
                <div className="zukunft-card-div-grid1">
                  <div className="zukunft-card-div-grid1-box">
                    <div className="zukunft-card-div-grid1-box-star">
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                    </div>
                    <p>Wir holten uns 5 Vergleichsangebote, von einem Solar-Vergleichsportal. Das Preis-Leistungsverhältnis und dass Rundumsorglos Paket waren für uns entscheidende Faktoren für den Kauf, bei Trio Sun. Nicht zu vergessen, dass freundliche Montageteam, welches wir hier ebenfalls loben möchten. Von der Erstberatung bis hin zur Inbetriebnahme, innerhalb 9 Wochen, waren wir bei Trio Sun bestens aufgehoben.</p>
                  </div>
                  <div className="curveArrow">
                    <img src={curveArrow} alt="curveArrow" />
                  </div>
                  <div className="zukunft-card-div-grid1-head">
                    <h6>Karl Schmidt</h6>
                  </div>
                </div>
                <div className="zukunft-card-div-grid1">
                  <div className="zukunft-card-div-grid1-box">
                    <div className="zukunft-card-div-grid1-box-star">
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                    </div>
                    <p>Nach der Beauftragung unserer 10 kWp-Anlage mit 9,6 kW Speicher am 30.09.2023 wurde diese bereits am 18.10.2023 fertiggestellt. Das ist nicht die Regel aber in unserem Fall gab es eine Deadline vor der wir fertig werden wollten. Herr Arikan hat alles möglich gemacht. Wir waren ständig in Kontakt und auch notwendige Nacharbeiten wurden zeitnah erledigt. Danke auch an das Dachteam, an Herrn Schnaar und Herrn Barasi für saubere Arbeit und kompetente Beratung.</p>
                  </div>
                  <div className="curveArrow">
                    <img src={curveArrow} alt="curveArrow" />
                  </div>
                  <div className="zukunft-card-div-grid1-head">
                    <h6>Andreas Wilk</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container8">
          <div className="footer-grid">
            <div className="footer-grid1">
              <div className="footer-grid1-head">
                <h5>Photovoltaik Beratung anfragen</h5>
                <p>Lassen Sie sich kostenlos und unverbindlich beraten.</p>
                <p>Unsere Fachberater melden sich bei Ihnen.</p>
              </div>
              <div className="footer-grid1-input1">
                <div className="footer-grid1-input1-div1">
                  <input type="text" placeholder="Vorname" />
                </div>
                <div className="footer-grid1-input1-div1">
                  <input type="text" placeholder="Nachname" />
                </div>
              </div>
              <div className="footer-grid1-input2">
                <div className="footer-grid1-input2-div1">
                  <input type="text" placeholder="Telefon" />
                </div>
                <button type='button'>Absenden</button>
              </div>
              <div className="footer-grid1-check">
                <input type="checkbox" />
                <p>Ich akzeptiere die geltenden Datenschutzbestimmungen.</p>
              </div>
            </div>
            <div className="footer-grid2-main">
              <div className="footer-grid2">
                <div className="footer-grid2-div1">
                  <a href="Home">Home</a>
                  <a href="Referenzen">Referenzen</a>
                  <a href="Produkte">Produkte</a>
                  <a href="Datenschutz">Datenschutz</a>
                  <a href="Impressum">Impressum</a>
                </div>
                <div className="footer-grid2-div2">
                  <p>TRIO SUN GmbH</p>
                  <p>Flughafenallee 25<br />
                    28199 Bremen</p>
                  <a href="contact">+(49) 421 43817414</a>
                  <a href="insta">
                    <img src={insta} alt="insta" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-last">
            <a href="vorbehalten">Alle Rechte vorbehalten.</a>
            <a href="SUN">2024 by TRIO SUN GmbH</a>
            <div className="footer-last-ancer">
              <a href="nach">nach oben</a>
              <img src={arrowTop} alt="arrowTop" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
