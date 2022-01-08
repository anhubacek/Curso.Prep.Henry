const {
  minutosASegundos,
  promedio,
  salarioAnual,
  encontrarLaPalabra,
  cuantosRepetidos,
  crearClaseEmpleado,
  index,
  filtrar
} = require('../checkpoint.js');


describe('Funciones', function() {
  describe('minutosASegundos', function() {
    it('should return 300 for 5', function() {
        expect(minutosASegundos(5)).toStrictEqual(300);
    });
    it('should return 180 for 3', function() {
      expect(minutosASegundos(3)).toStrictEqual(180);
  });
  });

  describe('promedio', function() {
    it('should return 2 for [1,2,3]', function() {
        expect(promedio([1,2,3])).toBe(2)
    })
    it('should return 11 for [10, 20, 3]', function() {
      expect(promedio([10, 20, 3])).toBe(11)
    })
    it('should return 1 for [1, 1, 1, 1]', function() {
      expect(promedio([1, 1, 1, 1])).toBe(1)
    })
  })


  describe('salarioAnual',function(){
    var empleados = [{
       nombre: 'Manuel',
       salario: 1000,
     },
     {
       nombre: 'Flor',
       salario: 4000,
     },
     {
       nombre: 'Maria',
       salario: 500,
     }
    ];
    it('should return 12000', function(){
      expect(salarioAnual(empleados, 'Manuel')).toBe(12000);
    })
    it('should return 48000', function() {
      expect(salarioAnual(empleados, 'Flor')).toBe(48000);
    })
    it('should return 6000', function() {
      expect(salarioAnual(empleados, 'Maria')).toBe(6000);
    })
  })

  describe('encontrarLaPalabra', function() {
    it('should return true for "bienvenidos a henry"', function() {
        expect(encontrarLaPalabra('bienvenidos a henry')).toBe(true);
    });
    it('should return false for "hola que tal, como va?!"', function() {
      expect(encontrarLaPalabra('hola que tal, como va?!')).toBe(false);
    });
  });

  describe('index', function() {
    index();
    var numeros = [5, 6, 4, 65, 8, 4]
    var strings = ['henry', 'programmer','javascript'];
    it('should return index', function() {
      expect(numeros.encontraIndex(4)).toBe(2);
    })
    it('should return -1 if no element found', function() {
      expect(strings.encontraIndex('js')).toBe(-1);
    })
  })

});

describe('Clase', function() {
  describe('crearClaseEmpleado', function() {
    it('should return a user constructor that correctly builds empleados objects', function() {
        const Empleado = crearClaseEmpleado();
        const persona = new Empleado('toni', 4000, ['operaciones']);
        expect(persona.nombre).toBe('toni');
        expect(persona.salario).toBe(4000);
        expect(persona.tareas).toEqual(['operaciones']);
        expect(persona.jefe).toEqual(false);
    });
    it('should return a user constructor that correctly builds empleados objects', function() {
        const Empleado = crearClaseEmpleado();
        const persona = new Empleado('martin', 4000, ['operaciones'], true);
        expect(persona.nombre).toBe('martin');
        expect(persona.salario).toBe(4000);
        expect(persona.tareas).toEqual(['operaciones']);
        expect(persona.jefe).toEqual(true);
    });
    it('should add a task with addTarea', function() {
        const Empleado = crearClaseEmpleado();
        const persona = new Empleado('martin', 4000, ['operaciones'], true);
        persona.addTarea('comprar', 1);
        expect(persona.tareas[1]).toEqual({ tarea: 'comprar', prioridad: 1});
    });
    it('should turn jefe to false', function() {
        const Empleado = crearClaseEmpleado();
        const persona = new Empleado('martin', 4000, ['operaciones'], true);
        persona.switchJefe();
        expect(persona.jefe).toBe(false);
    });
    it('should turn jefe to true', function() {
        const Empleado = crearClaseEmpleado();
        const persona = new Empleado('martin', 4000, ['operaciones'], false);
        persona.switchJefe();
        expect(persona.jefe).toBe(true);
    });
    it('should get all tasks with getTareas', function() {
      const Empleado = crearClaseEmpleado();
      const persona = new Empleado('martin', 4000, [{tarea: 'compras', prioridad: 1}, {tarea: 'dar clases', prioridad: 1}, {tarea: 'operaciones', prioridad: 1}], true);
      expect(persona.getTareas()).toEqual(['compras', 'dar clases', 'operaciones']);
    });
    it('should get with operaciones with getTareasPrioritarias(2)', function() {
      const Empleado = crearClaseEmpleado();
      const persona = new Empleado('martin', 4000, [{
          nombre: 'compras',
          prioridad: 4,
        }, {
          nombre: 'operaciones',
          prioridad: 2,
        }], true);
      expect(persona.getTareasPrioritarias(3)).toEqual([{
          nombre: 'compras',
          prioridad: 4,
        }]);
    });
  });
});

var personas =[
  {
    nombre: 'Emi',
    edad: 21,
    hobbies: ['correr', 'dormir', 'nadar'],
    amigos: [
      { 
        nombre: 'Martin',
      },{
        nombre: 'Leo',
      }
    ],
  }, {
    nombre: 'Franco',
    edad: 22,
    hobbies: ['futbol', 'golf'],
    amigos: [
      {
        nombre: 'Emi',
      }, {
        nombre: 'Jimmy',
      }, {
        nombre: 'Matias',
      }
    ],
  },
  {
    nombre: 'Martin',
    edad: 35,
    hobbies: ['Cancha', 'emprender'],
    amigos: [
      {
        nombre: 'Toni',
      }, {
        nombre: 'Leo',
      }, {
        nombre: 'Manu',
      }
    ],
  },
];

describe('Extra Credit', function() {
  describe('Filter', function() {
    filtrar();
    it('should filter', function() {
      expect(personas.filtrar(p => p.edad <= 22).length).toBe(2);
    })
    it('should filter ok', function() {
      expect(personas.filtrar(p => p.edad > 50).length).toBe(0);
    })
  })
});