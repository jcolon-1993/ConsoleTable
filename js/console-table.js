// Store contact info in an object literal
var contacts =
{
  "London":
  {
    "Tel": "+44 (0)207 946 0128",
    "Country": "UK"
  },
  "Sydney":
  {
    "Tel": "+61 (0)2 7010 1212",
    "Country": "Australia"
  },
  "New York":
  {
    "Tel": "+1 (0)1 555 2104",
    "Country": "USA"
  }
}
  // Write data to console
  console.table(contacts);

  // Declare varibales for page
  var city, contactDetails;

  // Hold details written to page
  contactDetails = "";

  // Loop through data
  $.each(contacts, function(city, contacts)
  {
    contactDetails += city + ": " + contacts.Tel + "<br />";
  });
  // Add data to the page.
  $("h2").after("<p>" + contactDetails + "</p>");
