# Instituto JC — Landing Page Carísio (React + TypeScript + Vite)

Recriação da landing page:
http://institutojc.com/portal/landing-page-carisio/

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:5173

## Build de produção

```bash
npm run build
```

Gera a pasta `dist/` pronta para hospedar em qualquer serviço estático (Vercel, Netlify, Hostinger, etc).

## Observações

- As imagens (logo e os 3 cards de assessoria) estão referenciadas direto da URL do site original (`institutojc.com`). Se quiser hospedar 100% independente, baixe essas imagens e troque os caminhos em `src/data.ts` (objeto `images`) para arquivos locais em `src/assets` ou `public`.
- Cores, fontes (Playfair Display + Inter) e estrutura foram montadas com base nos prints enviados. Ajustes finos de espaçamento/cor podem ser feitos em `src/index.css` (variáveis de tema) e em cada componente dentro de `src/components`.
- O botão "Quero a Assessoria X" aponta para o Instagram, igual ao site original.
- O vídeo do hero (`src/components/Hero.tsx`) toca em loop automático, mudo, sem controles do usuário. Qualquer clique no vídeo abre o vídeo completo no YouTube em uma aba nova. O ID do vídeo fica em `src/data.ts` (`videos.heroYoutubeId`).
- Fontes e espaçamentos foram revisados para telas de celular; a tabela comparativa ("Sua preparação começa aqui!") foi reorganizada para empilhar o rótulo acima dos 3 planos, evitando texto espremido em telas pequenas.

⚠️ Se você tiver rodado `npm install` aqui antes, apague a pasta `node_modules` e rode de novo — alguns arquivos binários do instalador não são compatíveis com sincronização via OneDrive/rede.

- Favicon do site usa a logo do Instituto JC.
- Botão flutuante de música no canto inferior direito (`src/components/MusicPlayer.tsx`) toca o áudio do vídeo do YouTube de forma independente do vídeo do hero — usa a API oficial do player do YouTube.
- A tabela comparativa ("Sua preparação começa aqui!") agora usa ícones reais (biblioteca `lucide-react`) igual ao site original: nota musical, vídeo, checklist, coração, estrela, pessoa, relógio, grupo e busca nas linhas; diamante, alvo e coroa nos cabeçalhos de cada plano.
