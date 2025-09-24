Assignment 3 - Persistence: Two-tier Web Application with Database, Express server, and CSS template
===
## Your Web Application Title

Your Render (or alternative server) link e.g. http://a3-joshua-cuneo.render.me


My project is a an app where you can add, delete, and edit drawing ideas. The user writes in their idea, selects what it's for and their desire to do it, and it will be added to the list with an additional "priority" section. My largest challenges were not really for actually building the application itself, but rather implementing the client-server communication and the login feature. Figuring out how those worked was a nightmare that I never want to relive.

It's got a server written in with express now instead of exclusively node, a results page that shows a user's data, forms that can be assed, deleted, and modified, and data stored on mongodb, all of which are associated with particular users (login/signup and logout functions are provided)

For the authentication strategy I went off of the example given in the "using.cookies" file in the class guides github to use dummy accounts to login. I went with this option because I really needed a starting off point and it made sense to me. I decided to avoid OAuth like the plague because it looked unbelievably difficult and I didn't want to put myself through that.

I used Bootstrap as my CSS framework as I have used it very briefly in the past. I didn't really remember anything about it but knowing the name was good enoigh for me. I completely cut out the reference of my CSS file, opting to refer to style only in the html file (I did not override any of the framework's CSS).

I used the following middleware packages:

WARNING: I stored the usernames and passwords directly into my database because I was lazy and it was the easiest way to implement a signup feature. I'm sure it goes without saying but I really want to reiterate, like please don't use a username/password you use for actual sites, it's just a terrible idea

- a list of Express middleware packages you used and a short (one sentence) summary of what each one does. If you use a custom function, please add a little more detail about what it does.

## Technical Achievements
- **Tech Achievement**: I achieved a 100% on Google Lighthouse tests

### Design/Evaluation Achievements
- **Design Achievement 1**: I followed the following tips from the W3C Web Accessibility Initiative:

- Provide informative, unique page titles
- Use headings to convey meaning and structure
- Keep content clear and concise
- Provide sufficient contrast between foreground and background
- Ensure that interactive elements are easy to identify
- Ensure that form elements include clearly associated labels
- Use headings and spacing to group related content
- Associate a label with every form control
- Identify page language and language changes
- Ensure that all interactive elements are keyboard accessible
- Create designs for different viewport sizes
- Provide clear instructions

- **Design Achievement 2**: My site follows the CRAP principles by:

- Contrast: As compared to my previous submission, I kept the colors as simple but different as possible to provide an ample contrast between them. I kept the background a simple white, while making text black and blue, which is easy to read against the bright background. I also added a light highlight color to add some extra contrast between the colors already being used, and since yellow is on the opposite end of the color wheel to blue, it's easier to differentiate. In addition, I added a light gray on the cells of the table for the user to more easily identify the difference between the table and the background.

- Repetition: I tried keeping different aspects of my project as consistent as possible. I kept the color options as minimal as possible specifically so that the few colors I did use popped out and were consistent. The headers providing specific instructions on both pages are blue. Buttons not immediately associated with the table for the results are black. Otherwise, the rest of the text is a dark gray. I kept the font the 

- Alignment: I made sure all information (except for user inputted text/ username display and logout button) is centered. 

- Proximity: