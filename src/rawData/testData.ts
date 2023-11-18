export const user = {
  username: "david",
  password: "1234",
};

export const data = [
  {
    name: "RS-77 HH",
    image: "/rs_77_hh.png",
    blueprints: [
      { name: "RS-77 HH 1", image: "/rs_77_hh_1.jpg", bf: 0.09, uf: 1.5, ug:0 },
      { name: "RS-77 HH 2", image: "/rs_77_hh_2.jpg", bf: 0.09, uf: 1.5, ug:0  },
      { name: "RS-77 HH 3", image: "/rs_77_hh_3.jpg", bf: 0.09, uf: 1.5 , ug:0 },
    ],
  },
  {
    name: "RS-77 CE",
    image: "/rs_77_ce.png",
    blueprints: [
      { name: "RS-77 CE 1", image: "/rs_77_ce_1.jpg", bf: 0.09, uf: 1.5, ug:0  },
      { name: "RS-77 CE 2", image: "/rs_77_ce_2.jpg", bf: 0.09, uf: 1.5, ug:0  },
      { name: "RS-77 CE 3", image: "/rs_77_ce_3.jpg", bf: 0.09, uf: 1.5, ug:0 },
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

// export enum GlassMaterial {
//   simple = 'simple',
//   sinRevestir = 'sin revestir'

// }


export const PsiEspaciadorDB: any = [
  {
    type: 'aluminio',
    glassMaterial: 'simple',
    wg: 0
  },
  {
    type: 'aluminio',
    glassMaterial: 'sin revestir',
    wg: 0.08
  },
  {
    type: 'aluminio',
    glassMaterial: 'bajo emisivo',
    wg: 0.11
  },
  {
    type: 'prestaciones termicas mejoradas',
    glassMaterial: 'simple',
    wg: 0
  },
  {
    type: 'prestaciones termicas mejoradas',
    glassMaterial: 'sin revestir',
    wg: 0.06
  },
  {
    type: 'prestaciones termicas mejoradas',
    glassMaterial: 'bajo emisivo',
    wg: 0.08
  },
  {
    type: 'sp14',
    glassMaterial: 'simple',
    wg: 0
  },
  {
    type: 'sp14',
    glassMaterial: 'doble',
    wg: 0.049
  },
  {
    type: 'sp14',
    glassMaterial: 'triple',
    wg: 0.044
  },
  {
    type: 'sp16',
    glassMaterial: 'simple',
    wg: 0
  },
  {
    type: 'sp16',
    glassMaterial: 'doble',
    wg: 0.036
  },
  {
    type: 'sp16',
    glassMaterial: 'triple',
    wg: 0.031
  },
]

const PsiVidirioDB: any = [
  {
    number: 'si',
    type: 'aluminio',
    glassDensity: 'doble',
    dgb: 2,
    glassMaterial: 'sin revestir',
    gb: 0.03
  },
  {
    number: 'si',
    type: 'aluminio',
    glassDensity: 'doble',
    dgb: 2,
    glassMaterial: 'bajo emisivo',
    gb: 0.07
  },
  {
    number: 'si',
    type: 'aluminio',
    glassDensity: 'doble',
    dgb: 4,
    glassMaterial: 'sin revestir',
    gb: 0.01
  },
  {
    number: 'si',
    type: 'aluminio',
    glassDensity: 'doble',
    dgb: 4,
    glassMaterial: 'bajo emisivo',
    gb: 0.04
  },
  // ------
  {
    number: 'si, en 1 vidrio',
    type: 'aluminio',
    glassDensity: 'triple',
    dgb: 2,
    glassMaterial: 'sin revestir',
    gb: 0
  },
  {
    number: 'si, en 1 vidrio',
    type: 'aluminio',
    glassDensity: 'triple',
    dgb: 2,
    glassMaterial: 'bajo emisivo',
    gb: 0.03
  },
  {
    number: 'si, en 1 vidrio',
    type: 'aluminio',
    glassDensity: 'triple',
    dgb: 4,
    glassMaterial: 'sin revestir',
    gb: 0
  },
  {
    number: 'si, en 1 vidrio',
    type: 'aluminio',
    glassDensity: 'triple',
    dgb: 4,
    glassMaterial: 'bajo emisivo',
    gb: 0.01
  },
    // ------
    {
      number: 'si, en 2 vidrio',
      type: 'aluminio',
      glassDensity: 'triple',
      dgb: 2,
      glassMaterial: 'sin revestir',
      gb: 0
    },
    {
      number: 'si, en 2 vidrio',
      type: 'aluminio',
      glassDensity: 'triple',
      dgb: 2,
      glassMaterial: 'bajo emisivo',
      gb: 0.05
    },
    {
      number: 'si, en 2 vidrio',
      type: 'aluminio',
      glassDensity: 'triple',
      dgb: 4,
      glassMaterial: 'sin revestir',
      gb: 0
    },
    {
      number: 'si, en 2 vidrio',
      type: 'aluminio',
      glassDensity: 'triple',
      dgb: 4,
      glassMaterial: 'bajo emisivo',
      gb: 0.02
    },
/// plastico
    {
      number: 'si',
      type: 'plastico',
      glassDensity: 'doble',
      dgb: 2,
      glassMaterial: 'sin revestir',
      gb: 0
    },
    {
      number: 'si',
      type: 'plastico',
      glassDensity: 'doble',
      dgb: 2,
      glassMaterial: 'bajo emisivo',
      gb: 0.04
    },
    {
      number: 'si',
      type: 'plastico',
      glassDensity: 'doble',
      dgb: 4,
      glassMaterial: 'sin revestir',
      gb: 0
    },
    {
      number: 'si',
      type: 'plastico',
      glassDensity: 'doble',
      dgb: 4,
      glassMaterial: 'bajo emisivo',
      gb: 0.02
    },
    // ------
    {
      number: 'si, en 1 vidrio',
      type: 'plastico',
      glassDensity: 'triple',
      dgb: 2,
      glassMaterial: 'sin revestir',
      gb: 0
    },
    {
      number: 'si, en 1 vidrio',
      type: 'plastico',
      glassDensity: 'triple',
      dgb: 2,
      glassMaterial: 'bajo emisivo',
      gb: 0.02
    },
    {
      number: 'si, en 1 vidrio',
      type: 'plastico',
      glassDensity: 'triple',
      dgb: 4,
      glassMaterial: 'sin revestir',
      gb: 0
    },
    {
      number: 'si, en 1 vidrio',
      type: 'plastico',
      glassDensity: 'triple',
      dgb: 4,
      glassMaterial: 'bajo emisivo',
      gb: 0.01
    },
    // ------
    {
      number: 'si, en 2 vidrio',
      type: 'plastico',
      glassDensity: 'triple',
      dgb: 2,
      glassMaterial: 'sin revestir',
      gb: 0
    },
    {
      number: 'si, en 2 vidrio',
      type: 'plastico',
      glassDensity: 'triple',
      dgb: 2,
      glassMaterial: 'bajo emisivo',
      gb: 0.0
    },
    {
      number: 'si, en 2 vidrio',
      type: 'plastico',
      glassDensity: 'triple',
      dgb: 4,
      glassMaterial: 'sin revestir',
      gb: 0
    },
    {
      number: 'si, en 2 vidrio',
      type: 'plastico',
      glassDensity: 'triple',
      dgb: 4,
      glassMaterial: 'bajo emisivo',
      gb: 0.02
    },
]

// {
//   aluminio: { simple: 0, sinRevestir: 0.08, bajoEmisivo: 0.11 },
//   prestacionesTermicasMejoradas: {
//     simple: 0,
//     sinRevestir: 0.06,
//     bajoEmisivo: 0.08,
//   },
//   SP14: { simple: 0, doble: 0.049, triple: 0.044 },
//   SP16: { simple: 0, doble: 0.036, triple: 0.031 },
// };


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