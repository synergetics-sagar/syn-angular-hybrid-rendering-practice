import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: "",
    renderMode: RenderMode.Client
  },
  {
    path: "about",
    renderMode: RenderMode.Prerender
  },
  {
    path: "users",
    renderMode: RenderMode.Server
  },
  {
    path: "users/:id",
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client, // It can be server
    async getPrerenderParams(){
      return [{ id: "2" }, { id: "3" }];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
