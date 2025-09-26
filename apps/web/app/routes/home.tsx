import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'tashi-iu' },
    { name: 'description', content: 'Personal website of Tashi Dakpa' },
  ];
}

export default function Home() {
  return <Welcome />;
}
