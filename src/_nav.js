export default {
  items: [
    {
      title: true,
      name: 'Inicio',
      class: 'text-center',
    },
    {
      name: '¿Que hace QA?',
      icon: 'icon-home',
      children: [
        {
          name: 'Bienvenida',
          url: '/temarioViews/BienvenidaView',
          icon: 'icon-home',
        },
        {
          name: 'Objetivo',
          url: '/temarioViews/ObjetivoView',
          icon: 'icon-directions',
        },
        {
          name: 'Presentación',
          url: '/temarioViews/PresentacionView',
          icon: 'icon-graduation',
        },
        {
          name: 'Tema Uno',
          url: '/temarioViews/TemaUnoView',
          icon: 'icon-note',
        },
        {
          name: 'Tema Dos',
          url: '/temarioViews/TemaDosView',
          icon: 'icon-note',
        },
        {
          name: 'Actividad',
          url: '/temarioViews/ActividadView',
          icon: 'icon-puzzle',
        },
        {
          name: 'Conclusión',
          url: '/temarioViews/ConclusionView',
          icon: 'icon-bubbles',
        },
        {
          name: 'Recapitulacón',
          url: '/temarioViews/RecapitulacionView',
          icon: 'icon-trophy',
        },
      ],
        
        
    },
         
  ],
};
