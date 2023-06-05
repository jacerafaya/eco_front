import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRef } from "react";
import Stepper from "../components/Stepper/Stepper";
import { TbSolarPanel, TbSolarPanel2 } from "react-icons/tb";
import Layout from "../layout";
const img_panneau_sol = new URL(
  "../../../public/assets/panneau_sur_sol.png",
  import.meta.url
);
export default function Etape3() {
  const router = useRouter();
  console.log(router.query);
  const [place, setPlace] = useState(router.query.place ?? "sol");
  const [longueur, setLongueur] = useState(router.query.longueur ?? 0);
  const [largeur, setLargeur] = useState(router.query.largeur ?? 0);
  const [orientation, setOrientation] = useState(
    router.query.orientation ?? "votre orientation"
  );
  const [region, setRegion] = useState(
    router.query.region ?? "votre région"
  );
  
  const [showOptions, setShowOptions] = useState(false);
  const [showOptions1, setShowOptions1] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownRef1 = useRef(null);
  const handleSelect = (value) => {
    setOrientation(value);
    setShowOptions(false)
  };
  const handleSelect1 = (value) => {
    setRegion(value);
    setShowOptions1(false)
  };
  const handleDropdownClick = () => {
    setShowOptions(!showOptions);
  };
  const handleDropdownClick1 = () => {
    setShowOptions1(!showOptions1);
  };
  const handleDropdownChange = (event) => {
    setShowOptions(event.target.value);
  };
  const handleDropdownChange1 = (event) => {
    setShowOptions1(event.target.value);
  };
  const handleOptionClick = (value) => {
    handleSelect(value);
    dropdownRef.current.focus();
  };
  const handleOptionClick1 = (value) => {
    handleSelect1(value);
    dropdownRef1.current.focus();
  };

  const [errorMessage, setErrorMessage] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
 
  const isSubmitDisabled = longueur === 0|| largeur === 0 || orientation === 'votre orientation';
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSubmitDisabled) {
      setErrorMessage('Please enter a value');
    } else {
      // Handle form submission
      setErrorMessage('');
      e.target.submit();
    }
  };
  return (
    <Layout>
    <div className="wrapper2">
      <Navbar />
      <Stepper index={3} />
      <div className=" container  justify-content-center row">
        <div className=" cardFormulaire   col-md-8 col-lg-8 col-sm-12">
          <div>
            <h4 className=" row cardFormulaire-title  justify-content-center  ">
              Etape 3 : Votre Emplacement
            </h4>
          </div>
          <div onSubmit={handleSubmit}>
            <div className="row justify-content-center">
              <div className="flex">
              <h4 className="radtitle">Ou tu veux installer vos panneau ?  : </h4>
              <div class='px'>
                  <div className="itemrd">
                    <label>
                      <input type="radio" class="option-input radio" name="example"
                      id="toit"
                      value="toit"
                      checked={place === "toit"}
                      onChange={(event) => {
                        setPlace("toit");
                  
                      }}
                      required />
                    Sur le toit
                    </label>
                  </div>
                  <div className="itemrd">
                  <label>
                  <input type="radio" class="option-input radio" name="example"
                  id="sol"
                  value="sol"
                  checked={place === "sol"}
                  onChange={(event) => {
                    setPlace("sol");
                  }}
                  required />
                  Sur le sol 
                </label>
                </div>
              </div>
              </div>
            </div>       
            <div className=" row ">
              <div className="Longueur">
              <label>Longueur :
              <input
                type="text"
                name="longueur"
                placeholder="longueur"
                className="formInput"
                value={longueur}
                onChange={(event) => {
                  setLongueur(event.target.value);
                }}
                required
              />
              </label>
              <label>Largeur : 
              <input
                type="text"
                name="largeur"
                placeholder="largeur"
                className="formInput"
                value={largeur}
                onChange={(event) => {
                  setLargeur(event.target.value);
                }}
                required
              />
              </label>
              </div>
            </div>
            <div className="row  justify-content-center">
            <div className="formSelect1">
                <div className="selectDropdown1" tabIndex="0" onClick={handleDropdownClick1} onChange={handleDropdownChange1} ref={dropdownRef1}
                >
                  <span>{region || 'Choose region'}</span>
                  <span className="selectArrow1"></span>
                </div>
              {showOptions1 && (
              <div className="selectOptions1">
                <div
                  className="selectOption1"
                  onClick={() => handleSelect1('Ariana')
                }
                >
                  Ariana
                </div>        
                <div
                  className="selectOption1"
                  onClick={() => handleSelect1('Beja')
                }
                >
                  Beja
                </div>  
                <div
                  className="selectOption1"
                  onClick={() => handleSelect1('Ben Arous')
                }
                >
                  Ben Arous
                </div>  
                <div
                  className="selectOption1"
                  onClick={() => handleSelect1('Bizerte')
                }
                >
                  Bizerte
                </div>  
                <div
                  className="selectOption1"
                  onClick={() => handleSelect1('Gabes')
                }
                >
                  Gabes
                </div>  
                <div
                  className="selectOption1"
                  onClick={() => handleSelect1('Gafsa')
                }
                >
                  Gafsa
                </div>  
                <div
                  className="selectOption1"
                  onClick={() => handleSelect1('Jendouba')
                }
                >
                  Jendouba
                </div>  
                <div
                  className="selectOption1"
                  onClick={() => handleSelect1('Kairouan')
                }
                >
                  Kairouan
                </div>  
                <div
                  className="selectOption1"
                  onClick={() => handleSelect1('Kasserine')
                }
                >
                  Kasserine
                </div>  
                <div
                  className="selectOption1"
                  onClick={() => handleSelect1('Kebili')
                }
                >
                  Kebili
                </div>  
                <div
                  className="selectOption1"
                  onClick={() => handleSelect1('Kef')
                }
                >
                  Kef
                </div>  
                <div
                  className="selectOption1"
                  onClick={() => handleSelect1('Mahdia')
                }
                >
                  Mahdia
                </div>  
                <div
                  className="selectOption1"
                  onClick={() => handleSelect1('Manouba')
                }
                >
                  Mannouba
                </div>  
                <div
                  className="selectOption1"
                  onClick={() => handleSelect1('Medenine')
                }
                >
                  Medenine
                </div>  
                <div
                  className="selectOption1"
                  onClick={() => handleSelect1('Monastir')
                }
                >
                 Monastir
                </div>  
                <div
                  className="selectOption1"
                  onClick={() => handleSelect1('Nabeul')
                }
                >
                  Nabeul
                </div>  
                <div
                  className="selectOption1"
                  onClick={() => handleSelect1('Sfax')
                }
                >
                  Sfax
                </div>  
                <div
                  className="selectOption1"
                  onClick={() => handleSelect1('Sidi Bouzid')
                }
                >
                  Sidi Bouzid
                </div>  
                <div
                  className="selectOption1"
                  onClick={() => handleSelect1('Siliana')
                }
                >
                  Siliana
                </div>  
                <div
                  className="selectOption1"
                  onClick={() => handleSelect1('Sousse')
                }
                >
                  Sousse
                </div>  
                <div
                  className="selectOption1"
                  onClick={() => handleSelect1('Tataouine')
                }
                >
                  Tataouine
                </div>  
                <div
                  className="selectOption1"
                  onClick={() => handleSelect1('Tozeur')
                }
                >
                  Tozeur
                </div>  
                <div
                  className="selectOption1"
                  onClick={() => handleSelect1('Tunis')
                }
                >
                  Tunis
                </div>  
                <div
                  className="selectOption1"
                  onClick={() => handleSelect1('Zaghouan')
                }
                >
                  Zaghouan
                </div>       
              </div>
              
              )}
              
              </div>
              <div className="formSelect1">
                <div className="selectDropdown1" tabIndex="0" onClick={handleDropdownClick} onChange={handleDropdownChange} ref={dropdownRef}
                >
                  <span>{orientation || 'Choose orientation'}</span>
                  <span className="selectArrow1"></span>
                </div>
              {showOptions && (
              <div className="selectOptions1">
                <div
                  className="selectOption1"
                  onClick={() => handleSelect('sud')
                }
                >
                  Sud
                </div>
                <div
                  className="selectOption1"
                  onClick={() => handleOptionClick('sudEst')}
                >
                  Sud Est
                </div>
                <div
                className="selectOption1"
                onClick={() => handleOptionClick('sudOuest')}
              >
                Sud Ouest
              </div>
              </div>
              )}
              
              </div>
            </div>
            {(isSubmitDisabled || (hasSubmitted && isSubmitDisabled))&& <div className="row justify-content-center " style={{ color: 'orange' }}>* Merci de remplir tous les champs</div>}

            <div className="row justify-content-end">
              <button
                className="form-button "
                onClick={() => {
                  router.push({
                    pathname: "/devis/Etape2",
                    query: {
                      firstName: router.query.firstName,
                      lastName: router.query.lastName,
                      phoneNumber: router.query.phoneNumber,
                      email: router.query.email,
                      adress: router.query.adress,
                      job: router.query.job,
                      age: router.query.age,
                      type: router.query.type,
                      technology: router.query.technology,
                    },
                  });
                }}
              >
              Précédent
              </button>

              <button
                className="form-button"
                onClick={() => {
                  router.push({
                    pathname: "/devis/Etape4",
                    query: {
                      firstName: router.query.firstName,
                      lastName: router.query.lastName,
                      phoneNumber: router.query.phoneNumber,
                      email: router.query.email,
                      adress: router.query.adress,
                      job: router.query.job,
                      age: router.query.age,
                      type: router.query.type,
                      technology: router.query.technology,
                      place: place,
                      longueur: longueur,
                      largeur: largeur,
                      orientation: orientation,
                      region :region,
                    },
                  });
                }}
              >
                Suivant
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </Layout>
  );
}