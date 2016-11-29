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