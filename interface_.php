<?php
    $email = $_POST['email'];
    $password = $_POST['password'];

    $con = new mysqli("localhost","root","","login");
    if($con->connect_error) {
        die("Failed to connect : ".$con->connect_error);
    } else {
        $stmt = $con->prepare("select * from login where email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt_result = $stmt->get_result();
        if($stmt_result->num_rows > 0) {
            $data = $stmt_result->fetch_assoc();
            if($data["password"] == $password) {
                header("Location:http://localhost/GPST-xampp/application.html");
            } else {
                echo "<script>
                window.location.href='http://localhost/GPST-xampp/Interface.html#';
                alert('Invalid Email or password');
                </script>";
            }
        } else {
            echo "<script>
                window.location.href='http://localhost/GPST-xampp/Interface.html#';
                alert('Invalid Email or password');
                </script>";
        }

    }
?>