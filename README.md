# Pavan Kale’s personal site

A static personal site with a homepage, blog and Topmate booking page. Eleventy generates the pages from Markdown and templates.

## Update the site

- Edit the homepage bio in [src/index.md](src/index.md).
- Edit your social links, Topmate links and links to posts published elsewhere in [src/_data/site.json](src/_data/site.json).
- Replace [src/assets/pavan-kale.jpg](src/assets/pavan-kale.jpg) to update your portrait. The current image is from [your Topmate profile](https://topmate.io/pavan_kale).

## Publish a post

1. Copy [src/blog/example.md](src/blog/example.md) to a new file in `src/blog/`. Use a short, lowercase, hyphenated file name like `building-a-first-prototype.md`.
2. Set the title, description and date. Write the post underneath the front matter.
3. Change `draft: true` to `draft: false` when it’s ready. The example remains a draft.
4. Commit the file to `main`. The Pages workflow updates the homepage, the blog and the post’s own URL after each push.

Keep private drafts on your computer. Files committed to a public GitHub repository are visible in its source, including drafts.

## Run locally

Use Node.js 22 or later.

```sh
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Run `npm run build` to generate the static site in `dist/`.

## Deploy on GitHub Pages

1. Push this project to the `main` branch of a public repository. GitHub Free includes Pages for public repositories.
2. In the repository’s **Settings → Pages**, choose **GitHub Actions** as the source.
3. In **Actions → Publish GitHub Pages**, select **Run workflow**. After the run completes, open the URL in **Settings → Pages**. Subsequent pushes deploy automatically.

## Connect pavankale.com

Once you own the domain and the GitHub Pages site is working, verify the domain under your GitHub account’s **Settings → Pages** using the TXT record that GitHub supplies. Keep that TXT record after verification. Then enter `pavankale.com` under the project repository’s **Settings → Pages → Custom domain**.

At the registrar or DNS provider, add these records for the site. Preserve unrelated records such as mail and verification TXT records.

| Name | Type | Value |
| --- | --- | --- |
| `@` | `A` | `185.199.108.153` |
| `@` | `A` | `185.199.109.153` |
| `@` | `A` | `185.199.110.153` |
| `@` | `A` | `185.199.111.153` |
| `www` | `CNAME` | `pavaniitb.github.io` |

After GitHub’s DNS check passes, select **Enforce HTTPS** and check both the apex domain and `www`. [GitHub’s custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
