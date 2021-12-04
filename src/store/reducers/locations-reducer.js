import locationsTypes from '../types/locations-types';

const initialState = {
  data: {}
};

const departmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case locationsTypes.SET_LOCATIONS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return {
        ...state,
        data: [
          { departmentName: "Chinandega", id: 2 },
          { departmentName: "León", id: 12 },
          { departmentName: "Managua", id: 22 },
          { departmentName: "Carazo", id: 32 },
          { departmentName: "Masaya", id: 42 },
          { departmentName: "Rivas", id: 52 },
          { departmentName: "Nueva Segovia", id: 62 },
          { departmentName: "Madriz", id: 72 },
          { departmentName: "Estelí", id: 82 },
          { departmentName: "Jinotega", id: 92 },
          { departmentName: "Granada", id: 102 },
          { departmentName: "Matagalpa", id: 112 },
          { departmentName: "Boaco", id: 122 },
          { departmentName: "Chontales", id: 132 },
          { departmentName: "Río San Juan", id: 142 },
          { departmentName: "Atlántico Norte", id: 152 },
          { departmentName: "Atlántico Sur", id: 162 }
        ]
      }
  }
};

const municipalitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case locationsTypes.SET_LOCATIONS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return {
        ...state,
        data: [
          {
            municipalityName: "Chinandega",
            department: 2
          },
          {
            municipalityName: "Chichigalpa",
            department: 2
          },
          {
            municipalityName: "Corinto",
            department: 2
          },
          {
            municipalityName: "El Realejo",
            department: 2
          },
          {
            municipalityName: "El Viejo",
            department: 2
          },
          {
            municipalityName: "Posoltega",
            department: 2
          },
          {
            municipalityName: "Puerto Morazán",
            department: 2
          },
          {
            municipalityName: "León",
            department: 12
          },
          {
            municipalityName: "Achuapa",
            department: 12
          },
          {
            municipalityName: "El Jicaral",
            department: 12
          },
          {
            municipalityName: "El Sauce",
            department: 12
          },
          {
            municipalityName: "La Paz Centro",
            department: 12
          },
          {
            municipalityName: "Larreynaga",
            department: 12
          },
          {
            municipalityName: "Nagarote",
            department: 12
          },
          {
            municipalityName: "Quezalguaque",
            department: 12
          },
          {
            municipalityName: "Santa Rosa del Peñón",
            department: 12
          },
          {
            municipalityName: "Telica",
            department: 12
          },
          {
            municipalityName: "Managua",
            department: 22
          },
          {
            municipalityName: "Ciudad Sandino",
            department: 22
          },
          {
            municipalityName: "El Crucero",
            department: 22
          },
          {
            municipalityName: "Mateare",
            department: 22
          },
          {
            municipalityName: "San Francisco Libre",
            department: 22
          },
          {
            municipalityName: "San Rafael del Sur",
            department: 22
          },
          {
            municipalityName: "Ticuantepe",
            department: 22
          },
          {
            municipalityName: "Tipitapa",
            department: 22
          },
          {
            municipalityName: "Villa Carlos Fonseca",
            department: 22
          },
          {
            municipalityName: "Jinotepe",
            department: 32
          },
          {
            municipalityName: "Diriamba",
            department: 32
          },
          {
            municipalityName: "Dolores",
            department: 32
          },
          {
            municipalityName: "El Rosario",
            department: 32
          },
          {
            municipalityName: "La Conquista",
            department: 32
          },
          {
            municipalityName: "La Paz",
            department: 32
          },
          {
            municipalityName: "San Marco",
            department: 32
          },
          {
            municipalityName: "Santa Teresa",
            department: 32
          },
          {
            municipalityName: "Masaya",
            department: 42
          },
          {
            municipalityName: "Catarina",
            department: 42
          },
          {
            municipalityName: "La Concepción",
            department: 42
          },
          {
            municipalityName: "Masatepe",
            department: 42
          },
          {
            municipalityName: "Nandasmo",
            department: 42
          },
          {
            municipalityName: "Nindirí",
            department: 42
          },
          {
            municipalityName: "Niquinohomo",
            department: 42
          },
          {
            municipalityName: "San Juan de Oriente",
            department: 42
          },
          {
            municipalityName: "Tisma",
            department: 42
          },
          {
            municipalityName: "Rivas",
            department: 52
          },
          {
            municipalityName: "Altagracia",
            department: 52
          },
          {
            municipalityName: "Belén",
            department: 52
          },
          {
            municipalityName: "Buenos Aires",
            department: 52
          },
          {
            municipalityName: "Cárdenas",
            department: 52
          },
          {
            municipalityName: "Moyogalpa",
            department: 52
          },
          {
            municipalityName: "Potosí",
            department: 52
          },
          {
            municipalityName: "San Jorge",
            department: 52
          },
          {
            municipalityName: "San Juan del Sur",
            department: 52
          },
          {
            municipalityName: "Tola",
            department: 52
          },
          {
            municipalityName: "Ocotal",
            department: 62
          },
          {
            municipalityName: "Ciudad Antigua",
            department: 62
          },
          {
            municipalityName: "Dipilto",
            department: 62
          },
          {
            municipalityName: "El Jícaro",
            department: 62
          },
          {
            municipalityName: "Jalapa",
            department: 62
          },
          {
            municipalityName: "Macuelizo",
            department: 62
          },
          {
            municipalityName: "Mozonte",
            department: 62
          },
          {
            municipalityName: "Murra",
            department: 62
          },
          {
            municipalityName: "Quilalí",
            department: 62
          },

          {
            municipalityName: "San Fernando",
            department: 62
          },

          {
            municipalityName: "Santa María",
            department: 62
          },

          {
            municipalityName: "Wiwilí",
            department: 62
          },
          {
            municipalityName: "Somoto",
            department: 72
          },
          {
            municipalityName: "Las Sabanas",
            department: 72
          },
          {
            municipalityName: "Palacagüina",
            department: 72
          },
          {
            municipalityName: "San José de Cusmapa",
            department: 72
          },
          {
            municipalityName: "San Juan de Río Coco",
            department: 72
          },
          {
            municipalityName: "San Lucas",
            department: 72
          },
          {
            municipalityName: "Telpaneca",
            department: 72
          },
          {
            municipalityName: "Totogalpa",
            department: 72
          },
          {
            municipalityName: "Yalagüina",
            department: 72
          },
          {
            municipalityName: "Estelí",
            department: 82
          },
          {
            municipalityName: "Condega",
            department: 82
          },
          {
            municipalityName: "La Trinidad",
            department: 82
          },
          {
            municipalityName: "Pueblo Nuevo",
            department: 82
          },
          {
            municipalityName: "San Juan de Limay",
            department: 82
          },
          {
            municipalityName: "San Nicolás",
            department: 82
          },
          {
            municipalityName: "Jinotega",
            department: 92
          },
          {
            municipalityName: "El Cuá",
            department: 92
          },
          {
            municipalityName: "La Concordia",
            department: 92
          },
          {
            municipalityName: "San José de Bocay",
            department: 92
          },
          {
            municipalityName: "San Rafael del Norte",
            department: 92
          },
          {
            municipalityName: "San Sebastián de Yalí",
            department: 92
          },
          {
            municipalityName: "Santa María de Pantasma",
            department: 92
          },
          {
            municipalityName: "Wiwilí",
            department: 92
          },
          {
            municipalityName: "Granada",
            department: 102
          },
          {
            municipalityName: "Diriá",
            department: 102
          },
          {
            municipalityName: "Diriomo",
            department: 102
          },
          {
            municipalityName: "Nandaime",
            department: 102
          },
          {
            municipalityName: "Matagalpa",
            department: 112
          },
          {
            municipalityName: "Ciudad Darío",
            department: 112
          },
          {
            municipalityName: "Esquipulas",
            department: 112
          },
          {
            municipalityName: "Matiguás",
            department: 112
          },
          {
            municipalityName: "Muy Muy",
            department: 112
          },
          {
            municipalityName: "Rancho Grande",
            department: 112
          },
          {
            municipalityName: "Río Blanco",
            department: 112
          },
          {
            municipalityName: "San Dionisio",
            department: 112
          },
          {
            municipalityName: "San Isidro",
            department: 112
          },
          {
            municipalityName: "San Ramón",
            department: 112
          },
          {
            municipalityName: "Sébaco",
            department: 112
          },
          {
            municipalityName: "Terrabona",
            department: 112
          },
          {
            municipalityName: "Tuma – La Dalia",
            department: 112
          },
          {
            municipalityName: "Boaco",
            department: 122
          },
          {
            municipalityName: "Camoapa",
            department: 122
          },
          {
            municipalityName: "San José de los Remates",
            department: 122
          },
          {
            municipalityName: "San Lorenzo",
            department: 122
          },
          {
            municipalityName: "Santa Lucía",
            department: 122
          },
          {
            municipalityName: "Teustepe",
            department: 122
          },
          {
            municipalityName: "Juigalpa",
            department: 132
          },
          {
            municipalityName: "Acoyapa",
            department: 132
          },
          {
            municipalityName: "Comalapa",
            department: 132
          },
          {
            municipalityName: "El Coral",
            department: 132
          },
          {
            municipalityName: "La Libertad",
            department: 132
          },
          {
            municipalityName: "San Francisco de Cuapa",
            department: 132
          },
          {
            municipalityName: "San Pedro de Lóvago",
            department: 132
          },
          {
            municipalityName: "Santo Domingo",
            department: 132
          },
          {
            municipalityName: "Santo Tomás",
            department: 132
          },
          {
            municipalityName: "Villa Sandino",
            department: 132
          },
          {
            municipalityName: "San Carlos",
            department: 142
          },
          {
            municipalityName: "El Almendro",
            department: 142
          },
          {
            municipalityName: "El Castillo",
            department: 142
          },
          {
            municipalityName: "Morrito",
            department: 142
          },
          {
            municipalityName: "San Juan del Norte",
            department: 142
          },
          {
            municipalityName: "San Miguelito",
            department: 142
          },
          {
            municipalityName: "Puerto Cabezas",
            department: 152
          },
          {
            municipalityName: "Bonanza",
            department: 152
          },
          {
            municipalityName: "Mulukukú",
            department: 152
          },
          {
            municipalityName: "Prinzapolka",
            department: 152
          },
          {
            municipalityName: "Rosita",
            department: 152
          },
          {
            municipalityName: "Siuna",
            department: 152
          },
          {
            municipalityName: "Waslala",
            department: 152
          },
          {
            municipalityName: "Waspán",
            department: 152
          },
          {
            municipalityName: "Bluefields",
            department: 162
          },
          {
            municipalityName: "Corn Island",
            department: 162
          },
          {
            municipalityName: "El Rama",
            department: 162
          },
          {
            municipalityName: "El Ayote",
            department: 162
          },
          {
            municipalityName: "El Tortuguero",
            department: 162
          },
          {
            municipalityName: "Kukra Hill",
            department: 162
          },
          {
            municipalityName: "La Cruz de Río Grande",
            department: 162
          },
          {
            municipalityName: "Laguna de Perlas",
            department: 162
          },
          {
            municipalityName: "Paiwas",
            department: 162
          },
          {
            municipalityName: "Muelle de los Bueyes",
            department: 162
          },
        ]
      }
  }
};

const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case locationsTypes.SET_LOCATIONS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return {
        ...state,
        data: [
          { locationName: 'Vivienda' },
          { locationName: 'Vía pública' },
          { locationName: 'Centro de trabajo' },
          { locationName: 'Centro de diversión' },
          { locationName: 'Centro de estudio' },
          { locationName: 'Transporte colectivo' },
          { locationName: 'Transporte selectivo' },
          { locationName: 'Finca' },
          { locationName: 'Mercado' },
          { locationName: 'Parque' },
          { locationName: 'Hospital' },
          { locationName: 'Motel' },
          { locationName: 'Hotel' },
          { locationName: 'Hospedaje' },
          { locationName: 'Restaurante' },
          { locationName: 'Parque' },
          { locationName: 'Centro comerciales' }
        ]
      }
  }
};

export { departmentsReducer, municipalitiesReducer, locationsReducer };
