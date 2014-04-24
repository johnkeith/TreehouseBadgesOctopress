## Treehouse Badges for Octopress

This widget allows you to display your hard-won (Treehouse)[http://www.teamtreehouse.com] badges in the sidebar of your Octopress site.

![Screenshot of Sidebar Widget](http://gdurl.com/Ijnt)

Included in the repository is an installer that will do all the heavy lifting for your via Rake. You can choose to install using the Rake instructions below or by copying the files into your Octopress folder manually. 

### Knee-slappingly easy install with Rake

Fire up a terminal or command prompt and navigate to your download of this repository. Once there, type `rake install[/path/to/your/octopress]`. You will need to replace the "/path/to/your/octopress" segement between the brackets with the absolute path to your Octopress folder, as seen below.

```
# on OS X
rake install[/users/johnkeith/dev/deploy/johnk]

# on Windows (make sure you escape those backslashs)
rake install[C:\\Users\\KeithJo\\testOctopressPlugin]
``` 

The Rake installer does four things.

1. It copies an aside (treehousebadges.html) into ../source/_includes/custom/asides/

2. It opens the after_footer.html file in ../source/_includes/custom/ and appends the jQuery from treehousebadges.js to the end of that file

3. It opens the _styles.scss file in ../sass/custom/ and appends the CSS styles from treehousebadgesstyles.scss to the end of that file

4. It opens the _config.yml file in your Octopress folder and appends the necessary site variables for the widget

Since the Rake process did all of that, you need only open up _config.yml, add your new asides to the default_asides array, and then fill in the config variables at the bottom of the file

```
default_asides: [custom/asides/treehousebadges.html, asides/recent_posts.html, ...

...

# Treehouse Badges for Octopress widget

th_username: johnkeith

# set to false if you want to only show a limited number of badges when widget loads

th_show_all_badges: true

#if the above is false, then specify the number of badges you want to display

th_number_badges_visible:
```
Once you `rake generate` your site, the widget should appear in your sidebar!

Inspiration for this widget came from Riley Hilliard's awesome [tutorial on building a Treehouse Badges widget](http://rileyh.com/treehouse-badges-widget/) and also his [ReportCard.js](http://reportcard.rileyh.com/), which allows you to show off your Code School Badges as well. 

