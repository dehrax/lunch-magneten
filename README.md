# lunch-magneten
!(Lunch Magneten Logo)[https://raw.githubusercontent.com/dehrax/lunch-magneten/master/icons/android-chrome-512x512.png?token=ABX0_CfmSka_URaz6V-NPpY312Gdeo0mks5ZzsYXwA%3D%3D]
Okay, this repository is meant to display lunch.cf.

## Background
The initial version of this was written about three years ago in PHP. It is now 03:18 on a friday (that makes it saturday, technically), and this is about the third time people have contacted me about the site being down/spitting out error messages. So fuck it. Let's rewrite it from scratch. My thought is that we write only client-side code, so we are able to host the site on GitHub. Instant updates for the win! And people will be able to contribute.

## What's new?
So I am aiming for a really basic PWA-ish type of app. Offline availability, cached requests and homescreen icons. This means that at a bare minimum you will see a loading icon once each week. And teh rest is offline. Cool.

## Compability
Who the fuck knows. If it breaks it breaks. Post an issue on the repo or something...

## Future - Progressive Web App checklist
In accordance with [Google's PWA Cehcklist](https://developers.google.com/web/progressive-web-apps/checklist).
- [ ] Site served via https
- [x] Pages are responsive on mobile devices and tablets
- [ ] The start URL loads while offline
- [ ] Metadata provided for Add to Home screen
- [ ] First load fast on 3G
- [ ] Site works cross-browser

### Exemplary items (If it is going to be fancy)
- [ ] Site's content is indexed by Google
- [ ] Schema.org metadata is provided where appropriate
- [ ] Social metadata is provided where appropriate
- [ ] Canonical URLs are provided when necessary
- [ ] Content doesn'tjump as the page loads
- [ ] Content is easily shareable from standalone or full screen mode
- [ ] Any app install prompts are not used excessively
- [ ] The Add to Home Screen prompt is intercepted
- [ ] Site uses cache-first networking
- [ ] Site appropriately informs the user when they're offline