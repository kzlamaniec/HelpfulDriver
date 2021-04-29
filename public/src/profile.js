var UID = sessionStorage.getItem('uid');

function update_profile(){
    var vv_name = document.getElementById("nameId").value;
    var car = document.getElementById("inlineRadio1");
    var vb_license;

    if (car.checked){
        vb_license = true;
    }else{  
        vb_license = false;
    }

    console.log(vb_license);

    usersRef
    .doc(`${UID}`)
    .update({
        name: vv_name,
        driving_license: vb_license
    })
    .then(() => {
        console.log("User updated!", UID);
        window.location.assign('../2_main/index.html');
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}