# Dom Prime Barbearia — Site

## Estrutura de Arquivos

```
dom-prime/
├── index.html          → Página principal
├── css/
│   └── style.css       → Todos os estilos
├── js/
│   └── main.js         → Interatividade (cursor, scroll, formulário)
├── assets/             → Coloque aqui suas fotos e imagens
│   └── (suas imagens)
└── README.md           → Este arquivo
```

## Como usar

1. Abra o arquivo `index.html` no navegador para visualizar o site.
2. Para colocar no ar, faça upload de todos os arquivos para seu servidor ou hosting (ex: Hostinger, Vercel, Netlify).

## Personalizações importantes

### 1. Adicionar foto da barbearia
Na seção **Sobre** do `index.html`, localize:
```html
<div class="about-img-placeholder">💈</div>
```
Substitua por:
```html
<img src="assets/sua-foto.jpg" alt="Dom Prime Barbearia">
```

### 2. Atualizar número do WhatsApp
No `index.html`, localize o botão flutuante:
```html
<a href="https://wa.me/5511900000000" ...>
```
Substitua `5511900000000` pelo seu número com DDD (sem espaços ou símbolos).

### 3. Atualizar endereço e horários
Na seção **Agendamento** do `index.html`, localize os `.contact-item` e edite o texto conforme seus dados reais.

### 4. Atualizar ano no rodapé
No `index.html`, localize:
```html
© 2025 Dom Prime Barbearia.
```
E atualize o ano conforme necessário.

### 5. Cores (opcional)
No `css/style.css`, as variáveis no topo controlam todas as cores:
```css
:root {
  --gold: #C9A84C;       /* Dourado principal */
  --gold-light: #E8C96A; /* Dourado claro (hover) */
  --black: #0a0805;      /* Fundo escuro */
  ...
}
```

## Seções do site

- **Hero** — Apresentação principal com emblema animado e estatísticas
- **Serviços** — Os 5 serviços oferecidos
- **Sobre** — História e pilares da barbearia
- **Depoimentos** — Avaliações de clientes
- **Agendamento** — Formulário de contato + informações
- **Footer** — Links e créditos

## Hospedagem gratuita sugerida

- **Netlify** → netlify.com (arraste a pasta e pronto)
- **Vercel** → vercel.com
- **GitHub Pages** → github.com

---
Desenvolvido com excelência para Dom Prime Barbearia · São Paulo
