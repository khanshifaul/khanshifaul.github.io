# khanshifaul.github.io → shifaul.dev

This repository no longer hosts a site. All traffic is redirected to the current
portfolio at **https://shifaul.dev/**.

## How it works

GitHub Pages serves the `gh-pages` branch. That branch now contains only
static redirect pages:

- `index.html` → `https://shifaul.dev/`
- `404.html` → maps old deep links (resume, blog, contact, login, admin, …) to
  their closest page on the new site
- `resume/`, `blog/`, `contact/`, `about/`, `work/`, `login/`, `admin/` →
  fixed redirects to the matching page

GitHub Pages cannot send an HTTP `301`, so the redirect uses
`<link rel="canonical">`, a zero-delay `<meta http-equiv="refresh">`, and a
JavaScript `location.replace()` fallback.

## Changing the redirect target

Edit the files on the `gh-pages` branch. Do **not** re-run the old Vue build or
push the old site back to `gh-pages`.

The `main` branch keeps a copy of the redirect files under `public/` for
reference; the former Vue source is retained only in git history.
