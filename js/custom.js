(
  function() {
    $(document).ready(function() {
      // cards efect
      $('.special.cards .image').dimmer({
        on: 'hover'
      });

      // scroll efect
      $('.ui.dropdown').dropdown();
    });

    // Angular's code
    var funasApp = angular.module('funaswaApplication', []);

    // card controller
    funasApp.controller('cardController', ($scope) => {
      $scope.cards = [
        {
          number: '1',
          bounceDirection:'bounceInLeft',
          service:'service-one',
          text:'Buscamos conocer  historias ancestrales,  realidades  y aspectos coyunturales de las poblaciones',
          link:'cultura.html',
          title:'Cultura y Educación'

        },

        {
          number: '2',
          bounceDirection:'bounceInUp',
          service:'service-two',
          text:'Promovemos la participación dinámica de las comunidades, para garantizar el éxito de las actividades en materia ambiental',
          link:'medio_ambiente.html',
          title:'Medio Ambiente'

        },

        {
          number: '3',
          bounceDirection:'bounceInRight',
          service:'service-three',
          text:'Formación, acompañamiento y seguimiento de programas y proyectos autosostenibles',
          link:'d-economico.html',
          title:'Desarrollo Social'
        }
      ]
    });

    // icons Controller
    funasApp.controller('iconsController', ($scope) => {
      $scope.AchiveIcons = [
        {
          number:'1',
          icon:'child',
          content:'- 150 niños -',
          subHeader:'Sentamos las bases para el futuro'
        },

        {
          number:'2',
          icon:'female',
          content:'- 120 mujeres -',
          subHeader:'Promovemos la igualdad y la inclusión'
        },

        {
          number:'3',
          icon:'handicap',
          content:'- 30 adultos mayores -',
          subHeader:'Trabajamos por el respeto y la dignidad'
        },

        {
          number:'4',
          icon:'users',
          content:'- 400 personas en general -',
          subHeader:'Impactamos y empoderamos comunidades'
        },
      ]
    }); 
  }
)();