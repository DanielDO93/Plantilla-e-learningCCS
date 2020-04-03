import React from 'react';


const Inicio = React.lazy(() => import('./views/Inicio'));
const BienvenidaView = React.lazy(() => import('./views/temarioViews/BienvenidaView'));
const ObjetivoView = React.lazy(() => import('./views/temarioViews/ObjetivoView'));
const PresentacionView = React.lazy(() => import('./views/temarioViews/PresentacionView'));
const TemaUnoView = React.lazy(() => import('./views/temarioViews/TemaUnoView'));
const TemaDosView = React.lazy(() => import('./views/temarioViews/TemaDosView'));
const ActividadView = React.lazy(() => import('./views/temarioViews/ActividadView'));
const ConclusionView = React.lazy(() => import('./views/temarioViews/ConclusionView'));
const RecapitulacionView = React.lazy(() => import('./views/temarioViews/RecapitulacionView'));



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/Inicio', name: 'Inicio', component: Inicio },
  { path: '/temarioViews/BienvenidaView', name: 'Bienvenida', component: BienvenidaView },
  { path: '/temarioViews/ObjetivoView', name: 'Objetivo', component: ObjetivoView },
  { path: '/temarioViews/PresentacionView', name: 'Presentación', component: PresentacionView },
  { path: '/temarioViews/TemaUnoView', name: 'TemaUno', component: TemaUnoView },
  { path: '/temarioViews/TemaDosView', name: 'TemaUno', component: TemaDosView },
  { path: '/temarioViews/ActividadView', name: 'Actividad', component: ActividadView },
  { path: '/temarioViews/ConclusionView', name: 'Conclusion', component: ConclusionView },
  { path: '/temarioViews/RecapitulacionView', name: 'Recapitulacion', component: RecapitulacionView },

];


export default routes;
