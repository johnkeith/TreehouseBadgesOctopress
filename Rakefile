task :install, :octo_location do |t, args|
  octo_location = args[:octo_location]

  #copy aside html into ../source/_includes/custom/asides/

  FileUtils.cp 'treehousebadges.html', "#{octo_location}/source/_includes/custom/asides/treehousebadges.html"

  #copy jquery into ../source/_includes/custom/after_footer.html

  js_file = File.open("treehousebadges.js", "r").readlines

  File.open("#{octo_location}/source/_includes/custom/after_footer.html", "a+") do |f|
    js_file.each do |line|
      f.write line
    end
  end

  #copy sass into ../sass/custom/_styles.scss

  sass_file = File.open("treehousebadgesstyles.scss", "r").readlines

  File.open("#{octo_location}/sass/custom/_styles.scss", "a+") do |f|
    sass_file.each do |line|
      f.write line
    end
  end

  File.open("#{octo_location}/_config.yml", "a+") do |f|
    f.write "\n\# TreeCard.js
             \nth_username:
             \nth_show_all_badges:
             \nth_number_badges_visible:"
  end
end
