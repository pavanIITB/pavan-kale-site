# Pavan Kale’s personal site

A static personal site with a homepage, blog and Topmate booking page. Eleventy generates the pages from Markdown and templates.

## Update the site

- Edit the homepage headline, bio, and video introduction in [src/index.md](src/index.md).
- Set `videoUrl` and `videoTitle` in the homepage front matter to change the embedded YouTube video.
- Edit your social links, Topmate links and links to posts published elsewhere in [src/_data/site.json](src/_data/site.json).
- Replace [src/assets/portrait.png](src/assets/portrait.png) to update the site portrait, favicon, and link preview image.

## Publish a post

1. Copy [src/blog/example.md](src/blog/example.md) to a new file in `src/blog/`. Use a short, lowercase, hyphenated file name like `building-a-first-prototype.md`.
2. Set the title, description and date. Write the post underneath the front matter. Add a `cover` with its image path, alt text, caption, width, and height to show a photo above the post.
3. Change `draft: true` to `draft: false` when it’s ready. The example remains a draft.
4. Commit the file to `main`. The Pages workflow updates the homepage, the blog and the post’s own URL after each push.

Sample posts appear in the blog with a sample label and are excluded from search indexing. Remove `sample: true` and set the publication date when replacing sample copy.

Keep private drafts on your computer. Files committed to a public GitHub repository are visible in its source, including drafts.

## Add a hyperlink

Use `[text to display](destination)` in any paragraph. The link text can differ from the title of the page it opens.

- From any page, use `[my student robot](https://pavankale.com/blog/doctor-pi-student-robot/)`.
- On the homepage, the relative path `[my student robot](blog/doctor-pi-student-robot/)` also works.
- Inside a blog post, use `[my student robot](../doctor-pi-student-robot/)` to link to another post.
- For an external site, use `[Sipwise](https://sipwise.store/)`.

The file `src/blog/doctor-pi-student-robot.md` publishes at `https://pavankale.com/blog/doctor-pi-student-robot/`. Changing its title leaves that URL in place.

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

After GitHub’s DNS check passes, run **Actions → Publish GitHub Pages → Run workflow** on `main` to rebuild the site with the custom domain’s root asset paths and origin. Once the certificate is available, select **Enforce HTTPS** and check both the apex domain and `www`. [GitHub’s custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

## Analytics

The site can send page views to an [Umami Cloud](https://cloud.umami.is/) website. Use `pavankale.com` as the domain in the Umami website settings once the custom domain is live (update the existing website rather than creating a new one to preserve its analytics history). Copy its website ID from **Tracking code** into `umamiWebsiteId` in [src/_data/site.json](src/_data/site.json). GitHub Pages includes the tracker after the next deployment.

Sign in to Umami and open the website overview to see visitors, views by page, and traffic charts. Open **Insights → UTM** for campaign tags. Leave Share URLs disabled to keep the reports private.

## Site photos

Project photos are from the earlier personal portfolio. Illustrative photos are from [Unsplash](https://unsplash.com/license).

- [Circuit board](https://images.unsplash.com/photo-1518770660439-4636190af475)
- [Code on screen](https://images.unsplash.com/photo-1461749280684-dccba630e2f6)
- [Water in a glass](https://images.unsplash.com/photo-1548839140-29a749e1cf4d)
- [Water bottle](https://images.unsplash.com/photo-1523362628745-0c100150b504)
- [Electronics work](https://images.unsplash.com/photo-1581092921461-eab62e97a780)
- [Warehouse](https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d)
- [Shared work table](https://images.unsplash.com/photo-1521737711867-e3b97375f902)
- [Notebook](https://images.unsplash.com/photo-1517842645767-c639042777db)
- [Sketching](https://images.unsplash.com/photo-1581092160562-40aa08e78837)
- [Mountain trail](https://images.unsplash.com/photo-1551632811-561732d1e306)

- [Coding workstation](https://images.unsplash.com/photo-1498050108023-c5249f4df085)
- [Idea note](https://images.unsplash.com/photo-1512314889357-e157c22f938d)
- [Pen on paper](https://images.unsplash.com/photo-1455390582262-044cdead277a)
