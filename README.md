# morganneandjason4

This project will incorporate Web Components using Polymer (core elements and paper elements), a back-end to store data using Google App Engine (Java) with Objectify, and the front-end frameworks, Angular (1.3 initially) and Bootstrap, if needed.

Jan 20-26: Integrating Polymer into a Gulp project wasn't working, and I saw a Grunt scaffolding repo that seemed to work, so I've downloaded it and tried it, but things don't seem to be working all the way. In app/styles/main.scss, I cannot overwrite the background color of the core-toolbar like Eric Bidelman could in his tutorial. Also, none of the content in the content div is showing up. Also, in order to get Google App Engine to host the project, I had to move 'node_modules' and package.json to the 'container' folder (outside of the folder that I deploy to GAE). That way, the project's files do not go above 10,000 total files in the project. However, as of today (Jan 26th) I have left the node modules folder where it was extracted to immediately after the yeoman generator did its thing so that anyone helping me will be less surprised by the project file structure. But eventually, the node modules folder needs to move to the folder 'container'. Likewise, the bower components folder needs to only contain packages that are actually used.

This website will function as my wedding website (D-day being Oct 3rd). It will have some static pages, but it will also have some dynamic pages/functionality, including RSVP online using Google's Open ID and a code printed on the RSVP paper mailings, Voting for hores d'voires and other foods, and our Registry.

Intended Pages:

Home - our story, maybe a slider and some pictures here and there, and three boxes containing info / clickthroughs to other pages

RSVP - users can use their Google account, facebook, or twitter to register (combined with their wedding invite) to become a priveleged user and send their RSVP status electronically

The Ceremony - short description of church, time of ceremony, priest, Google map with directions (if "get directions" is clicked), and pictures of the church where the ceremony will happen

The Reception - short description of the venue (Old Bust Head Brewery), the DJ, amenities (photo booth), and a list of the beers that will be on-tap and open bar, and the food. Food will be the must-haves that the Bride and I decide on, plus the results of the poll on the Food page, displayed dynamically

Make My Day - description and video of the foods that will definitely be made in mass quantities at the wedding (D-Day), the chef, and some pictures of the same. Also, a poll with different combinations of sides and hores d'voires will capture one vote per registered priveleged user. The results will be displayed on this page and on Reception page

Registry - a list of things the woman wants, plus a kegerator

Pictures - before the wedding will be stupid sappy pictures of us walking in the woods and crap, and other pictures of us together doing random stuff, I guess. After the wedding it will show our wedding pictures from the hired photographer.
