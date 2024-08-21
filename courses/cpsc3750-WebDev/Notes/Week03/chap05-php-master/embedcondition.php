<!DOCTYPE html>
<html lang="en">
<head>
   <title>More PHP Embedded Inside HTML</title>
   <style type="text/css">
   table, tr, th, td {
        border: 1px solid #000;
        border-collapse: collapse;
        padding: 3px;
   }
   th {
        font-weight: bold;
   }
   </style>
   </head>
   <body>
   <?php
   $price1 = 24.56;
   $price2 = 45.67;
   $price3 = 10.00;
   $some_condition = true;
   if ($some_condition) {
      echo "<table>
      <tr><th colspan=\"3\">
      Today's Prices
      </th></tr>
      <tr><td>" + $price1 + "</td><td>44.00</td><td>71.00</td></tr>
      </table>";
    }
    ?>
    </body>
</html>
