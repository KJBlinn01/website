<?php

  /*
    Name: Kevin Blinn
    Class: CPSC 3750
    Date Due: July 13th, 2024
    Assignment: Prog12 - AJAX & PHP
  */
  
  header("Content-type: text/xml");

  // I changed the array to hold the states and capitals
  $states_and_capitals = array (
    "Alabama" => "Montgomery",
    "Alaska" => "Juneau",
    "Arizona" => "Phoenix",
    "Arkansas" => "Little Rock",
    "California" => "Sacramento",
    "Colorado" => "Denver",
    "Connecticut" => "Hartford",
    "Delaware" => "Dover",
    "Florida" => "Tallahassee",
    "Georgia" => "Atlanta",
    "Hawaii" => "Honolulu",
    "Idaho" => "Boise",
    "Illinois" => "Springfield",
    "Indiana" => "Indianapolis",
    "Iowa" => "Des Moines",
    "Kansas" => "Topeka",
    "Kentucky" => "Frankfort",
    "Louisiana" => "Baton Rouge",
    "Maine" => "Augusta",
    "Maryland" => "Annapolis",
    "Massachusetts" => "Boston",
    "Michigan" => "Lansing",
    "Minnesota" => "Saint Paul",
    "Mississippi" => "Jackson",
    "Missouri" => "Jefferson City",
    "Montana" => "Helena",
    "Nebraska" => "Lincoln",
    "Nevada" => "Carson City",
    "New Hampshire" => "Concord",
    "New Jersey" => "Trenton",
    "New Mexico" => "Santa Fe",
    "New York" => "Albany",
    "North Carolina" => "Raleigh",
    "North Dakota" => "Bismarck",
    "Ohio" => "Columbus",
    "Oklahoma" => "Oklahoma City",
    "Oregon" => "Salem",
    "Pennsylvania" => "Harrisburg",
    "Rhode Island" => "Providence",
    "South Carolina" => "Columbia",
    "South Dakota" => "Pierre",
    "Tennessee" => "Nashville",
    "Texas" => "Austin",
    "Utah" => "Salt Lake City",
    "Vermont" => "Montpelier",
    "Virginia" => "Richmond",
    "Washington" => "Olympia",
    "West Virginia" => "Charleston",
    "Wisconsin" => "Madison",
    "Wyoming" => "Cheyenne"
  );

// Output the XML header 
echo "<?xml version=\"1.0\" ?>\n";
echo "<names>\n";

// Loop through each state and their capital
foreach ($states_and_capitals as $state => $capital) {

  // If the query string is found in the state name, output the capital
   if (stripos($state, $_GET['query']) !== false) {
      echo "<name>$capital</name>\n";
   }

}
echo "</names>\n";
?>
