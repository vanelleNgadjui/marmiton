<?php require_once 'init.php';

if ($_GET['action'] == 'add') {
  $data = json_decode(file_get_contents('php://input'), true);


  $query = $pdo->prepare("INSERT INTO category (title) VALUES (:title)");

  $query->execute($data);

  echo json_encode($data);


}

if ($_GET['action'] == 'edit') {
  $data = json_decode(file_get_contents('php://input'), true);


  $query = $pdo->prepare("REPLACE INTO category (id,title) VALUES (:id,:title)");

  $query->execute($data);

  echo json_encode($data);


}


if ($_GET['action'] == 'getall') {
  $query = $pdo->prepare("SELECT * FROM category");
  $query->execute();
  $categories = $query->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode($categories);
}

if ($_GET['action'] == 'getone') {
  $data= json_decode(file_get_contents('php://input'), true);
  $query = $pdo->prepare("SELECT * FROM category WHERE id=:id");
  $query->execute($data);
  $category = $query->fetch(PDO::FETCH_ASSOC);

  echo json_encode($category);
}


if ($_GET['action']=='delete')
{
  $data= json_decode(file_get_contents('php://input'), true);

  $result=$pdo->prepare("DELETE FROM category WHERE id=:id");
  $test=$result->execute($data);

  echo json_decode($test);
}
