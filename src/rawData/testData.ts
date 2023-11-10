export const user = {
  username: "david",
  password: "1234",
};

export const data = [
  {
    name: "RS-77 HH",
    image: "/rs_77_hh.png",
    blueprints: [
      { name: "RS-77 HH 1", image: "/rs_77_hh_1.jpg", bf: 0.09, uf: 1.5, ug:1.2 },
      { name: "RS-77 HH 2", image: "/rs_77_hh_2.jpg", bf: 0.09, uf: 1.5, ug:1.2  },
      { name: "RS-77 HH 3", image: "/rs_77_hh_3.jpg", bf: 0.09, uf: 1.5 , ug:1.2 },
    ],
  },
  {
    name: "RS-77 CE",
    image: "/rs_77_ce.png",
    blueprints: [
      { name: "RS-77 CE 1", image: "/rs_77_ce_1.jpg", bf: 0.09, uf: 1.5, ug:1.2  },
      { name: "RS-77 CE 2", image: "/rs_77_ce_2.jpg", bf: 0.09, uf: 1.5, ug:1.2  },
      { name: "RS-77 CE 3", image: "/rs_77_ce_3.jpg", bf: 0.09, uf: 1.5, ug:1.2 },
    ],
  },
];

export const PsiEspaciador: any = {
  aluminio: { simple: 0, sinRevestir: 0.08, bajoEmisivo: 0.11 },
  prestacionesTermicasMejoradas: {
    simple: 0,
    sinRevestir: 0.06,
    bajoEmisivo: 0.08,
  },
  SP14: { simple: 0, doble: 0.049, triple: 0.044 },
  SP16: { simple: 0, doble: 0.036, triple: 0.031 },
};

export const PsiVidirio: any = {
  aluminio: {
    doble: {
      no: 0,
      dgb2: {
        sinRevestir: 0.03,
        bajoEmisivo: 0.07,
      },
      dgb4: {
        sinRevestir: 0.01,
        bajoEmisivo: 0.04,
      },
    },
    triple : {
        no: 0,
        vidrio1:{
            dgb2: {
                sinRevestir: 0,
                bajoEmisivo: 0.03,
            },
            dgb4: {
                sinRevestir: 0,
                bajoEmisivo: 0.01,
            },
        },
        vidrio2:{
            dgb2: {
                sinRevestir: 0,
                bajoEmisivo: 0.05,
            },
            dgb4: {
                sinRevestir: 0,
                bajoEmisivo: 0.02,
            },
        }
    }
  },
  'plastico': {
    doble: {
      no: 0,
      dgb2: {
        sinRevestir: 0,
        bajoEmisivo: 0.04,
      },
      dgb4: {
        sinRevestir: 0,
        bajoEmisivo: 0.02,
      },
    },
    triple : {
        no: 0,
        vidrio1:{
            dgb2: {
                sinRevestir: 0,
                bajoEmisivo: 0.02,
            },
            dgb4: {
                sinRevestir: 0,
                bajoEmisivo: 0.01,
            },
        },
        vidrio2:{
            dgb2: {
                sinRevestir: 0,
                bajoEmisivo: 0.03,
            },
            dgb4: {
                sinRevestir: 0,
                bajoEmisivo: 0.02,
            },
        }
    }
  },
};


// <div className="col-3" key={item.name}>
// <div
//   className={`card ${
//     index === firstSelected ? "border border-primary" : ""
//   }`}
//   style={{ width: "18rem" }}
//   id={`${index}`}
//   onClick={() => {
//     setFirstSelected(index);
//     setProgress(2);
//   }}
// >
//   <img
//     src={item.image}
//     className="card-img-top"
//     alt="..."
//   />
//   <div className="card-body">
//     <h5 className="card-title">{item.name}</h5>
//     {/* <p className="card-text">
//       Some quicasdask example text to build on the card
//       title and make up the bulk of the card's content.
//     </p> */}
//     <button className="btn btn-primary">seleccionar</button>
//   </div>
// </div>
// </div>



// <div className="col-3" key={item.name}>
// <div
//   className={`card ${
//     index === secondSelected ? "border border-primary" : ""
//   }`}
//   style={{ width: "18rem" }}
//   id={`${index}`}
//   onClick={() => {
//     setSecondSelected(index);
//     setProgress(3);
//   }}
// >
//   <img
//     src={item.image}
//     className="card-img-top"
//     alt="..."
//   />
//   <div className="card-body">
//     <h5 className="card-title">{item.name}</h5>
//     {/* <p className="card-text">
//       Some quicasdask example text to build on the card
//       title and make up the bulk of the card's content.
//     </p> */}
//     <button className="btn btn-primary">seleccionar</button>
//   </div>
// </div>
// </div>