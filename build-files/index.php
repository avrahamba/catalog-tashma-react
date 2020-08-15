<!DOCTYPE html>
<html>

<head>
</head>

<body>
    <script>
        <?php
        $bookIdName = "id";
        $categoryName = "Category";
        $authorId = "AuthorId";

        $style = "";
        if (!isset($_GET[$bookIdName]) && !isset($_GET[$authorId]) && !isset($_GET[$categoryName])) {
        }
        if (isset($_GET[$bookIdName])) {
            $style = "#book-" . $_GET[$bookIdName];
        }
        if (isset($_GET[$authorId])) {
            $style = "#author-" . $_GET[$authorId];
        }
        if (isset($_GET[$categoryName])) {
            $style = "#category-" . $_GET[$categoryName];
        }
        echo "window.location.replace('https://jewishoffice.co.il/catalog/$style')";
        ?>
    </script>
</body>

</html>

<?php








// header('X-Powered-By: YehudaE.net servers :)');

// $bookIdName = "id";
// $categoryName = "Category";
// $authorId = "AuthorId";

// if(isset($_GET['מספר-ספר'])){
//     header("location: /books/?id=" . $_GET['מספר-ספר']);
//     die();
// }
// if(isset($_GET['מחבר'])){
//     http_response_code(404);
    
//     printHead('קישור אינו נתמך');
//     echo "<h1>" . "פורמט הקישורים שלנו השתנה, נסה לחזור לדף הראשי ולחפש את המחשב מחדש<br>סליחה." . "</h1>";
//     echo "<br><a href='/books/'>חזור</a>\n";
//     printFootbar();
//     die();
// }
// if(isset($_GET['קטגוריה'])){
//     header("location: /books/?Category=" . $_GET['קטגוריה']);
//     die();
// }

// define('DB', array('host' => 'localhost', 'username' => 'jewishof_tashma', 'password' => 'Pa$$w0rd72Pa$$w0rd', 'dbname' => 'jewishof_tashma'));

// $DB = new mysqli(DB['host'], DB['username'], DB['password'], DB['dbname']);
// if($DB == false || empty($DB) || $DB->connect_error){
//     http_response_code(500);
//     die();
// }
// mysqli_set_charset($DB, "utf8mb4");

// function printHead($title = "", $center = false,  $text = ""){
//     echo <<<HTML
// <html dir="rtl">
//     <head>
//         <title>{$title}</title>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <style>.book {padding-right:5em} p{text-align:justify;}</style> 
//         <meta name="google-site-verification" content="RB8YghpBYcM0XfGTkwR-5oOtgHrSrdY9W7cV7h2EHeE">
//         <meta name="author" content="Yehuda Eisenberg">
//         {$text}
//     </head>
// HTML;
// echo "\n\t<body align='" . ($center ? "center" : "right") ."'>\n\n";
// }
// function printFootbar(){
//     echo <<<HTML

//     </body>
// </html>
// HTML;
// }
// function notFound(){
//     http_response_code(404);
    
//     printHead('שגיאה');
//     echo "<h1>" . "הדף לא נמצא" . "</h1>";
//     echo "<br><a href='/books/'>חזור</a>\n";
//     printFootbar();
// }

// $sql = "SELECT * FROM `categories_list` ORDER BY `categories_list`.`view_id` ASC";
// $cats = $DB->query($sql);

// $allBooksCategory = array();
// $allBooksId = array();
// $allBooksAuthor = array();

// while ($cat = $cats->fetch_assoc()) {
//     $sql = "SELECT * FROM `book_list` WHERE `category` = '{$cat['ID']}' ORDER BY `book_list`.`name` ASC;";
//     $res = $DB->query($sql);
//     if($res->num_rows > 0){
//         while ($row = $res->fetch_assoc()) {
//             if($row['authorName'] == "-") $row['authorName'] = "*לא ידוע*";
//             if($row['place'] == "-") $row['place'] = "*לא ידוע*";
//             if($row['yearStart'] == "-") $row['yearStart'] = "*לא ידוע*";
//             if($row['yearEnd'] == "-") $row['yearEnd'] = "*לא ידוע*";
//             if($row['biographyEdition'] == "-") $row['biographyEdition'] = "*לא ידוע*";
//             if($row['biographyShort'] == "-") $row['biographyShort'] = "אין כרגע :(";
    
//             $book = array(
//                 "id" => $row['id'],
//                 "title" => $row['name'],   
//                 "author" => $row['authorName'],
//                 "authorId" => $row['authorId'],
//                 "version" => $row['biographyEdition'],
//                 "description" => $row['biographyShort'],
//                 "categories" => $cat['name'],
//                 "location" => $row['place'],
//                 "time" => $row['yearStart'].'-'.$row['yearEnd'],
//             );
            
//             $allBooksCategory[$cat['name']][] = $book;
//             $allBooksId[$row['id']] = $book;
//             $allBooksAuthor[$row['authorId']][] = $book;
//         }
//     }
// }

// if(!isset($_GET[$bookIdName]) && !isset($_GET[$authorId]) && !isset($_GET[$categoryName])){
//     printHead("קטלוג ספרים");
    
