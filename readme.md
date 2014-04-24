## Treehouse Badges for Octopress

This widget allows you to display your hard-won [Treehouse](http://www.teamtreehouse.com) badges in the sidebar of your Octopress site.

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

Since the Rake process did all of that, you need only open up _config.yml, add your new aside to the default_asides array, and then fill in the config variables at the bottom of the file

```
default_asides: [custom/asides/treehousebadges.html, asides/recent_posts.html, ...
```

```
# Treehouse Badges for Octopress widget

th_username: johnkeith
th_show_all_badges: false 
th_number_badges_visible: 6 
```
Set `th_show_all_badges` to false if you want to only show a limited number of badges when widget loads.

If the above is false, then specify the number of badges you want to display with an integer in `th_number_badges_visible`.

Once you `rake generate` your site, the widget should appear in your sidebar!

## The Old Fashioned (Manual) Install

To install the widget without Rake:

* Copy the treehousebadges.html into your Octopress's ../source/_includes/custom/asides folder
* Copy the treehousebadges.js into the ../source/javascripts folder
* Copy the treehousebadgesstyles.scss into your ../sass/plugins folder

Next, open your _config.yml file and add these lines to control the widget's functionality. 

```
# Treehouse Badges for Octopress widget

th_username: johnkeith 
th_show_all_badges: false 
th_number_badges_visible: 6 
```

(See Rake instructions above for an explaination of configuration options).

Then, all you should need to do is make sure you load the treehousebadges.js script appropriately.

## Note of Thanks

Inspiration for this widget came from Riley Hilliard's awesome [tutorial on building a Treehouse Badges widget](http://rileyh.com/treehouse-badges-widget/) and also his [ReportCard.js](http://reportcard.rileyh.com/), which allows you to show off your Code School Badges as well. 

## License

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.