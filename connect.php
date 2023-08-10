<?php
    $email = $_POST['email'];
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];     
    $password = $_POST['password'];
    

    //Database Connection
    $conn = new mysqli('localhost','root','','login');
    if($conn->connect_error){
        die('connection Failed : '.$conn->connect_error);
        
    }if (isset($_POST['sumbit'])) {
        $email = $_POST['email'];

        $check_email = mysqli_querry($connect, "SELECT * FROM inputs WHERE email = '$Username'"); {
            echo "<script>
            window.location.href='http://localhost/GPST-xampp/signup.html#';
            alert('Email Already Exists');
            </script>";
        }
    }
    
    else{ 
        $stmt = $conn->prepare("insert into login(email, firstname, lastname, password)values(?, ?, ?, ?)");
        $stmt->bind_param("ssss",$email, $firstname, $lastname, $password);
        $stmt->execute();
        header("Location:http://localhost/GPST-xampp/Interface.html");
        $stmt->close();
        $conn->close();
    }
    
    
       
    
?>