//     echo "<h1>" . "קטלוג הספרים בתא שמע" . "</h1>";
    
//     foreach ($allBooksCategory as $category => $books){
//         echo "\n\n<h3>" . "<a href='?{$categoryName}=".urlencode($category)."' id='{$category}'>{$category}</a>" . "</h3>";
        
//         foreach ($books as $book){
//             echo "\n<div class='book'>";
            
//             echo "<a href='?{$bookIdName}={$book['id']}'>" . $book['title'] . "</a> <b>/</b> ";
//             echo "<a href='?{$authorId}=" . urlencode($book['authorId']) . "'>" . $book['author'] . "</a>";
            
//             echo "</div>";
//         }
//     }
    
//     printFootbar();
// }
// elseif(isset($_GET[$bookIdName]) && !isset($_GET[$authorId]) && !isset($_GET[$categoryName]) && isset($allBooksId[$_GET[$bookIdName]])){
//     $meta = "";
//     $meta .= '<meta name="description" content="' . $allBooksId[$_GET[$bookIdName]]['description'] . '">' . "\n\t\t";

//     printHead($allBooksId[$_GET[$bookIdName]]['title'], false, $meta);
    
//     echo "<h1 style='font-size:40px;margin:1px;'>" . "שם הספר: " . $allBooksId[$_GET[$bookIdName]]['title'] . "</h1>\n";
//     echo "<h3 style='font-size:25px;margin:1px;padding-right:2em'>" . "מחבר: " . "<a href='?{$authorId}=" . urlencode($allBooksId[$_GET[$bookIdName]]['authorId']) . "'>" . $allBooksId[$_GET[$bookIdName]]['author'] . "</a>" . "</h3>";
//     echo "<h3 style='font-size:25px;margin:1px;padding-right:2em'>" . "נתחבר ב{$allBooksId[$_GET[$bookIdName]]['location']}, בשנים: {$allBooksId[$_GET[$bookIdName]]['time']}" . "</h3>\n";
//     echo "<h3 style='font-size:25px;margin:1px;padding-right:2em'>" . "מהדורה: {$allBooksId[$_GET[$bookIdName]]['version']}" . "</h3>\n";
//     echo "<br><br>";
//     echo "<p style='font-size:18px;margin:1px;'>" . "ביוגרפיה: <br><p style='padding-right:2em;margin:1px;width:500;'>" . $allBooksId[$_GET[$bookIdName]]['description'] . "</p></p>\n";
    
//     echo "<br><br><a href='?{$categoryName}=".urlencode($allBooksId[$_GET[$bookIdName]]['categories'])."'>חזור לקטגוריה {$allBooksId[$_GET[$bookIdName]]['categories']}</a>\n";
//     echo "<br><a href='/books/#{$allBooksId[$_GET[$bookIdName]]['categories']}'>חזור לדף הראשי</a>\n";
//     printFootbar();
// }
// elseif(!isset($_GET[$bookIdName]) && isset($_GET[$authorId]) && !isset($_GET[$categoryName]) && isset($allBooksAuthor[$_GET[$authorId]])){
//     printHead("קטלוג ספרים");
    
//     echo "<h1>" . "רשימת ספרים" . "</h1>";
//     echo "<h3>" . $allBooksAuthor[$_GET[$authorId]][0]['author'] . "</h3>";
    
//     foreach ($allBooksAuthor[$_GET[$authorId]] as $book){
//         echo "\n<div class='book'>";
        
//         echo "<a href='?{$bookIdName}={$book['id']}'>" . $book['title'] . "</a> <b>/</b> ";
//         echo $book['author'];
        
//         echo "</div>";
//     }

//     echo "<h3><a href='/Rabanan/?id={$allBooksAuthor[$_GET[$authorId]][0]['authorId']}' target='_blank'>" . $allBooksAuthor[$_GET[$authorId]][0]['author'] . " באנציקלופדית רבנן</a></h3>";

//     echo "<a href='/books/'>חזור לדף הראשי</a>\n";
//     printFootbar();
// }
// elseif(!isset($_GET[$bookIdName]) && !isset($_GET[$authorId]) && isset($_GET[$categoryName]) && isset($allBooksCategory[$_GET[$categoryName]])){
//     printHead("קטלוג ספרים");
    
//     echo "<h1>" . "רשימת ספרים" . "</h1>";
    
//     echo "<h3>" . $_GET[$categoryName] . "</h3>";
    
//     foreach ($allBooksCategory[$_GET[$categoryName]] as $book){
//         echo "\n<div class='book'>";
        
//         echo "<a href='?{$bookIdName}={$book['id']}'>" . $book['title'] . "</a> <b>/</b> ";
//         echo "<a href='?{$authorId}=" . urlencode($book['authorId']) . "'>" . $book['author'] . "</a>";
        
//         echo "</div>";
//     }
    
//     echo "<br><br><a href='/books/#{$_GET[$categoryName]}'>חזור לדף הראשי</a>\n";
//     printFootbar();
// }
// else{
//     notFound();
// }

// $DB->close();
