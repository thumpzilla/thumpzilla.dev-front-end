# GCP - thumpzilla.dev - Front-End

![diagram](cloud-diagram.svg)


## Overview

Inspired by the [Cloud Resume Challenge](https://cloudresumechallenge.dev/docs/the-challenge/)
, this project introduces a creative twist. Instead of merely showcasing technical skills, the project blends cloud technology with artistic expression.

- View the project website: https://thumpzilla.dev

- Project back-end: https://github.com/thumpzilla/thumpzilla.dev-back-end

## Description

The front-end leverages GitHub for version control and incorporates HTML, CSS, and a JavaScript file to dynamically fetch and display the visitor count, while the back-end handles a storage bucket, a Python cloud function, and a NoSQL database.


## Technologies Used

- **DNS**
  - DNS manages the project's domain, using a [CNAME bucket strategy](https://cloud.google.com/storage/docs/hosting-static-website-http) for static website hosting.
  - Cloudflare's DNS proxy is used for SSL termination.

- **HTML & CSS**
  - HTML provides the structure and content of the web pages, ensuring a well-organized layout.
  - CSS is used to style the HTML elements, creating an appealing and responsive design that enhances user experience.

- **JavaScript**
  - JavaScript dynamically fetches and displays the visitor count from a cloud function.

- **GCP - Cloud Build**
  - Cloud Build is leveraged to update [`main.js`](https://github.com/thumpzilla/thumpzilla.dev-front-end/blob/dev/prod/main.js) (line 3) with the appropriate cloud function URL for development and production environments, ensuring the correct endpoint is used for fetching the visitor count.
