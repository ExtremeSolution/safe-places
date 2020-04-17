#instructions

1.  Create firebase account
2.  Create firebase project, e.g. "safe-places-server"
3.  Install firebase-tools
4.  run firebase init on server directory
    -   select project you created at step 2
    -   install 'functions'
    -   select default for all other quetions
5.  `npm run build; firebase emulators:start` to emulate server locally
6.  `npm run build; firebase deploy` to deploy to firebase server
