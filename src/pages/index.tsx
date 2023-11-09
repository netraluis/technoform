import Head from "next/head";
import Container from "react-bootstrap/Container";
import Header from "@/components/Header";
import { PsiEspaciador, PsiVidirio, data, user } from "@/rawData/testData";
import { useEffect, useState } from "react";

export default function Home() {
  const [calcVisible, setCalcVisible] = useState(true)
  const [progress, setProgress] = useState(0);
  const [login, setLogin] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState(false);
  const [firstSelected, setFirstSelected] = useState(-1);
  const [secondSelected, setSecondSelected] = useState(-1);
  const [importSelectedData, setImportSelectedData] = useState({
    ug: 0,
    uf: 0,
    bf: 0,
  });
  const [userChangeableData, setUserChangeableData] = useState({
    alto: 0,
    ancho: 0,
    acristalamiento: "simple",
    tipo: "sinRevestir",
    wg: 0,
    incluyeBarrotillos: "no",
    material: "aluminio",
    dgb: "dgb4",
    gb: 0,
    verticalesVidrio: 0,
    horizontalesVidrio: 0,
  });

  const [internValues, setInternValues] = useState({
    longitudPerimetral: 0,
    areaPerimetral: 0,
    areaVidrio: 0,
    altoVidrio: 0,
    anchoVidrio: 0,
    lgb: 0,
    uW: 0,
    afUf: 0,
    psiL: 0,
    agUg: 0,
    lgbWg: 0,
  });

  const [uW, setUw] = useState(0);

  useEffect(() => {
    const bf2 = 2 * importSelectedData.bf;
    const longitudPerimetral =
      (userChangeableData.alto - bf2 + (userChangeableData.ancho - bf2)) * 2;
    const areaPerimetral =
      (userChangeableData.ancho * 1 - bf2 + userChangeableData.alto * 1) * bf2;
    const altoVidrio = userChangeableData.alto * 1 - 2 * importSelectedData.bf;
    const anchoVidrio =
      userChangeableData.ancho * 1 - 2 * importSelectedData.bf;
    const areaVidrio = altoVidrio * anchoVidrio;

    const lgb =
      userChangeableData.incluyeBarrotillos === "no"
        ? 0
        : altoVidrio * userChangeableData.verticalesVidrio +
          anchoVidrio * userChangeableData.horizontalesVidrio;

    const afUf = areaPerimetral * importSelectedData.uf;
    const psiL = userChangeableData.wg * longitudPerimetral;
    const agUg = areaVidrio * importSelectedData.ug;
    const lgbWg = lgb * userChangeableData.gb;
    setInternValues({
      ...internValues,
      longitudPerimetral,
      areaPerimetral,
      areaVidrio,
      lgb,
      // uW,
      afUf,
      psiL,
      agUg,
      lgbWg,
      altoVidrio,
      anchoVidrio
    });
  }, [userChangeableData.alto, userChangeableData.ancho]);

  useEffect(() => {
    const uWS = internValues.agUg + internValues.afUf + internValues.psiL + internValues.lgbWg;
    const uWI = internValues.areaVidrio + internValues.areaPerimetral
    const uW = uWS / uWI;
    setUw(uW)
  }, [internValues])

  useEffect(()=> {
    if(userChangeableData.material && userChangeableData.acristalamiento === 'doble' && userChangeableData.dgb && userChangeableData.tipo){
      setUserChangeableData({
        ...userChangeableData,
        gb: PsiVidirio[userChangeableData.material][userChangeableData.acristalamiento][userChangeableData.dgb][userChangeableData.tipo],
      });
    }else if(userChangeableData.material && userChangeableData.acristalamiento === 'triple' && userChangeableData.dgb && userChangeableData.tipo && (userChangeableData.incluyeBarrotillos === 'vidrio1' || userChangeableData.incluyeBarrotillos === 'vidrio2')){
console.log(userChangeableData.material, userChangeableData.acristalamiento, userChangeableData.dgb, userChangeableData.tipo, userChangeableData.incluyeBarrotillos)
      setUserChangeableData({
        ...userChangeableData,
        gb: PsiVidirio[userChangeableData.material][userChangeableData.acristalamiento][userChangeableData.incluyeBarrotillos][userChangeableData.dgb][userChangeableData.tipo]
      });
    }else{
      setUserChangeableData({
        ...userChangeableData,
        gb: 0
      });
    }
  }, [userChangeableData.material, userChangeableData.acristalamiento, userChangeableData.dgb, userChangeableData.tipo])

  useEffect(()=>{
    if(PsiEspaciador[userChangeableData.material] && PsiEspaciador[userChangeableData.material][userChangeableData.tipo]){
      setUserChangeableData({
        ...userChangeableData,
        wg: Number(PsiEspaciador[userChangeableData.material][userChangeableData.tipo]),
      });
    }else{
      setUserChangeableData({
        ...userChangeableData,
        wg: 0
      });
    }
  }, [userChangeableData.tipo, userChangeableData.material])

  const secondSelection = (index: number) => {
    setSecondSelected(index);
    const selectedData = data[firstSelected].blueprints[index];
    if (selectedData) {
      const { bf, uf, ug } = selectedData;
      setImportSelectedData({ bf, uf, ug });
    }
    setProgress(3);
  };

  return (
    <>
      <Head>
        <title>Bootstrap w/ React</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container as="main" className="py-4 px-3 mx-auto">
        <Header />

        <h1>Build Bootstrap with React</h1>
        <div
          className="progress"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="progress-bar"
            style={{ width: `${25 * progress}%` }}
          ></div>
        </div>

        {progress === 0 && (
          <div className="container text-center mt-3">
            <div className="row justify-content-md-center">
              <div className="col-3">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="mb-3 mt-3 p-3">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Usuario"
                      value={login.username}
                      onChange={(e) =>
                        setLogin({ ...login, username: e.target.value })
                      }
                    />
                  </div>
                  <div className="p-3">
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Contraseña"
                      value={login.password}
                      onChange={(e) => {
                        e.preventDefault();
                        setLogin({ ...login, password: e.target.value });
                      }}
                    />
                  </div>
                  {loginError && (
                    <div id="emailHelp" className="form-text mb-3 text-danger">
                      Usuario o contraseña incorrecto
                    </div>
                  )}
                  <button
                    onClick={() => {
                      if (
                        login.username === user.username &&
                        login.password === user.password
                      ) {
                        setProgress(1);
                        setLoginError(false);
                        setLogin({ username: "", password: "" });
                      } else {
                        setLoginError(true);
                      }
                    }}
                    className="btn btn-primary m-3"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {progress === 1 && (
          <div className="container text-center mt-3">
            <div className="row justify-content-md-center">
              {data.map((item, index) => (
                <>
                  <div className="col-3" key={item.name}>
                    <div
                      className={`card ${
                        index === firstSelected ? "border border-primary" : ""
                      }`}
                      style={{ width: "18rem" }}
                      id={`${index}`}
                      onClick={() => {
                        setFirstSelected(index);
                        setProgress(2);
                      }}
                    >
                      <img
                        src={item.image}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        {/* <p className="card-text">
                          Some quicasdask example text to build on the card
                          title and make up the bulk of the card's content.
                        </p> */}
                        <button className="btn btn-primary">seleccionar</button>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        )}

        {firstSelected > -1 && progress === 2 && (
          <div className="container text-center mt-3">
            <div className="row justify-content-md-center">
              {data[firstSelected].blueprints.map((item, index) => (
                <>
                  <div className="col-3" key={item.name}>
                    <div
                      className={`card ${
                        index === secondSelected ? "border border-primary" : ""
                      }`}
                      style={{ width: "18rem" }}
                      id={`${index}`}
                      onClick={() => {
                        secondSelection(index);
                      }}
                    >
                      <img
                        src={item.image}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        {/* <p className="card-text">
                          Some quicasdask example text to build on the card
                          title and make up the bulk of the card's content.
                        </p> */}
                        <button className="btn btn-primary">seleccionar</button>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        )}

        {progress === 3 && (
          <div className="container text-center mt-3">
            <div className="row justify-content-md-center">
              {/* {data[firstSelected].blueprints.map((item, index) => ( */}
              <div className="row">
                <div className="col-3">
                  <legend>Geometría de la ventana</legend>
                  <div className="mb-3 form-floating">
                    <input
                      type="number"
                      step="any"
                      className="form-control"
                      id="ancho"
                      placeholder="10"
                      value={
                        userChangeableData.ancho ? userChangeableData.ancho : ""
                      }
                      onChange={(e) =>
                        setUserChangeableData({
                          ...userChangeableData,
                          ancho: e.target.value as unknown as number,
                        })
                      }
                    />
                    <label htmlFor="ancho" className="form-label">
                      Ancho(m)
                    </label>
                  </div>
                  <div className="mb-3 form-floating">
                    <input
                      type="number"
                      step="any"
                      // type="string"
                      className="form-control"
                      id="alto"
                      placeholder="10"
                      onChange={(e) =>
                        setUserChangeableData({
                          ...userChangeableData,
                          alto: e.target.value as unknown as number,
                        })
                      }
                      value={
                        userChangeableData.alto ? userChangeableData.alto : ""
                      }
                    />
                    <label htmlFor="alto" className="form-label">
                      Alto(m)
                    </label>
                  </div>
                </div>

                <div className="col-3">
                  <legend>Vidrio</legend>
                  <label htmlFor="acristalamiento">Acristalamiento</label>
                  <select
                    onChange={(e) =>
                      setUserChangeableData({
                        ...userChangeableData,
                        acristalamiento: e.target.value,
                      })
                    }
                    className="form-select mb-3"
                    aria-label="Acristalamiento"
                  >
                    <option selected value="simple">Simple</option>
                    <option value="doble">Doble</option>
                    <option value="triple">Triple</option>
                  </select>

                  <label htmlFor="tipo">Tipo</label>
                  <select
                    className="form-select mb-3"
                    aria-label="Tipo"
                    onChange={(e) =>
                      setUserChangeableData({
                        ...userChangeableData,
                        tipo: e.target.value,
                      })
                    }
                  >
                    <option selected value="sinRevestir">Sin revestir</option>
                    <option value="bajoEmisivo">Bajo emisivo</option>
                  </select>

                  <div className="mb-3 form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="ug"
                      placeholder="10"
                      value={importSelectedData.ug}
                    />
                    <label htmlFor="ug" className="form-label">
                      Ug(W/m2K)
                    </label>
                  </div>
                </div>

                {userChangeableData.acristalamiento === "simple" && (
                  <div className="col-3">
                    <legend>Espaciador de vidrio simples</legend>
                    <label htmlFor="tipo">Tipo</label>
                    <select
                      className="form-select mb-3"
                      aria-label="Espaciador de vidrio"
                      defaultValue={"-"}
                      disabled={true}
                    >
                      <option selected value="-">-</option>
                    </select>

                    <div className="mb-3 form-floating">
                      <input
                        type="number"
                        className="form-control"
                        id="Wg"
                        placeholder="10"
                        value={0}
                        disabled={true}
                      />
                      <label htmlFor="Wg" className="form-label">
                        Ψg(W/mK)
                      </label>
                    </div>
                  </div>
                )}
                {userChangeableData.acristalamiento === "simple" && (
                  <div className="col-3">
                    <legend>Barrotillos del vidrio simples</legend>
                    <label htmlFor="incluye">¿incluye?</label>
                    <select
                      className="form-select mb-3"
                      aria-label="Espaciador de vidrio"
                      disabled={true}
                      defaultValue={"no"}
                    >
                      <option selected value="no">No</option>
                    </select>
                  </div>
                )}

                {(userChangeableData.acristalamiento === "doble" ||
                  userChangeableData.acristalamiento === "triple") && (
                  <div className="col-3">
                    <legend>Espaciador de vidrio doble o triple</legend>
                    <label htmlFor="tipo">Tipo</label>
                    <select
                      className="form-select mb-3"
                      aria-label="Espaciador de vidrio"
                      onChange={(e) => {
                        // if(PsiEspaciador[e.target.value] && PsiEspaciador[e.target.value][userChangeableData.tipo]){
                          setUserChangeableData({
                            ...userChangeableData,
                            material: e.target.value,
                            // wg: Number(PsiEspaciador[e.target.value][userChangeableData.tipo]),
                          });
                        // }
                        
                    // if(PsiEspaciador[e.target.value]){
                    //   setUserChangeableData({
                    //     ...userChangeableData,
                    //     wg: Number(PsiEspaciador[e.target.value][userChangeableData.tipo][userChangeableData.tipo]),
                    //   });

                    // }
               
                      }}
                    >
                      <option selected value="aluminio">Aluminio</option>
                      <option value="prestacionesTermicasMejoradas">
                        Prestaciones térmicas mejoradas
                      </option>
                      <option value="SP14">SP14</option>
                      <option value="SP16">SP16</option>
                    </select>

                    <div className="mb-3 form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="Wg"
                        placeholder="10"
                        value={
                          userChangeableData.wg ? userChangeableData.wg : 0
                        }
                        // disabled={true}
                      />
                      <label htmlFor="Wg" className="form-label">
                        Ψg
                      </label>
                    </div>
                  </div>
                )}
                {(userChangeableData.acristalamiento === "doble" ||
                  userChangeableData.acristalamiento === "triple") && (
                  <div className="col-3">
                    <legend>Barrotillos del vidrio doble o triple</legend>
                    {userChangeableData.acristalamiento === "doble" && (
                      <>
                      
                      <label htmlFor="incluye">¿incluye?</label>
                      <select
                        className="form-select mb-3"
                        aria-label="Espaciador de vidrio"
                        onChange={(e) =>
                          setUserChangeableData({
                            ...userChangeableData,
                            incluyeBarrotillos: e.target.value,
                          })
                        }
                        value={userChangeableData.incluyeBarrotillos}
                      >
                        <option selected>¿Incluye?</option>
                        <option value="si">Si</option>
                        <option selected value="no">No</option>
                      </select>
                      </>
                    )}

                    {userChangeableData.acristalamiento === "triple" && (
                      <>
                      
                      <label htmlFor="incluye">¿incluye?</label>
                      <select
                        className="form-select mb-3"
                        aria-label="Espaciador de vidrio"
                        onChange={(e) =>
                          setUserChangeableData({
                            ...userChangeableData,
                            incluyeBarrotillos: e.target.value,
                          })
                        }
                        value={userChangeableData.incluyeBarrotillos}
                      >
                        <option value="vidrio1">Sí, en 1 vidrio</option>
                        <option value="vidrio2">Sí, en 2 vidrio</option>
                        <option selected value="no">No</option>
                      </select>
                      </>
                    )}

                    {userChangeableData.incluyeBarrotillos !== "no" && (
                      <>
                        <div className="mb-3 form-floating">
                          <input
                            type="number"
                            className="form-control"
                            id="Verticales"
                            placeholder="10"
                            onChange={(e) =>
                              setUserChangeableData({
                                ...userChangeableData,
                                verticalesVidrio: e.target
                                  .value as unknown as number,
                              })
                            }
                            value={userChangeableData.verticalesVidrio}
                          />
                          <label htmlFor="Verticales" className="form-label">
                            Ud Verticales por vidrio
                          </label>
                        </div>

                        <div className="mb-3 form-floating">
                          <input
                            type="number"
                            className="form-control"
                            id="Horizontales"
                            placeholder="10"
                            onChange={(e) =>
                              setUserChangeableData({
                                ...userChangeableData,
                                horizontalesVidrio: e.target
                                  .value as unknown as number,
                              })
                            }
                            value={userChangeableData.horizontalesVidrio}
                          />
                          <label htmlFor="Horizontales" className="form-label">
                            Ud Horizontales por vidrio
                          </label>
                        </div>
                        <select
                          className="form-select mb-3"
                          aria-label="Espaciador de vidrio"
                          onChange={(e) =>
                            setUserChangeableData({
                              ...userChangeableData,
                              material: e.target.value,
                            })
                          }
                          value={userChangeableData.material}
                        >
                          <option selected>Material</option>
                          <option value="aluminio">Aluminio</option>
                          <option value="plastico">Plástico</option>
                        </select>
                        <select
                          className="form-select mb-3"
                          aria-label="Espaciador de vidrio"
                          onChange={(e) => {
                            
                            // encontrar gb diferente si es doble o triple
                            if(userChangeableData.acristalamiento === "doble"){
                              setUserChangeableData({
                                ...userChangeableData,
                                dgb: e.target.value,
                                // gb: PsiVidirio[userChangeableData.material][
                                //   userChangeableData.acristalamiento
                                // ][e.target.value][userChangeableData.tipo],
                              });
                            }
                            if(userChangeableData.acristalamiento === "triple"){
                              console.log( PsiVidirio[userChangeableData.material])
                              setUserChangeableData({
                                ...userChangeableData,
                                dgb: e.target.value,
                                // gb: PsiVidirio[userChangeableData.material][
                                //   userChangeableData.acristalamiento
                                // ][userChangeableData.incluyeBarrotillos][e.target.value][userChangeableData.tipo]
                              });
                            }
                          }}
                        >
                          <option selected>dgb</option>
                          <option value="dgb4">&#8805; 4mm</option>
                          <option value="dgb2">&#8805; 2mm</option>
                        </select>
                        <div className="mb-3 form-floating">
                          <input
                            type="number"
                            className="form-control"
                            id="gb"
                            placeholder="10"
                            // onChange={(e) => {
                            //   setUserChangeableData({
                            //     ...userChangeableData,
                            //     gb: e.target.value as unknown as number,
                            //   });
                            // }}
                            value={userChangeableData.gb}
                          />
                          <label htmlFor="gb" className="form-label">
                            Ψgb (W/mK)
                          </label>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* <div>{JSON.stringify(userChangeableData)}</div>
                <div>{JSON.stringify(importSelectedData)}</div>
                <div>{JSON.stringify(internValues)}</div> */}
              </div>

              {/* ))} */}



              {calcVisible && <>
                <div>ancho: {userChangeableData.ancho} | alto: {userChangeableData.alto}</div>
                <div>acristalamiento: {userChangeableData.acristalamiento} | tipo: {userChangeableData.tipo} | ug: {importSelectedData.ug}</div>
                <div>tipo:{userChangeableData.material} | wg: {userChangeableData.wg} | </div>
                <div>Incluye: {userChangeableData.incluyeBarrotillos} | udVertivales: {userChangeableData.verticalesVidrio} | udHorizaontales: {userChangeableData.horizontalesVidrio}| material: {userChangeableData.material} | dgb: {userChangeableData.dgb} | Wgb: {userChangeableData.gb}</div>
                <div>bf: {importSelectedData.bf} | uf: {importSelectedData.uf} |longitud Per: {internValues.longitudPerimetral} | area: {internValues.areaPerimetral}</div>
                <div>area vidrio: {internValues.areaVidrio} | ug: {importSelectedData.ug} | alto: {internValues.altoVidrio} | ancho: {internValues.anchoVidrio} </div>
                <div>af*uf: {internValues.areaPerimetral*importSelectedData.uf} | Psi: {userChangeableData.wg} | Psi*l {internValues.longitudPerimetral*userChangeableData.wg}</div>
                <div>AgUg: {internValues.areaVidrio*importSelectedData.ug} | Psigb: {userChangeableData.gb} | lgb: {(internValues.altoVidrio * userChangeableData.verticalesVidrio)+internValues.anchoVidrio * userChangeableData.horizontalesVidrio} | lgb*Psigb: {((internValues.altoVidrio * userChangeableData.verticalesVidrio)+(internValues.anchoVidrio * userChangeableData.horizontalesVidrio))*userChangeableData.gb}</div>

                
                <h2>arriba: {(internValues.areaVidrio*importSelectedData.ug)+ (internValues.areaPerimetral*importSelectedData.uf)+(internValues.longitudPerimetral*userChangeableData.wg)+((internValues.altoVidrio * userChangeableData.verticalesVidrio)+(internValues.anchoVidrio * userChangeableData.horizontalesVidrio))*userChangeableData.gb}</h2>
                <h2>abajo: {(internValues.areaPerimetral + internValues.areaVidrio )}</h2>
                <h1>Uw: {((internValues.areaVidrio*importSelectedData.ug)+ (internValues.areaPerimetral*importSelectedData.uf)+(internValues.longitudPerimetral*userChangeableData.wg)+((internValues.altoVidrio * userChangeableData.verticalesVidrio)+(internValues.anchoVidrio * userChangeableData.horizontalesVidrio))*userChangeableData.gb)/(internValues.areaPerimetral + internValues.areaVidrio )}</h1>
              </>}
              {/* <div onClick={()=>setCalcVisible(!calcVisible)}>Uw: {uW}</div> */}
              <h1> <span onClick={()=>setCalcVisible(!calcVisible)} className="badge bg-secondary">Uw: {uW}</span></h1>
            </div>
          </div>
        )}
      </Container>
    </>
  );
}