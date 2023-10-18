This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# le tuto
https://www.youtube.com/watch?v=c_-b_isI4vg
https://www.codewithantonio.com/discord
https://github.com/AntonioErdeljac/next13-airbnb-clone



# ressources utilisées

### react icons
https://react-icons.github.io/react-icons/search?q=euro

```
npm install react-icons
```

### pour le modal register - creation de la page d'auth
```
npm i axios
```

```
npm i zustand
```
```
npm i react-hook-form
```

```
npm i react-hot-toast
```

## ajouter des fonctionnalités au register form
### 1- installation de prisma

```
npm i -D prisma
npx prisma init

```
### 2- création de la base de données - on choisit mongodb

- on cree un compte sur : https://www.mongodb.com/atlas/database
- je me suis connecté avec mon compte google
- cliquer sur build a database
- ajouter une adresse ip : 0.0.0.0/0 
- connect et connect using vscode, en utilisant .env et 

- ensuite, créer le schema avec prisme : User, Accounts, Listings, Reservations
- exécuter la commande : 
```
npx prisma db push
```

### 3- utiliser next-auth
https://next-auth.js.org/getting-started/example

#### installation de next-auth
```
npm i next-auth
npm i @next-auth/prisma-adapter
```

#### installation de bcrypt
```
npm i bcrypt
npm i -D @types/bcrypt
```

#### 3- créer un fichier prismadb.ts utils

#### 4- se connecter avec les reseau sociaux
##### 4-1 parametrer auth avec github
- aller dans le settings global de github
- dans l'onglet develloper setting
- onglet OAuth App
- new OAuth App
- Application name : airbnb-clone
- Homepage URL : http://localhost:3000/
- Authorization callback URL: http://localhost:3000/
- ensuite register application
on obtient un Client ID et Client secrets
- on met dans le .env : le GITHUB_ID= et GITHUB_SECRET= qu'on recupere sur le site de github
- et voila

##### 4-1 parametrer auth avec google (google developper console)
https://console.cloud.google.com/cloud-resource-manager

- on va dans creer nouveau projet
- on va ensuite dans Api services d'activité
- ensuite, onglet OAuth
- choisir external
- puis bouton create
- ensuite remplir le formulaire et valider
- ensuite on va dans l'onglet, identifiants
- puis, bouton creer identifiants
- puis OAuth
- URI de redirection autorisés : ajouter URI
- on tape : http://localhost:3000/api/auth/callback/google
dans le .env on ajoute
GOOGLE_CLIENT_ID=<le code>
GOOGLE_CLIENT_SECRET=<le code>



# Astuces
- mettre uniquement la directive 'use client' dans les pages ou on a besoin de reactivité