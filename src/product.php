<?php require_once 'init.php';

if ($_GET['action'] == 'add') {
  $data = json_decode(file_get_contents('php://input'), true);


  $query = $pdo->prepare("INSERT INTO product (title, picture, video_url, description, cooktime, preparetime, cost, nbportion, tools, level, ingredients, steps) VALUES (:title, :picture, :video_url, :description, :cooktime, :preparetime, :cost, :nbportion, :tools, :level, :ingredients, :steps)");

  $query->execute($data);

  echo json_encode($data);


}

if ($_GET['action'] == 'getall') {
  $query = $pdo->prepare("SELECT * FROM product");
  $query->execute();
  $products = $query->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode($products);
}

if ($_GET['action'] == 'getone') {
  $query = $pdo->prepare("SELECT * FROM product WHERE id=:id");
  $query->execute([':id'=>$_GET['id']]);
  $product = $query->fetch(PDO::FETCH_ASSOC);

  echo json_encode($product);
}


if ($_GET['action']=='delete')
{
  $data= json_decode(file_get_contents('php://input'), true);

  $result=$pdo->prepare("DELETE FROM product WHERE id=:id");
  $test=$result->execute($data);

  echo json_decode($test);
}
