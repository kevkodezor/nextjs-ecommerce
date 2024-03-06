## Descripción

Actualización de proyecto con respecto a la ultima versión de NextJs. Se construyo una Ecommerce Page la cual se conecta
a una DB en la nube [Mongo](https://www.mongodb.com/es). Así com también el uso de [Prisma](https://www.prisma.io/) para
el modelado de datos, migración de esquemas y consulta a la base de datos. Cuenta con autenticación y multiples funcionalidades las cuales se podran apreciar colnando el proyecto o ingresando al siguiente url [URLporDefinir].

## Correr en dev

1. Clonar repositorio
2. Crear una copia de ```.env.template``` y renombrar a ```.env``` y cambiar las variables respectivas
3. Instalar las dependencias con ```yarn install``` o ```npm install```
4. Conectarse a la base de datos (de tu preferencia)
5. Ejecutar las migraciones de Prisma ```npx prisma migrate dev```
6. Ejecutar el comando ```yarn seed``` o ```npm run seed```
7. Ejecutar el proyecto

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
