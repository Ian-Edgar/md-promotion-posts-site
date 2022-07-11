## Getting Started

First, install npm packages:

```bash
npm install
# or
yarn install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Details:

Author: Ian Edgar

Spec design: Provided via Figma

Contact: Alexander Bauduin

### Solution Summary:

Upon inspection of the design spec and instructions re email the following assumptions re the final solutions where made:

- The design indicates a promotional website/blog
- The styling of the blog would be critical and a big focus on responsiveness and dynamic building was key
- Due to the limited time frame priorities would have to be made to at least produce an mvp being:
  - Responsive Reusable components
  - Aesthetics
  - Contact Form being functional
  - Clean and Accessible Design
- Personal Priorities:
  - Utilize and upskill in React, Nextjs and Typescript
  - Utilize NextJs Image component for it’s benefits (see: [Nextjs Image Docs](https://nextjs.org/docs/api-reference/next/image)) and for further growth
  - Create a template that is both functional and reusable (pulling in post data from markdown files)

Trying to remain within the time-limit (there’s a lot more I’d like to do) the points that I deprioritised:

- Unit Testing
- Client Side validation
- Creating a custom rendering engine for the markdown to output accessibility focused components when parsing the markdown

### Todo and WIP:

- Unit Tests
- Build components for
  - Frame 22
  - Frame 40
  - Frame 47
- Client side validation on form using formik
- Custom markdown rendering engine for accessability
- Dockerise Application

### POC Summary:

Majority of the work went into styling components/image-box. The challenge here was to create a HeroSection that would work in a row as 1,2,3,4 columns. While utilizing the nextjs image component over a library like swiper (swiper has the right look needed but is overkill as not all of it’s functionality would be utilized ). An extra challenge was to avoid using background-image div solutions.

These HeroRow and Hero sections would be used as ‘posts’ on the home page of which the data would be pulled from the .md files which can be found in the /posts folder in the route of the project.

‘row’ and ‘index’ metatags would be utilized by the functions in the lib/post-utils file to then generate arrays of posts that would then be rendered by

- pages/index.tsx
- pages/posts/[...slug].tsx
- pages/post/[postId].tsx

The tags metatag would also be used to create a set of tags for the components/posts-search

Component to allow for filtering of posts via query params this component is both utilized in pages/index.tsx as well as pages/posts/[...slug].tsx

The slug metatag would be used to query the correct post in the postDetail page.

The contact form is functional(creates a record in firebase Realtime Database) and utilizes firebase realtime database for storage.

The base url of the database can be changed in next.config.js by changing the value of the firebasedb_url variable
Note: Do not append a table name as that is appended in pages/api/contact.js

- Please see [Creating a Realtime Database](https://firebasetutorials.com/create-firebase-realtime-database/) to be able to get a relevant rtdb link that you control
- Alterternatively feel free to contact me at [ian.edgar.za@gmail.com]

### Suggestion:

Fiddle with the row and index values in the markdown scripts. They follow array positioning

I.e. change liberty_globla to row 0 index 1

And the first row will get 2 columns and the last 1
