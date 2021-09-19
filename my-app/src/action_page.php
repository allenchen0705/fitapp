functionExtendedAddslash(&$params){
    foreach($params as &$var){
        // check if $var is an array. If yes, it will start another ExtendedAddslash() function to loop to each key inside.
        is_array($var) ? ExtendedAddslash($var) : $var=addslashes($var);
    }
}

// Initialize ExtendedAddslash() function for every $_POST variable
ExtendedAddslash($_POST);
$id = $_POST['id'];
$title = $_POST['title'];
$name = $_POST['name'];
$content = $_POST['content'];
$type = $_POST['type'];
$intensity = $_POST['intensity'];
$calories = $_POST['calories'];
$DR = $_POST['DR'];
$db_host = 'sql5.freesqldatabase.com';
$db_username = 'sql5438198';
$db_password = 'mWAaxlkcEF';
$db_name = 'sql5438198';
mysql_connect( $db_host, $db_username, $db_password) ordie(mysql_error());
mysql_select_db($db_name);

// search submission ID
$query = "SELECT * FROM `table_name` WHERE `id` = '$id'";
$sqlsearch = mysql_query($query);
$resultcount = mysql_numrows($sqlsearch);
if($resultcount > 0){
    mysql_query(
        "UPDATE `fitness blogs` SET
        `title` = `$title`
        `name` = '$name',
        `content` = '$content',
        `type` = '$type',
        `intensity` = '$intensity',
        `calories` = '$calories'
        `DR` = '$DR'
        WHERE `id` = '$id'"
    ) ordie(mysql_error());
}else{
    mysql_query(
        "INSERT INTO `fitness blogs` (id, title, name, content, type, intensity, calories, DR)
        VALUES ('$id', '$title', '$name','$content', '$type', '$intensity', '$calories', '$DR')"
    ) ordie(mysql_error());
}
?>