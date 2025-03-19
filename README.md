# mm802miniproj

a deployment of this app is available at `802mini.mine.bz`

## environment details
- original desktop environ is Windows 11
- deployment environ is ubuntu 22.04
- JS runtime is Node.js v22.14.0
- package manager used is npm (though this should not matter too much)
- the project itself is a Next.js app, created via installation instructions provided by shadcn

<br>

for graph assets, the shadcn ui library was used; setup with:
```sh
npx shadcn@latest init
```
shadcn depends on `recharts` and `tailwindcss`

many components from `ui.shadcn.com` were used!

## dataset
aviation data from https://www.tsb.gc.ca/eng/stats/aviation/data-5.html was used; specific datas were baked into the app, and it can be provided simply as a static page

## running the project
a development server can be started by:
```sh
npm run dev
```

to compile and run a production server:
```sh
npm run build
npm run start
```

if pulling directly from this repository, you may be prompted that some dependencies are missing; it should be sufficient to install those dependencies through npm.

the two notable ones are `next` and `@radix-ui/react-select`, which may be installed:
```sh
npm install next@latest
npm install @radix-ui/react-select
```

## dev notes
please refer to tailwindcss docs for layout: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

## misc notes
Thanks to https://stackoverflow.com/a/34884609 for data import of csv files with many columns to postgres