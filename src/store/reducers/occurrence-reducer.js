import occurrenceTypes from '../types/occurrence-types';

const initialState = {
  data: {}
};

const crimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case occurrenceTypes.SET_OCCURRENCE:
      return {
        ...state,
        data: action.payload
      };
    default:
      return {
        ...state,
        data: [
          { item: "Abandono de funciones públicas" },
          { item: "Abandono de personas" },
          { item: "Abigeato y conductas afines" },
          { item: "Aborto" },
          { item: "Aborto imprudente" },
          { item: "Abigeato sin consentimiento" },
          { item: "Abuso de autoridad o funciones" },
          { item: "Abuso de información privilegiada" },
          { item: "Abuso sexual" },
          { item: "Acoso sexual" },
          { item: "Adulteración de alimentos" },
          { item: "Agresiones contra las personas" },
          { item: "Allaneamiento ilegal" },
        ]
      }
  }
};


const transportReducer = (state = initialState, action) => {
  switch (action.type) {
    case occurrenceTypes.SET_OCCURRENCE:
      return {
        ...state,
        data: action.payload
      };
    default:
      return {
        ...state,
        data: [
          { item: 'Automóvil' },
          { item: 'Microbus' },
          { item: 'Cabezal' },
          { item: 'Bicicleta' },
          { item: 'Carreta' },
          { item: 'Coche' },
          { item: 'Motocicleta' },
          { item: 'Tractor' },
          { item: 'Motoneta' },
          { item: 'Camioneta' },
          { item: 'Autobus' },
          { item: 'Camión' },
          { item: 'Furgoneta' },
          { item: 'Van' },
          { item: 'Furgón' },
          { item: 'Jeep' },
          { item: 'Trailer' },
          { item: 'Ambulancia' },
          { item: 'Volquete' }
        ]
      }
  }
};

const meansReducer = (state = initialState, action) => {
  switch (action.type) {
    case occurrenceTypes.SET_OCCURRENCE:
      return {
        ...state,
        data: action.payload
      };
    default:
      return {
        ...state,
        data: [
          { item: 'Arma modificada' },
          { item: 'Arma de fuego' },
          { item: 'Arma blanca' },
          { item: 'Objeto cortopunzante' },
          { item: 'Uso de fuerza física' },
          { item: 'Objeto inflamable' },
          { item: 'Objeto punzante' },
          { item: 'Objeto contundente' },
          { item: 'Sustancias tóxicas' },
          { item: 'Vehículo' },
          { item: 'Ninguno' },
          { item: 'Otros medios' }
        ]
      }
  }
};

const affectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case occurrenceTypes.SET_OCCURRENCE:
      return {
        ...state,
        data: action.payload
      };
    default:
      return {
        ...state,
        data: [
          { item: 'Teléfono celular' },
          { item: 'Teléfono planta' },
          { item: 'Tablet' },
          { item: 'Laptop' },
          { item: 'Computadora de escritorio' },
          { item: 'Otro' }
        ]
      }
  }
};

export { crimeReducer, transportReducer, meansReducer, affectedReducer };
