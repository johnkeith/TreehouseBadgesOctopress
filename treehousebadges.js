<script>
th_username = "{{site.th_username}}";
th_show_all_badges = {{site.th_show_all_badges}};
th_number_badges_visible = ({{site.th_number_badges_visible}} - 1);

$(document).ready(function() {

  if(th_username == "" || th_show_all_badges == false && th_number_badges_visible == -1){
    $(".badges-box").hide();
  } else {

  $.getJSON("http://teamtreehouse.com/" + th_username +".json", function(data) {
    var items = [];
    var number_of_badges = data.badges.length;
    var total_points = data.points.total;
    $.each(data.badges, function(k, v) {
       items.push( "<a href='" + v.url + "'><img src='" + v.icon_url + "' alt='" + v.name + "' title='" + v.name + "'/></a>");
    });
   
    $(".badges-box").append("<p>I've earned <strong>" + number_of_badges + " badges</strong> for a total of <strong>" + total_points + " points</strong> at <a href='http://www.teamtreehouse.com'>Treehouse!</a></p>");
   
    $( "<ul/>", {
      "class": "badge-image-list",
      html: items.reverse().join( "" )
    }).appendTo( ".badges-box" ).hide().fadeIn(500);
   
    if(th_show_all_badges == false) {
      $( ".badge-image-list img:gt(" + th_number_badges_visible + ")").hide();

      $(".badges-box").append("<button id='show-all'>See all badges</button>");

      $("#show-all").click(function() {
        $( ".badge-image-list img:gt(" + th_number_badges_visible + ")").toggle(0, "linear");
        if($("#show-all").html() == "See all badges") {
          $("#show-all").html("Hide badges");
          $("#show-all").blur();
        } else {
          $("#show-all").html("See all badges");
          $("#show-all").blur();
        };
      });
    };
  });
 };
});
</script>
