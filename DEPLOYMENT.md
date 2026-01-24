# Deployment su Manus - escortvideoxx-roma

## Configurazione Permanente

Questo sito è configurato per il deployment permanente su Manus con le seguenti specifiche:

### Dominio
- **URL Permanente**: https://escortvideoxx-roma.manus.space
- **SSL**: Abilitato automaticamente
- **Cache**: Abilitata (TTL: 3600 secondi)

### Build
- **Template**: web-static (Vite + React + TypeScript + TailwindCSS)
- **Build Command**: `pnpm install && pnpm run build`
- **Output Directory**: `dist/`

### Repository GitHub
- **Owner**: stefanocabrito
- **Repository**: escortvideoxx-roma
- **Branch**: main

### Foto Integrate
Il sito contiene 6 foto escort nei riquadri principali:
1. Amica Pro (amicaprogen3.jpg)
2. Caracol (caracol1.jpg)
3. Colle (colle-nov-1.jpg)
4. Kiara (kiara1.jpg)
5. Matura (MATURA2.jpg)
6. Rosa Otto (ROSAOTTO1.jpg)

## Deployment Automatico

Il sito è configurato per il deployment automatico da GitHub:
- Ogni push al branch `main` triggerizzerà un nuovo build
- Il sito sarà automaticamente aggiornato su escortvideoxx-roma.manus.space

## Accesso al Sito

Una volta pubblicato, il sito sarà accessibile permanentemente all'indirizzo:
```
https://escortvideoxx-roma.manus.space
```

## Manutenzione

Per aggiornare il sito:
1. Modifica i file nel repository locale
2. Fai il commit e push su GitHub (branch main)
3. Manus costruirà e pubblicherà automaticamente il sito

